"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Vitesse de chargement", value: "99+", unit: "/100", labelSub: "Lighthouse Score" },
    { label: "Acquisition Clients", value: "+300", unit: "%", labelSub: "Moyenne annuelle" },
    { label: "Projets délivrés", value: "150", unit: "+", labelSub: "Expertise certifiée" },
    { label: "Taux de conversion", value: "x2.5", unit: "", labelSub: "Après optimisation" },
];

export function ResultsSection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Decorative lines */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-violet-500 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-5xl md:text-7xl font-black mb-2 text-gradient">
                                {stat.value}<span className="text-2xl md:text-4xl">{stat.unit}</span>
                            </div>
                            <div className="text-sm font-bold uppercase tracking-widest text-white mb-1">
                                {stat.label}
                            </div>
                            <div className="text-xs text-slate-500">
                                {stat.labelSub}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
