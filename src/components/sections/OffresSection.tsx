import { GsapReveal } from "@/components/ui/GsapReveal";
import { Check } from "lucide-react";

const packs = [
    { name: "Stratégie", features: ["Audit SEO complet", "Branding Identity", "Landing Page Optimized"] },
    { name: "Excellence", features: ["Sur-mesure Next.js", "Animations GSAP HD", "Automation Process"] },
    { name: "Command", features: ["Écosystème Digital", "Data Visualization", "Support 24/7"] },
];

export function OffresSection() {
    return (
        <section id="offres" className="section-v3 bg-soft">
            <GsapReveal delay={0.1}>
                <h2 className="section-title-v3">INVESTISSEZ DANS <br /><span className="text-gradient">L'IMPACT</span></h2>

                <div className="v3-pricing-grid">
                    {packs.map((pack, i) => (
                        <div key={i} className="v3-pricing-card">
                            <span className="pack-name font-mono">{pack.name}</span>
                            <ul className="features">
                                {pack.features.map((f, j) => (
                                    <li key={j} className="font-sora"><Check size={14} className="icon" /> {f}</li>
                                ))}
                            </ul>
                            <button className="v3-btn-init w-full mt-8">Choisir ce pack</button>
                        </div>
                    ))}
                </div>
            </GsapReveal>
        </section>
    );
}
