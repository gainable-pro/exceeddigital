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
        const geometry = new THREE.PlaneGeometry(25, 25, 150, 150);

        // Intensified Fluid/Noise Shader
        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor1: { value: new THREE.Color("#0070f3") }, // Vibrant Blue
                uColor2: { value: new THREE.Color("#02040a") }, // Deep Dark
                uMouse: { value: new THREE.Vector2(0, 0) }
            },
            vertexShader: `
                varying vec2 vUv;
                uniform float uTime;
                uniform vec2 uMouse;
                
                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    
                    // Complex wavy displacement
                    float wave1 = sin(pos.x * 0.4 + uTime * 0.6) * 0.8;
                    float wave2 = cos(pos.y * 0.3 + uTime * 0.4) * 0.8;
                    float wave3 = sin((pos.x + pos.y) * 0.2 + uTime * 0.5) * 0.5;
                    
                    // Mouse interaction displacement
                    float dist = distance(pos.xy, uMouse * 10.0);
                    float mEffect = smoothstep(5.0, 0.0, dist) * 1.5;
                    
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
                    
                    // Plasma-like color mixing
                    float strength = sin(uv.x * 3.0 + uTime * 0.1) * cos(uv.y * 3.0 + uTime * 0.2);
                    strength = smoothstep(-0.5, 0.5, strength);
                    
                    // Create a more vibrant glow effect
                    vec3 finalColor = mix(uColor2, uColor1, strength * 0.45);
                    
                    // Edge fade
                    float edgeFade = smoothstep(0.0, 0.2, uv.x) * smoothstep(1.0, 0.8, uv.x) * 
                                    smoothstep(0.0, 0.2, uv.y) * smoothstep(1.0, 0.8, uv.y);
                    
                    gl_FragColor = vec4(finalColor * edgeFade, 1.0);
                }
            `,
            transparent: true,
            wireframe: false
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2.8;
        mesh.position.y = -3;
        scene.add(mesh);

        camera.position.z = 8;

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
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
            }}
        />
    );
}
