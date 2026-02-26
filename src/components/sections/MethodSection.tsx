import { GsapReveal } from "@/components/ui/GsapReveal";

const steps = [
    { number: "01", title: "Inception", desc: "Audit stratégique et définition de l'ADN numérique." },
    { number: "02", title: "Forge", desc: "Design haute couture et développement sur-mesure." },
    { number: "03", title: "Impact", desc: "Déploiement et optimisation continue de la performance." },
];

export function MethodSection() {
    return (
        <section id="method" className="section-v3 bg-soft">
            <GsapReveal delay={0.1}>
                <h2 className="section-title-v3">NOTRE <br /><span className="text-gradient">METHODOLOGIE</span></h2>

                <div className="v3-method-grid">
                    {steps.map((step, i) => (
                        <div key={i} className="v3-method-card">
                            <span className="step-num font-mono">{step.number}</span>
                            <h3>{step.title}</h3>
                            <p className="font-sora text-secondary">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </GsapReveal>
        </section>
    );
}
