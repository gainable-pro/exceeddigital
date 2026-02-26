import { GsapReveal } from "@/components/ui/GsapReveal";
import { Check } from "lucide-react";

const packs = [
    {
        name: "Starter / Launch",
        price: "2,490€",
        desc: "Parfait pour les nouveaux entrepreneurs.",
        features: ["Identité visuelle (Logo)", "Site vitrine premium", "Tracking GA4 basique", "1 Tunnel simple", "Formation back-office"],
        color: "slate"
    },
    {
        name: "Growth",
        price: "4,990€",
        desc: "Pour accélérer votre acquisition.",
        features: ["Tout du pack Starter", "SEO technique complet", "Landing Pages haute conversion", "Automatisation CRM (Zapier)", "Reporting mensuel"],
        color: "cyan",
        popular: true
    },
    {
        name: "Scale / custom",
        price: "Sur Devis",
        desc: "Solutions sur-mesure et apps complexes.",
        features: ["Stratégie globale multi-canaux", "Développement App React Native", "Automatisations avancées", "Audit CRO trimestriel", "Support prioritaire"],
        color: "violet"
    }
];

export function OffresSection() {
    return (
        <section id="offres" className="section-padding px-6 relative bg-[var(--bg-soft)] border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <GsapReveal delay={0.1} direction="up">
                        <h2 className="text-6xl md:text-[9rem] leading-[0.8] mb-8">
                            NOS <br /> <span className="text-gradient">FORMULES</span>
                        </h2>
                        <p className="text-slate-400 font-light text-lg font-sora max-w-xl mx-auto">
                            Des solutions packagées pour chaque phase de votre montée en puissance.
                        </p>
                    </GsapReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {packs.map((pack, i) => (
                        <GsapReveal key={pack.name} delay={i * 0.15} direction="up">
                            <div className={`p-12 flex flex-col relative h-full rounded-[2rem] transition-all duration-700 ${pack.popular ? "bg-white/5 border border-white/10 shadow-2xl" : "border border-white/5"}`}>
                                {pack.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--accent-primary)] text-white text-[9px] font-bold uppercase px-6 py-2 rounded-full tracking-[0.4em] shadow-xl">
                                        RECOMMANDÉ
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-4 font-sora leading-tight">{pack.name}</h3>
                                <div className="text-4xl font-bold mb-8 pb-8 border-b border-white/5 tabular-nums font-sora">
                                    <span className="text-sm opacity-40 font-light mr-2">À partir de</span>
                                    {pack.price}
                                </div>
                                <p className="text-sm text-slate-500 mb-12 leading-relaxed font-light font-sora flex-1">
                                    {pack.desc}
                                </p>

                                <ul className="space-y-6 mb-16">
                                    {pack.features.map(f => (
                                        <li key={f} className="flex items-start gap-4 text-xs text-slate-400 font-sora">
                                            <div className="w-1.5 h-1.5 bg-[var(--accent-primary)] rounded-full mt-1.5" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`btn-primary w-full ${pack.popular ? "bg-white text-black" : "bg-white/5 text-white border border-white/10 hover:bg-white/10"}`}>
                                    Initialiser l'Audit
                                </button>
                            </div>
                        </GsapReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
