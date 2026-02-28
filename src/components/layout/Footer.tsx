"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#050505] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
                            XCEED<span className="text-accent-primary"> DIGITAL</span>
                        </Link>
                        <p className="text-secondary/60 max-w-md mb-8 leading-relaxed">
                            Nous concevons des outils numériques de haute performance pour propulser la croissance des entreprises ambitieuses.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="mailto:contact@xceed-digital.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-primary transition-colors">
                                <Mail size={18} className="text-white" />
                            </a>
                            <a href="tel:+33615622188" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-primary transition-colors">
                                <Phone size={18} className="text-white" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Agence</h4>
                        <ul className="space-y-4">
                            <li><Link href="/#expertise" className="text-secondary/60 hover:text-white transition-colors">Expertise</Link></li>
                            <li><Link href="/#portfolio" className="text-secondary/60 hover:text-white transition-colors">Portfolio</Link></li>
                            <li><Link href="/#methode" className="text-secondary/60 hover:text-white transition-colors">Méthode</Link></li>
                            <li><Link href="/#contact" className="text-secondary/60 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Légal</h4>
                        <ul className="space-y-4">
                            <li><Link href="/mentions-legales" className="text-secondary/60 hover:text-white transition-colors">Mentions Légales</Link></li>
                            <li><Link href="/politique-confidentialite" className="text-secondary/60 hover:text-white transition-colors">Confidentialité & RGPD</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-secondary/40 text-xs font-mono">
                        © {currentYear} EXCEED DIGITAL. Tous droits réservés.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-secondary/40 font-mono">
                        <span>MADE WITH PRECISION</span>
                        <div className="h-1 w-1 bg-accent-primary rounded-full" />
                        <span>MIRAMAS, FRANCE</span>
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 blur-[150px] pointer-events-none" />
        </footer>
    );
}
