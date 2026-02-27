"use client";
import { Navbar } from "@/components/layout/Navbar";
import { GsapReveal } from "@/components/ui/GsapReveal";
import dynamic from "next/dynamic";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";

const HeroWebGL = dynamic(() => import("@/components/ui/HeroWebGL"), { ssr: false });
import { MethodSection } from "@/components/sections/MethodSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { OffresSection } from "@/components/sections/OffresSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
    return (
        <main className="w-full">
            <Navbar />

            {/* Hero Section V4 - Quantum Immersive */}
            <div className="v3-hero">
                <HeroWebGL />
                <div className="v3-hero-grid" />

                <section className="v3-hero-content">
                    <GsapReveal delay={0.2} direction="up">
                        <div className="v3-hero-badge">
                            <span className="dot" />
                            Digital Excellence Agency
                        </div>

                        <h1 className="v3-hero-title">
                            <span className="white">IMPACTFUL</span>
                            <span className="text-gradient v3-glitch">DIGITAL</span>
                        </h1>

                        <p className="v3-hero-desc">
                            Sites qui convertissent et plateformes métier qui structurent. De la visibilité à l'automatisation, nous concevons les outils qui font réellement avancer votre entreprise.
                        </p>

                        <div className="v3-hero-btns">
                            <button className="v3-btn-audit">
                                <span className="label">Diagnostic Gratuit</span>
                                <div className="overlay" />
                            </button>
                            <button
                                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                                className="v3-btn-explorer">
                                Explorer le Lab
                            </button>
                        </div>
                    </GsapReveal>
                </section>

                <div className="v3-scroll-indicator">
                    <span className="text">Discover</span>
                    <div className="line" />
                </div>
            </div>

            <ExpertiseSection />
            <MethodSection />
            <PortfolioSection />
            <OffresSection />
            <ContactSection />
        </main>
    );
}
