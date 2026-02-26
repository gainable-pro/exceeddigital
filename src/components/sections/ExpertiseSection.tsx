import { GsapReveal } from "@/components/ui/GsapReveal";
import { Code2, Cpu, Globe } from "lucide-react";

export function ExpertiseSection() {
    return (
        <section id="services" className="section-v3">
            <GsapReveal delay={0.1}>
                <h2 className="section-title-v3">NOTRE <br /><span className="text-gradient">SAVOIR-FAIRE</span></h2>

                <div className="v3-expertise-grid">
                    <div className="v3-expertise-card">
                        <Code2 className="icon" size={48} />
                        <h3>Fullstack Engineering</h3>
                        <p className="font-sora text-secondary">Architectures robustes et scalables en Next.js, Node.js et intégration API complexe.</p>
                    </div>
                    <div className="v3-expertise-card">
                        <Globe className="icon" size={48} />
                        <h3>Immersive Experience</h3>
                        <p className="font-sora text-secondary">Web design haut de gamme avec GSAP et Three.js pour une mémorabilité absolue.</p>
                    </div>
                    <div className="v3-expertise-card">
                        <Cpu className="icon" size={48} />
                        <h3>Performance & Automation</h3>
                        <p className="font-sora text-secondary">Optimisation Core Web Vitals et automatisation des processus métier via IA.</p>
                    </div>
                </div>
            </GsapReveal>
        </section>
    );
}
