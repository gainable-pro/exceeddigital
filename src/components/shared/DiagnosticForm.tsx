"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    ChevronLeft,
    Check,
    Send,
    ArrowRight,
    Search,
    TrendingUp,
    Palette,
    Zap,
    Globe,
    Users,
    Crown,
    Bot,
    Navigation,
    ShoppingCart,
    Calendar,
    BarChart3,
    MessageSquare,
    ShieldCheck,
    Smartphone,
    MousePointer2,
    Briefcase,
    Building2,
    Mail,
    User,
    Clock,
    Wallet
} from "lucide-react";

interface FormData {
    // Step 1: Who are you
    name: string;
    email: string;
    company: string;
    sector: string;
    // Step 2: Current situation
    hasWebsite: string;
    traffic: string;
    problems: string[];
    // Step 3: Goals
    mainGoal: string;
    target: string;
    // Step 4: Budget & Deadline
    budget: string;
    deadline: string;
    // Step 5: Features
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

export function DiagnosticForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const totalSteps = 6;
    const progress = (step / totalSteps) * 100;

    const sectors = [
        "E-commerce", "Restaurant / Hotellerie",
        "BTP / Immobilier", "Sante",
        "Cabinet conseil", "Startup Tech",
        "Artisan / Commerce local", "Autre"
    ];

    const websiteStatus = [
        { label: "Oui, mais il est obsolete", val: "obsolete" },
        { label: "Oui, mais il ne genere pas de resultats", val: "no-results" },
        { label: "Non, pas encore", val: "none" },
        { label: "Autre", val: "other" }
    ];

    const trafficOptions = [
        "Aucun / Je ne sais pas", "Moins de 500 visiteurs",
        "500 a 2 000 visiteurs", "Plus de 2 000 visiteurs"
    ];

    const problemOptions = [
        { id: "slow", label: "Mon site est lent" },
        { id: "seo", label: "Pas visible sur Google" },
        { id: "design", label: "Design depasse" },
        { id: "mobile", label: "Pas adapte mobile" },
        { id: "conversion", label: "Pas de conversions" },
        { id: "other", label: "Autre" }
    ];

    const goalOptions = [
        { id: "leads", label: "Generer des leads / contacts" },
        { id: "sales", label: "Vendre en ligne" },
        { id: "credibility", label: "Renforcer ma credibilite" },
        { id: "services", label: "Presenter mes services" },
        { id: "other", label: "Autre" }
    ];

    const targetOptions = [
        "B2B - Entreprises", "B2C - Particuliers",
        "Les deux", "Autre"
    ];

    const budgetOptions = [
        "Moins de 2 000 EUR", "2 000 EUR - 5 000 EUR",
        "5 000 EUR - 10 000 EUR", "10 000 EUR - 20 000 EUR",
        "Plus de 2 0000 EUR"
    ];

    const deadlineOptions = [
        "Urgent (moins de 1 mois)", "1 a 3 mois",
        "3 a 6 mois", "Pas de deadline precise"
    ];

    const featureOptions = [
        { id: "blog", label: "Blog / Actualites" },
        { id: "ecommerce", label: "E-commerce / Boutique" },
        { id: "booking", label: "Reservation en ligne" },
        { id: "portal", label: "Espace client / membres" },
        { id: "chat", label: "Chat en ligne" },
        { id: "multilang", label: "Multi-langue" },
        { id: "other", label: "Autre" }
    ];

