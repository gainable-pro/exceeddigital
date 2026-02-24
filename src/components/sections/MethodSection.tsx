"use client";

import { motion } from "framer-motion";

const steps = [
    { id: "01", title: "Audit & Recherche", desc: "Analyse profonde de votre marché, de vos concurrents et de vos opportunités." },
    { id: "02", title: "Stratégie Digitale", desc: "Conception du plan d'attaque : tunnels, branding et architecture technique." },
    { id: "03", title: "Production Haute Fidélité", desc: "Développement, design et intégration des automatisations." },
    { id: "04", title: "Optimisation Continue", desc: "Analyse des données et ajustements pour une performance maximale." },
];

export function MethodSection() {
    return (
        <section id="method" className="py-24 px-6 relative bg-anthracite">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">NOTRE MÉTHODE</h2>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-bg-deep p-12 hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="text-4xl font-black text-cyan-400/20 mb-6">{step.id}</div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
