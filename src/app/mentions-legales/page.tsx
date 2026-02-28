import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function MentionsLegales() {
    return (
        <main className="w-full bg-[#050505] text-white min-h-screen relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-primary/5 blur-[150px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-primary/5 blur-[150px] -z-10" />

            <Navbar />

            <section className="pt-40 pb-24 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter uppercase">
                            Mentions <span className="text-gradient">Légales</span>
                        </h1>
                        <p className="text-secondary/40 font-mono text-[10px] tracking-[0.3em] uppercase">Exceed Digital — Precision Engineering</p>
                    </div>

                    <div className="space-y-8">
                        {/* Section: Édition du site */}
                        <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative group hover:border-accent-primary/30 transition-all duration-500">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <h2 className="text-accent-primary font-bold mb-8 uppercase tracking-[0.2em] text-[10px] font-mono">01 — ÉDITION DU SITE</h2>
                            <p className="text-secondary/80 text-sm leading-relaxed mb-8">
                                Le site <span className="text-white font-medium">exceeddigital.vercel.app</span> est édité par la société EXCEED DIGITAL.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                <div className="space-y-1">
                                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest block">Raison Sociale</span>
                                    <span className="text-white text-sm">EXCEED DIGITAL (SAS)</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest block">SIREN</span>
                                    <span className="text-white text-sm">101 447 944</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest block">Siège Social</span>
                                    <span className="text-white text-sm">Rue du pourra, 13140 Miramas</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest block">TVA Intracommunautaire</span>
                                    <span className="text-white text-sm">FR39 101447944</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest block">RCS</span>
                                    <span className="text-white text-sm">Salon-de-Provence</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest block">Code NAF / APE</span>
                                    <span className="text-white text-sm">6201Z (Programmation)</span>
                                </div>
                            </div>
                        </div>

                        {/* Section: Publication & Hébergement */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl group hover:border-accent-primary/20 transition-all">
                                <h2 className="text-accent-primary font-bold mb-6 uppercase tracking-[0.2em] text-[10px] font-mono">02 — PUBLICATION</h2>
                                <p className="text-secondary/80 text-sm leading-relaxed">
                                    Le Directeur de la publication est le représentant légal de EXCEED DIGITAL.
                                </p>
                            </div>
                            <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl group hover:border-accent-primary/20 transition-all">
                                <h2 className="text-accent-primary font-bold mb-6 uppercase tracking-[0.2em] text-[10px] font-mono">03 — HÉBERGEMENT</h2>
                                <p className="text-secondary/80 text-sm leading-relaxed">
                                    Propulsé par <span className="text-white">Vercel Inc.</span><br />
                                    340 S Lemon Ave #4133 Walnut, CA 91789, USA.
                                </p>
                            </div>
                        </div>

                        {/* Section: Propriété Intellectuelle */}
                        <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl group hover:border-accent-primary/20 transition-all">
                            <h2 className="text-accent-primary font-bold mb-6 uppercase tracking-[0.2em] text-[10px] font-mono">04 — PROPRIÉTÉ INTELLECTUELLE</h2>
                            <p className="text-secondary/80 text-sm leading-relaxed italic">
                                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                                La reproduction de tout ou partie de ce site est formellement interdite sauf autorisation expresse du directeur de la publication.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
