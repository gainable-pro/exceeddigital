import { Navbar } from "@/components/layout/Navbar";
import { GsapReveal } from "@/components/ui/GsapReveal";
import { ContactSection } from "@/components/sections/ContactSection";
import {
    MessageSquare,
    Bot,
    Zap,
    ShieldCheck,
    Users,
    BrainCircuit,
    ArrowRight,
    CheckCircle2,
    MessageCircleCode,
    Clock,
    Sparkles
} from "lucide-react";
import Image from "next/image";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Création de Chatbots & Intelligence Artificielle | Exceed Digital",
    description: "Automatisez vos interactions clients et vos processus internes grâce à des chatbots intelligents et l'intégration de technologies IA sur mesure.",
};

export default function ChatbotServicePage() {
    return (
        <main className="w-full">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="v3-hero relative !min-height-[70vh] pt-32">
                <div className="v3-hero-content">
                    <GsapReveal delay={0.1}>
                        <div className="v3-hero-badge">
                            <span className="dot" />
                            Intelligence Artificielle & Automatisation
                        </div>
                        <h1 className="v3-hero-title">
                            <span className="white">
                                <TypewriterText text="CHATBOT &" delay={0.4} />
                            </span><br />
                            <span className="text-gradient v3-glitch">
                                <TypewriterText text="AUTOMATISATION IA" delay={1.2} />
                            </span>
                        </h1>
                        <p className="v3-hero-desc !max-w-3xl">
                            Ne laissez plus aucune opportunité s'échapper. Nous intégrons l'intelligence artificielle pour automatiser votre relation client et vos processus internes, libérant ainsi votre temps pour l'humain.
                        </p>
                    </GsapReveal>
                </div>
            </section>

            {/* --- CONCEPTION PROCESS (ZIG-ZAG) --- */}
            <section className="section-v3 overflow-hidden">
                <GsapReveal>
                    <h2 className="section-title-v3 mb-24">VOTRE <br /><span className="text-gradient">LEVVIER D'AUTOMATISATION</span></h2>
                </GsapReveal>

                <div className="v3-zigzag-container">
                    {[
                        {
                            step: "01",
                            title: "Qualification automatique des prospects",
                            desc: "Filtrez vos demandes entrantes en temps réel grâce à une IA qui comprend les besoins de vos visiteurs.",
                            details: "Notre solution identifie instantanément les prospects les plus chauds et collecte les informations essentielles, permettant à vos équipes commerciales de se concentrer sur les ventes à haut potentiel.",
                            img: "/assets/expertise/chatbot.png",
                            icon: Users
                        },
                        {
                            step: "02",
                            title: "Disponibilité totale 24h/24 et 7j/7",
                            desc: "Répondez aux questions de vos clients instantanément, même quand vous dormez.",
                            details: "Un chatbot intelligent garantit un service client irréprochable et immédiat, augmentant durablement la satisfaction utilisateur et le taux de conversion de votre plateforme digitale.",
                            img: "/assets/expertise/web.png",
                            icon: Clock
                        },
                        {
                            step: "03",
                            title: "Automatisation de vos Workflows IA",
                            desc: "Connectez vos outils préférés à une intelligence centrale pour fluidifier vos opérations.",
                            details: "De la synchronisation de votre CRM à l'automatisation de vos emails, nous créons des ponts intelligents qui font gagner des heures de travail chaque semaine à vos collaborateurs.",
                            img: "/assets/expertise/erp.png",
                            icon: Zap
                        },
                        {
                            step: "04",
                            title: "Expérience Client Personnalisée",
                            desc: "Offrez à chaque visiteur une interaction fluide, humaine et parfaitement adaptée à son contexte.",
                            details: "Loin des robots rigides, nos IA apprennent de votre métier pour conseiller vos clients avec une pertinence chirurgicale, renforçant votre image d'entreprise innovante et à l'écoute.",
                            img: "/assets/expertise/strategy.png",
                            icon: BrainCircuit
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

            {/* --- CORE FEATURES --- */}
            <section className="section-v3 bg-soft/10">
                <div className="v3-contact-grid !items-center">
                    <GsapReveal direction="left">
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-glass-border">
                            <Image
                                src="/assets/expertise/chatbot.png"
                                alt="IA & Conversational"
                                fill
                                className="object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep to-transparent" />
                        </div>
                    </GsapReveal>

                    <GsapReveal direction="right" delay={0.2}>
                        <h2 className="section-title-v3 !text-3xl !mb-8">CAPACITÉS <br /><span className="text-gradient">IA AVANCÉES</span></h2>
                        <ul className="space-y-6">
                            {[
                                "Chatbots sur-mesure (WhatsApp, Web, Messenger)",
                                "Qualification de leads et prise de rendez-vous",
                                "Traduction automatique et support multi-langues",
                                "IA génératrice de contenu marketing",
                                "Analyse automatique des sentiments clients",
                                "Automatisation de tâches via Zapier / Make"
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
