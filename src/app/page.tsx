"use client";
import { Navbar } from "@/components/layout/Navbar";
import { GsapReveal } from "@/components/ui/GsapReveal";
import React, { useState } from "react";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { DiagnosticForm } from "@/components/shared/DiagnosticForm";

import { ContactSection } from "@/components/sections/ContactSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TypewriterText } from "@/components/ui/TypewriterText";

export default function Home() {
    const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

    return (
        <main className="w-full">
            <Navbar onAuditClick={() => setIsDiagnosticOpen(true)} />

            {/* Hero Section V4 - Quantum Immersive */}
            <div className="v3-hero">
                <div className="v3-hero-grid" />

                <section className="v3-hero-content">
                    <GsapReveal delay={0.2} direction="up">
                        <h1 className="v3-hero-title">
                            <span className="white">
                                <TypewriterText text="TRANSFORMEZ VOTRE PRÉSENCE DIGITALE" delay={0.4} />
                            </span>
                            <span className="text-gradient v3-glitch">
                                <TypewriterText text="EN LEVIER DE CROISSANCE" delay={1.2} />
                            </span>
                        </h1>

                        <p className="v3-hero-desc">
                            Sites qui convertissent et plateformes métier qui structurent. De la visibilité à l'automatisation, nous concevons les outils qui font réellement avancer votre entreprise.
                        </p>

                        <div className="v3-hero-btns">
                            <button
                                onClick={() => setIsDiagnosticOpen(true)}
                                className="v3-btn-audit"
                            >
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
            <ContactSection />

            <DiagnosticForm
                isOpen={isDiagnosticOpen}
                onClose={() => setIsDiagnosticOpen(false)}
            />
        </main>
    );
}
