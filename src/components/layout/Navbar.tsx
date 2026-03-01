"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GsapReveal } from "@/components/ui/GsapReveal";
import { TypewriterText } from "@/components/ui/TypewriterText";

export function Navbar({ onAuditClick, isCompact = false }: { onAuditClick?: () => void; isCompact?: boolean }) {
    return (
        <nav className={`v3-navbar ${isCompact ? 'py-4 md:py-6' : ''}`} style={isCompact ? { padding: '1rem 1.5rem' } : {}}>
            <GsapReveal delay={0.1} direction="down">
                <Link href="/" className="v3-logo flex flex-col items-center group" style={{ textDecoration: 'none' }}>
                    <div
                        className="flex items-center tracking-tighter leading-none mb-0 uppercase"
                        style={{
                            fontSize: isCompact ? 'min(1.4rem, 5vw)' : 'min(3.4rem, 10vw)',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <span className="text-white" style={{ fontWeight: 500 }}>EXCEED</span>
                        <span className="font-light text-accent-primary opacity-90" style={{ fontWeight: 300, color: '#0070f3', marginLeft: '0.4rem' }}>DIGITAL</span>
                    </div>

                    {!isCompact && (
                        <div className="flex items-center gap-4 w-full max-w-[400px]" style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '1rem' }}>
                            <div className="h-[1px] flex-1 bg-accent-primary/50" style={{ height: '1px', flex: 1, backgroundColor: 'rgba(0, 112, 243, 0.5)' }} />
                            <TypewriterText
                                text="Exceed Your Limits."
                                delay={0.8}
                                speed={0.07}
                                className="font-medium tracking-wide normal-case whitespace-nowrap text-center"
                                style={{
                                    fontSize: 'min(19px, 3.5vw)',
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    display: 'inline-block',
                                    textTransform: 'none'
                                }}
                            />
                            <div className="h-[1px] flex-1 bg-accent-primary/50" style={{ height: '1px', flex: 1, backgroundColor: 'rgba(0, 112, 243, 0.5)' }} />
                        </div>
                    )}
                </Link>
            </GsapReveal>

            <div className="v3-nav-dock">
                <GsapReveal delay={0.2} direction="down">
                    <Link href="/services/creation-site-web-seo" className="v3-nav-link">Web & SEO</Link>
                </GsapReveal>

                <GsapReveal delay={0.25} direction="down">
                    <Link href="/services/erp-plateformes" className="v3-nav-link">ERP & Plateformes</Link>
                </GsapReveal>

                <GsapReveal delay={0.3} direction="down">
                    <Link href="/services/strategie-image" className="v3-nav-link">Stratégie & Image</Link>
                </GsapReveal>

                <GsapReveal delay={0.35} direction="down">
                    <Link href="/services/chatbot-automatisation" className="v3-nav-link">IA & Chatbot</Link>
                </GsapReveal>
            </div>

            <GsapReveal delay={0.4} direction="down">
                <button
                    onClick={() => {
                        if (onAuditClick) {
                            onAuditClick();
                        } else {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            } else {
                                window.location.href = '/#contact';
                            }
                        }
                    }}
                    className="v3-btn-init"
                >
                    Contactez-nous
                </button>
            </GsapReveal>
        </nav>
    );
}