    const brandingOptions = [
        { label: "Oui, complete", val: "full" },
        { label: "Juste un logo", val: "logo" },
        { label: "Non, rien du tout", val: "none" }
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
        // Simulate API call
        await new Promise(r => setTimeout(r, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-[12px]"
                onClick={onClose}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="relative w-full max-w-2xl bg-[#0a0a0a]/90 border border-white/10 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col max-h-[90vh] overflow-hidden"
            >
                {/* Premium Glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

                {/* Progress Tracking - Centered & Subtle */}
                <div className="px-8 pt-8 pb-4">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-primary font-bold">Diagnostic</span>
                            <span className="text-[9px] text-white/30 uppercase tracking-[0.1em] mt-1">Étape {step} sur {totalSteps}</span>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/[0.08] transition-all group"
                        >
                            <X size={18} className="text-white/40 group-hover:text-white transition-colors" />
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
                    {!isSuccess ? (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-10"
                            >
                                {step === 1 && (
                                    <div className="space-y-10">
                                        <div className="text-center max-w-md mx-auto">
                                            <h2 className="text-3xl font-sora font-bold text-white mb-3 tracking-tight uppercase">Qui êtes-vous ?</h2>
                                            <p className="text-secondary/40 text-sm font-light">Parlez-nous de vous et de votre activité pour personnaliser votre diagnostic.</p>
                                        </div>

                                        <div className="space-y-4">
                                            {/* Name Field as a Bubble */}
                                            <div className="group relative">
                                                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent-primary scale-y-0 group-focus-within:scale-y-100 transition-transform duration-300 rounded-full" />
                                                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all focus-within:border-accent-primary/50 focus-within:bg-accent-primary/[0.02]">
                                                    <label className="block text-[10px] uppercase tracking-widest text-secondary/40 font-bold mb-2 ml-1">Nom complet</label>
                                                    <input
                                                        type="text"
                                                        placeholder="VOTRE NOM"
                                                        value={formData.name}
                                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                        className="w-full bg-transparent text-white font-sora text-base outline-none placeholder:text-white/5 uppercase"
                                                    />
                                                </div>
                                            </div>

                                            {/* Email Field as a Bubble */}
                                            <div className="group relative">
                                                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent-primary scale-y-0 group-focus-within:scale-y-100 transition-transform duration-300 rounded-full" />
                                                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all focus-within:border-accent-primary/50 focus-within:bg-accent-primary/[0.02]">
                                                    <label className="block text-[10px] uppercase tracking-widest text-secondary/40 font-bold mb-2 ml-1">Email professionnel</label>
                                                    <input
                                                        type="email"
                                                        placeholder="VOTRE@EMAIL.COM"
                                                        value={formData.email}
                                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                        className="w-full bg-transparent text-white font-mono text-base outline-none placeholder:text-white/5 uppercase"
                                                    />
                                                </div>
                                            </div>

                                            {/* Company Field as a Bubble */}
                                            <div className="group relative">
                                                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent-primary scale-y-0 group-focus-within:scale-y-100 transition-transform duration-300 rounded-full" />
                                                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all focus-within:border-accent-primary/50 focus-within:bg-accent-primary/[0.02]">
                                                    <label className="block text-[10px] uppercase tracking-widest text-secondary/40 font-bold mb-2 ml-1">Entreprise</label>
                                                    <input
                                                        type="text"
                                                        placeholder="NOM DE VOTRE ENTREPRISE"
                                                        value={formData.company}
                                                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                                                        className="w-full bg-transparent text-white font-sora text-base outline-none placeholder:text-white/5 uppercase"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-6 pt-4">
                                            <h3 className="text-center text-[10px] uppercase tracking-[0.3em] text-secondary/20 font-bold">Secteur d'activité</h3>
                                            <div className="grid grid-cols-2 gap-3">
                                                {sectors.map(s => (
                                                    <button
                                                        key={s}
                                                        onClick={() => setFormData({ ...formData, sector: s })}
                                                        className={`p-4 rounded-xl border-2 flex items-center justify-center gap-3 transition-all font-bold text-[10px] tracking-widest uppercase ${formData.sector === s ? 'bg-accent-primary border-accent-primary text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]' : 'bg-white/[0.03] border-white/5 text-white/40 hover:border-white/20'}`}
                                                    >
                                                        {s}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-10">
                                        <div className="text-center max-w-md mx-auto">
                                            <h2 className="text-3xl font-sora font-bold text-white mb-3 tracking-tight uppercase">Votre situation</h2>
                                            <p className="text-secondary/40 text-sm font-light">Aidez-nous à comprendre où vous en êtes aujourd'hui.</p>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="space-y-4">
                                                <h3 className="text-center text-[10px] uppercase tracking-[0.3em] text-secondary/20 font-bold">Avez-vous déjà un site web ?</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {websiteStatus.map(opt => (
                                                        <button
                                                            key={opt.val}
                                                            onClick={() => setFormData({ ...formData, hasWebsite: opt.val })}
                                                            className={`p-5 rounded-2xl border-2 flex items-center gap-4 transition-all text-left ${formData.hasWebsite === opt.val ? 'bg-accent-primary border-accent-primary text-white shadow-[0_10px_30px_rgba(37,99,235,0.2)]' : 'bg-white/[0.03] border-white/5 text-secondary hover:border-white/20'}`}
                                                        >
                                                            <div className={`min-w-[20px] h-5 w-5 rounded-full border-2 flex items-center justify-center ${formData.hasWebsite === opt.val ? 'border-white bg-white' : 'border-white/20'}`}>
                                                                {formData.hasWebsite === opt.val && <Check size={12} className="text-accent-primary" strokeWidth={4} />}
                                                            </div>
                                                            <span className="text-xs font-bold uppercase tracking-wider">{opt.label}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4 pt-4">
                                                <h3 className="text-center text-[10px] uppercase tracking-[0.3em] text-secondary/20 font-bold">Votre trafic actuel</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {trafficOptions.map(opt => (
                                                        <button
                                                            key={opt}
                                                            onClick={() => setFormData({ ...formData, traffic: opt })}
                                                            className={`p-5 rounded-2xl border-2 flex items-center gap-4 transition-all text-left ${formData.traffic === opt ? 'bg-accent-primary border-accent-primary text-white shadow-[0_10px_30px_rgba(37,99,235,0.2)]' : 'bg-white/[0.03] border-white/5 text-secondary hover:border-white/20'}`}
                                                        >
                                                            <div className={`min-w-[20px] h-5 w-5 rounded-full border-2 flex items-center justify-center ${formData.traffic === opt ? 'border-white bg-white' : 'border-white/20'}`}>
                                                                {formData.traffic === opt && <Check size={12} className="text-accent-primary" strokeWidth={4} />}
                                                            </div>
                                                            <span className="text-xs font-bold uppercase tracking-wider">{opt}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {step === 4 && (
                                    <div className="space-y-10">
                                        <div className="text-center max-w-md mx-auto">
                                            <h2 className="text-3xl font-sora font-bold text-white mb-3 tracking-tight uppercase">Votre Projet</h2>
                                            <p className="text-secondary/40 text-sm font-light">Quels sont les moyens et les délais prévus ?</p>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="space-y-4">
                                                <h3 className="text-center text-[10px] uppercase tracking-[0.3em] text-secondary/20 font-bold">Budget prévisionnel</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {budgetOptions.map(opt => (
                                                        <button
                                                            key={opt}
                                                            onClick={() => setFormData({ ...formData, budget: opt })}
                                                            className={`p-5 rounded-2xl border-2 flex items-center gap-4 transition-all text-left ${formData.budget === opt ? 'bg-accent-primary border-accent-primary text-white shadow-[0_10px_30px_rgba(37,99,235,0.2)]' : 'bg-white/[0.03] border-white/5 text-secondary hover:border-white/20'}`}
                                                        >
                                                            <div className={`min-w-[20px] h-5 w-5 rounded-full border-2 flex items-center justify-center ${formData.budget === opt ? 'border-white bg-white' : 'border-white/20'}`}>
                                                                {formData.budget === opt && <Check size={12} className="text-accent-primary" strokeWidth={4} />}
                                                            </div>
                                                            <span className="text-xs font-bold uppercase tracking-wider">{opt}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4 pt-4">
                                                <h3 className="text-center text-[10px] uppercase tracking-[0.3em] text-secondary/20 font-bold">Délai souhaité</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {deadlineOptions.map(opt => (
                                                        <button
                                                            key={opt}
                                                            onClick={() => setFormData({ ...formData, deadline: opt })}
                                                            className={`p-5 rounded-2xl border-2 flex items-center gap-4 transition-all text-left ${formData.deadline === opt ? 'bg-accent-primary border-accent-primary text-white shadow-[0_10px_30px_rgba(37,99,235,0.2)]' : 'bg-white/[0.03] border-white/5 text-secondary hover:border-white/20'}`}
                                                        >
                                                            <div className={`min-w-[20px] h-5 w-5 rounded-full border-2 flex items-center justify-center ${formData.deadline === opt ? 'border-white bg-white' : 'border-white/20'}`}>
                                                                {formData.deadline === opt && <Check size={12} className="text-accent-primary" strokeWidth={4} />}
                                                            </div>
                                                            <span className="text-xs font-bold uppercase tracking-wider">{opt}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {step === 5 && (
                                    <div className="space-y-10">
                                        <div className="text-center max-w-md mx-auto">
                                            <h2 className="text-3xl font-sora font-bold text-white mb-3 tracking-tight uppercase">Fonctionnalités</h2>
                                            <p className="text-secondary/40 text-sm font-light">Séléctionnez les outils dont vous avez besoin.</p>
                                        </div>

                                        <div className="grid grid-cols-1 gap-3">
                                            {featureOptions.map(p => (
                                                <button
                                                    key={p.id}
                                                    onClick={() => toggleArrayItem('features', p.id)}
                                                    className={`p-5 rounded-2xl border-2 flex items-center gap-4 transition-all text-left ${formData.features.includes(p.id) ? 'bg-accent-primary border-accent-primary text-white shadow-[0_10px_30px_rgba(37,99,235,0.2)]' : 'bg-white/[0.03] border-white/5 text-secondary hover:border-white/20'}`}
                                                >
                                                    <div className={`min-w-[24px] h-6 w-6 rounded-lg border-2 flex items-center justify-center ${formData.features.includes(p.id) ? 'border-white bg-white' : 'border-white/20'}`}>
                                                        {formData.features.includes(p.id) && <Check size={16} className="text-accent-primary" strokeWidth={4} />}
                                                    </div>
                                                    <span className="text-xs font-bold uppercase tracking-wider">{p.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {step === 6 && (
                                    <div className="space-y-10">
                                        <div className="text-center max-w-md mx-auto">
                                            <h2 className="text-3xl font-sora font-bold text-white mb-3 tracking-tight uppercase">Résumé</h2>
                                            <p className="text-secondary/40 text-sm font-light">Vérifiez vos informations avant l'envoi.</p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 space-y-4">
                                                <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-[10px]">
                                                    <div className="space-y-1">
                                                        <span className="text-white/20 uppercase font-bold tracking-widest">Client</span>
                                                        <p className="text-white font-bold">{formData.name}</p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <span className="text-white/20 uppercase font-bold tracking-widest">Entreprise</span>
                                                        <p className="text-white font-bold">{formData.company}</p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <span className="text-white/20 uppercase font-bold tracking-widest">Objectif</span>
                                                        <p className="text-accent-primary font-bold">{(goalOptions.find(o => o.id === formData.mainGoal) || { label: formData.mainGoal }).label}</p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <span className="text-white/20 uppercase font-bold tracking-widest">Budget</span>
                                                        <p className="text-white font-bold">{formData.budget}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                                                <div className="flex justify-between items-center mb-6">
                                                    <span className="text-[10px] uppercase tracking-widest text-secondary/40 font-bold">Design / Audace</span>
                                                    <span className="text-xs font-bold text-accent-primary">{formData.experience}/10</span>
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

                                            <div className="flex items-start gap-3 mt-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                                                <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 accent-accent-primary cursor-pointer" id="gdpr-check" />
                                                <label htmlFor="gdpr-check" className="text-[9px] text-white/30 leading-relaxed cursor-pointer select-none">
                                                    Je consens au traitement de mes informations par EXCEED DIGITAL pour l'élaboration de mon devis, conformément à la <Link href="/politique-confidentialite" className="text-accent-primary hover:underline">politique de confidentialité</Link>.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation */}
                                <div className="flex gap-4 pt-6 mt-10 border-t border-white/5">
                                    {step > 1 && (
                                        <button
                                            onClick={handleBack}
                                            className="flex-1 py-5 rounded-2xl border border-white/10 text-white/40 hover:text-white hover:bg-white/5 transition-all text-[10px] font-bold uppercase tracking-widest"
                                        >
                                            Retour
                                        </button>
                                    )}
                                    <button
                                        onClick={step === totalSteps ? handleSubmit : handleNext}
                                        disabled={isSubmitting}
                                        className="flex-[2] py-5 rounded-2xl bg-white text-black hover:bg-accent-primary hover:text-white transition-all text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_10px_40px_rgba(255,255,255,0.1)] hover:shadow-accent-primary/20 flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                        ) : step === totalSteps ? (
                                            <>Finaliser le diagnostic <Send size={16} /></>
                                        ) : (
                                            'Suivant'
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col items-center justify-center text-center space-y-8 py-12"
                        >
                            <div className="w-24 h-24 rounded-[2.5rem] bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mb-4 mx-auto">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", damping: 10, stiffness: 100 }}
                                >
                                    <Check size={40} className="text-accent-primary" strokeWidth={3} />
                                </motion.div>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-4xl font-sora font-bold text-white tracking-tight uppercase">Diagnostic Envoyé !</h2>
                                <p className="text-secondary/60 max-w-sm mx-auto font-light leading-relaxed">
                                    Merci {formData.name.split(' ')[0]}, votre demande a été enregistrée. Notre équipe revient vers vous sous 24h.
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="px-10 py-5 rounded-2xl bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-accent-primary hover:text-white transition-all shadow-xl"
                            >
                                Fermer
                            </button>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
