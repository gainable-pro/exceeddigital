import { GsapReveal } from "@/components/ui/GsapReveal";

const stats = [
    { label: "Lighthouse Score", value: "99+/100", desc: "Vitesse de chargement" },
    { label: "Acquisition Clients", value: "+300%", desc: "Moyenne annuelle" },
    { label: "Expertise certifiée", value: "150+", desc: "Projets délivrés" },
    { label: "Après optimisation", value: "x2.5", desc: "Taux de conversion" },
];

export function ResultsSection() {
    return (
        <section className="section-v3 bg-soft">
            <GsapReveal delay={0.1}>
                <div className="v3-results-grid">
                    {stats.map((stat, i) => (
                        <div key={i} className="v3-result-card">
                            <div className="number text-gradient">{stat.value}</div>
                            <div className="label font-mono">{stat.label}</div>
                            <p className="text-secondary font-sora mt-2">{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </GsapReveal>
        </section>
    );
}
