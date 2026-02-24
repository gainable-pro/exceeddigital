"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import CommandCenterScene from "@/components/3d/CommandCenter";

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
                <CommandCenterScene />

                {/* Background Glows */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />

                <section className="h-full flex flex-col items-center justify-center relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <div className="inline-block px-4 py-1.5 mb-6 glass text-[10px] uppercase tracking-[0.2em] font-bold text-cyan-400">
                            Digital Command Center — 2026
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
                            <span className="text-gradient">DESIGNING<br />THE FUTURE</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-10">
                            Nous concevons des expériences digitales qui génèrent des résultats.
                            Stratégie, design et technologie pour propulser votre croissance.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-110 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                                Demander un audit
                            </button>
                            <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-4 glass text-white font-semibold rounded-full hover:bg-white/5 transition-colors">
                                Voir le portfolio
                            </button>
                        </div>
                    </motion.div>
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
