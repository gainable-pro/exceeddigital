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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-zinc-950/90 backdrop-blur-xl"
                onClick={onClose}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-[#0f0a1a]/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh] sm:max-h-[90vh]"
            >
                {/* Header with Progress */}
                <div className="p-6 border-b border-white/5 bg-[#1a122e]/50">
                    <div className="flex items-center justify-between mb-6">
                        <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <X size={18} className="text-secondary" />
                        </button>
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/60 mb-1">Etape {step} sur {totalSteps}</span>
                            <span className="text-xs font-bold text-accent-primary">{Math.round(progress)}%</span>
                        </div>
                    </div>

                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-accent-primary to-[#a855f7]"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                        />
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                    {!isSuccess ? (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-8"
                            >
                                {step === 1 && (
                                    <div className="space-y-6">
                                        <div className="mb-8">
                                            <h2 className="text-2xl font-bold text-white mb-2">Qui etes-vous ?</h2>
                                            <p className="text-secondary/60 text-sm">Parlez-nous de vous et de votre activite</p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-white/70 ml-1">Nom complet *</label>
                                                <input
                                                    type="text"
                                                    placeholder="Votre nom"
                                                    value={formData.name}
                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white focus:border-accent-primary outline-none transition-all placeholder:text-white/10"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-white/70 ml-1">Email professionnel *</label>
                                                <input
                                                    type="email"
                                                    placeholder="votre@email.com"
                                                    value={formData.email}
                                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white focus:border-accent-primary outline-none transition-all placeholder:text-white/10"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-white/70 ml-1">Entreprise</label>
                                                <input
                                                    type="text"
                                                    placeholder="Nom de votre entreprise"
                                                    value={formData.company}
                                                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white focus:border-accent-primary outline-none transition-all placeholder:text-white/10"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-2">
                                            <label className="text-sm font-medium text-white/70 ml-1">Secteur d'activite *</label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {sectors.map(s => (
                                                    <button
                                                        key={s}
                                                        onClick={() => setFormData({ ...formData, sector: s })}
                                                        className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${formData.sector === s ? 'bg-accent-primary/20 border-accent-primary text-white' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                    >
                                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.sector === s ? 'border-accent-primary bg-accent-primary' : 'border-white/20'}`}>
                                                            {formData.sector === s && <Check size={12} className="text-white" strokeWidth={4} />}
                                                        </div>
                                                        <span className="text-sm font-medium">{s}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-8">
                                        <div className="mb-8">
                                            <h2 className="text-2xl font-bold text-white mb-2">Votre situation actuelle</h2>
                                            <p className="text-secondary/60 text-sm">Aidez-nous a comprendre ou vous en etes</p>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-sm font-medium text-white/70 ml-1">Avez-vous deja un site web ? *</label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {websiteStatus.map(opt => (
                                                    <button
                                                        key={opt.val}
                                                        onClick={() => setFormData({ ...formData, hasWebsite: opt.val })}
                                                        className={`p-4 rounded-xl border flex items-center gap-3 transition-all text-left ${formData.hasWebsite === opt.val ? 'bg-accent-primary/20 border-accent-primary text-white' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                    >
                                                        <div className={`min-w-[20px] h-5 rounded-full border-2 flex items-center justify-center ${formData.hasWebsite === opt.val ? 'border-accent-primary bg-accent-primary' : 'border-white/20'}`}>
                                                            {formData.hasWebsite === opt.val && <Check size={12} className="text-white" strokeWidth={4} />}
                                                        </div>
                                                        <span className="text-sm font-medium leading-tight">{opt.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-sm font-medium text-white/70 ml-1">Trafic mensuel actuel ?</label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {trafficOptions.map(opt => (
                                                    <button
                                                        key={opt}
                                                        onClick={() => setFormData({ ...formData, traffic: opt })}
                                                        className={`p-4 rounded-xl border flex items-center gap-3 transition-all text-left ${formData.traffic === opt ? 'bg-accent-primary/20 border-accent-primary text-white' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                    >
                                                        <div className={`min-w-[20px] h-5 rounded-full border-2 flex items-center justify-center ${formData.traffic === opt ? 'border-accent-primary bg-accent-primary' : 'border-white/20'}`}>
                                                            {formData.traffic === opt && <Check size={12} className="text-white" strokeWidth={4} />}
                                                        </div>
                                                        <span className="text-sm font-medium">{opt}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-sm font-medium text-white/70 ml-1">Quels sont vos principaux problemes ?</label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {problemOptions.map(p => (
                                                    <button
                                                        key={p.id}
                                                        onClick={() => toggleArrayItem('problems', p.id)}
                                                        className={`p-4 rounded-xl border flex items-center gap-3 transition-all text-left ${formData.problems.includes(p.id) ? 'bg-accent-primary/20 border-accent-primary text-white' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                    >
                                                        <div className={`min-w-[20px] h-5 rounded-md border-2 flex items-center justify-center ${formData.problems.includes(p.id) ? 'border-accent-primary bg-accent-primary' : 'border-white/20'}`}>
                                                            {formData.problems.includes(p.id) && <Check size={12} className="text-white" strokeWidth={4} />}
                                                        </div>
                                                        <span className="text-sm font-medium">{p.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-8">
                                        <div className="mb-8">
                                            <h2 className="text-2xl font-bold text-white mb-2">Vos objectifs</h2>
                                            <p className="text-secondary/60 text-sm">Que souhaitez-vous accomplir ?</p>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-sm font-medium text-white/70 ml-1">Objectif principal ? *</label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {goalOptions.map(opt => (
                                                    <button
                                                        key={opt.id}
                                                        onClick={() => setFormData({ ...formData, mainGoal: opt.id })}
                                                        className={`p-4 rounded-xl border flex items-center gap-3 transition-all text-left ${formData.mainGoal === opt.id ? 'bg-accent-primary/20 border-accent-primary text-white' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                    >
                                                        <div className={`min-w-[20px] h-5 rounded-full border-2 flex items-center justify-center ${formData.mainGoal === opt.id ? 'border-accent-primary bg-accent-primary' : 'border-white/20'}`}>
                                                            {formData.mainGoal === opt.id && <Check size={12} className="text-white" strokeWidth={4} />}
                                                        </div>
                                                        <span className="text-sm font-medium">{opt.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-4">
                                            <label className="text-sm font-medium text-white/70 ml-1">Public cible ?</label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {targetOptions.map(opt => (
                                                    <button
                                                        key={opt}
                                                        onClick={() => setFormData({ ...formData, target: opt })}
                                                        className={`p-4 rounded-xl border flex items-center gap-3 transition-all text-left ${formData.target === opt ? 'bg-accent-primary/20 border-accent-primary text-white' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                    >
                                                        <div className={`min-w-[20px] h-5 rounded-full border-2 flex items-center justify-center ${formData.target === opt ? 'border-accent-primary bg-accent-primary' : 'border-white/20'}`}>
                                                            {formData.target === opt && <Check size={12} className="text-white" strokeWidth={4} />}
                                                        </div>
                                                        <span className="text-sm font-medium">{opt}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {step === 4 && (
                                    <div className="space-y-8">
                                        <div className="mb-8">
                                            <h2 className="text-2xl font-bold text-white mb-2">Budget & Delais</h2>
                                            <p className="text-secondary/60 text-sm">Parlons concretement de votre projet</p>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-sm font-medium text-white/70 ml-1">Budget envisage ? *</label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {budgetOptions.map(opt => (
                                                    <button
                                                        key={opt}
                                                        onClick={() => setFormData({ ...formData, budget: opt })}
                                                        className={`p-4 rounded-xl border flex items-center gap-3 transition-all text-left ${formData.budget === opt ? 'bg-accent-primary/20 border-accent-primary text-white' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                    >
                                                        <div className={`min-w-[20px] h-5 rounded-full border-2 flex items-center justify-center ${formData.budget === opt ? 'border-accent-primary bg-accent-primary' : 'border-white/20'}`}>
                                                            {formData.budget === opt && <Check size={12} className="text-white" strokeWidth={4} />}
                                                        </div>
                                                        <span className="text-sm font-medium tracking-tight">{opt}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-4">
                                            <label className="text-sm font-medium text-white/70 ml-1">Delai souhaite ?</label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {deadlineOptions.map(opt => (
                                                    <button
                                                        key={opt}
                                                        onClick={() => setFormData({ ...formData, deadline: opt })}
                                                        className={`p-4 rounded-xl border flex items-center gap-3 transition-all text-left ${formData.deadline === opt ? 'bg-accent-primary/20 border-accent-primary text-white' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                    >
                                                        <div className={`min-w-[20px] h-5 rounded-full border-2 flex items-center justify-center ${formData.deadline === opt ? 'border-accent-primary bg-accent-primary' : 'border-white/20'}`}>
                                                            {formData.deadline === opt && <Check size={12} className="text-white" strokeWidth={4} />}
                                                        </div>
                                                        <span className="text-sm font-medium">{opt}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {step === 5 && (
                                    <div className="space-y-8">
                                        <div className="mb-8">
                                            <h2 className="text-2xl font-bold text-white mb-2">Fonctionnalites souhaitees</h2>
                                            <p className="text-secondary/60 text-sm">Quels elements sont importants pour vous ?</p>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-sm font-medium text-white/70 ml-1">Quelles fonctionnalites ?</label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {featureOptions.map(f => (
                                                    <button
                                                        key={f.id}
                                                        onClick={() => toggleArrayItem('features', f.id)}
                                                        className={`p-4 rounded-xl border flex items-center gap-3 transition-all text-left ${formData.features.includes(f.id) ? 'bg-accent-primary/20 border-accent-primary text-white' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                    >
                                                        <div className={`min-w-[20px] h-5 rounded-md border-2 flex items-center justify-center ${formData.features.includes(f.id) ? 'border-accent-primary bg-accent-primary' : 'border-white/20'}`}>
                                                            {formData.features.includes(f.id) && <Check size={12} className="text-white" strokeWidth={4} />}
                                                        </div>
                                                        <span className="text-sm font-medium">{f.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-4">
                                            <label className="text-sm font-medium text-white/70 ml-1">Avez-vous une charte graphique ? ?</label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {brandingOptions.map(opt => (
                                                    <button
                                                        key={opt.val}
                                                        onClick={() => setFormData({ ...formData, branding: opt.val })}
                                                        className={`p-4 rounded-xl border flex items-center gap-3 transition-all text-left ${formData.branding === opt.val ? 'bg-accent-primary/20 border-accent-primary text-white' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                    >
                                                        <div className={`min-w-[20px] h-5 rounded-full border-2 flex items-center justify-center ${formData.branding === opt.val ? 'border-accent-primary bg-accent-primary' : 'border-white/20'}`}>
                                                            {formData.branding === opt.val && <Check size={12} className="text-white" strokeWidth={4} />}
                                                        </div>
                                                        <span className="text-sm font-medium">{opt.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {step === 6 && (
                                    <div className="space-y-8">
                                        <div className="mb-8">
                                            <h2 className="text-2xl font-bold text-white mb-2">Confirmation</h2>
                                            <p className="text-secondary/60 text-sm">Verifiez vos reponses et envoyez votre diagnostic</p>
                                        </div>

                                        <div className="space-y-4">
                                            {/* Summary Blocks */}
                                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-white font-bold text-base">Qui etes-vous ?</h4>
                                                </div>
                                                <div className="grid grid-cols-2 gap-2 text-sm">
                                                    <span className="text-secondary/60 uppercase text-[10px] font-mono">Nom complet</span>
                                                    <span className="text-white text-right font-medium">{formData.name || "-"}</span>
                                                    <span className="text-secondary/60 uppercase text-[10px] font-mono">Email professionnel</span>
                                                    <span className="text-white text-right font-medium truncate ml-4">{formData.email || "-"}</span>
                                                    <span className="text-secondary/60 uppercase text-[10px] font-mono">Entreprise</span>
                                                    <span className="text-white text-right font-medium">{formData.company || "-"}</span>
                                                    <span className="text-secondary/60 uppercase text-[10px] font-mono">Secteur d'activite</span>
                                                    <span className="text-white text-right font-medium">{formData.sector || "-"}</span>
                                                </div>
                                            </div>

                                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                                                <h4 className="text-white font-bold text-base">Votre situation actuelle</h4>
                                                <div className="grid grid-cols-2 gap-2 text-sm">
                                                    <span className="text-secondary/60 uppercase text-[10px] font-mono">Avez-vous deja un site web ?</span>
                                                    <span className="text-white text-right font-medium">{websiteStatus.find(o => o.val === formData.hasWebsite)?.label || "-"}</span>
                                                    <span className="text-secondary/60 uppercase text-[10px] font-mono">Quels sont vos principaux problemes ?</span>
                                                    <span className="text-white text-right font-medium">{formData.problems.length > 0 ? problemOptions.find(p => p.id === formData.problems[0])?.label : "-"}</span>
                                                </div>
                                            </div>

                                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                                                <h4 className="text-white font-bold text-base">Vos objectifs</h4>
                                                <div className="grid grid-cols-2 gap-2 text-sm">
                                                    <span className="text-secondary/60 uppercase text-[10px] font-mono">Objectif principal ?</span>
                                                    <span className="text-white text-right font-medium">{goalOptions.find(o => o.id === formData.mainGoal)?.label || "-"}</span>
                                                    <span className="text-secondary/60 uppercase text-[10px] font-mono">Public cible ?</span>
                                                    <span className="text-white text-right font-medium">{formData.target || "-"}</span>
                                                </div>
                                            </div>

                                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                                                <h4 className="text-white font-bold text-base">Budget & Delais</h4>
                                                <div className="grid grid-cols-2 gap-2 text-sm">
                                                    <span className="text-secondary/60 uppercase text-[10px] font-mono">Budget envisage ?</span>
                                                    <span className="text-white text-right font-medium">{formData.budget || "-"}</span>
                                                    <span className="text-secondary/60 uppercase text-[10px] font-mono">Delai souhaite ?</span>
                                                    <span className="text-white text-right font-medium">{formData.deadline || "-"}</span>
                                                </div>
                                            </div>

                                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                                                <h4 className="text-white font-bold text-base">Fonctionnalites souhaitees</h4>
                                                <div className="grid grid-cols-2 gap-2 text-sm">
                                                    <span className="text-secondary/60 uppercase text-[10px] font-mono">Quelles fonctionnalites ?</span>
                                                    <span className="text-white text-right font-medium">{formData.features.length > 0 ? featureOptions.find(f => f.id === formData.features[0])?.label : "-"}</span>
                                                    <span className="text-secondary/60 uppercase text-[10px] font-mono">Avez-vous une charte graphique ?</span>
                                                    <span className="text-white text-right font-medium">{brandingOptions.find(o => o.val === formData.branding)?.label || "-"}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3 mt-8 p-4 bg-white/5 border border-white/5 rounded-xl">
                                                <div className="relative flex items-center h-5">
                                                    <input
                                                        id="diag-gdpr"
                                                        type="checkbox"
                                                        required
                                                        className="w-4 h-4 bg-zinc-900 border border-white/20 rounded accent-accent-primary cursor-pointer"
                                                    />
                                                </div>
                                                <label htmlFor="diag-gdpr" className="text-[10px] text-secondary/40 leading-tight cursor-pointer hover:text-secondary/60 transition-colors">
                                                    Je consens au traitement de mes informations par EXCEED DIGITAL pour l'élaboration de mon devis, conformément à la <Link href="/politique-confidentialite" className="text-accent-primary hover:underline">politique de confidentialité</Link>.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center py-12 text-center space-y-6 h-full"
                        >
                            <div className="w-24 h-24 bg-accent-primary/10 rounded-full flex items-center justify-center border border-accent-primary/20 shadow-[0_0_30px_rgba(0,112,243,0.1)]">
                                <Send className="text-accent-primary" size={40} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-4">Diagnostic Envoye !</h3>
                                <p className="text-secondary max-w-sm mx-auto">
                                    Merci {formData.name.split(' ')[0]}, notre equipe analyse vos besoins et revient vers vous sous 24h.
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="px-10 py-4 bg-accent-primary text-white rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
                            >
                                Revenir au site
                            </button>
                        </motion.div>
                    )}
                </div>

                {/* Footer Navigation */}
                {!isSuccess && (
                    <div className="p-6 sm:p-8 border-t border-white/5 bg-[#1a122e]/50 flex items-center justify-between">
                        <button
                            onClick={handleBack}
                            disabled={step === 1}
                            className={`px-6 py-4 rounded-xl border border-white/10 text-white font-bold flex items-center gap-3 hover:bg-white/5 transition-all disabled:opacity-0 disabled:pointer-events-none`}
                        >
                            <ChevronLeft size={18} /> Retour
                        </button>

                        <button
                            onClick={step === totalSteps ? handleSubmit : handleNext}
                            disabled={isSubmitting}
                            className="px-8 py-4 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-xl font-bold flex items-center gap-3 transition-all transform active:scale-[0.98] shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : step === totalSteps ? (
                                <>Envoyer mon diagnostic <Send size={18} /></>
                            ) : (
                                <>Suivant <ArrowRight size={18} /></>
                            )}
                        </button>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
