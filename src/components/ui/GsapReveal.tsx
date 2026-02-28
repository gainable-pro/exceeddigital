"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface GsapRevealProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}

export function GsapReveal({ children, delay = 0, direction = "up", className = "" }: GsapRevealProps) {
    const revealRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = revealRef.current;
        if (!el) return;

        let x = 0;
        let y = 0;

        if (direction === "up") y = 30;
        if (direction === "down") y = -30;
        if (direction === "left") x = 30;
        if (direction === "right") x = -30;

        gsap.fromTo(el,
            {
                opacity: 0,
                x,
                y,
                scale: 0.98,
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: 1.2,
                delay,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        );
    }, [delay, direction]);

    return <div ref={revealRef} className={`will-change-transform ${className}`}>{children}</div>;
}
