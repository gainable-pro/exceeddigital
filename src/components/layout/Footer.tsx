"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, Sparkles } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#050505] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white mb-6 flex items-center gap-2">
                            <span>EXCEED</span><span className="text-accent-primary">DIGITAL</span>
                            <span className="text-[10px] font-mono opacity-50 align-top">®</span>
                        </Link>
                        <p className="text-secondary/60 max-w-sm mb-8 leading-relaxed text-sm">
                            Solutions numériques de haute performance. Stratégie, Design & Ingénierie logicielle pour entreprises en croissance.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="mailto:contact@xceed-digital.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-primary transition-colors border border-white/10">
                                <Mail size={16} className="text-white" />
                            </a>
                            <a href="tel:+33615622188" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-primary transition-colors border border-white/10">
                                <Phone size={16} className="text-white" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-[10px] tracking-[0.2em] font-mono opacity-50">Navigation</h4>
                        <ul className="space-y-4 text-sm font-light">
                            <li><Link href="/#expertise" className="text-secondary/60 hover:text-white transition-colors">Expertise</Link></li>
                            <li><Link href="/#portfolio" className="text-secondary/60 hover:text-white transition-colors">Portfolio</Link></li>
                            <li><Link href="/#methode" className="text-secondary/60 hover:text-white transition-colors">Méthode</Link></li>
                            <li><Link href="/#contact" className="text-secondary/60 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-[10px] tracking-[0.2em] font-mono opacity-50">Légal</h4>
                        <ul className="space-y-4 text-sm font-light">
                            <li><Link href="/mentions-legales" className="text-secondary/60 hover:text-white transition-colors">Mentions Légales</Link></li>
                            <li><Link href="/politique-confidentialite" className="text-secondary/60 hover:text-white transition-colors">Confidentialité & RGPD</Link></li>
                            <li><Link href="/cgv" className="text-secondary/60 hover:text-white transition-colors">CGV</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Company Details Strip */}
                <div className="mb-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6 text-[10px] items-center">
                    <div className="space-y-1">
                        <span className="text-white/20 uppercase font-mono tracking-widest block">SIREN / SIRET</span>
                        <span className="text-secondary/60 font-mono">101 447 944 / 00014</span>
                    </div>
                    <div className="space-y-1">
                        <span className="text-white/20 uppercase font-mono tracking-widest block">TVA</span>
                        <span className="text-secondary/60 font-mono">FR39 101447944</span>
                    </div>
                    <div className="space-y-1">
                        <span className="text-white/20 uppercase font-mono tracking-widest block">RCS</span>
                        <span className="text-secondary/60 font-mono">Salon-de-Provence</span>
                    </div>
                    <div className="space-y-1">
                        <span className="text-white/20 uppercase font-mono tracking-widest block">Forme</span>
                        <span className="text-secondary/60 font-mono">SAS - Immatriculée le 19/02/26</span>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-secondary/40 text-[10px] font-mono">
                        <p>© {currentYear} EXCEED DIGITAL <span className="mx-1">®</span> TOUS DROITS RÉSERVÉS.</p>
                    </div>
                    <div className="flex items-center gap-6 text-[10px] text-secondary/40 font-mono">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-accent-primary rounded-full animate-pulse" />
                            <span>SERVERS ONLINE</span>
                        </div>
                        <div className="h-1 w-1 bg-white/10 rounded-full" />
                        <span>MIRAMAS, FRANCE</span>
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-primary/5 blur-[150px] pointer-events-none" />
        </footer>
    );
}
