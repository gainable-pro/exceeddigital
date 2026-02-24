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

            {/* 3D Scene Background (Hero) */}
            <div className="h-screen w-full relative">
                <LiquidHero />

                {/* Background Glows */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

                <section className="h-full flex flex-col items-center justify-center relative z-10 text-center px-6">
                    <GsapReveal delay={0.2} direction="up">
                        <div className="inline-block px-4 py-1.5 mb-8 glass text-[10px] uppercase tracking-[0.4em] font-bold text-cyan-400">
                            XCEED DIGITAL &mdash; EST. 2026
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9] flex flex-col">
                            <span className="text-white">QUANTUM</span>
                            <span className="text-gradient">STRETCH</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-12 tracking-wide">
                            Transformez votre vision en performance.
                            Design immersif et technologie fluide pour votre croissance.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <button className="px-12 py-5 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(255,255,255,0.15)]">
                                Audit Gratuit
                            </button>
                            <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-12 py-5 glass text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 transition-all border border-white/10">
                                Portfolio
                            </button>
                        </div>
                    </GsapReveal>
                </section>

                {/* Floating Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
                >
                    <span className="text-[10px] uppercase tracking-widest text-[#94a3b8]">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                </motion.div>
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
