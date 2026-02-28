"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    ArrowRight,
    ChevronLeft,
    Check,
    User,
    Mail,
    Building2,
    Globe,
    Users2,
    Target,
    Wallet,
    Calendar,
    Settings,
    Layout,
    CheckCircle2,
    Send
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
    const [data, setData] = useState<FormData>(initialData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const totalSteps = 6;
    const progress = (step / totalSteps) * 100;

    const sectors = ["E-commerce", "BTP / Immobilier", "Santé & Bien-être", "Startups & Tech", "Conseil & Services", "Commerces de proximité", "Autre"];
    const problems = ["Site trop lent", "Visibilité Google (SEO) faible", "Design daté / non-pro", "Inadapté sur mobile", "Pas assez de conversions", "Autre"];
    const goals = [
        { label: "Booster ma visibilité & trafic", val: "traffic", icon: Target },
        { label: "Générer des leads qualifiés", val: "leads", icon: Users2 },
        { label: "Vendre mes services/produits", val: "sales", icon: Wallet },
        { label: "Professionnaliser mon image", val: "brand", icon: Layout }
    ];
    const features = ["Espace client sécurisé", "Vente en ligne / Boutique", "Prise de rendez-vous", "Blog & Actualités", "Tchat & Support", "Multi-langues"];

    const handleNext = () => setStep(s => Math.min(s + 1, totalSteps));
    const handleBack = () => setStep(s => Math.max(s - 1, 1));

    const toggleArrayItem = (key: keyof FormData, item: string) => {
        setData(prev => {
            const current = (prev[key] as string[]) || [];
            const updated = current.includes(item)
                ? current.filter(i => i !== item)
                : [...current, item];
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-bg-deep/90 backdrop-blur-md"
                onClick={onClose}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl bg-glass-bg border border-glass-border rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
                {/* Header */}
                <div className="p-6 md:p-8 border-b border-glass-border flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-1 w-24 bg-soft/20 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-accent-primary"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                />
                            </div>
                            <span className="text-xs font-mono text-accent-primary">Étape {step} sur {totalSteps}</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                            {step === 1 && "Faisons connaissance"}
                            {step === 2 && "Votre présence actuelle"}
                            {step === 3 && "Objectifs & Cibles"}
                            {step === 4 && "Budget & Échéance"}
                            {step === 5 && "Besoins & Identité"}
                            {step === 6 && "Vérification finale"}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors group"
                    >
                        <X className="text-secondary group-hover:text-white" size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-10">
                    {!isSuccess ? (
                        <>
                            {step === 1 && (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <p className="text-secondary mb-8">Commençons par les présentations pour mieux cadrer votre besoin.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-white/70 ml-1">Nom ou Prénom *</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-primary" size={18} />
                                                <input
                                                    type="text"
                                                    placeholder="Ex: Alexandre"
                                                    value={data.name}
                                                    onChange={e => setData({ ...data, name: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-accent-primary outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-white/70 ml-1">Adresse Email *</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-primary" size={18} />
                                                <input
                                                    type="email"
                                                    placeholder="votre@mail.com"
                                                    value={data.email}
                                                    onChange={e => setData({ ...data, email: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-accent-primary outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/70 ml-1">Votre domaine d'activité *</label>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {sectors.map(s => (
                                                <button
                                                    key={s}
                                                    onClick={() => setData({ ...data, sector: s })}
                                                    className={`p-3 text-sm rounded-xl border text-center transition-all ${data.sector === s ? 'bg-accent-primary border-accent-primary text-white shadow-[0_0_15px_rgba(0,112,243,0.3)]' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6 animate-in slide-in-from-right-10 duration-500">
                                    <div className="space-y-4">
                                        <label className="text-sm font-medium text-white/70 ml-1">Possédez-vous déjà une vitrine digitale ? *</label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { label: "Oui, mais elle n'est plus à jour", val: "old" },
                                                { label: "Oui, mais elle ne convertit pas", val: "no-conversion" },
                                                { label: "Non, c'est une création", val: "new" },
                                                { label: "En cours de développement", val: "dev" }
                                            ].map(opt => (
                                                <button
                                                    key={opt.val}
                                                    onClick={() => setData({ ...data, hasWebsite: opt.val })}
                                                    className={`p-4 rounded-2xl border flex items-center gap-4 transition-all ${data.hasWebsite === opt.val ? 'bg-accent-primary/20 border-accent-primary text-white' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                >
                                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${data.hasWebsite === opt.val ? 'border-accent-primary' : 'border-white/20'}`}>
                                                        {data.hasWebsite === opt.val && <div className="w-2.5 h-2.5 bg-accent-primary rounded-full" />}
                                                    </div>
                                                    <span className="text-sm font-medium">{opt.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-medium text-white/70 ml-1">Points de blocage identifiés :</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {problems.map(p => (
                                                <button
                                                    key={p}
                                                    onClick={() => toggleArrayItem('problems', p)}
                                                    className={`p-3 text-sm rounded-xl border flex items-center gap-3 transition-all ${data.problems.includes(p) ? 'bg-accent-primary border-accent-primary text-white shadow-[0_0_10px_rgba(0,112,243,0.2)]' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                >
                                                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${data.problems.includes(p) ? 'bg-accent-primary border-accent-primary' : 'border-white/20'}`}>
                                                        {data.problems.includes(p) && <Check size={12} className="text-white" />}
                                                    </div>
                                                    {p}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6 animate-in slide-in-from-right-10 duration-500">
                                    <div className="space-y-4">
                                        <label className="text-sm font-medium text-white/70 ml-1">Quelle est votre priorité n°1 ? *</label>
                                        <div className="grid grid-cols-1 gap-4">
                                            {goals.map(opt => (
                                                <button
                                                    key={opt.val}
                                                    onClick={() => setData({ ...data, mainGoal: opt.val })}
                                                    className={`p-5 rounded-2xl border flex items-center gap-5 transition-all ${data.mainGoal === opt.val ? 'bg-accent-primary/20 border-accent-primary text-white' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                >
                                                    <opt.icon className={data.mainGoal === opt.val ? 'text-accent-primary' : 'text-white/20'} size={24} />
                                                    <span className="text-lg font-bold">{opt.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                                <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
                                    <div className="space-y-4">
                                        <label className="text-sm font-medium text-white/70 ml-1">Budget prévisionnel envisagé ? *</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            {["2 000€ - 5 000€", "5 000€ - 10 000€", "10 000€ - 20 000€", "Expert sur mesure"].map(curr => (
                                                <button
                                                    key={curr}
                                                    onClick={() => setData({ ...data, budget: curr })}
                                                    className={`p-4 rounded-xl border text-center font-bold transition-all ${data.budget === curr ? 'bg-accent-primary border-accent-primary text-white' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                >
                                                    {curr}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-medium text-white/70 ml-1">Calendrier souhaité pour lancement ? *</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { label: "Urgent ( < 1 mois)", val: "asap" },
                                                { label: "Standard (1 à 3 mois)", val: "1-3m" },
                                                { label: "Vision long terme", val: "3-6m" },
                                                { label: "Aucune deadline", val: "none" }
                                            ].map(opt => (
                                                <button
                                                    key={opt.val}
                                                    onClick={() => setData({ ...data, deadline: opt.val })}
                                                    className={`p-4 rounded-xl border text-center transition-all ${data.deadline === opt.val ? 'bg-accent-primary border-accent-primary text-white' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                >
                                                    {opt.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 5 && (
                                <div className="space-y-6 animate-in slide-in-from-right-10 duration-500">
                                    <div className="space-y-4">
                                        <label className="text-sm font-medium text-white/70 ml-1">Développements spécifiques requis :</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {features.map(f => (
                                                <button
                                                    key={f}
                                                    onClick={() => toggleArrayItem('features', f)}
                                                    className={`p-3 text-sm rounded-xl border flex items-center gap-3 transition-all ${data.features.includes(f) ? 'bg-accent-primary border-accent-primary text-white' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                >
                                                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${data.features.includes(f) ? 'bg-accent-primary border-accent-primary' : 'border-white/20'}`}>
                                                        {data.features.includes(f) && <Check size={12} className="text-white" />}
                                                    </div>
                                                    {f}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-4">
                                        <label className="text-sm font-medium text-white/70 ml-1">État de votre identité visuelle ? *</label>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                            {[
                                                { label: "Identité complète", val: "full" },
                                                { label: "Juste un logo", val: "logo" },
                                                { label: "À créer de zéro", val: "none" }
                                            ].map(opt => (
                                                <button
                                                    key={opt.val}
                                                    onClick={() => setData({ ...data, branding: opt.val })}
                                                    className={`p-3 text-sm rounded-xl border text-center transition-all ${data.branding === opt.val ? 'bg-accent-primary border-accent-primary text-white' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                >
                                                    {opt.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 6 && (
                                <div className="space-y-6 animate-in slide-in-from-right-10 duration-500">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                                        <h4 className="text-accent-primary font-bold flex items-center gap-2">
                                            <CheckCircle2 size={20} />
                                            Vérifiez vos informations
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                                            <div>
                                                <span className="text-secondary block mb-1">Identité</span>
                                                <p className="text-white font-medium">{data.name} — {data.email}</p>
                                            </div>
                                            <div>
                                                <span className="text-secondary block mb-1">Situation</span>
                                                <p className="text-white font-medium">{data.hasWebsite || "Non précisé"}</p>
                                            </div>
                                            <div>
                                                <span className="text-secondary block mb-1">Objectif</span>
                                                <p className="text-white font-medium">{data.mainGoal || "Non précisé"}</p>
                                            </div>
                                            <div>
                                                <span className="text-secondary block mb-1">Budget</span>
                                                <p className="text-white font-medium">{data.budget || "Non précisé"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-secondary text-center px-4">
                                        En cliquant sur envoyer, notre équipe analysera votre projet et vous recontactera sous 24h avec une proposition personnalisée.
                                    </p>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                            <div className="w-20 h-20 bg-accent-primary/20 rounded-full flex items-center justify-center border border-accent-primary/30">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", damping: 10 }}
                                >
                                    <Check className="text-accent-primary" size={40} />
                                </motion.div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Diagnostic Envoyé !</h3>
                                <p className="text-secondary max-w-sm">
                                    Merci {data.name.split(' ')[0]}, nous avons bien reçu vos éléments. Notre équipe revient vers vous très rapidement.
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
                            >
                                Revenir au site
                            </button>
                        </div>
                    )}
                </div>

                {/* Footer */}
                {!isSuccess && (
                    <div className="p-6 md:p-8 border-t border-glass-border flex items-center justify-between">
                        <button
                            onClick={handleBack}
                            disabled={step === 1}
                            className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-secondary hover:text-white'}`}
                        >
                            <ChevronLeft size={20} />
                            Retour
                        </button>

                        <button
                            onClick={step === totalSteps ? handleSubmit : handleNext}
                            disabled={isSubmitting}
                            className={`px-8 py-4 bg-accent-primary rounded-full text-white font-bold flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,112,243,0.4)] disabled:opacity-50`}
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : step === totalSteps ? (
                                <>
                                    Envoyer mon projet
                                    <Send size={20} />
                                </>
                            ) : (
                                <>
                                    Suivant
                                    <ArrowRight size={20} />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
