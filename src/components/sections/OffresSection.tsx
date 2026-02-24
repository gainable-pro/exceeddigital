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
        <section id="offres" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <GsapReveal delay={0.1} direction="up">
                        <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">Nos Packs Accélérateurs</h2>
                        <p className="text-slate-400">Des solutions claires pour chaque étape de votre croissance.</p>
                    </GsapReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {packs.map((pack, i) => (
                        <GsapReveal key={pack.name} delay={i * 0.15} direction="up">
                            <div className={`glass p-12 flex flex-col relative h-full ${pack.popular ? "border-cyan-500/50 shadow-[0_0_60px_rgba(0,243,255,0.05)]" : ""}`}>
                                {pack.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 text-black text-[10px] font-bold uppercase px-4 py-1.5 rounded-full tracking-widest">
                                        Recommandé
                                    </div>
                                )}
                                <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{pack.name}</h3>
                                <div className="text-4xl font-black mb-6 pb-6 border-b border-white/5 tabular-nums">{pack.price}</div>
                                <p className="text-sm text-slate-400 mb-10 leading-relaxed font-light">{pack.desc}</p>

                                <ul className="space-y-4 mb-16 flex-1">
                                    {pack.features.map(f => (
                                        <li key={f} className="flex items-center gap-4 text-xs text-slate-300">
                                            <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${pack.popular ? "bg-white text-black hover:scale-105" : "bg-white/5 text-white hover:bg-white/10"}`}>
                                    Réserver un audit
                                </button>
                            </div>
                        </GsapReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
