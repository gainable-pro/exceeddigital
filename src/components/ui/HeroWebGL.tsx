"use client";

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function HeroWebGL() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // Geometry & Material
        const geometry = new THREE.PlaneGeometry(35, 35, 180, 180);

        // High Intensity Fluid/Noise Shader - Ultra Dynamic V4.1
        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor1: { value: new THREE.Color("#0070f3") }, // Vibrant Blue
                uColor2: { value: new THREE.Color("#050505") }, // Dark
                uMouse: { value: new THREE.Vector2(0, 0) }
            },
            vertexShader: `
                varying vec2 vUv;
                uniform float uTime;
                uniform vec2 uMouse;
                
                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    
                    // Ultra dynamic multi-layered waves
                    float wave1 = sin(pos.x * 0.4 + uTime * 1.2) * 1.8;
                    float wave2 = cos(pos.y * 0.5 + uTime * 1.0) * 1.8;
                    float wave3 = sin((pos.x + pos.y) * 0.3 + uTime * 1.5) * 1.2;
                    float noise = sin(pos.x * 3.0 + uTime) * cos(pos.y * 3.0 + uTime) * 0.5;
                    
                    // Interactive magnetism
                    float dist = distance(pos.xy, uMouse * 15.0);
                    float mEffect = smoothstep(8.0, 0.0, dist) * 3.0;
                    
                    pos.z += wave1 + wave2 + wave3 + noise + mEffect;
                    
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                varying vec2 vUv;
                uniform float uTime;
                uniform vec3 uColor1;
                uniform vec3 uColor2;
                
                void main() {
                    vec2 uv = vUv;
                    
                    // Highly dynamic color turbulence
                    float n = sin(uv.x * 5.0 + uTime * 0.4) * cos(uv.y * 5.0 + uTime * 0.5) 
                             + sin(uv.x * 2.0 - uTime * 0.3);
                    float strength = smoothstep(-0.5, 1.0, n);
                    
                    // Vibrant glowing blend
                    vec3 color = mix(uColor2, uColor1, strength * 0.7);
                    
                    // Specular-like highlights
                    float highlight = pow(strength, 5.0) * 1.2;
                    color += uColor1 * highlight;
                    
                    // Depth fade
                    float dist = distance(uv, vec2(0.5));
                    float mask = smoothstep(1.0, 0.1, dist);
                    
                    gl_FragColor = vec4(color * mask, 1.0);
                }
            `,
            transparent: true,
            wireframe: false
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 3.2;
        mesh.position.y = -5;
        scene.add(mesh);

        camera.position.z = 12;

        // Interaction
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;
            material.uniforms.uMouse.value.set(x, y);
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Resize handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
            const time = performance.now() * 0.001;
            material.uniforms.uTime.value = time;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="v4-webgl-container"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
                opacity: 1
            }}
        />
    );
}
