"use client";

import React, { useState } from "react";
import { GsapReveal } from "@/components/ui/GsapReveal";
import {
    Mail,
    Phone,
    Send,
    User,
    Building2,
    ChevronDown,
    MessageSquare,
    Sparkles
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormData {
    name: string;
    email: string;
    company: string;
    projectType: string;
    message: string;
}

const initialContactData: ContactFormData = {
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
};

export function ContactSection() {
    const [formData, setFormData] = useState<ContactFormData>(initialContactData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const projectTypes = [
        "Site Web & SEO",
        "ERP & Solution Métier",
        "Chatbot & IA",
        "Stratégie & Branding",
        "Autre"
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise(r => setTimeout(r, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset form after success
        setTimeout(() => {
            setIsSuccess(false);
            setFormData(initialContactData);
        }, 5000);
    };

    return (
        <section id="contact" className="section-v3 bg-transparent">
            <div className="v3-contact-grid max-w-6xl mx-auto px-4">
                <GsapReveal delay={0.1}>
                    <div className="contact-info pr-0 md:pr-12">
                        <h2 className="section-title-v3">
                            PARLONS <br />
                            <span className="text-gradient">PROJET</span>
                        </h2>
                        <p className="font-sora text-secondary mb-12 text-lg">
                            Transformez vos défis en opportunités numériques. Notre équipe d'experts est prête à propulser votre croissance.
                        </p>

                        <div className="space-y-10">
                            <div className="info-item group flex items-start">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/10 group-hover:border-accent-primary group-hover:bg-accent-primary/5 transition-all shrink-0">
                                    <Mail className="text-secondary/40 group-hover:text-accent-primary transition-colors" size={24} />
                                </div>
                                <div className="flex flex-col ml-6">
                                    <span className="text-[10px] text-accent-primary uppercase font-bold tracking-[0.3em] mb-2 opacity-50">EMAIL</span>
                                    <a href="mailto:contact@exceeddigital.fr" className="font-sora text-white text-xl hover:text-accent-primary transition-all tracking-tight">
                                        contact@exceeddigital.fr
                                    </a>
                                </div>
                            </div>

                            <div className="info-item group flex items-start">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/10 group-hover:border-accent-primary group-hover:bg-accent-primary/5 transition-all shrink-0">
                                    <Phone className="text-secondary/40 group-hover:text-accent-primary transition-colors" size={24} />
                                </div>
                                <div className="flex flex-col ml-6">
                                    <span className="text-[10px] text-accent-primary uppercase font-bold tracking-[0.3em] mb-2 opacity-50">TÉLÉPHONE</span>
                                    <a href="tel:+33615622188" className="font-sora text-white text-xl hover:text-accent-primary transition-all tracking-tight">
                                        +33 6 15 62 21 88
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-br from-accent-primary/10 to-transparent border border-white/5 hidden md:block">
                            <Sparkles className="text-accent-primary mb-4" size={24} />
                            <p className="text-sm text-secondary/80 italic font-light leading-relaxed">
                                "La meilleure façon de prédire l'avenir est de le créer. Commençons dès aujourd'hui."
                            </p>
                        </div>
                    </div>
                </GsapReveal>

                <GsapReveal delay={0.2}>
                    <div className="v3-contact-form-container bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                        {/* Strong blue background glows - no violet */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-primary/30 blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-primary/20 blur-[120px] pointer-events-none" />

                        <AnimatePresence mode="wait">
                            {!isSuccess ? (
                                <motion.form
                                    key="contact-form"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6 relative z-10"
                                >
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                            Envoyez-nous un message
                                        </h3>
                                        <div className="h-1 w-12 bg-accent-primary rounded-full mb-4" />
                                        <p className="text-secondary/60 text-sm">Réponse garantie sous 24 heures ouvrées.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono text-secondary/70 uppercase ml-1 flex items-center gap-2">
                                                Nom complet *
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Votre nom"
                                                    value={formData.name}
                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-4 px-5 text-white focus:border-accent-primary focus:bg-[#222] outline-none transition-all placeholder:text-white/20 shadow-inner"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono text-secondary/70 uppercase ml-1 flex items-center gap-2">
                                                Email *
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="votre@email.com"
                                                    value={formData.email}
                                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-4 px-5 text-white focus:border-accent-primary focus:bg-[#222] outline-none transition-all placeholder:text-white/20 shadow-inner"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-secondary/70 uppercase ml-1 flex items-center gap-2">
                                            Entreprise
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Nom de votre entreprise"
                                                value={formData.company}
                                                onChange={e => setFormData({ ...formData, company: e.target.value })}
                                                className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-4 px-5 text-white focus:border-accent-primary focus:bg-[#222] outline-none transition-all placeholder:text-white/20 shadow-inner"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-secondary/70 uppercase ml-1 flex items-center gap-2">
                                            Type de projet
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={formData.projectType}
                                                onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                                                className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-4 px-5 text-white focus:border-accent-primary focus:bg-[#222] outline-none transition-all appearance-none cursor-pointer shadow-inner pr-12"
                                            >
                                                <option value="" disabled className="bg-[#1a1a1a]">Sélectionnez un type de projet</option>
                                                {projectTypes.map(type => (
                                                    <option key={type} value={type} className="bg-[#1a1a1a]">{type}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-secondary/40 pointer-events-none" size={18} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-secondary/70 uppercase ml-1 flex items-center gap-2">
                                            Message *
                                        </label>
                                        <div className="relative">
                                            <textarea
                                                required
                                                rows={4}
                                                placeholder="Décrivez votre projet, vos objectifs..."
                                                value={formData.message}
                                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl p-5 text-white focus:border-accent-primary focus:bg-[#222] outline-none transition-all placeholder:text-white/20 resize-none shadow-inner"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 mt-4">
                                        <div className="relative flex items-center h-5">
                                            <input
                                                id="gdpr"
                                                type="checkbox"
                                                required
                                                className="w-4 h-4 bg-zinc-900 border border-white/20 rounded accent-accent-primary cursor-pointer"
                                            />
                                        </div>
                                        <label htmlFor="gdpr" className="text-[10px] text-secondary/40 leading-tight cursor-pointer hover:text-secondary/60 transition-colors">
                                            En cochant cette case, j'accepte que mes données soient traitées conformément à la <Link href="/politique-confidentialite" className="text-accent-primary hover:underline">politique de confidentialité</Link> de EXCEED DIGITAL.
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-accent-primary hover:shadow-[0_0_20px_rgba(0,112,243,0.4)] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] disabled:opacity-50 mt-4 h-14"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>Envoyer le message <Send size={18} /></>
                                        )}
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12 flex flex-col items-center justify-center h-full"
                                >
                                    <div className="w-20 h-20 bg-accent-primary/10 rounded-full flex items-center justify-center mb-8 border border-accent-primary/20 shadow-[0_0_20px_rgba(0,112,243,0.1)]">
                                        <Send className="text-accent-primary" size={40} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Message Envoyé</h3>
                                    <p className="text-secondary max-w-sm mx-auto">
                                        Merci pour votre message ! Notre équipe revient vers vous dans les plus brefs délais pour discuter de votre ambition.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-8 text-accent-primary font-bold hover:text-white transition-colors"
                                    >
                                        Envoyer un autre message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </GsapReveal>
            </div>
        </section>
    );
}
