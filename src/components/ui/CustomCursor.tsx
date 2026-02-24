"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("button, a, .interactive")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(mousePos.x, springConfig);
    const cursorY = useSpring(mousePos.y, springConfig);

    useEffect(() => {
        cursorX.set(mousePos.x);
        cursorY.set(mousePos.y);
    }, [mousePos.x, mousePos.y, cursorX, cursorY]);

    return (
        <>
            {/* Main Pulse */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] bg-white/10 border border-white/20 blur-[2px]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovering ? 2 : 1,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />

            {/* Outer Glow */}
            <motion.div
                className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-[9998] bg-cyan-500/10 blur-[40px]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovering ? 1.5 : 1,
                }}
            />
        </>
    );
}
