import { GsapReveal } from "@/components/ui/GsapReveal";

const steps = [
    { id: "01", title: "Audit & Recherche", desc: "Analyse profonde de votre marché, de vos concurrents et de vos opportunités." },
    { id: "02", title: "Stratégie Digitale", desc: "Conception du plan d'attaque : tunnels, branding et architecture technique." },
    { id: "03", title: "Production Haute Fidélité", desc: "Développement, design et intégration des automatisations." },
    { id: "04", title: "Optimisation Continue", desc: "Analyse des données et ajustements pour une performance maximale." },
];

export function MethodSection() {
    return (
        <section id="method" className="section-padding px-6 relative bg-[var(--bg-soft)]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12 text-left">
                    <GsapReveal direction="up">
                        <h2 className="text-6xl md:text-9xl leading-[0.8] mb-6">
                            NOTRE <br /> <span className="text-gradient">MÉTHODOLOGIE</span>
                        </h2>
                    </GsapReveal>
                    <GsapReveal delay={0.2} direction="up">
                        <p className="max-w-md text-slate-400 font-light text-lg mb-4 font-sora">
                            Un processus itératif et rigoureux pour garantir le succès de vos ambitions digitales.
                        </p>
                    </GsapReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, i) => (
                        <GsapReveal key={step.id} delay={i * 0.1} direction="up">
                            <div className="group border-t border-white/5 pt-12 relative flex flex-col h-full">
                                <span className="text-5xl md:text-7xl font-serif text-[var(--accent-primary)] opacity-40 mb-6 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 origin-left">
                                    {step.id}
                                </span>
                                <h3 className="text-3xl font-bold mb-6 font-sora leading-tight">{step.title}</h3>
                                <p className="text-slate-500 font-light leading-relaxed font-sora mb-12 flex-1">
                                    {step.desc}
                                </p>
                                <div className="absolute top-0 left-0 w-12 h-0.5 bg-[var(--accent-primary)] group-hover:w-full transition-all duration-700" />
                            </div>
                        </GsapReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
