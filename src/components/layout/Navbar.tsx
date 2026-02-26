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
        <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-8 md:px-16 py-8 pointer-events-none">
            <GsapReveal delay={0.1} direction="down">
                <Link href="/" className="text-2xl font-black tracking-tighter uppercase pointer-events-auto font-sora">
                    XCEED<span className="text-[var(--accent-primary)]">.</span>
                </Link>
            </GsapReveal>

            <div className="hidden lg:flex items-center gap-12 pointer-events-auto glass px-12 py-4 rounded-full border-white/5 shadow-2xl backdrop-blur-3xl">
                {navLinks.map((link, i) => (
                    <GsapReveal key={link.name} delay={0.2 + (i * 0.05)} direction="down">
                        <Link
                            href={link.href}
                            className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-white transition-colors font-sora"
                        >
                            {link.name}
                        </Link>
                    </GsapReveal>
                ))}
            </div>

            <GsapReveal delay={0.4} direction="down">
                <Link
                    href="#contact"
                    className="btn-primary py-3 px-8 pointer-events-auto shadow-2xl"
                >
                    Project Init
                </Link>
            </GsapReveal>
        </nav>
    );
}
