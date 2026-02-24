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
        <section className="py-32 px-6 relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {stats.map((stat, i) => (
                        <GsapReveal key={stat.label} delay={i * 0.1} direction="up">
                            <div className="text-center group">
                                <div className="text-6xl md:text-8xl font-black mb-4 text-gradient tabular-nums">
                                    {stat.value}<span className="text-xl md:text-3xl opacity-40">{stat.unit}</span>
                                </div>
                                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-2">
                                    {stat.label}
                                </div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest opacity-60">
                                    {stat.labelSub}
                                </div>
                            </div>
                        </GsapReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
