"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function LiquidHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // SCENE SETUP
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        camera.position.z = 2.5;

        // SHADER MATERIAL FOR LIQUID EFFECT
        const vertexShader = `
      varying vec2 vUv;
      varying float vDistortion;
      uniform float uTime;
      uniform vec2 uMouse;

      void main() {
        vUv = uv;
        
        vec3 pos = position;
        
        // Organic deformation
        float distortion = sin(pos.x * 2.0 + uTime * 0.5) * cos(pos.y * 2.0 + uTime * 0.5) * 0.2;
        
        // Mouse influence (stretch)
        float dist = distance(uv, uMouse);
        float mouseInfluence = smoothstep(0.4, 0.0, dist) * 0.4;
        distortion += mouseInfluence;
        
        vDistortion = distortion;
        pos.z += distortion;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

        const fragmentShader = `
      varying vec2 vUv;
      varying float vDistortion;
      uniform float uTime;

      void main() {
        // Aesthetic: Dark translucent liquid with cyan highlights
        vec3 color1 = vec3(0.02, 0.04, 0.08); // Deep blue
        vec3 color2 = vec3(0.0, 0.95, 1.0);   // Cyan
        
        float mixVal = smoothstep(-0.1, 0.3, vDistortion);
        vec3 color = mix(color1, color2, mixVal);
        
        float alpha = 0.6 + vDistortion * 2.0;
        gl_FragColor = vec4(color, alpha);
      }
    `;

        const geometry = new THREE.PlaneGeometry(6, 4, 128, 128);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            },
            vertexShader,
            fragmentShader,
            transparent: true,
            side: THREE.DoubleSide,
            wireframe: true, // Wireframe for that technical/organic look
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // MOUSE INTERACTION
        let mouse = new THREE.Vector2(0.5, 0.5);
        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX / window.innerWidth;
            mouse.y = 1.0 - (event.clientY / window.innerHeight);
        };
        window.addEventListener("mousemove", handleMouseMove);

        // ANIMATION LOOP
        const animate = (time: number) => {
            requestAnimationFrame(animate);

            material.uniforms.uTime.value = time * 0.001;
            material.uniforms.uMouse.value.lerp(mouse, 0.05);

            renderer.render(scene, camera);
        };

        animate(0);

        // RESIZE HANDLING
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden" />;
}
