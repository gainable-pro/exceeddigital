import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PolitiqueConfidentialite() {
    return (
        <main className="w-full bg-[#050505] text-white min-h-screen relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent-primary/5 blur-[150px] -z-10" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent-primary/5 blur-[150px] -z-10" />

            <Navbar />

            <section className="pt-40 pb-24 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter uppercase">
                            Confidentialité <br /><span className="text-gradient">& RGPD</span>
                        </h1>
                        <p className="text-secondary/40 font-mono text-[10px] tracking-[0.3em] uppercase">Exceed Digital — Privacy & Integrity</p>
                    </div>

                    <div className="space-y-8">
                        {/* Section: Propriété intellectuelle */}
                        <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative group hover:border-accent-primary/30 transition-all duration-500">
                            <h2 className="text-accent-primary font-bold mb-8 uppercase tracking-[0.2em] text-[10px] font-mono">01 — PROPRIÉTÉ INTELLECTUELLE</h2>
                            <p className="text-secondary/80 text-sm leading-relaxed mb-4">
                                L’ensemble des éléments présents sur le site (notamment les textes, images, vidéos, graphismes, logos, icônes, documents téléchargeables et tout autre contenu) est protégé par le droit de la propriété intellectuelle et demeure la propriété exclusive d’Exceed Digital.
                            </p>
                            <p className="text-secondary/80 text-sm leading-relaxed mb-4">
                                Toute reproduction, représentation, diffusion, modification, adaptation ou exploitation, totale ou partielle, de ces éléments, sans autorisation écrite préalable d’Exceed Digital, est strictement interdite.
                            </p>
                            <p className="text-secondary/80 text-sm leading-relaxed">
                                Toute utilisation non autorisée constitue une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété intellectuelle.
                            </p>
                        </div>

                        {/* Section: Protection des données personnelles */}
                        <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl group hover:border-accent-primary/30 transition-all duration-500">
                            <h2 className="text-accent-primary font-bold mb-8 uppercase tracking-[0.2em] text-[10px] font-mono">02 — PROTECTION DES DONNÉES PERSONNELLES</h2>
                            <p className="text-secondary/80 text-sm leading-relaxed mb-4">
                                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée ainsi qu’au Règlement Général sur la Protection des Données (RGPD), toute personne dispose d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition concernant les données personnelles la concernant.
                            </p>
                            <p className="text-secondary/80 text-sm leading-relaxed">
                                Ces droits peuvent être exercés en contactant Exceed Digital à l’adresse :<br />
                                <span className="text-white font-mono mt-2 block">contact@xceed-digital.com</span>
                            </p>
                        </div>

                        {/* Section: Cookies */}
                        <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl group hover:border-accent-primary/30 transition-all duration-500">
                            <h2 className="text-accent-primary font-bold mb-8 uppercase tracking-[0.2em] text-[10px] font-mono">03 — COOKIES</h2>
                            <p className="text-secondary/80 text-sm leading-relaxed mb-4">
                                Le site utilise des cookies afin d’améliorer l’expérience utilisateur et de réaliser des mesures d’audience.
                            </p>
                            <p className="text-secondary/80 text-sm leading-relaxed uppercase text-[9px] tracking-widest opacity-60">
                                En poursuivant la navigation sur le site, l’utilisateur accepte l’utilisation des cookies.
                            </p>
                        </div>

                        {/* Section: Limitation de responsabilité */}
                        <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl group hover:border-accent-primary/30 transition-all duration-500">
                            <h2 className="text-accent-primary font-bold mb-8 uppercase tracking-[0.2em] text-[10px] font-mono">04 — LIMITATION DE RESPONSABILITÉ</h2>
                            <p className="text-secondary/80 text-sm leading-relaxed mb-4 font-light italic">
                                Les informations diffusées sur le site sont fournies à titre indicatif. Exceed Digital ne saurait garantir leur exactitude, leur exhaustivité ou leur actualisation permanente.
                            </p>
                            <p className="text-secondary/80 text-sm leading-relaxed">
                                Le Prestataire ne pourra être tenu responsable des éventuelles omissions, inexactitudes ou défauts de mise à jour, qu’ils soient de son fait ou du fait de partenaires tiers.
                            </p>
                        </div>

                        {/* Section: Droit applicable */}
                        <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl group hover:border-accent-primary/30 transition-all duration-500">
                            <h2 className="text-accent-primary font-bold mb-8 uppercase tracking-[0.2em] text-[10px] font-mono">05 — DROIT APPLICABLE</h2>
                            <p className="text-secondary/80 text-sm leading-relaxed">
                                Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut de résolution amiable, les tribunaux compétents seront ceux du ressort du siège social d’Exceed Digital.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
