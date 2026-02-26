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
        const geometry = new THREE.PlaneGeometry(20, 20, 128, 128);

        // Shader Material for Fluid Distortion
        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor1: { value: new THREE.Color("#0070f3") }, // Vibrant Blue
                uColor2: { value: new THREE.Color("#02040a") }  // Deep Dark
            },
            vertexShader: `
                varying vec2 vUv;
                uniform float uTime;
                
                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    
                    // Subtle noise wave
                    float freq = 0.5;
                    float amp = 0.5;
                    pos.z += sin(pos.x * freq + uTime * 0.5) * amp;
                    pos.z += cos(pos.y * freq + uTime * 0.3) * amp;
                    
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
                    float strength = sin(uv.x * 2.0 + uTime * 0.2) * 0.5 + 0.5;
                    vec3 color = mix(uColor2, uColor1, strength * 0.15); // Very subtle
                    gl_FragColor = vec4(color, 1.0);
                }
            `,
            transparent: true,
            wireframe: false
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2.5;
        mesh.position.y = -2;
        scene.add(mesh);

        camera.position.z = 5;

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
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.6
            }}
        />
    );
}
