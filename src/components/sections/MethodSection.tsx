import { GsapReveal } from "@/components/ui/GsapReveal";

const steps = [
    { id: "01", title: "Audit & Recherche", desc: "Analyse profonde de votre marché, de vos concurrents et de vos opportunités." },
    { id: "02", title: "Stratégie Digitale", desc: "Conception du plan d'attaque : tunnels, branding et architecture technique." },
    { id: "03", title: "Production Haute Fidélité", desc: "Développement, design et intégration des automatisations." },
    { id: "04", title: "Optimisation Continue", desc: "Analyse des données et ajustements pour une performance maximale." },
];

export function MethodSection() {
    return (
        <section id="method" className="py-24 px-6 relative bg-anthracite">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">NOTRE MÉTHODE</h2>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, i) => (
                        <GsapReveal key={step.id} delay={i * 0.1} direction="up">
                            <div className="group border-t border-white/5 pt-12 pb-8">
                                <div className="text-[10px] font-black text-cyan-400 mb-8 tracking-[0.4em]">{step.id}</div>
                                <h3 className="text-2xl font-bold mb-6 tracking-tight">{step.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-light">
                                    {step.desc}
                                </p>
                            </div>
                        </GsapReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
