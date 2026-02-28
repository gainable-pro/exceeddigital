"use client";

import { Navbar } from "@/components/layout/Navbar";
import { GsapReveal } from "@/components/ui/GsapReveal";
import { ContactSection } from "@/components/sections/ContactSection";
import {
    Database,
    Layers,
    Zap,
    ShieldCheck,
    BarChart3,
    Cpu,
    ArrowRight,
    CheckCircle2,
    Settings2,
    Activity,
    Workflow
} from "lucide-react";
import Image from "next/image";

export default function ErpServicePage() {
    return (
        <main className="w-full">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="v3-hero relative !min-height-[70vh] pt-32">
                <div className="v3-hero-content">
                    <GsapReveal delay={0.1}>
                        <div className="v3-hero-badge">
                            <span className="dot" />
                            Optimisation & Maîtrise Opérationnelle
                        </div>
                        <h1 className="v3-hero-title">
                            <span className="white">ERP & PLATEFORMES</span><br />
                            <span className="text-gradient v3-glitch">SUR MESURE</span>
                        </h1>
                        <p className="v3-hero-desc !max-w-3xl">
                            Reprenez le contrôle total de votre activité. Nous concevons des outils intelligents qui simplifient vos processus complexes pour vous permettre de vous concentrer sur l'essentiel : votre croissance.
                        </p>
                    </GsapReveal>
                </div>
            </section>

            {/* --- CONCEPTION PROCESS (ZIG-ZAG) --- */}
            <section className="section-v3 overflow-hidden">
                <GsapReveal>
                    <h2 className="section-title-v3 mb-24">NOTRE <br /><span className="text-gradient">APPROCHE MÉTIER</span></h2>
                </GsapReveal>

                <div className="space-y-32">
                    {[
                        {
                            step: "01",
                            title: "Audit de vos flux opérationnels",
                            desc: "Nous analysons en détail la manière dont l'information circule au sein de votre entreprise pour identifier les points de friction.",
                            details: "L'objectif est de comprendre chaque étape de votre métier pour concevoir une architecture qui s'adapte parfaitement à votre réalité quotidienne, et non l'inverse.",
                            img: "/assets/expertise/erp.png",
                            icon: Activity
                        },
                        {
                            step: "02",
                            title: "Centralisation & Unification des données",
                            desc: "Fini les fichiers éparpillés. Nous regroupons toutes vos ressources stratégiques dans un environnement unique et sécurisé.",
                            details: "Grâce à une structure de données optimisée, vous bénéficiez d'une vision à 360° de votre activité, facilitant la collaboration entre vos équipes et la fiabilité de vos informations.",
                            img: "/assets/expertise/strategy.png",
                            icon: Database
                        },
                        {
                            step: "03",
                            title: "Automatisation de vos tâches répétitives",
                            desc: "Libérez vos talents des missions à faible valeur ajoutée grâce à des automatisations intelligentes et fiables.",
                            details: "En automatisant vos workflows métiers, nous réduisons les erreurs humaines et augmentons drastiquement la productivité globale de votre organisation.",
                            img: "/assets/expertise/web.png",
                            icon: Workflow
                        },
                        {
                            step: "04",
                            title: "Pilotage & Décision en temps réel",
                            desc: "Transformez vos données en véritables leviers de décision grâce à des tableaux de bord intuitifs et dynamiques.",
                            details: "Suivez vos indicateurs de performance en temps réel pour anticiper les tendances et prendre des décisions stratégiques basées sur des faits concrets.",
                            img: "/assets/expertise/chatbot.png",
                            icon: BarChart3
                        }
                    ].map((item, i) => (
                        <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
                            <GsapReveal direction={i % 2 === 0 ? "left" : "right"} className="w-full md:w-1/2">
                                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-glass-border group">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-transparent mix-blend-overlay" />
                                    <div className="absolute top-8 left-8">
                                        <div className="w-12 h-12 bg-accent-primary/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-accent-primary/30">
                                            <span className="font-mono text-accent-primary font-bold">{item.step}</span>
                                        </div>
                                    </div>
                                </div>
                            </GsapReveal>

                            <GsapReveal direction={i % 2 === 0 ? "right" : "left"} delay={0.2} className="w-full md:w-1/2 text-left">
                                <item.icon className="text-accent-primary mb-6" size={40} />
                                <h3 className="!text-3xl !mb-6 text-white">{item.title}</h3>
                                <p className="text-xl font-medium text-white/90 mb-6 leading-relaxed">
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

            {/* --- ADVANCED FEATURES --- */}
            <section className="section-v3 bg-soft/10">
                <div className="v3-contact-grid !items-center">
                    <GsapReveal direction="left">
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-glass-border">
                            <Image
                                src="/assets/expertise/erp.png"
                                alt="Advanced Cloud Platform"
                                fill
                                className="object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep to-transparent" />
                        </div>
                    </GsapReveal>

                    <GsapReveal direction="right" delay={0.2}>
                        <h2 className="section-title-v3 !text-3xl !mb-8">OUTILS & <br /><span className="text-gradient">CAPACITÉS TECHNIQUES</span></h2>
                        <ul className="space-y-6">
                            {[
                                "Gestion de stock et inventaire en temps réel",
                                "Portails clients et fournisseurs collaboratifs",
                                "Systèmes de facturation et devis automatisés",
                                "Intégration API avec vos logiciels existants",
                                "Sécurité des données et sauvegardes cloud",
                                "Accessibilité multi-supports (Web, Tablette, Mobile)"
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

            {/* --- WHY EXCEED DIGITAL --- */}
            <section className="section-v3 bg-accent-primary/5 border-y border-glass-border">
                <GsapReveal>
                    <div className="text-center mb-16">
                        <h2 className="section-title-v3 !text-3xl">L'EXPERTISE <br /><span className="text-gradient">EXTEND DIGITAL</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Architecture évolutive (Scale-up ready)",
                            "Interface utilisateur intuitive (UX métier)",
                            "Zéro compromis sur la confidentialité",
                            "Déploiement rapide et itératif",
                            "Accompagnement au changement pour vos équipes",
                            "Maintenance proactive et support dédié"
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
