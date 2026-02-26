import { GsapReveal } from "@/components/ui/GsapReveal";

const projects = [
    { title: "Lumina", category: "E-Commerce Luxe", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" },
    { title: "Aether", category: "SaaS Enterprise", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80" },
    { title: "Nexus", category: "Immobilier Premium", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" },
];

export function PortfolioSection() {
    return (
        <section id="portfolio" className="section-v3">
            <GsapReveal delay={0.1}>
                <h2 className="section-title-v3">RÉALISATIONS <br /><span className="text-gradient">SÉLECTIONNÉES</span></h2>

                <div className="v3-portfolio-grid">
                    {projects.map((project, i) => (
                        <div key={i} className="v3-portfolio-card">
                            <div className="img-container">
                                <img src={project.img} alt={project.title} />
                                <div className="overlay">
                                    <span className="category font-mono">{project.category}</span>
                                    <h3>{project.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </GsapReveal>
        </section>
    );
}
