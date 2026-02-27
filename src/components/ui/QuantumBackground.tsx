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
        lerpFactor: 0.05 // Inertial easing
    });

    const NODE_COUNT = typeof window !== 'undefined' && window.innerWidth < 768 ? 800 : 2500;

    useEffect(() => {
        if (!containerRef.current) return;

        // Init Scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.z = 50;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // --- NODES SEEDS (6 States) ---
        const positions = new Float32Array(NODE_COUNT * 3);
        const targetPositions = [
            new Float32Array(NODE_COUNT * 3), // State 0: Sphere
            new Float32Array(NODE_COUNT * 3), // State 1: Strained
            new Float32Array(NODE_COUNT * 3), // State 2: Cloud
            new Float32Array(NODE_COUNT * 3), // State 3: Ring
            new Float32Array(NODE_COUNT * 3), // State 4: Square
            new Float32Array(NODE_COUNT * 3)  // State 5: Cluster
        ];

        for (let i = 0; i < NODE_COUNT; i++) {
            const i3 = i * 3;

            // Sphere
            const radius = 8.5;
            const phi = Math.acos(-1 + (2 * i) / NODE_COUNT);
            const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi;
            targetPositions[0][i3] = radius * Math.cos(theta) * Math.sin(phi);
            targetPositions[0][i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
            targetPositions[0][i3 + 2] = radius * Math.cos(phi);

            // Strained (Ellipsoid)
            targetPositions[1][i3] = targetPositions[0][i3] * 2.5;
            targetPositions[1][i3 + 1] = targetPositions[0][i3 + 1] * 0.4;
            targetPositions[1][i3 + 2] = targetPositions[0][i3 + 2] * 0.4;

            // Cloud (Random)
            targetPositions[2][i3] = (Math.random() - 0.5) * 40;
            targetPositions[2][i3 + 1] = (Math.random() - 0.5) * 20;
            targetPositions[2][i3 + 2] = (Math.random() - 0.5) * 10;

            // Ring (Horizontal Circle)
            const rRing = 12 + Math.random() * 2;
            const angle = (i / NODE_COUNT) * Math.PI * 2;
            targetPositions[3][i3] = Math.cos(angle) * rRing;
            targetPositions[3][i3 + 1] = Math.sin(angle) * rRing;
            targetPositions[3][i3 + 2] = (Math.random() - 0.5) * 4;

            // Square (Grid-like)
            const side = Math.ceil(Math.sqrt(NODE_COUNT));
            const x = i % side;
            const y = Math.floor(i / side);
            targetPositions[4][i3] = (x - side / 2) * 0.8;
            targetPositions[4][i3 + 1] = (y - side / 2) * 0.8;
            targetPositions[4][i3 + 2] = 0;

            // Cluster (Dense center)
            const rCluster = Math.random() * 5;
            const phiC = Math.random() * Math.PI * 2;
            const thetaC = Math.random() * Math.PI;
            targetPositions[5][i3] = rCluster * Math.cos(phiC) * Math.sin(thetaC);
            targetPositions[5][i3 + 1] = rCluster * Math.sin(phiC) * Math.sin(thetaC);
            targetPositions[5][i3 + 2] = rCluster * Math.cos(thetaC);

            // Initial Position
            positions[i3] = targetPositions[0][i3];
            positions[i3 + 1] = targetPositions[0][i3 + 1];
            positions[i3 + 2] = targetPositions[0][i3 + 2];
        }

        // --- PARTICLES ---
        const particleGeom = new THREE.BufferGeometry();
        particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleMat = new THREE.PointsMaterial({
            color: 0x0070f3,
            size: 0.12,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });
        const particles = new THREE.Points(particleGeom, particleMat);
        scene.add(particles);
        particlesRef.current = particles;

        // --- LINES (Connections) ---
        const lineIndices: number[] = [];
        const MAX_CONN = window.innerWidth < 768 ? 2 : 3;

        for (let i = 0; i < NODE_COUNT; i++) {
            let connections = 0;
            for (let j = i + 1; j < NODE_COUNT && connections < MAX_CONN; j++) {
                const dx = targetPositions[0][i * 3] - targetPositions[0][j * 3];
                const dy = targetPositions[0][i * 3 + 1] - targetPositions[0][j * 3 + 1];
                const dz = targetPositions[0][i * 3 + 2] - targetPositions[0][j * 3 + 2];
                const distSq = dx * dx + dy * dy + dz * dz;

                if (distSq < 15) {
                    lineIndices.push(i, j);
                    connections++;
                }
            }
        }

        const lineGeom = new THREE.BufferGeometry();
        lineGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NODE_COUNT * 3), 3));
        lineGeom.setIndex(lineIndices);
        lineGeomRef.current = lineGeom;

        const lineMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: new THREE.Color("#0070f3") }
            },
            vertexShader: `
                varying float vOpacity;
                uniform float uTime;
                void main() {
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_Position = projectionMatrix * mvPosition;
                    vOpacity = 0.2 + 0.3 * sin(position.x * 0.1 + position.y * 0.1 + uTime * 2.0);
                }
            `,
            fragmentShader: `
                uniform vec3 uColor;
                varying float vOpacity;
                void main() {
                    gl_FragColor = vec4(uColor, vOpacity);
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
        const targetMouse = new THREE.Vector2(0, 0);
        const handleMouseMove = (e: MouseEvent) => {
            targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // --- SCROLL TRIGGER ---
        const sections = document.querySelectorAll('.section-v3, .v3-hero');
        sections.forEach((section, i) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "bottom center",
                onEnter: () => { stateRef.current.targetIndex = i % 6; },
                onEnterBack: () => { stateRef.current.targetIndex = i % 6; }
            });
        });

        // --- ANIMATION LOOP ---
        let frameId: number;
        const clock = new THREE.Clock();

        const animate = () => {
            const time = clock.getElapsedTime();
            mouse.lerp(targetMouse, 0.05);

            const state = stateRef.current;
            const currentPos = particleGeom.attributes.position.array as Float32Array;
            const target = targetPositions[state.targetIndex];

            for (let i = 0; i < NODE_COUNT; i++) {
                const i3 = i * 3;

                // Base Morph
                currentPos[i3] += (target[i3] - currentPos[i3]) * state.lerpFactor;
                currentPos[i3 + 1] += (target[i3 + 1] - currentPos[i3 + 1]) * state.lerpFactor;
                currentPos[i3 + 2] += (target[i3 + 2] - currentPos[i3 + 2]) * state.lerpFactor;

                // Constant Animation
                currentPos[i3] += Math.sin(time * 0.5 + i) * 0.01;
                currentPos[i3 + 1] += Math.cos(time * 0.4 + i) * 0.01;

                // Mouse influence
                const dx = (mouse.x * 20) - currentPos[i3];
                const dy = (mouse.y * 10) - currentPos[i3 + 1];
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 5) {
                    currentPos[i3] += dx * 0.02 * (1 - d / 5);
                    currentPos[i3 + 1] += dy * 0.02 * (1 - d / 5);
                }
            }
            particleGeom.attributes.position.needsUpdate = true;
            lineGeom.setAttribute('position', particleGeom.getAttribute('position'));

            lineMat.uniforms.uTime.value = time;
            scene.rotation.y += 0.001;
            scene.rotation.x += 0.0005;

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
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-[-5] opacity-40"
            style={{ filter: 'blur(0.8px)' }}
        />
    );
}
