"use client";

import { motion } from "framer-motion";
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
        <section className="py-24 px-6 relative bg-anthracite">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">Nos Packs Accélérateurs</h2>
                    <p className="text-slate-400">Des solutions claires pour chaque étape de votre croissance.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {packs.map((pack, i) => (
                        <motion.div
                            key={pack.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`glass p-10 flex flex-col relative ${pack.popular ? "border-cyan-500/50 shadow-[0_0_40px_rgba(34,211,238,0.1)]" : ""}`}
                        >
                            {pack.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full">
                                    Plus populaire
                                </div>
                            )}
                            <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{pack.name}</h3>
                            <div className="text-4xl font-black mb-4 pb-4 border-b border-white/5">{pack.price}</div>
                            <p className="text-sm text-slate-400 mb-8">{pack.desc}</p>

                            <ul className="space-y-4 mb-12 flex-1">
                                {pack.features.map(f => (
                                    <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-full font-bold transition-all ${pack.popular ? "bg-cyan-400 text-black hover:bg-cyan-300" : "bg-white/5 text-white hover:bg-white/10"}`}>
                                Choisir ce pack
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
