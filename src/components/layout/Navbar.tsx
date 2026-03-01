"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GsapReveal } from "@/components/ui/GsapReveal";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Database, Bot, Megaphone } from "lucide-react";
import { TypewriterText } from "@/components/ui/TypewriterText";

const services = [
    {
        name: "Web & SEO Performance",
        href: "/services/creation-site-web-seo",
        icon: Globe
    },
    {
        name: "ERP & Plateforme",
        href: "/services/erp-plateformes",
        icon: Database
    },
    {
        name: "Stratégie & Image",
        href: "/services/strategie-image",
        icon: Megaphone
    },
    {
        name: "Automatisation & Chatbot IA",
        href: "/services/chatbot-automatisation",
        icon: Bot
    },
];

export function Navbar({ onAuditClick }: { onAuditClick: () => void }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <nav className="v3-navbar">
            <GsapReveal delay={0.1} direction="down">
                <Link href="/" className="v3-logo flex flex-col items-center group">
                    <div className="flex items-center text-[2.2rem] sm:text-[2.5rem] tracking-tight leading-none mb-1.5 uppercase font-black">
                        <span className="text-white">EXCEED</span>
                        <span className="font-light text-accent-primary pl-3 opacity-90">DIGITAL</span>
                    </div>

                    <div className="flex items-center gap-2 w-full max-w-[200px]">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-accent-primary/50 to-accent-primary/70" />
                        <TypewriterText
                            text="Exceed Your Limits."
                            delay={0.8}
                            speed={0.07}
                            className="text-[5px] sm:text-[5.5px] text-white/70 font-medium tracking-[0.1em] normal-case whitespace-nowrap"
                        />
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-accent-primary/50 to-accent-primary/70" />
                    </div>
                </Link>
            </GsapReveal>

            <div className="v3-nav-dock">
                <GsapReveal delay={0.2} direction="down">
                    <div
                        className="relative group mr-4"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Link
                            href="/#services"
                            className="v3-nav-link flex items-center gap-2"
                        >
                            Services
                            <motion.div
                                animate={{ rotate: isHovered ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown size={14} className="opacity-50" />
                            </motion.div>
                        </Link>

                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 z-50 pointer-events-auto"
                                >
                                    <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-4 min-w-[340px] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
                                        {/* Premium Glow effect */}
                                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

                                        <div className="flex flex-col gap-2">
                                            {services.map((service, i) => (
                                                <Link
                                                    key={i}
                                                    href={service.href}
                                                    className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all group/item"
                                                >
                                                    <div className="w-11 h-11 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/5 group-hover/item:border-accent-primary/20 group-hover/item:bg-accent-primary/10 transition-all shrink-0">
                                                        <service.icon size={22} className="text-secondary/40 group-hover/item:text-accent-primary transition-colors" />
                                                    </div>
                                                    <div className="flex flex-col gap-0.5">
                                                        <span className="text-[10px] font-bold text-white uppercase tracking-[0.15em] group-hover/item:text-accent-primary transition-colors whitespace-nowrap">
                                                            {service.name}
                                                        </span>
                                                        <span className="text-[8px] text-secondary/30 font-mono flex items-center gap-2">
                                                            L'EXPERTISE DIGITALE
                                                            <div className="w-1 h-1 bg-accent-primary opacity-0 group-hover/item:opacity-100 rounded-full transition-opacity" />
                                                        </span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="mt-2 pt-4 border-t border-white/5 px-4 pb-2">
                                            <div className="text-[8px] text-secondary/20 font-mono tracking-widest uppercase">
                                                Exceed Digital Solutions ®
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </GsapReveal>

                <GsapReveal delay={0.25} direction="down">
                    <Link href="/#portfolio" className="v3-nav-link">Portfolio</Link>
                </GsapReveal>

                <GsapReveal delay={0.3} direction="down">
                    <Link href="/#method" className="v3-nav-link">Méthode</Link>
                </GsapReveal>
            </div>

            <GsapReveal delay={0.4} direction="down">
                <button
                    onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                        } else {
                            window.location.href = '/#contact';
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
