"use client";

import Link from "next/link";
import { GsapReveal } from "@/components/ui/GsapReveal";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Méthode", href: "#method" },
    { name: "Offres", href: "#offres" },
];

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-12 py-8 pointer-events-none">
            <GsapReveal delay={0.1} direction="down">
                <Link href="/" className="text-xl font-black tracking-tighter pointer-events-auto">
                    XCEED<span className="text-cyan-400">.</span>
                </Link>
            </GsapReveal>

            <div className="hidden md:flex items-center gap-12 pointer-events-auto">
                {navLinks.map((link, i) => (
                    <GsapReveal key={link.name} delay={0.2 + (i * 0.05)} direction="down">
                        <Link
                            href={link.href}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    </GsapReveal>
                ))}
            </div>

            <GsapReveal delay={0.4} direction="down">
                <Link
                    href="#contact"
                    className="bg-white text-black px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all pointer-events-auto"
                >
                    Contact
                </Link>
            </GsapReveal>
        </nav>
    );
}
