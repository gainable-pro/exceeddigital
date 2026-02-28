import { GsapReveal } from "@/components/ui/GsapReveal";
import { Globe, Database, MessageSquare, Megaphone } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Web & SEO Performance",
        desc: "Sites rapides (statiques ou dynamiques) et SEO natif pensés pour convertir. De l'audit à l'indexation, nous transformons votre site en levier d'acquisition.",
        icon: Globe,
        img: "/assets/expertise/web.png",
        href: "/services/creation-site-web-seo"
    },
    {
        title: "ERP & Plateformes",
        desc: "Développement d'outils sur mesure pour centraliser vos données, automatiser vos opérations et piloter votre activité en temps réel avec efficacité.",
        icon: Database,
        img: "/assets/expertise/erp.png",
        href: "/services/erp-plateformes"
    },
    {
        title: "ChatBot & IA",
        desc: "Automatisation de vos échanges clients et qualification de prospects via des chatbots intelligents. Gain de temps et disponibilité 24/7 garantie.",
        icon: MessageSquare,
        img: "/assets/expertise/chatbot.png",
        href: "/services/chatbot-automatisation"
    },
    {
        title: "Stratégie & Image",
        desc: "Identity visuelle, stratégie de contenu et community management. Nous structurons votre présence digitale pour une image de marque forte.",
        icon: Megaphone,
        img: "/assets/expertise/strategy.png",
        href: "/services/strategie-image"
    },
];

export function ExpertiseSection() {
    return (
        <section id="services" className="section-v3">
            <GsapReveal delay={0.1}>
                <h2 className="section-title-v3">NOTRE <br /><span className="text-gradient">SAVOIR-FAIRE</span></h2>

                <div className="v3-expertise-grid">
                    {services.map((service, i) => {
                        const CardContent = (
                            <div className="v3-expertise-card group h-full">
                                <div className="v3-expertise-bg" style={{ backgroundImage: `url(${service.img})` }} />
                                <div className="v3-expertise-content">
                                    <div className="icon-box">
                                        <service.icon className="icon text-accent-primary" size={48} />
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p className="font-sora text-secondary">{service.desc}</p>
                                </div>
                            </div>
                        );

                        return service.href ? (
                            <Link key={i} href={service.href}>
                                {CardContent}
                            </Link>
                        ) : (
                            <div key={i}>
                                {CardContent}
                            </div>
                        );
                    })}
                </div>
            </GsapReveal>
        </section>
    );
}
