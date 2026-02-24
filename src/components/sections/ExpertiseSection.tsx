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
        <section id="services" className="py-24 px-6 relative bg-anthracite">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">NOTRE EXPERTISE</h2>
                    <p className="text-slate-400 max-w-xl">
                        Le mariage de l'art et de la technologie pour des performances hors normes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {expertise.map((item, i) => (
                        <GsapReveal key={item.title} delay={i * 0.15} direction="up">
                            <div className="glass p-8 group hover:border-cyan-500/30 transition-all min-h-[300px] flex flex-col">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                                    {item.desc}
                                </p>
                                <div className="mt-auto bg-black/40 rounded-lg p-3 font-mono text-[10px] text-cyan-400/40 overflow-hidden">
                                    <code>{item.code}</code>
                                </div>
                            </div>
                        </GsapReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
