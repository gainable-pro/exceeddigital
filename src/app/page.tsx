"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import LiquidHero from "@/components/3d/LiquidHero";
import { GsapReveal } from "@/components/ui/GsapReveal";

// Sections
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { OffresSection } from "@/components/sections/OffresSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-bg-deep overflow-x-hidden">
            <Navbar />
            <CustomCursor />

            {/* Hero Section V3 - Typography First */}
            <div className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden">
                {/* Visual Background Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,71,216,0.05),transparent_70%)]" />
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(var(--glass-border) 1px, transparent 0)', backgroundSize: '40px 40px' }}
                />

                <section className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                    <GsapReveal delay={0.2} direction="up">
                        <div className="inline-flex items-center gap-3 px-4 py-2 mb-12 glass border-white/5 rounded-full text-[9px] uppercase tracking-[0.5em] font-bold text-[var(--accent-primary)] font-sora">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                            Digital Excellence Agency
                        </div>

                        <h1 className="text-7xl md:text-[11rem] mb-12 flex flex-col gap-0 leading-[0.8] mix-blend-difference">
                            <span className="text-white">IMPACTFUL</span>
                            <span className="text-gradient drop-shadow-[0_0_30px_rgba(156,71,216,0.3)]">DIGITAL</span>
                        </h1>

                        <p className="max-w-xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-16 tracking-tight font-sora">
                            Nous fusionnons design de haute couture et performance technologique pour propulser les leaders de demain.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <button className="btn-primary group relative overflow-hidden">
                                <span className="relative z-10">Lancer un audit</span>
                                <div className="absolute inset-0 bg-[var(--accent-primary)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                            </button>
                            <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-12 py-5 glass text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/5 transition-all border border-white/10 font-sora">
                                Explorer le Lab
                            </button>
                        </div>
                    </GsapReveal>
                </section>

                {/* Refined Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-slate-500 font-sora font-bold">Discover</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--accent-primary)] to-transparent" />
                </div>
            </div>

            {/* Narrative Flow */}
            <ResultsSection />
            <ExpertiseSection />
            <MethodSection />
            <PortfolioSection />
            <OffresSection />
            <ContactSection />

            {/* Footer Minimalist */}
            <footer className="py-12 px-6 border-t border-white/5 text-center">
                <div className="text-lg font-black tracking-tighter mb-4">
                    XCEED<span className="text-cyan-400">.</span>
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-widest">
                    © 2026 Xceed Digital Experience. Tous droits réservés.
                </p>
            </footer>
        </main>
    );
}
