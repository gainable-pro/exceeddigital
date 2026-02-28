"use client";

import { Navbar } from "@/components/layout/Navbar";
import { GsapReveal } from "@/components/ui/GsapReveal";
import { ContactSection } from "@/components/sections/ContactSection";
import {
    Globe,
    Search,
    BarChart3,
    Zap,
    ShieldCheck,
    Users,
    MapPin,
    ArrowRight,
    CheckCircle2,
    Layers,
    MousePointer2,
    Laptop
} from "lucide-react";
import Image from "next/image";

export default function WebSeoServicePage() {
    return (
        <main className="w-full">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="v3-hero relative !min-height-[70vh] pt-32">
                <div className="v3-hero-content">
                    <GsapReveal delay={0.1}>
                        <div className="v3-hero-badge">
                            <span className="dot" />
                            Performance & Visibilité Maximale
                        </div>
                        <h1 className="v3-hero-title">
                            <span className="white">CRÉATION SITE WEB</span><br />
                            <span className="text-gradient v3-glitch">& PERFORMANCE SEO</span>
                        </h1>
                        <p className="v3-hero-desc !max-w-3xl">
                            Un site web sans visibilité est comme une vitrine dans le désert. Nous concevons des plateformes haute performance qui captent l'attention et convertissent vos visiteurs en clients fidèles.
                        </p>
                    </GsapReveal>
                </div>
            </section>

            {/* --- CONCEPTION PROCESS --- */}
            <section className="section-v3 bg-soft/10">
                <GsapReveal>
                    <h2 className="section-title-v3">NOTRE <br /><span className="text-gradient">PROCESSUS DE CONCEPTION</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                step: "01",
                                title: "Audit & Besoins",
                                desc: "Immersion totale pour comprendre votre vision et vos enjeux commerciaux.",
                                details: ["Audit technique SEO", "Analyse de l'existant", "Cadrage des objectifs ROI"],
                                icon: Users
                            },
                            {
                                step: "02",
                                title: "Étude Concurrentielle",
                                desc: "Identification des failles et des opportunités chez vos rivaux directs.",
                                details: ["Benchmark concurrentiel", "Analyse des opportunités", "Reverse engineering"],
                                icon: Search
                            },
                            {
                                step: "03",
                                title: "Mots-Clés Stratégiques",
                                desc: "Mapping sémantique précis pour capter l'intention réelle de vos clients.",
                                details: ["Keyword research", "Analyse des intentions", "Mapping de contenu"],
                                icon: BarChart3
                            },
                            {
                                step: "04",
                                title: "Méthode d'Acquisition",
                                desc: "Architecture pensée pour transformer chaque clic en opportunité.",
                                details: ["Architecture de conversion", "Optimisation UX/CRO", "Tracking & Analytics"],
                                icon: MousePointer2
                            }
                        ].map((item, i) => (
                            <div key={i} className="v3-expertise-card group !p-6 border border-glass-border/50 hover:border-accent-primary/40 transition-all bg-bg-deep/40 backdrop-blur-sm relative overflow-hidden h-full">
                                <div className="absolute top-2 right-4 text-7xl font-bold opacity-5 pointer-events-none font-mono">
                                    {item.step}
                                </div>
                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-primary group-hover:text-white transition-all">
                                        <item.icon size={24} className="text-accent-primary group-hover:text-white" />
                                    </div>
                                    <h3 className="!text-lg !mb-3 group-hover:text-accent-primary transition-colors">{item.title}</h3>
                                    <p className="text-secondary text-xs leading-relaxed mb-6">{item.desc}</p>

                                    <div className="mt-auto pt-4 border-t border-glass-border/30">
                                        <ul className="space-y-2">
                                            {item.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-[10px] text-secondary/80">
                                                    <div className="w-1 h-1 bg-accent-primary rounded-full" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </GsapReveal>
            </section>

            {/* --- ADVANCED FEATURES --- */}
            <section className="section-v3">
                <div className="v3-contact-grid !items-center">
                    <GsapReveal direction="left">
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-glass-border">
                            <Image
                                src="/assets/expertise/web.png"
                                alt="Advanced Web Development"
                                fill
                                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep to-transparent" />
                        </div>
                    </GsapReveal>

                    <GsapReveal direction="right" delay={0.2}>
                        <h2 className="section-title-v3 !text-3xl !mb-8">FONCTIONNALITÉS <br /><span className="text-gradient">HAUTE PERFORMANCE</span></h2>
                        <ul className="space-y-6">
                            {[
                                "Système de réservation en ligne synchronisé",
                                "Paiement en ligne ultra-sécurisé (Stripe/PayPal)",
                                "Création d'espaces pro et portails clients",
                                "Migration sécurisée de votre ancien site",
                                "Refonte de logo et identité visuelle moderne",
                                "Stratégie de backlinks et maillage interne puissant"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-4 text-secondary group">
                                    <CheckCircle2 className="text-accent-primary group-hover:scale-110 transition-all" size={20} />
                                    <span className="group-hover:text-white transition-colors">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </GsapReveal>
                </div>
            </section>

            {/* --- SEO DEEP DIVE --- */}
            <section className="section-v3 bg-soft/10">
                <GsapReveal>
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <h2 className="section-title-v3 !text-4xl">DÉCRYPTER <br /><span className="text-gradient">L'ALGORITHME GOOGLE</span></h2>
                        <p className="text-secondary text-lg">
                            Personne ne possède la formule exacte de l'algorithme Google, mais les règles de base du référencement naturel (SEO) sont la clé pour dominer les résultats de recherche.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Optimisation Technique",
                                desc: "Vitesse de chargement (Core Web Vitals), structure Hn, balisage Schema.org et responsivité absolue.",
                                icon: Zap
                            },
                            {
                                title: "Contenu Sémantique",
                                desc: "Rédaction optimisée pour l'IA et l'utilisateur, répondant précisément à l'intention de recherche.",
                                icon: Layers
                            },
                            {
                                title: "Autorité & Trust",
                                desc: "Développement de la notoriété de votre domaine via des liens de qualité et un profil de confiance.",
                                icon: ShieldCheck
                            }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-20 h-20 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-accent-primary/20">
                                    <item.icon className="text-accent-primary" size={32} />
                                </div>
                                <h3 className="!text-2xl mb-4">{item.title}</h3>
                                <p className="text-secondary leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </GsapReveal>
            </section>

            {/* --- LOCAL SYMBYOSIS --- */}
            <section className="section-v3">
                <div className="v3-contact-grid !items-center">
                    <GsapReveal direction="left" className="order-2 md:order-1">
                        <h2 className="section-title-v3 !text-3xl !mb-8">SYNERGIE <br /><span className="text-gradient">GOOGLE LOCAL BUSINESS</span></h2>
                        <p className="text-secondary mb-8 text-lg">
                            Nous vous accompagnons dans l'optimisation de votre page **Google Local Business**. Le maillage entre votre site, votre SEO et votre présence locale permet de travailler en symbiose pour booster votre visibilité de proximité.
                        </p>
                        <div className="flex items-center gap-4 p-6 rounded-2xl bg-accent-primary/5 border border-accent-primary/20">
                            <MapPin className="text-accent-primary" size={40} />
                            <p className="text-sm font-semibold italic">Boostez votre trafic en magasin et vos appels directs grâce à un référencement local maîtrisé.</p>
                        </div>
                    </GsapReveal>

                    <GsapReveal direction="right" delay={0.2} className="order-1 md:order-2">
                        <div className="relative aspect-square rounded-full overflow-hidden border border-glass-border">
                            <Image
                                src="/assets/expertise/strategy.png"
                                alt="Local SEO Strategy"
                                fill
                                className="object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-radial-gradient from-transparent to-bg-deep" />
                        </div>
                    </GsapReveal>
                </div>
            </section>

            {/* --- WHY EXCEED DIGITAL --- */}
            <section className="section-v3 bg-accent-primary/5 border-y border-glass-border">
                <GsapReveal>
                    <div className="text-center mb-16">
                        <h2 className="section-title-v3 !text-3xl">POURQUOI CHOISIR <br /><span className="text-gradient">EXCEED DIGITAL ?</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Expertise IA intégrée pour des contenus optimisés",
                            "Approche centrée sur la conversion (ROI)",
                            "Design premium et unique (pas de templates)",
                            "Vitesse de chargement ultra-rapide",
                            "Accompagnement et reporting transparent",
                            "Support technique réactif et pérenne"
                        ].map((advantage, i) => (
                            <div key={i} className="flex items-center gap-4 p-6 rounded-xl bg-bg-deep border border-glass-border hover:border-accent-primary/50 transition-all">
                                <div className="min-w-[12px] h-3 bg-accent-primary rounded-full shadow-[0_0_10px_rgba(0,112,243,0.5)]" />
                                <span className="font-semibold text-sm">{advantage}</span>
                            </div>
                        ))}
                    </div>
                </GsapReveal>
            </section>

            {/* --- CONTACT FORM --- */}
            <ContactSection />
        </main>
    );
}
