"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, BarChart3, Zap } from "lucide-react";
import { GsapReveal } from "@/components/ui/GsapReveal";

const expertise = [
    {
        title: "Web Engine",
        desc: "Solutions Next.js & React ultra-performantes.",
        icon: <Globe className="w-6 h-6" />,
        code: "const engine = createStore({ speed: '99+' });"
    },
    {
        title: "Digital Branding",
        desc: "Identité visuelle premium et UI immersive.",
        icon: <Cpu className="w-6 h-6" />,
        code: "brand.identity.apply({ style: 'Luxury' });"
    },
    {
        title: "Growth Data",
        desc: "Tracking GA4 & automatisation marketing.",
        icon: <BarChart3 className="w-6 h-6" />,
        code: "tracking.trackEvent('Conversion', { value: 100 });"
    },
    {
        title: "Core Automation",
        desc: "Pipelines Zapier, Make et API custom.",
        icon: <Zap className="w-6 h-6" />,
        code: "workflow.trigger('onNewLead').execute();"
    }
];

export function ExpertiseSection() {
    return (
        <section id="services" className="section-padding px-6 relative border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
                    <GsapReveal direction="up">
                        <h2 className="text-6xl md:text-[9rem] leading-[0.8] mb-6">
                            NOS <br /> <span className="text-gradient">EXPERTISES</span>
                        </h2>
                    </GsapReveal>
                    <GsapReveal delay={0.2} direction="up">
                        <p className="max-w-md text-slate-400 font-light text-lg mb-4 font-sora">
                            Une approche multidisciplinaire pour créer des écosystèmes digitaux qui génèrent des résultats tangibles.
                        </p>
                    </GsapReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-[2rem]">
                    {expertise.map((item, i) => (
                        <GsapReveal key={item.title} delay={i * 0.1} direction="up">
                            <div className="bg-[var(--bg-deep)] p-12 group hover:bg-[var(--bg-soft)] transition-colors h-full flex flex-col items-start">
                                <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-[var(--accent-primary)] mb-10 group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-all duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-3xl font-bold mb-6 font-sora leading-tight">{item.title}</h3>
                                <p className="text-slate-500 font-light leading-relaxed font-sora mb-12 flex-1">
                                    {item.desc}
                                </p>
                                <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.4em] font-bold text-[var(--accent-primary)] group-hover:gap-6 transition-all duration-300">
                                    Learn More <span className="text-white text-base">→</span>
                                </div>
                            </div>
                        </GsapReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
