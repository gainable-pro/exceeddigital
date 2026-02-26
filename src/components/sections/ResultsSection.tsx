"use client";

import { GsapReveal } from "@/components/ui/GsapReveal";

const stats = [
    { label: "Vitesse de chargement", value: "99+", unit: "/100", labelSub: "Lighthouse Score" },
    { label: "Acquisition Clients", value: "+300", unit: "%", labelSub: "Moyenne annuelle" },
    { label: "Projets délivrés", value: "150", unit: "+", labelSub: "Expertise certifiée" },
    { label: "Taux de conversion", value: "x2.5", unit: "", labelSub: "Après optimisation" },
];

export function ResultsSection() {
    return (
        <section className="section-padding relative overflow-hidden bg-[var(--bg-soft)] border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
                    {stats.map((stat, i) => (
                        <GsapReveal key={stat.label} delay={i * 0.1} direction="up">
                            <div className="flex flex-col items-center text-center group">
                                <div className="text-6xl md:text-8xl font-bold font-sora tracking-tighter text-gradient tabular-nums mb-4">
                                    {stat.value}<span className="text-xl md:text-3xl opacity-20 ml-2">{stat.unit}</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--accent-primary)] font-sora">
                                        {stat.label}
                                    </div>
                                    <div className="text-xs text-slate-500 font-light leading-relaxed uppercase tracking-widest opacity-60 font-sora">
                                        {stat.labelSub}
                                    </div>
                                </div>
                            </div>
                        </GsapReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
