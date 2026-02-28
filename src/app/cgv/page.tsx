import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CGV() {
    return (
        <main className="w-full bg-[#050505] text-white min-h-screen">
            <Navbar />

            <section className="pt-40 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter uppercase">
                        Conditions Générales <br /><span className="text-gradient">de Vente</span>
                    </h1>

                    <div className="space-y-12 text-secondary/80 leading-relaxed font-light text-sm">
                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Article 1 – Identification de la société</h2>
                            <p>
                                La société <span className="text-white">EXCEED DIGITAL</span>, société par actions simplifiée (SAS), immatriculée au Registre du Commerce et des Sociétés de Salon-de-Provence sous le numéro 101 447 944, dont le siège social est situé à Miramas (Bouches-du-Rhône), immatriculée le 19/02/2026, numéro SIRET 101 447 944 00014, numéro de TVA intracommunautaire FR39 101447944, code APE 6201Z – Programmation informatique, exerce une activité de développement web et de services digitaux.
                            </p>
                            <p className="mt-4 italic">Ci-après dénommée « le Prestataire » ou « Exceed Digital ».</p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Article 2 – Objet</h2>
                            <p>
                                Les présentes Conditions Générales de Vente ont pour objet de définir les modalités et conditions dans lesquelles Exceed Digital fournit ses prestations de services à ses clients professionnels ou particuliers.
                                Toute commande implique l’adhésion pleine et entière du Client aux présentes CGV, à l’exclusion de tout autre document.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Article 3 – Prestations</h2>
                            <p className="mb-4">Exceed Digital propose notamment des prestations de :</p>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Développement de sites internet et applications</li>
                                <li>Création et refonte de sites web</li>
                                <li>Optimisation pour les moteurs de recherche (SEO)</li>
                                <li>Stratégie digitale et conseil</li>
                                <li>Maintenance technique</li>
                                <li>Hébergement</li>
                                <li>Création de contenus</li>
                            </ul>
                            <p className="mt-4">
                                Les caractéristiques précises de la prestation sont définies dans le devis accepté par le Client. Toute prestation non prévue fera l’objet d’un devis complémentaire.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Article 4 – Formation du contrat</h2>
                            <p>
                                Le contrat est formé à la date de signature du devis par le Client, accompagnée du versement de l’acompte convenu.
                                Le devis est valable 30 jours à compter de son émission.
                                Toute modification demandée après acceptation pourra entraîner une révision tarifaire et un ajustement des délais.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Article 5 – Prix et modalités de paiement</h2>
                            <p className="mb-4">Les prix sont exprimés en euros hors taxes. La TVA applicable est ajoutée selon le taux en vigueur.</p>
                            <ul className="list-disc ml-5 space-y-2 mb-4">
                                <li>Un acompte compris entre 30 % et 50 % est exigé à la signature.</li>
                                <li>Le solde est payable à la livraison, sauf échéancier prévu au devis.</li>
                            </ul>
                            <p>
                                En cas de retard de paiement, des pénalités calculées à trois fois le taux d’intérêt légal seront appliquées de plein droit, ainsi qu’une indemnité forfaitaire de 40 € pour frais de recouvrement.
                                Exceed Digital se réserve le droit de suspendre toute prestation en cas de non-paiement.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Article 6 – Délais d’exécution</h2>
                            <p>
                                Les délais sont indiqués à titre indicatif et courent à compter de la réception de l’acompte et de l’ensemble des éléments nécessaires à la réalisation de la prestation.
                                Tout retard imputable au Client entraîne un report proportionnel des délais.
                                Le dépassement des délais ne peut donner lieu à indemnisation, sauf engagement express contraire.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Article 7 – Obligations du Client</h2>
                            <p>
                                Le Client s’engage à fournir des contenus conformes à la législation en vigueur et à garantir qu’il dispose des droits nécessaires à leur utilisation.
                                Il s’engage également à désigner un interlocuteur unique, à respecter les délais de validation et à procéder aux paiements convenus.
                                Tout manquement pourra justifier la suspension ou la résiliation du contrat.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Article 8 – Obligation de moyens</h2>
                            <p>
                                Exceed Digital est tenue à une obligation de moyens.
                                Concernant les prestations de référencement naturel (SEO), aucun positionnement précis, trafic minimum ou résultat commercial ne peut être garanti, les moteurs de recherche étant indépendants et leurs algorithmes évolutifs.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Article 9 – Validation et réception</h2>
                            <p className="mb-4">Le Client dispose d’un délai de sept (7) jours ouvrés pour formuler ses observations à réception des livrables intermédiaires. À défaut de réponse dans ce délai, les éléments sont réputés validés.</p>
                            <p>
                                Après livraison finale, le Client dispose d’un délai de quinze (15) jours pour signaler toute anomalie. Les corrections liées à une non-conformité seront réalisées sans frais supplémentaires.
                                Les demandes d’évolution ou de modification non prévues au devis initial feront l’objet d’une facturation complémentaire.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Article 10 – Propriété intellectuelle</h2>
                            <p className="mb-4">Les droits d’utilisation des créations réalisées sont transférés au Client uniquement après paiement intégral des sommes dues.</p>
                            <p>
                                Le code source développé devient propriété du Client à l’issue du règlement complet.
                                Les composants tiers restent soumis à leurs propres licences.
                                Exceed Digital se réserve le droit de mentionner la réalisation dans ses références commerciales, sauf opposition écrite du Client.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Article 11 – Données personnelles (RGPD)</h2>
                            <p>
                                Chaque partie s’engage à respecter la réglementation applicable en matière de protection des données personnelles.
                                Le Client demeure responsable des données collectées via son site et de la conformité de ses mentions légales.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Article 12 – Responsabilité</h2>
                            <p>
                                La responsabilité d’Exceed Digital est limitée au montant total des sommes versées par le Client.
                                Le Prestataire ne saurait être tenu responsable des dommages indirects, pertes d’exploitation, pertes de données ou conséquences liées à des services tiers.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Article 13 – Résiliation</h2>
                            <p>
                                En cas de résiliation à l’initiative du Client, celui-ci devra régler les prestations réalisées ainsi qu’une indemnité forfaitaire correspondant à 30 % du montant restant dû.
                                En cas de manquement grave du Client, Exceed Digital pourra résilier le contrat de plein droit après mise en demeure restée sans effet.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-mono">Article 14 – Droit applicable et litiges</h2>
                            <p>
                                Les présentes CGV sont soumises au droit français.
                                En cas de litige, les parties rechercheront une solution amiable avant toute action judiciaire. À défaut d’accord, le litige sera porté devant les tribunaux compétents du ressort du siège social d’Exceed Digital.
                            </p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
