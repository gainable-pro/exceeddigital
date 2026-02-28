"use client";

import Link from "next/link";
import { GsapReveal } from "@/components/ui/GsapReveal";

const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Méthode", href: "/#method" },
];

export function Navbar() {
    return (
        <nav className="v3-navbar">
            <GsapReveal delay={0.1} direction="down">
                <Link href="/" className="v3-logo">
                    EXCEED <span className="logo-accent">DIGITAL</span>
                </Link>
            </GsapReveal>

            <div className="v3-nav-dock">
                {navLinks.map((link, i) => (
                    <GsapReveal key={link.name} delay={0.2 + (i * 0.05)} direction="down">
                        <Link
                            href={link.href}
                            className="v3-nav-link"
                        >
                            {link.name}
                        </Link>
                    </GsapReveal>
                ))}
            </div>

            <GsapReveal delay={0.4} direction="down">
                <Link
                    href="#contact"
                    className="v3-btn-init"
                >
                    Diagnostic Gratuit
                </Link>
            </GsapReveal>
        </nav>
    );
}
