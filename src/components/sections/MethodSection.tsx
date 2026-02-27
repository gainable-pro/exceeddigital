import { GsapReveal } from "@/components/ui/GsapReveal";
import { Brain, Terminal, Rocket } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Inception",
        desc: "Audit stratégique et définition de l'ADN numérique. Nous structurons votre vision avec une architecture technique pointue.",
        icon: Brain,
        img: "/assets/methodology/inception.png"
    },
    {
        number: "02",
        title: "Forge",
        desc: "Design haute couture et développement sur-mesure. Nos ingénieurs sculptent votre solution ligne par ligne.",
        icon: Terminal,
        img: "/assets/methodology/forge.png"
    },
    {
        number: "03",
        title: "Impact",
        desc: "Déploiement et optimisation continue. Nous propulsons votre business vers des sommets de performance mesurables.",
        icon: Rocket,
        img: "/assets/methodology/impact.png"
    },
];

export function MethodSection() {
    return (
        <section id="method" className="section-v3" style={{ background: 'transparent' }}>
            <GsapReveal delay={0.1}>
                <h2 className="section-title-v3">NOTRE <br /><span className="text-gradient">METHODOLOGIE</span></h2>

                <div className="v3-method-grid">
                    {steps.map((step, i) => (
                        <div key={i} className="v3-method-card group">
                            <div className="v3-method-bg" style={{ backgroundImage: `url(${step.img})` }} />
                            <div className="v3-method-content">
                                <div className="icon-box">
                                    <step.icon className="icon text-accent-primary" size={40} />
                                </div>
                                <span className="step-num font-mono">{step.number}</span>
                                <h3>{step.title}</h3>
                                <p className="font-sora text-secondary">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </GsapReveal>
        </section>
    );
}
