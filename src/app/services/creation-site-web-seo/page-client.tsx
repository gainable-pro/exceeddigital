"use client";

import { Navbar } from "@/components/layout/Navbar";
import { GsapReveal } from "@/components/ui/GsapReveal";
import { ContactSection } from "@/components/sections/ContactSection";
import { DiagnosticForm } from "@/components/shared/DiagnosticForm";
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
    Laptop,
    Check,
    Sparkles,
    BrainCircuit,
    Clock,
    TrendingUp
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypewriterText } from "@/components/ui/TypewriterText";

export default function WebSeoServicePageClient() {
    const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

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
                            <span className="white">
                                <TypewriterText text="CRÉATION SITE WEB" delay={0.4} />
                            </span><br />
                            <span className="text-gradient v3-glitch">
                                <TypewriterText text="& PERFORMANCE SEO" delay={1.2} />
                            </span>
                        </h1>
                        <p className="v3-hero-desc !max-w-3xl">
                            Un site web sans visibilité est comme une vitrine dans le désert. Nous concevons des plateformes haute performance qui captent l'attention et convertissent vos visiteurs en clients fidèles.
                        </p>
                    </GsapReveal>
                </div>
            </section>

            {/* --- CONCEPTION PROCESS (ZIG-ZAG) --- */}
            <section className="section-v3 overflow-hidden">
                <GsapReveal>
                    <h2 className="section-title-v3 mb-24 uppercase">
                        <TypewriterText text="NOTRE" delay={0.2} /><br />
                        <span className="text-gradient">
                            <TypewriterText text="PROCESSUS DE CONCEPTION" delay={0.6} />
                        </span>
                    </h2>
                </GsapReveal>

                <div className="v3-zigzag-container">
                    {[
                        {
                            step: "01",
                            title: "Écoute & Analyse de vos besoins",
                            desc: "Nous débutons par une immersion totale dans votre univers pour comprendre vos objectifs métiers et vos enjeux spécifiques.",
                            details: "Cette phase d'audit nous permet de définir le socle stratégique de votre projet et d'aligner nos solutions sur vos ambitions de croissance.",
                            img: "/assets/expertise/strategy.png",
                            icon: Users
                        },
                        {
                            step: "02",
                            title: "Étude de votre Marché et du SEO",
                            desc: "Une analyse chirurgicale de votre concurrence et des intentions de recherche de vos clients cibles.",
                            details: "Nous identifions les opportunités de positionnement inexploitées pour garantir que votre futur site soit visible là où vos clients vous cherchent réellement.",
                            img: "/assets/expertise/web.png",
                            icon: Search
                        },
                        {
                            step: "03",
                            title: "Stratégie de Mots-Clés et de Contenu",
                            desc: "Architecture sémantique et design orienté conversion. Nous créons la structure qui captivera l'algorithme et vos visiteurs.",
                            details: "Chaque page est pensée comme un entonnoir de conversion, combinant storytelling de marque et optimisation technique de pointe.",
                            img: "/assets/expertise/erp.png",
                            icon: Layers
                        },
                        {
                            step: "04",
                            title: "Lancement & Acquisition de Clients",
                            desc: "Mise en ligne et monitoring de performance. Nous propulsons votre plateforme vers ses premiers résultats concrets.",
                            details: "Le lancement n'est que le début. Nous suivons l'indexation et le comportement utilisateur pour affiner continuellement votre stratégie d'acquisition.",
                            img: "/assets/expertise/chatbot.png",
                            icon: TrendingUp
                        }
                    ].map((item, i) => (
                        <div key={i} className={`v3-zigzag-item ${i % 2 !== 0 ? 'reverse' : ''}`}>
                            <GsapReveal direction={i % 2 === 0 ? "left" : "right"} className="v3-zigzag-img-box">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="v3-step-badge">{item.step}</div>
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-transparent mix-blend-overlay" />
                            </GsapReveal>

                            <GsapReveal direction={i % 2 === 0 ? "right" : "left"} delay={0.2} className="v3-zigzag-content">
                                <h3 className="text-white">
                                    <TypewriterText text={item.title} delay={0.4 + i * 0.2} />
                                </h3>
                                <p className="text-xl text-white mb-6 leading-relaxed">
                                    {item.desc}
                                </p>
                                <p className="text-secondary leading-relaxed text-lg">
                                    {item.details}
                                </p>
                            </GsapReveal>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- POINTS CLÉS & MÉTHODE --- */}
            <section className="section-v3 bg-soft/5">
                <GsapReveal>
                    <div className="bg-glass-bg border border-glass-border rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12 uppercase">
                                Points clés & <span className="text-accent-primary">Méthode</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                                {/* Ce que nous apportons */}
                                <div>
                                    <h3 className="text-accent-primary font-bold text-xl mb-8 uppercase tracking-widest">
                                        Ce que nous apportons
                                    </h3>
                                    <ul className="space-y-6">
                                        {[
                                            "Sites 100% codés et ultra rapides",
                                            "Optimisés pour le référencement naturel",
                                            "Conçus stratégiquement pour convertir",
                                            "Accompagnement pro & vision résultats"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-4 text-white group">
                                                <div className="w-6 h-6 rounded-full bg-accent-primary/20 flex items-center justify-center border border-accent-primary/30 group-hover:scale-110 transition-transform">
                                                    <Check className="text-accent-primary" size={14} />
                                                </div>
                                                <span className="text-lg font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Notre processus */}
                                <div>
                                    <h3 className="text-white/50 font-bold text-xl mb-8 uppercase tracking-widest">
                                        Notre processus
                                    </h3>
                                    <ul className="space-y-6">
                                        {[
                                            "Analyse & stratégie d'acquisition",
                                            "Architecture, UX & Design sur mesure",
                                            "Développement codé & SEO natif",
                                            "Optimisation & Suivi continu"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-5 text-white">
                                                <div className="w-8 h-8 rounded-lg bg-accent-primary text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(0,112,243,0.4)]">
                                                    {i + 1}
                                                </div>
                                                <span className="text-lg font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* CTA Bar */}
                            <div className="mt-16 md:mt-24 bg-white/5 border border-white/10 rounded-2xl md:rounded-full p-2 md:pr-2 pl-8 flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-accent-primary/30 transition-all cursor-pointer" onClick={() => setIsDiagnosticOpen(true)}>
                                <div className="flex items-center gap-4 py-4 md:py-0">
                                    <div className="w-10 h-10 rounded-xl bg-accent-primary/20 flex items-center justify-center text-accent-primary">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Évaluez votre projet web en 2 minutes</h4>
                                        <p className="text-secondary text-sm">Questionnaire rapide — diagnostic personnalisé + recommandations.</p>
                                    </div>
                                </div>
                                <button className="w-full md:w-auto px-8 py-4 bg-accent-primary rounded-xl md:rounded-full text-white font-extrabold flex items-center justify-center gap-2 group-hover:scale-105 transition-all shadow-xl">
                                    Lancer le diagnostic gratuit <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </GsapReveal>
            </section>

            {/* --- NOTRE MÉTHODE (4 CARDS) --- */}
            <section className="section-v3 overflow-hidden">
                <GsapReveal>
                    <h2 className="section-title-v3">
                        <TypewriterText text="NOTRE" delay={0.2} /><br />
                        <span className="text-gradient">
                            <TypewriterText text="MÉTHODE" delay={0.6} />
                        </span>
                    </h2>
                    <div className="w-full h-1 bg-white/5 rounded-full mb-16 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-accent-primary shadow-[0_0_15px_rgba(0,112,243,1)]"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                step: "01",
                                title: "Validation du besoin",
                                desc: "Appel de 30 à 45 minutes pour clarifier vos objectifs et identifier votre cible. Audit rapide et identification des leviers prioritaires.",
                                footer: "Livrables : synthèse, recommandations et proposition budgétaire.",
                                icon: Sparkles
                            },
                            {
                                step: "02",
                                title: "Cadrage du projet",
                                desc: "Définition de votre identité visuelle, arborescence du site, wireframes et choix des technologies. Définition des KPIs (trafic, conversions).",
                                footer: "Objectif : mesurer l'efficacité dès le lancement.",
                                icon: BrainCircuit
                            },
                            {
                                step: "03",
                                title: "Production & itérations hebdo",
                                desc: "Développement responsive (mobile-first), animations fluides, rédaction de contenus SEO et optimisations techniques.",
                                footer: "Accès staging pour suivre l'avancement en temps réel.",
                                icon: Clock
                            },
                            {
                                step: "04",
                                title: "Lancement & accélération",
                                desc: "Mise en ligne avec checklist qualité complète. Configuration des outils Analytics, formation à la gestion du site et plan SEO continue.",
                                footer: "Support post-lancement pour une transition sereine.",
                                icon: TrendingUp
                            }
                        ].map((item, i) => (
                            <div key={i} className="v3-expertise-card group !p-8 !min-h-[400px] flex flex-col">
                                <span className="text-white/10 font-bold text-6xl absolute top-6 left-6 group-hover:text-accent-primary/20 transition-colors">{item.step}</span>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-primary mb-8 group-hover:scale-110 group-hover:border-accent-primary/50 transition-all">
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-6 !text-left">{item.title}</h3>
                                    <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">
                                        {item.desc}
                                    </p>
                                    <p className="text-accent-primary/80 text-xs font-mono border-t border-white/5 pt-6">
                                        {item.footer}
                                    </p>
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

            {/* --- DIAGNOSTIC MODAL --- */}
            <AnimatePresence>
                {isDiagnosticOpen && (
                    <DiagnosticForm isOpen={isDiagnosticOpen} onClose={() => setIsDiagnosticOpen(false)} />
                )}
            </AnimatePresence>
        </main>
    );
}
