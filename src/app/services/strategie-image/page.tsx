"use client";

import { Navbar } from "@/components/layout/Navbar";
import { GsapReveal } from "@/components/ui/GsapReveal";
import { ContactSection } from "@/components/sections/ContactSection";
import {
    Megaphone,
    Palette,
    TrendingUp,
    ShieldCheck,
    Users,
    Sparkles,
    ArrowRight,
    CheckCircle2,
    Eye,
    MessageSquareText,
    Share2
} from "lucide-react";
import Image from "next/image";

export default function StrategieServicePage() {
    return (
        <main className="w-full">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="v3-hero relative !min-height-[70vh] pt-32">
                <div className="v3-hero-content">
                    <GsapReveal delay={0.1}>
                        <div className="v3-hero-badge">
                            <span className="dot" />
                            Notoriété & Image de Marque
                        </div>
                        <h1 className="v3-hero-title">
                            <span className="white">STRATÉGIE DIGITALE</span><br />
                            <span className="text-gradient v3-glitch">& IMAGE DE MARQUE</span>
                        </h1>
                        <p className="v3-hero-desc !max-w-3xl">
                            Ne soyez pas juste une option, devenez une évidence. Nous sculptons votre identité digitale pour captiver votre audience et ancrer votre marque dans l'esprit de vos futurs clients.
                        </p>
                    </GsapReveal>
                </div>
            </section>

            {/* --- CONCEPTION PROCESS (ZIG-ZAG) --- */}
            <section className="section-v3 overflow-hidden">
                <GsapReveal>
                    <h2 className="section-title-v3 mb-24">VOTRE <br /><span className="text-gradient">PARCOURS D'INFLUENCE</span></h2>
                </GsapReveal>

                <div className="v3-zigzag-container">
                    {[
                        {
                            step: "01",
                            title: "Identité & Vision stratégique",
                            desc: "Nous définissons ensemble l'ADN de votre marque pour créer un message fort et cohérent.",
                            details: "Il ne s'agit pas seulement d'un logo, mais de l'âme de votre entreprise. Nous identifions vos valeurs et votre mission pour les transformer en un récit captivant.",
                            img: "/assets/expertise/strategy.png",
                            icon: Sparkles
                        },
                        {
                            step: "02",
                            title: "Design de Marque & Impact visuel",
                            desc: "Marquez les esprits grâce à une charte graphique moderne et différenciante.",
                            details: "Nos designers créent des univers visuels premium qui inspirent confiance et professionnalisme, garantissant une mémorisation immédiate de votre marque par vos clients.",
                            img: "/assets/expertise/web.png",
                            icon: Palette
                        },
                        {
                            step: "03",
                            title: "Stratégie de Contenu & Récit",
                            desc: "Racontez votre histoire d'une manière qui résonne auprès de votre audience cible.",
                            details: "Nous structurons vos prises de parole pour qu'elles apportent une réelle valeur ajoutée, transformant votre expertise en un levier d'engagement et de fidélisation unique.",
                            img: "/assets/expertise/chatbot.png",
                            icon: MessageSquareText
                        },
                        {
                            step: "04",
                            title: "Notoriété & Rayonnement digital",
                            desc: "Donnez à votre marque l'écho qu'elle mérite sur tous vos canaux de communication.",
                            details: "Nous déployons votre stratégie de marque pour dominer votre secteur, en veillant à ce que chaque point de contact client renforce votre autorité et votre image de référence.",
                            img: "/assets/expertise/erp.png",
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
                                <div className="v3-icon-animate text-accent-primary mb-6">
                                    <item.icon size={50} />
                                </div>
                                <h3 className="text-white">{item.title}</h3>
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

            {/* --- KEY ADVANTAGES --- */}
            <section className="section-v3 bg-soft/10">
                <div className="v3-contact-grid !items-center">
                    <GsapReveal direction="left">
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-glass-border">
                            <Image
                                src="/assets/expertise/strategy.png"
                                alt="Branding & Strategy"
                                fill
                                className="object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep to-transparent" />
                        </div>
                    </GsapReveal>

                    <GsapReveal direction="right" delay={0.2}>
                        <h2 className="section-title-v3 !text-3xl !mb-8">NOTRE <br /><span className="text-gradient">VALEUR AJOUTÉE</span></h2>
                        <ul className="space-y-6">
                            {[
                                "Analyse psychologique des cibles et personas",
                                "Direction artistique premium et sur-mesure",
                                "Stratégie social media et community management",
                                "Rédaction de contenus à haute valeur perçue",
                                "Audit de marque et repositionnement stratégique",
                                "Veille créative et technologique constante"
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

            {/* --- CONTACT FORM --- */}
            <ContactSection />
        </main>
    );
}
