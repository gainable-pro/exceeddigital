"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GsapReveal } from "@/components/ui/GsapReveal";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Database, Bot, Megaphone } from "lucide-react";

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

export function Navbar() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <nav className="v3-navbar">
            <GsapReveal delay={0.1} direction="down">
                <Link href="/" className="v3-logo">
                    EXCEED <span className="logo-accent">DIGITAL</span>
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
                                    <div className="bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-3 min-w-[280px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                                        {/* Premium Glow effect */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-50" />

                                        <div className="grid grid-cols-1 gap-1">
                                            {services.map((service, i) => (
                                                <Link
                                                    key={i}
                                                    href={service.href}
                                                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group/item"
                                                >
                                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-accent-primary/30 group-hover/item:bg-accent-primary/10 transition-all">
                                                        <service.icon size={20} className="text-secondary/60 group-hover/item:text-accent-primary" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[11px] font-bold text-white uppercase tracking-wider">{service.name}</span>
                                                        <span className="text-[9px] text-secondary/40 font-mono">DÉCOUVRIR L'EXPERTISE</span>
                                                    </div>
                                                </Link>
                                            ))}
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
                <Link
                    href="#contact"
                    className="v3-btn-init"
                >
                    Diagnostic Gratuit
                </Link>
            </GsapReveal>
        </nav>
    );
}
