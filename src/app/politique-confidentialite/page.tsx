import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PolitiqueConfidentialite() {
    return (
        <main className="w-full bg-[#050505] text-white min-h-screen">
            <Navbar />

            <section className="pt-40 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter uppercase">
                        Confidentialité <br /><span className="text-gradient">& Mentions Légales</span>
                    </h1>

                    <div className="space-y-12 text-secondary/80 leading-relaxed font-light text-sm">
                        {/* Propriété intellectuelle */}
                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Propriété intellectuelle</h2>
                            <p className="mb-4">
                                L’ensemble des éléments présents sur le site (notamment les textes, images, vidéos, graphismes, logos, icônes, documents téléchargeables et tout autre contenu) est protégé par le droit de la propriété intellectuelle et demeure la propriété exclusive d’Exceed Digital, sauf indication contraire explicite.
                            </p>
                            <p className="mb-4">
                                Toute reproduction, représentation, diffusion, modification, adaptation ou exploitation, totale ou partielle, de ces éléments, par quelque procédé que ce soit, sans autorisation écrite préalable d’Exceed Digital, est strictement interdite.
                            </p>
                            <p>
                                Toute utilisation non autorisée du site ou de l’un quelconque de ses contenus constitue une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété intellectuelle et pourra donner lieu à des poursuites judiciaires.
                            </p>
                        </section>

                        {/* Protection des données personnelles */}
                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Protection des données personnelles</h2>
                            <p className="mb-4">
                                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée ainsi qu’au Règlement Général sur la Protection des Données (RGPD), toute personne dispose d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition concernant les données personnelles la concernant.
                            </p>
                            <p className="mb-4">
                                Ces droits peuvent être exercés en contactant Exceed Digital à l’adresse suivante :<br />
                                <span className="text-accent-primary font-mono">contact@xceed-digital.com</span>
                            </p>
                            <p>
                                Pour davantage d’informations relatives au traitement des données personnelles, il convient de consulter la Politique de Confidentialité du site.
                            </p>
                        </section>

                        {/* Cookies */}
                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Cookies</h2>
                            <p className="mb-4">
                                Le site utilise des cookies afin d’améliorer l’expérience utilisateur et de réaliser des mesures d’audience.
                            </p>
                            <p>
                                En poursuivant la navigation sur le site, l’utilisateur accepte l’utilisation des cookies. Il est possible de configurer ou de désactiver les cookies à tout moment via les paramètres du navigateur.
                            </p>
                        </section>

                        {/* Limitation de responsabilité */}
                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Limitation de responsabilité</h2>
                            <p className="mb-4">
                                Les informations diffusées sur le site sont fournies à titre indicatif et sont régulièrement mises à jour. Toutefois, Exceed Digital ne saurait garantir leur exactitude, leur exhaustivité ou leur actualisation permanente.
                            </p>
                            <p className="mb-4">
                                Exceed Digital ne pourra être tenue responsable des éventuelles omissions, inexactitudes ou défauts de mise à jour, qu’ils soient de son fait ou du fait de partenaires tiers.
                            </p>
                            <p>
                                La responsabilité d’Exceed Digital ne saurait également être engagée pour tout dommage matériel ou immatériel résultant de l’accès ou de l’utilisation du site, notamment en cas d’incompatibilité technique, de bug ou de dysfonctionnement.
                            </p>
                        </section>

                        {/* Droit applicable et juridiction compétente */}
                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Droit applicable et juridiction compétente</h2>
                            <p className="mb-4">
                                Les présentes mentions légales sont régies par le droit français.
                            </p>
                            <p>
                                En cas de litige et à défaut de résolution amiable, les tribunaux compétents seront ceux du ressort du siège social d’Exceed Digital.
                            </p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
