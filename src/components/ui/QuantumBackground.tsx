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
        lerpFactor: 0.045, // Slightly snappier morphing
    });

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const NODE_COUNT = isMobile ? 650 : 2500;

    useEffect(() => {
        if (!containerRef.current) return;

        // --- SCENE SETUP ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1500);
        camera.position.z = 55; // Slightly more distance for airy feel

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // --- NODES SEEDS (6 Distinct Highly-Perceived States) ---
        const positions = new Float32Array(NODE_COUNT * 3);
        const targetPositions = [
            new Float32Array(NODE_COUNT * 3), // 0: Perfect Sphere
            new Float32Array(NODE_COUNT * 3), // 1: Extreme Horizontal Stretch (Plank)
            new Float32Array(NODE_COUNT * 3), // 2: Large Floating Ring
            new Float32Array(NODE_COUNT * 3), // 3: Massive Square Grid
            new Float32Array(NODE_COUNT * 3), // 4: Ultra Dense Cluster
            new Float32Array(NODE_COUNT * 3)  // 5: Double Pillar (Helix-like)
        ];

        for (let i = 0; i < NODE_COUNT; i++) {
            const i3 = i * 3;

            // 0: Perfect Sphere
            const radius = 14;
            const phi = Math.acos(-1 + (2 * i) / NODE_COUNT);
            const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi;
            targetPositions[0][i3] = radius * Math.cos(theta) * Math.sin(phi);
            targetPositions[0][i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
            targetPositions[0][i3 + 2] = radius * Math.cos(phi);

            // 1: Extreme Horizontal Stretch
            targetPositions[1][i3] = (Math.random() - 0.5) * 70;
            targetPositions[1][i3 + 1] = (Math.random() - 0.5) * 5;
            targetPositions[1][i3 + 2] = (Math.random() - 0.5) * 10;

            // 2: Large Floating Ring
            const ringR = 20;
            const ang = (i / NODE_COUNT) * Math.PI * 2;
            targetPositions[2][i3] = Math.cos(ang) * (ringR + (Math.random() - 0.5) * 3);
            targetPositions[2][i3 + 1] = Math.sin(ang) * (ringR + (Math.random() - 0.5) * 3);
            targetPositions[2][i3 + 2] = (Math.random() - 0.5) * 5;

            // 3: Massive Square Grid
            const gridSide = Math.ceil(Math.sqrt(NODE_COUNT));
            const gx = i % gridSide;
            const gy = Math.floor(i / gridSide);
            targetPositions[3][i3] = (gx - gridSide / 2) * 1.5;
            targetPositions[3][i3 + 1] = (gy - gridSide / 2) * 1.5;
            targetPositions[3][i3 + 2] = 0;

            // 4: Ultra Dense Cluster
            const clusterR = Math.pow(Math.random(), 0.7) * 7;
            const cp = Math.random() * Math.PI * 2;
            const ct = Math.random() * Math.PI;
            targetPositions[4][i3] = clusterR * Math.cos(cp) * Math.sin(ct);
            targetPositions[4][i3 + 1] = clusterR * Math.sin(cp) * Math.sin(ct);
            targetPositions[4][i3 + 2] = clusterR * Math.cos(ct);

            // 5: Double Pillar
            const side = i % 2 === 0 ? 1 : -1;
            targetPositions[5][i3] = side * 15 + (Math.random() - 0.5) * 5;
            targetPositions[5][i3 + 1] = (Math.random() - 0.5) * 50;
            targetPositions[5][i3 + 2] = (Math.random() - 0.5) * 5;

            // Start Positions
            positions[i3] = targetPositions[0][i3];
            positions[i3 + 1] = targetPositions[0][i3 + 1];
            positions[i3 + 2] = targetPositions[0][i3 + 2];
        }

        // --- PARTICLE SHADER (Visibility Boosted) ---
        const particleGeom = new THREE.BufferGeometry();
        particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particleMat = new THREE.ShaderMaterial({
            uniforms: {
                uColor: { value: new THREE.Color("#0070f3") }
            },
            vertexShader: `
                varying float vAlpha;
                void main() {
                    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
                    float d = length(mvPos.xyz);
                    vAlpha = clamp(1.2 - (d / 80.0), 0.2, 0.85); // High contrast
                    gl_PointSize = ${isMobile ? '2.0' : '4.5 * (12.0 / d)'};
                    gl_Position = projectionMatrix * mvPos;
                }
            `,
            fragmentShader: `
                uniform vec3 uColor;
                varying float vAlpha;
                void main() {
                    float dist = length(gl_PointCoord - vec2(0.5));
                    if (dist > 0.5) discard;
                    gl_FragColor = vec4(uColor, vAlpha * (1.1 - dist * 2.2));
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const particles = new THREE.Points(particleGeom, particleMat);
        scene.add(particles);
        particlesRef.current = particles;

        // --- LINE SHADER (Electric & Sparse) ---
        const lineIndices: number[] = [];
        const THRESHOLD = 14;
        const K_MAX = 2; // Strict sparsity for minimalist feel

        for (let i = 0; i < NODE_COUNT; i++) {
            let found = 0;
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
                uColor: { value: new THREE.Color("#005bb5") } // Deeper blue for premium feel
            },
            vertexShader: `
                varying float vAlpha;
                void main() {
                    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
                    float d = length(mvPos.xyz);
                    vAlpha = clamp(0.7 - (d / 95.0), 0.05, 0.45);
                    gl_Position = projectionMatrix * mvPos;
                }
            `,
            fragmentShader: `
                uniform vec3 uColor;
                uniform float uTime;
                varying float vAlpha;
                void main() {
                    // Subtle shimmer
                    float pulse = 0.8 + 0.2 * sin(uTime * 1.5);
                    gl_FragColor = vec4(uColor, vAlpha * pulse);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const lines = new THREE.LineSegments(lineGeom, lineMat);
        scene.add(lines);

        // --- GLOBAL MOUSE & SCROLL ---
        const mouse = new THREE.Vector2(0, 0);
        window.addEventListener('mousemove', e => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        // Debug-rich ScrollTrigger
        const sections = document.querySelectorAll('.v3-hero, .section-v3');
        sections.forEach((sec, i) => {
            ScrollTrigger.create({
                trigger: sec,
                start: "top center",
                end: "bottom center",
                onToggle: (self) => {
                    if (self.isActive) {
                        stateRef.current.targetIndex = i % 6;
                        console.log(`[QuantumBackground] Morphing to state ${stateRef.current.targetIndex} (Section: ${sec.id || i})`);
                    }
                }
            });
        });

        // --- ANIMATION LOOP ---
        let frameId: number;
        const clock = new THREE.Clock();

        const animate = () => {
            const time = clock.getElapsedTime();
            const state = stateRef.current;
            const currentPos = particleGeom.attributes.position.array as Float32Array;
            const target = targetPositions[state.targetIndex];

            // Very Slow Hypnotic Rotation
            scene.rotation.y += 0.0005;
            scene.rotation.x += 0.0002;

            for (let i = 0; i < NODE_COUNT; i++) {
                const i3 = i * 3;

                // Morph
                currentPos[i3] += (target[i3] - currentPos[i3]) * state.lerpFactor;
                currentPos[i3 + 1] += (target[i3 + 1] - currentPos[i3 + 1]) * state.lerpFactor;
                currentPos[i3 + 2] += (target[i3 + 2] - currentPos[i3 + 2]) * state.lerpFactor;

                // Organic Jitter
                currentPos[i3] += Math.sin(time * 0.4 + i) * 0.06;
                currentPos[i3 + 1] += Math.cos(time * 0.3 + i) * 0.04;

                // Subtle Mouse Interaction
                const dx = (mouse.x * 25) - currentPos[i3];
                const dy = (mouse.y * 12) - currentPos[i3 + 1];
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 7) {
                    const f = (1 - d / 7) * 0.04;
                    currentPos[i3] -= dx * f;
                    currentPos[i3 + 1] -= dy * f;
                }
            }

            particleGeom.attributes.position.needsUpdate = true;
            lineMat.uniforms.uTime.value = time;

            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };
        camera.lookAt(0, 0, 0); // Explicit centering
        animate();

        // Resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
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
            className="fixed inset-0 pointer-events-none z-[-1] bg-black overflow-hidden"
            style={{
                background: 'radial-gradient(circle at center, rgba(1,5,15,0.3) 0%, rgba(0,0,0,1) 100%)',
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0
            }}
        />
    );
}
