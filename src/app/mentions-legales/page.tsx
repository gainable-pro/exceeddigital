import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function MentionsLegales() {
    return (
        <main className="w-full bg-[#050505] text-white min-h-screen">
            <Navbar />

            <section className="pt-40 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter uppercase">
                        Mentions <span className="text-gradient">Légales</span>
                    </h1>

                    <div className="space-y-12 text-secondary/80 leading-relaxed font-light">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm">Édition du site</h2>
                            <p className="mb-4">
                                Le site <span className="text-white">exceeddigital.vercel.app</span> est édité par la société <span className="text-white block mt-2 text-lg">EXCEED DIGITAL</span>
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li><span className="text-white/40 uppercase text-[10px] font-mono block">Forme juridique</span> SAS, société par actions simplifiée</li>
                                <li><span className="text-white/40 uppercase text-[10px] font-mono block">Capital social</span> 1 000 € (à confirmer)</li>
                                <li><span className="text-white/40 uppercase text-[10px] font-mono block">Siège social</span> Rue du pourra, 13140 Miramas</li>
                                <li><span className="text-white/40 uppercase text-[10px] font-mono block">SIREN</span> 101 447 944</li>
                                <li><span className="text-white/40 uppercase text-[10px] font-mono block">SIRET</span> 101 447 944 00014</li>
                                <li><span className="text-white/40 uppercase text-[10px] font-mono block">TVA Intracommunautaire</span> FR39101447944</li>
                                <li><span className="text-white/40 uppercase text-[10px] font-mono block">RCS</span> Salon-de-Provence</li>
                                <li><span className="text-white/40 uppercase text-[10px] font-mono block">Code NAF</span> 6201Z (Programmation informatique)</li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                                <h2 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Directeur de publication</h2>
                                <p className="text-sm">Le Directeur de la publication est le représentant légal de EXCEED DIGITAL.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                                <h2 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Hébergement</h2>
                                <p className="text-sm">Le site est hébergé par <span className="text-white">Vercel Inc.</span>, situé au 340 S Lemon Ave #4133 Walnut, CA 91789, USA.</p>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Propriété intellectuelle</h2>
                            <p className="text-sm">
                                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
