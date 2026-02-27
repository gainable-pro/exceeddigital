"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function QuantumBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const particlesRef = useRef<THREE.Points | null>(null);
    const lineGeomRef = useRef<THREE.BufferGeometry | null>(null);

    // State Machine Refs
    const stateRef = useRef({
        index: 0,
        targetIndex: 0,
        lerpFactor: 0.04, // Smooth inertial easing
        morphProgress: 0
    });

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const NODE_COUNT = isMobile ? 600 : 2200;

    useEffect(() => {
        if (!containerRef.current) return;

        // --- SCENE SETUP ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 45;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // --- NODES SEEDS (6 Distinct States) ---
        const positions = new Float32Array(NODE_COUNT * 3);
        const targetPositions = [
            new Float32Array(NODE_COUNT * 3), // State 0: Sphere
            new Float32Array(NODE_COUNT * 3), // State 1: Stretched Plank (Horizontal)
            new Float32Array(NODE_COUNT * 3), // State 2: Open Ring
            new Float32Array(NODE_COUNT * 3), // State 3: Solid Square Grid
            new Float32Array(NODE_COUNT * 3), // State 4: Dense Cluster (Core)
            new Float32Array(NODE_COUNT * 3)  // State 5: Vertical Stretch
        ];

        for (let i = 0; i < NODE_COUNT; i++) {
            const i3 = i * 3;

            // 0: Sphere (Organic distribution)
            const radius = 12;
            const phi = Math.acos(-1 + (2 * i) / NODE_COUNT);
            const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi;
            targetPositions[0][i3] = radius * Math.cos(theta) * Math.sin(phi);
            targetPositions[0][i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
            targetPositions[0][i3 + 2] = radius * Math.cos(phi);

            // 1: Stretched Plank
            targetPositions[1][i3] = (Math.random() - 0.5) * 50;
            targetPositions[1][i3 + 1] = (Math.random() - 0.5) * 4;
            targetPositions[1][i3 + 2] = (Math.random() - 0.5) * 8;

            // 2: Open Ring
            const rRing = 15;
            const ang = (i / NODE_COUNT) * Math.PI * 2;
            targetPositions[2][i3] = Math.cos(ang) * (rRing + (Math.random() - 0.5) * 2);
            targetPositions[2][i3 + 1] = Math.sin(ang) * (rRing + (Math.random() - 0.5) * 2);
            targetPositions[2][i3 + 2] = (Math.random() - 0.5) * 3;

            // 3: Solid Square (Data Grid)
            const side = Math.ceil(Math.sqrt(NODE_COUNT));
            const gx = i % side;
            const gy = Math.floor(i / side);
            targetPositions[3][i3] = (gx - side / 2) * 0.9;
            targetPositions[3][i3 + 1] = (gy - side / 2) * 0.9;
            targetPositions[3][i3 + 2] = 0;

            // 4: Dense Cluster
            const rC = Math.pow(Math.random(), 0.5) * 8;
            const pC = Math.random() * Math.PI * 2;
            const tC = Math.random() * Math.PI;
            targetPositions[4][i3] = rC * Math.cos(pC) * Math.sin(tC);
            targetPositions[4][i3 + 1] = rC * Math.sin(pC) * Math.sin(tC);
            targetPositions[4][i3 + 2] = rC * Math.cos(tC);

            // 5: Vertical Stretch
            targetPositions[5][i3] = (Math.random() - 0.5) * 6;
            targetPositions[5][i3 + 1] = (Math.random() - 0.5) * 45;
            targetPositions[5][i3 + 2] = (Math.random() - 0.5) * 6;

            // Initial
            positions[i3] = targetPositions[0][i3];
            positions[i3 + 1] = targetPositions[0][i3 + 1];
            positions[i3 + 2] = targetPositions[0][i3 + 2];
        }

        // --- PARTICLES ---
        const particleGeom = new THREE.BufferGeometry();
        particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        // Custom Shader Material for Depth and Pulse
        const particleMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: new THREE.Color("#0070f3") }
            },
            vertexShader: `
                varying float vAlpha;
                uniform float uTime;
                void main() {
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    // Fade based on Z depth in modelView space
                    float depth = length(mvPosition.xyz);
                    vAlpha = clamp(1.0 - (depth / 60.0), 0.1, 0.6);
                    
                    gl_PointSize = ${isMobile ? '1.5' : '2.5 * (14.0 / length(mvPosition.xyz))'};
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                uniform vec3 uColor;
                varying float vAlpha;
                void main() {
                    float dist = length(gl_PointCoord - vec2(0.5));
                    if (dist > 0.5) discard;
                    gl_FragColor = vec4(uColor, vAlpha * (1.0 - dist * 2.0));
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const particles = new THREE.Points(particleGeom, particleMat);
        scene.add(particles);
        particlesRef.current = particles;

        // --- LINES (Minimalist Sparse Network) ---
        const lineIndices: number[] = [];
        const THRESHOLD = 12; // Dynamic thresh
        const K_MAX = 2; // Strict sparsity

        for (let i = 0; i < NODE_COUNT; i++) {
            let found = 0;
            // Scan for neighbors only in first state for base topology
            for (let j = i + 1; j < NODE_COUNT && found < K_MAX; j++) {
                const dx = targetPositions[0][i * 3] - targetPositions[0][j * 3];
                const dy = targetPositions[0][i * 3 + 1] - targetPositions[0][j * 3 + 1];
                const dz = targetPositions[0][i * 3 + 2] - targetPositions[0][j * 3 + 2];
                const d2 = dx * dx + dy * dy + dz * dz;
                if (d2 < THRESHOLD) {
                    lineIndices.push(i, j);
                    found++;
                }
            }
        }

        const lineGeom = new THREE.BufferGeometry();
        lineGeom.setAttribute('position', particleGeom.getAttribute('position'));
        lineGeom.setIndex(lineIndices);
        lineGeomRef.current = lineGeom;

        const lineMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: new THREE.Color("#0070f3") }
            },
            vertexShader: `
                varying float vAlpha;
                void main() {
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    float d = length(mvPosition.xyz);
                    vAlpha = clamp(0.6 - (d / 70.0), 0.05, 0.4);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                uniform vec3 uColor;
                varying float vAlpha;
                void main() {
                    gl_FragColor = vec4(uColor, vAlpha * 0.5);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const lines = new THREE.LineSegments(lineGeom, lineMat);
        scene.add(lines);

        // --- MOUSE TRACKING ---
        const mouse = new THREE.Vector2(0, 0);
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // --- SCROLL ENGINE (Clearly perceived states) ---
        const sections = document.querySelectorAll('.v3-hero, .section-v3');
        sections.forEach((sec, i) => {
            ScrollTrigger.create({
                trigger: sec,
                start: "top center",
                end: "bottom center",
                onToggle: (self) => {
                    if (self.isActive) stateRef.current.targetIndex = i % 6;
                }
            });
        });

        // --- ANIMATION ---
        let frameId: number;
        const clock = new THREE.Clock();

        const animate = () => {
            const time = clock.getElapsedTime();
            const state = stateRef.current;
            const currentPos = particleGeom.attributes.position.array as Float32Array;
            const target = targetPositions[state.targetIndex];

            // Slow Scene Motion
            scene.rotation.y += 0.0006;
            scene.rotation.x += 0.0003;

            for (let i = 0; i < NODE_COUNT; i++) {
                const i3 = i * 3;

                // Morph with Inertia
                currentPos[i3] += (target[i3] - currentPos[i3]) * state.lerpFactor;
                currentPos[i3 + 1] += (target[i3 + 1] - currentPos[i3 + 1]) * state.lerpFactor;
                currentPos[i3 + 2] += (target[i3 + 2] - currentPos[i3 + 2]) * state.lerpFactor;

                // Organic Oscillation (Hypnotic)
                const noise = Math.sin(time * 0.4 + i) * 0.08;
                currentPos[i3] += noise;
                currentPos[i3 + 1] += Math.cos(time * 0.3 + i) * 0.06;

                // Interaction (Subtle Repulsion)
                const dx = (mouse.x * 20) - currentPos[i3];
                const dy = (mouse.y * 10) - currentPos[i3 + 1];
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 6) {
                    const force = (1 - d / 6) * 0.05;
                    currentPos[i3] -= dx * force;
                    currentPos[i3 + 1] -= dy * force;
                }
            }

            particleGeom.attributes.position.needsUpdate = true;
            particleMat.uniforms.uTime.value = time;

            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameId);
            renderer.dispose();
            particleGeom.dispose();
            particleMat.dispose();
            lineGeom.dispose();
            lineMat.dispose();
            if (containerRef.current) containerRef.current.removeChild(renderer.domElement);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-[-10] bg-transparent opacity-70"
            style={{
                background: 'radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(2,4,10,0.5) 100%)',
                filter: 'blur(0.3px) contrast(1.1)'
            }}
        />
    );
}
