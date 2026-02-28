import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CGV() {
    return (
        <main className="w-full bg-[#050505] text-white min-h-screen relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-accent-primary/5 blur-[200px] -z-10" />

            <Navbar />

            <section className="pt-40 pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter uppercase">
                            Conditions Générales <br /><span className="text-gradient">de Vente</span>
                        </h1>
                        <p className="text-secondary/40 font-mono text-[10px] tracking-[0.3em] uppercase">Exceed Digital — Terms of Service</p>
                    </div>

                    <div className="space-y-8">
                        {/* Article 1 */}
                        <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative group hover:border-accent-primary/30 transition-all duration-500">
                            <h2 className="text-accent-primary font-bold mb-6 uppercase tracking-[0.2em] text-[10px] font-mono whitespace-nowrap overflow-hidden text-ellipsis">ARTICLE 1 – IDENTIFICATION DE LA SOCIÉTÉ</h2>
                            <p className="text-secondary/80 text-sm leading-relaxed mb-4">
                                La société <span className="text-white font-medium">EXCEED DIGITAL</span> (SAS), immatriculée au RCS de Salon-de-Provence sous le numéro 101 447 944, située à Miramas (13140), immatriculée le 19/02/2026.
                            </p>
                            <p className="text-secondary/80 text-sm font-mono text-[11px] opacity-60">SIRET: 101 447 944 00014 | TVA: FR39 101447944 | APE: 6201Z</p>
                        </div>

                        {/* Article 2 */}
                        <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl group hover:border-accent-primary/30 transition-all duration-500">
                            <h2 className="text-accent-primary font-bold mb-6 uppercase tracking-[0.2em] text-[10px] font-mono whitespace-nowrap overflow-hidden text-ellipsis">ARTICLE 2 – OBJET</h2>
                            <p className="text-secondary/80 text-sm leading-relaxed">
                                Les présentes CGV définissent les modalités dans lesquelles Exceed Digital fournit ses prestations. Toute commande implique l’adhésion pleine et entière du Client aux présentes CGV.
                            </p>
                        </div>

                        {/* Article 3 */}
                        <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl group hover:border-accent-primary/30 transition-all duration-500">
                            <h2 className="text-accent-primary font-bold mb-6 uppercase tracking-[0.2em] text-[10px] font-mono whitespace-nowrap overflow-hidden text-ellipsis">ARTICLE 3 – PRESTATIONS</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-secondary/80 text-sm leading-relaxed">
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent-primary rounded-full" /> Développement Web & App</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent-primary rounded-full" /> Optimisation SEO</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent-primary rounded-full" /> Stratégie & Branding</li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent-primary rounded-full" /> Maintenance technique</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent-primary rounded-full" /> Hébergement</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent-primary rounded-full" /> Création de contenus</li>
                                </ul>
                            </div>
                        </div>

                        {/* Article 5 - Modalités */}
                        <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl group hover:border-accent-primary/30 transition-all duration-500">
                            <h2 className="text-accent-primary font-bold mb-6 uppercase tracking-[0.2em] text-[10px] font-mono whitespace-nowrap overflow-hidden text-ellipsis">ARTICLE 5 – PRIX ET MODALITÉS DE PAIEMENT</h2>
                            <p className="text-secondary/80 text-sm leading-relaxed mb-4">
                                Un acompte de 30% à 50% est exigé à la signature. Le solde est payable à la livraison. En cas de retard, des pénalités au taux légal x3 seront appliquées.
                            </p>
                        </div>

                        {/* Article 10 - Propriété */}
                        <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl group hover:border-accent-primary/30 transition-all duration-500">
                            <h2 className="text-accent-primary font-bold mb-6 uppercase tracking-[0.2em] text-[10px] font-mono whitespace-nowrap overflow-hidden text-ellipsis">ARTICLE 10 – PROPRIÉTÉ INTELLECTUELLE</h2>
                            <p className="text-secondary/80 text-sm leading-relaxed italic">
                                Les droits d’utilisation et le code source sont transférés au Client uniquement après paiement intégral des sommes dues.
                            </p>
                        </div>

                        {/* Article 14 - Litiges */}
                        <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl group hover:border-accent-primary/30 transition-all duration-500">
                            <h2 className="text-accent-primary font-bold mb-6 uppercase tracking-[0.2em] text-[10px] font-mono whitespace-nowrap overflow-hidden text-ellipsis">ARTICLE 14 – DROIT APPLICABLE ET LITIGES</h2>
                            <p className="text-secondary/80 text-sm leading-relaxed">
                                Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux du complexe judiciaire d'Aix-Marseille (Salon-de-Provence) seront compétents.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
