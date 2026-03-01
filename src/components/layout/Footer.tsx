"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#050505] border-t border-white/5 py-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-[10px] font-mono tracking-widest text-secondary/40">
                    <div className="flex items-center gap-6">
                        <Link href="/mentions-legales" className="hover:text-accent-primary transition-colors">MENTIONS LÉGALES</Link>
                        <Link href="/politique-confidentialite" className="hover:text-accent-primary transition-colors">CONFIDENTIALITÉ & RGPD</Link>
                        <Link href="/cgv" className="hover:text-accent-primary transition-colors">CGV</Link>
                    </div>

                    <div className="hidden md:block w-1 h-1 bg-white/10 rounded-full" />

                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center text-[1.4rem] tracking-tight">
                            <span className="font-black text-white">EXCEED</span>
                            <span className="font-light text-accent-primary pl-2 opacity-90">DIGITAL</span>
                        </div>

                        <div className="flex items-center gap-3 w-full max-w-[200px] opacity-30">
                            <div className="h-[1px] flex-1 bg-accent-primary/40" />
                            <span className="text-[8px] tracking-wide whitespace-nowrap">Exceed Your Limits.</span>
                            <div className="h-[1px] flex-1 bg-accent-primary/40" />
                        </div>

                        <p className="text-[8px] uppercase tracking-widest mt-2 opacity-30">
                            © {currentYear} EXCEED DIGITAL <span className="text-secondary opacity-50">®</span> TOUS DROITS RÉSERVÉS.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
