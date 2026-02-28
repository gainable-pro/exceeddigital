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
                        Confidentialité <br /><span className="text-gradient">& RGPD</span>
                    </h1>

                    <div className="space-y-12 text-secondary/80 leading-relaxed font-light text-sm">
                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Introduction</h2>
                            <p>
                                Chez EXCEED DIGITAL, nous accordons une importance capitale à la protection de vos données personnelles.
                                Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos données,
                                conformément au Règlement Général sur la Protection des Données (RGPD).
                            </p>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                                <h2 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Collecte des données</h2>
                                <p>
                                    Nous collectons les données que vous nous communiquez via nos formulaires (Contact, Diagnostic) :
                                    Nom, Email, Entreprise, Téléphone, ainsi que les détails relatifs à votre projet.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                                <h2 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Finalités du traitement</h2>
                                <p>
                                    Vos données sont traitées uniquement pour :
                                    <ul className="list-disc ml-4 mt-2 space-y-1">
                                        <li>Répondre à vos demandes de contact</li>
                                        <li>Établir des propositions commerciales</li>
                                        <li>Assurer le suivi de nos échanges</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Conservation & Sécurité</h2>
                            <p className="mb-4">
                                Vos données sont conservées pour la durée nécessaire à la gestion de la relation commerciale.
                                Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé.
                            </p>
                            <p>
                                Elles ne sont en aucun cas vendues ou cédées à des tiers.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Vos Droits</h2>
                            <p className="mb-4">
                                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données.
                                Vous pouvez également vous opposer au traitement de vos données pour motifs légitimes.
                            </p>
                            <p>
                                Pour exercer ces droits, contactez-nous par email à : <span className="text-white">contact@xceed-digital.com</span>
                            </p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
