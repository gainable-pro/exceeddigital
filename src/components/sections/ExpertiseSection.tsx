import { GsapReveal } from "@/components/ui/GsapReveal";
import { Code2, Cpu, Globe } from "lucide-react";

export function ExpertiseSection() {
    return (
        <section id="services" className="section-v3">
            <GsapReveal delay={0.1}>
                <h2 className="section-title-v3">NOTRE <br /><span className="text-gradient">SAVOIR-FAIRE</span></h2>

                <div className="v3-expertise-grid">
                    <div className="v3-expertise-card">
                        <Globe className="icon" size={48} />
                        <h3>Web & SEO Performance</h3>
                        <p className="font-sora text-secondary">Sites rapides (statiques ou dynamiques) et SEO natif pensés pour convertir. De l'audit à l'indexation, nous transformons votre site en levier d'acquisition.</p>
                    </div>
                    <div className="v3-expertise-card">
                        <Cpu className="icon" size={48} />
                        <h3>ERP & Plateformes</h3>
                        <p className="font-sora text-secondary">Développement d'outils sur mesure pour centraliser vos données, automatiser vos opérations et piloter votre activité en temps réel avec efficacité.</p>
                    </div>
                    <div className="v3-expertise-card">
                        <Cpu className="icon" size={48} />
                        <h3>ChatBot & IA</h3>
                        <p className="font-sora text-secondary">Automatisation de vos échanges clients et qualification de prospects via des chatbots intelligents. Gain de temps et disponibilité 24/7 garantie.</p>
                    </div>
                    <div className="v3-expertise-card">
                        <Globe className="icon" size={48} />
                        <h3>Stratégie & Image</h3>
                        <p className="font-sora text-secondary">Identity visuelle, stratégie de contenu et community management. Nous structurons votre présence digitale pour une image de marque forte.</p>
                    </div>
                </div>
            </GsapReveal>
        </section>
    );
}
