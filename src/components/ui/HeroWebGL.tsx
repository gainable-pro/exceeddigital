"use client";

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function HeroWebGL() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // Geometry & Material
        // Larger plane to cover more area
        const geometry = new THREE.PlaneGeometry(30, 30, 150, 150);

        // High Intensity Fluid/Noise Shader
        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor1: { value: new THREE.Color("#0070f3") }, // Vibrant Blue
                uColor2: { value: new THREE.Color("#050505") }, // Dark Background
                uMouse: { value: new THREE.Vector2(0, 0) }
            },
            vertexShader: `
                varying vec2 vUv;
                uniform float uTime;
                uniform vec2 uMouse;
                
                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    
                    // Stronger displacement for visibility
                    float wave1 = sin(pos.x * 0.3 + uTime * 0.8) * 1.5;
                    float wave2 = cos(pos.y * 0.4 + uTime * 0.5) * 1.5;
                    float wave3 = sin((pos.x + pos.y) * 0.2 + uTime * 0.7) * 0.8;
                    
                    // Mouse interaction
                    float dist = distance(pos.xy, uMouse * 12.0);
                    float mEffect = smoothstep(6.0, 0.0, dist) * 2.0;
                    
                    pos.z += wave1 + wave2 + wave3 + mEffect;
                    
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
                    
                    // More dynamic color distribution
                    float n = sin(uv.x * 4.0 + uTime * 0.2) * cos(uv.y * 4.0 + uTime * 0.3);
                    float strength = smoothstep(-0.2, 0.8, n);
                    
                    // Brightness control - Increased intensity
                    vec3 color = mix(uColor2, uColor1, strength * 0.6);
                    
                    // Glow highlights
                    float glow = pow(strength, 3.0) * 0.8;
                    color += uColor1 * glow;
                    
                    // Vignette to avoid harsh edges
                    float dist = distance(uv, vec2(0.5));
                    float mask = smoothstep(0.8, 0.2, dist);
                    
                    gl_FragColor = vec4(color * mask, 1.0);
                }
            `,
            transparent: true,
            wireframe: false
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 3;
        mesh.position.y = -4;
        scene.add(mesh);

        camera.position.z = 10;

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
                position: 'fixed', // Fixed to keep it visible during scroll
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1, // Behind everything
                pointerEvents: 'none',
                opacity: 1 // Full opacity for the container
            }}
        />
    );
}
