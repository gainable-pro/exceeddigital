import { GsapReveal } from "@/components/ui/GsapReveal";

const projects = [
    { title: "Horizon Cloud", category: "Web Design / 3D", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800" },
    { title: "Quantum Pay", category: "Fintech App", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" },
    { title: "Luxe Empreinte", category: "Branding", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" },
    { title: "Nexus CRM", category: "Automation", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
];

export function PortfolioSection() {
    return (
        <section id="portfolio" className="section-padding px-6 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <div>
                        <h2 className="text-6xl md:text-[9rem] leading-[0.8] mb-6">
                            NOTRE <br /> <span className="text-gradient">LABORATOIRE</span>
                        </h2>
                        <p className="text-slate-400 font-light text-lg font-sora">Sélection de projets ayant redéfini les standards de performance.</p>
                    </div>
                    <button className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--accent-primary)] hover:text-white transition-colors font-sora border-b border-[var(--accent-primary)] pb-2 flex items-center gap-4 group">
                        See All Projects <span className="text-white group-hover:translate-x-2 transition-transform">→</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    {projects.map((project, i) => (
                        <GsapReveal key={project.title} delay={i * 0.1} direction="up">
                            <div className="group cursor-pointer">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-slate-900 border border-white/5 mb-8">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-105"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-1000" />
                                </div>
                                <div className="space-y-3">
                                    <p className="text-[10px] text-[var(--accent-primary)] font-bold uppercase tracking-[0.4em] font-sora">{project.category}</p>
                                    <h3 className="text-4xl font-bold font-sora leading-tight group-hover:text-gradient transition-all duration-500">{project.title}</h3>
                                </div>
                            </div>
                        </GsapReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
