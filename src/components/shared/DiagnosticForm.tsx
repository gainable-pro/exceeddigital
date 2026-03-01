"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    Check,
    Send,
    Wallet,
    Target,
    Activity
} from "lucide-react";

interface FormData {
    name: string;
    email: string;
    company: string;
    sector: string;
    hasWebsite: string;
    traffic: string;
    problems: string[];
    mainGoal: string;
    target: string;
    budget: string;
    deadline: string;
    features: string[];
    branding: string;
    experience: number;
}

const initialData: FormData = {
    name: "",
    email: "",
    company: "",
    sector: "",
    hasWebsite: "",
    traffic: "",
    problems: [],
    mainGoal: "",
    target: "",
    budget: "",
    deadline: "",
    features: [],
    branding: "",
    experience: 5,
};

export function DiagnosticForm({ isOpen = true, onClose }: { isOpen?: boolean; onClose?: () => void }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const totalSteps = 3;

    // ... (keep constants like sectors, websiteStatus, etc.)
    const sectors = [
        "E-commerce", "Restaurant / Hotellerie",
        "BTP / Immobilier", "Santé",
        "Cabinet conseil", "Startup Tech",
        "Artisan / Commerce local", "Autre"
    ];

    const websiteStatus = [
        { label: "Oui, mais obsolète", val: "obsolete" },
        { label: "Oui, peu performant", val: "no-results" },
        { label: "Non, pas encore", val: "none" },
        { label: "En cours de création", val: "building" }
    ];

    const problemOptions = [
        { id: "slow", label: "Site trop lent" },
        { id: "seo", label: "Pas visible (SEO)" },
        { id: "design", label: "Design dépassé" },
        { id: "mobile", label: "Pas adapté mobile" },
        { id: "conversion", label: "Pas de ventes" },
        { id: "other", label: "Autre" }
    ];

    const goalOptions = [
        { id: "leads", label: "Générer des leads" },
        { id: "sales", label: "Vendre en ligne" },
        { id: "credibility", label: "Crédibilité" },
        { id: "services", label: "Présenter l'offre" }
    ];

    const targetOptions = [
        "B2B - Entreprises", "B2C - Particuliers", "Les deux"
    ];

    const budgetOptions = [
        "Moins de 3k€", "3k€ - 7k€",
        "7k€ - 15k€", "Plus de 15k€"
    ];

    const deadlineOptions = [
        "Urgent (-1 mois)", "1 à 3 mois",
        "3 à 6 mois", "Dès que possible"
    ];

    const featureOptions = [
        { id: "blog", label: "Blog / News" },
        { id: "ecommerce", label: "E-commerce" },
        { id: "booking", label: "Réservation" },
        { id: "portal", label: "Espace Client" },
        { id: "chat", label: "Chatbot IA" },
        { id: "multilang", label: "Multi-langue" }
    ];

    const handleNext = () => setStep(s => Math.min(s + 1, totalSteps));
    const handleBack = () => setStep(s => Math.max(s - 1, 1));

    const toggleArrayItem = (key: keyof FormData, itemId: string) => {
        setFormData(prev => {
            const current = (prev[key] as string[]) || [];
            const updated = current.includes(itemId)
                ? current.filter(i => i !== itemId)
                : [...current, itemId];
            return { ...prev, [key]: updated };
        });
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        await new Promise(r => setTimeout(r, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (!isOpen) return null;

    return (
        <div className="w-full max-w-2xl mx-auto px-4 z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-full bg-zinc-900/40 border border-white/10 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden backdrop-blur-3xl"
            >
                {/* Visual Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

                <div className="px-8 pt-8 pb-4 flex justify-between items-center bg-white/[0.02] border-b border-white/5">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent-primary font-bold">Audit Web Stratégique</span>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="flex gap-1.5">
                                {[...Array(totalSteps)].map((_, i) => (
                                    <div key={i} className={`h-1 w-6 rounded-full transition-all duration-500 ${step > i ? 'bg-accent-primary' : 'bg-white/10'}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                    {onClose && (
                        <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white">
                            <X size={20} />
                        </button>
                    )}
                </div>

                <div className="flex-1 px-8 py-10">
                    {!isSuccess ? (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                {step === 1 && (
                                    <div className="space-y-8">
                                        <div className="text-center">
                                            <h2 className="text-2xl font-sora font-bold text-white mb-2 uppercase tracking-tight">Profil & Secteur</h2>
                                            <p className="text-secondary/40 text-[11px] italic">Parlons de vous et de votre activité.</p>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-white/5 border border-white/5 rounded-2xl p-5 focus-within:border-accent-primary/40 transition-all">
                                                <label className="block text-[8px] uppercase tracking-widest text-secondary/40 font-bold mb-2">Nom & Prénom</label>
                                                <input
                                                    type="text"
                                                    placeholder="VOTRE NOM"
                                                    value={formData.name}
                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-transparent text-white font-sora text-sm outline-none placeholder:text-white/5 uppercase"
                                                />
                                            </div>
                                            <div className="bg-white/5 border border-white/5 rounded-2xl p-5 focus-within:border-accent-primary/40 transition-all">
                                                <label className="block text-[8px] uppercase tracking-widest text-secondary/40 font-bold mb-2">Email Professionnel</label>
                                                <input
                                                    type="email"
                                                    placeholder="EMAIL@ENTREPRISE.FR"
                                                    value={formData.email}
                                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-transparent text-white font-mono text-sm outline-none placeholder:text-white/5 uppercase"
                                                />
                                            </div>
                                        </div>

                                        <div className="bg-white/5 border border-white/5 rounded-2xl p-5 focus-within:border-accent-primary/40 transition-all">
                                            <label className="block text-[8px] uppercase tracking-widest text-secondary/40 font-bold mb-2">Nom de l'entreprise</label>
                                            <input
                                                type="text"
                                                placeholder="NOM DE VOTRE SOCIÉTÉ"
                                                value={formData.company}
                                                onChange={e => setFormData({ ...formData, company: e.target.value })}
                                                className="w-full bg-transparent text-white font-sora text-sm outline-none placeholder:text-white/5 uppercase"
                                            />
                                        </div>

                                        <div className="space-y-4">
                                            <label className="block text-center text-[8px] uppercase tracking-widest text-secondary/20 font-bold">Votre Secteur d'Activité</label>
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                {sectors.map(s => (
                                                    <button
                                                        key={s}
                                                        onClick={() => setFormData({ ...formData, sector: s })}
                                                        className={`p-3 rounded-xl border text-[8px] font-bold uppercase tracking-widest transition-all ${formData.sector === s ? 'bg-accent-primary border-accent-primary text-white shadow-lg' : 'bg-white/5 border-white/5 text-secondary/40 hover:border-white/10'}`}
                                                    >
                                                        {s}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-8">
                                        <div className="text-center">
                                            <h2 className="text-2xl font-sora font-bold text-white mb-2 uppercase tracking-tight">Diagnostic & Vision</h2>
                                            <p className="text-secondary/40 text-[11px] italic">Analysez votre présence et vos objectifs.</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            {websiteStatus.map(opt => (
                                                <button
                                                    key={opt.val}
                                                    onClick={() => setFormData({ ...formData, hasWebsite: opt.val })}
                                                    className={`p-4 rounded-xl border flex flex-col items-center gap-1 transition-all ${formData.hasWebsite === opt.val ? 'bg-accent-primary border-accent-primary text-white' : 'bg-white/5 border-white/5 text-secondary/40'}`}
                                                >
                                                    <span className="text-[9px] font-bold uppercase tracking-wider text-center">{opt.label}</span>
                                                </button>
                                            ))}
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-center text-[8px] uppercase tracking-widest text-secondary/20 font-bold">Défis à relever</h3>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                                {problemOptions.map(p => (
                                                    <button
                                                        key={p.id}
                                                        onClick={() => toggleArrayItem('problems', p.id)}
                                                        className={`p-3 rounded-xl border flex items-center justify-between gap-2 transition-all ${formData.problems.includes(p.id) ? 'bg-white text-black border-white' : 'bg-white/5 border-white/5 text-white/20'}`}
                                                    >
                                                        <span className="text-[8px] font-bold uppercase tracking-widest leading-tight">{p.label}</span>
                                                        {formData.problems.includes(p.id) && <Check size={10} strokeWidth={4} />}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-center text-[8px] uppercase tracking-widest text-secondary/20 font-bold">Objectif Prioritaire</h3>
                                            <div className="grid grid-cols-2 gap-2">
                                                {goalOptions.map(g => (
                                                    <button
                                                        key={g.id}
                                                        onClick={() => setFormData({ ...formData, mainGoal: g.id })}
                                                        className={`p-4 rounded-xl border flex items-center justify-between transition-all ${formData.mainGoal === g.id ? 'bg-accent-primary border-accent-primary text-white' : 'bg-white/5 border-white/5 text-secondary'}`}
                                                    >
                                                        <span className="text-[9px] font-bold uppercase tracking-widest">{g.label}</span>
                                                        <Check className={`transition-all ${formData.mainGoal === g.id ? 'opacity-100' : 'opacity-0'}`} size={12} strokeWidth={4} />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-8">
                                        <div className="text-center">
                                            <h2 className="text-2xl font-sora font-bold text-white mb-2 uppercase tracking-tight">Projet & Budget</h2>
                                            <p className="text-secondary/40 text-[11px] italic">Évaluation de la faisabilité et des besoins.</p>
                                        </div>

                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                            {budgetOptions.map(opt => (
                                                <button
                                                    key={opt}
                                                    onClick={() => setFormData({ ...formData, budget: opt })}
                                                    className={`p-3 rounded-xl border flex flex-col items-center gap-1 transition-all ${formData.budget === opt ? 'bg-accent-primary border-accent-primary text-white' : 'bg-white/5 border-white/5 text-secondary/40'}`}
                                                >
                                                    <span className="text-[8px] font-bold uppercase tracking-widest whitespace-nowrap">{opt}</span>
                                                </button>
                                            ))}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                            <div className="space-y-4">
                                                <h3 className="text-[8px] uppercase tracking-widest text-secondary/20 font-bold">Fonctionnalités Clés</h3>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {featureOptions.map(f => (
                                                        <button
                                                            key={f.id}
                                                            onClick={() => toggleArrayItem('features', f.id)}
                                                            className={`p-3 rounded-xl border flex items-center gap-2 transition-all ${formData.features.includes(f.id) ? 'bg-accent-primary/20 border-accent-primary text-accent-primary' : 'bg-white/5 border-white/5 text-white/10'}`}
                                                        >
                                                            <div className={`w-3 h-3 rounded border flex items-center justify-center ${formData.features.includes(f.id) ? 'bg-accent-primary border-accent-primary' : 'border-white/10'}`}>
                                                                {formData.features.includes(f.id) && <Check size={8} strokeWidth={4} className="text-white" />}
                                                            </div>
                                                            <span className="text-[8px] font-bold uppercase tracking-wider">{f.label}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-[8px] uppercase tracking-widest text-secondary/20 font-bold">Audace Créative</h3>
                                                <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
                                                    <div className="flex justify-between items-center mb-4">
                                                        <span className="text-[9px] font-bold text-accent-primary font-mono">{formData.experience}/10</span>
                                                    </div>
                                                    <input
                                                        type="range"
                                                        min="1"
                                                        max="10"
                                                        value={formData.experience}
                                                        onChange={e => setFormData({ ...formData, experience: parseInt(e.target.value) })}
                                                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent-primary"
                                                    />
                                                </div>
                                                <div className="flex items-start gap-3 p-4 bg-accent-primary/5 border border-accent-primary/10 rounded-xl">
                                                    <input type="checkbox" required className="mt-0.5 w-3 h-3 rounded border-white/10 bg-white/5 accent-accent-primary cursor-pointer" id="final-check" />
                                                    <label htmlFor="final-check" className="text-[8px] text-white/30 leading-relaxed italic">
                                                        Je valide les informations saisies et demande mon audit.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex gap-4 pt-6 mt-6 border-t border-white/5">
                                    {step > 1 && (
                                        <button onClick={handleBack} className="flex-1 py-4 rounded-xl border border-white/10 text-white/30 hover:text-white hover:bg-white/5 transition-all text-[9px] font-bold uppercase tracking-widest">
                                            Précédent
                                        </button>
                                    )}
                                    <button
                                        onClick={step === totalSteps ? handleSubmit : handleNext}
                                        disabled={isSubmitting}
                                        className="flex-[2] py-4 rounded-xl bg-white text-black hover:bg-accent-primary hover:text-white transition-all text-[9px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        {isSubmitting ? <Activity size={16} className="animate-spin" /> : step === totalSteps ? <>Lancer l'audit <Send size={14} /></> : 'Continuer'}
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center py-10 space-y-6"
                        >
                            <div className="w-20 h-20 rounded-[2.5rem] bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mb-2">
                                <Target size={32} className="text-accent-primary" />
                            </div>
                            <div className="text-center space-y-3">
                                <h2 className="text-3xl font-sora font-bold text-white uppercase tracking-tight">Audit Lancé</h2>
                                <p className="text-secondary/40 max-w-sm mx-auto text-[11px] italic leading-relaxed">
                                    Merci {formData.name}, nous analysons votre profil. Un expert vous contactera sous 24h.
                                </p>
                            </div>
                            <Link href="/" className="px-8 py-4 rounded-xl bg-white text-black font-bold uppercase text-[9px] tracking-[0.2em] hover:bg-accent-primary hover:text-white transition-all shadow-xl">
                                Retour à l'accueil
                            </Link>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
