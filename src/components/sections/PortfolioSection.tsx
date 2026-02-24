"use client";

import { motion } from "framer-motion";

const projects = [
    { title: "Horizon Cloud", category: "Web Design / 3D", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800" },
    { title: "Quantum Pay", category: "Fintech App", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" },
    { title: "Luxe Empreinte", category: "Branding", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" },
    { title: "Nexus CRM", category: "Automation", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
];

export function PortfolioSection() {
    return (
        <section id="portfolio" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">Portfolio</h2>
                        <p className="text-slate-400">Quelques-unes de nos réalisations les plus marquantes.</p>
                    </div>
                    <button className="text-sm font-bold uppercase tracking-widest text-cyan-400 hover:text-white transition-colors">
                        Voir tous les projets →
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-900 border border-white/5 mb-6">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                            <p className="text-sm text-slate-500 uppercase tracking-widest">{project.category}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
