import { GsapReveal } from "@/components/ui/GsapReveal";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Air G Energie",
        category: "Site Vitrine & SEO Local",
        desc: "Architecture dynamique avec pages optimisées par ville pour une domination du SEO local.",
        img: "/assets/portfolio/airg.png",
        url: "https://www.airgenergie.com"
    },
    {
        title: "Gainable.fr",
        category: "Plateforme SaaS & IA",
        desc: "Fidélisation et mise en service multidomaine avec Assistant IA, vérification SIREN et paiement Stripe intégrés.",
        img: "/assets/portfolio/gainable.png",
        url: "https://gainable.fr"
    },
    {
        title: "TR-Peinture",
        category: "Optimisation SEO & Google Ads",
        desc: "Stratégie d'acquisition complète et optimisation de la visibilité locale pour artisan peintre.",
        img: "/assets/portfolio/trpeinture.png",
        url: "https://www.tr-peinture.com"
    },
];

export function PortfolioSection() {
    return (
        <section id="portfolio" className="section-v3">
            <GsapReveal>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <h2 className="section-title-v3 !mb-0">
                        <TypewriterText text="RÉALISATIONS" delay={0.2} /><br />
                        <span className="text-gradient">
                            <TypewriterText text="SÉLECTIONNÉES" delay={1.0} />
                        </span>
                    </h2>
                    <p className="text-secondary opacity-60 font-mono tracking-widest uppercase text-xs">Scroll to explore catalog — 2024</p>
                </div>

                <div className="v3-portfolio-grid">
                    {projects.map((project, i) => (
                        <a key={i} href={project.url} target="_blank" rel="noopener noreferrer" className="v3-portfolio-card group">
                            <div className="img-container">
                                <img src={project.img} alt={project.title} className="transition-transform duration-700 group-hover:scale-105" />
                                <div className="overlay">
                                    <div className="content">
                                        <span className="category font-mono text-accent-primary">{project.category}</span>
                                        <h3>{project.title}</h3>
                                        <p className="font-sora text-sm opacity-80 mt-2">{project.desc}</p>
                                    </div>
                                    <div className="view-btn">
                                        <span>Visiter le site</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </GsapReveal>
        </section>
    );
}
