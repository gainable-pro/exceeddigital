"use client";

import React, { useState } from "react";
import { GsapReveal } from "@/components/ui/GsapReveal";
import {
    Mail,
    Phone,
    Send,
    ChevronRight,
    ChevronLeft,
    Check,
    Globe,
    Zap,
    ShieldCheck,
    Layers,
    Rocket,
    Clock,
    Target,
    Sparkles,
    Users,
    MessageSquare,
    UserCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    ambition: string;
    challenges: string[];
    deadline: string;
    message: string;
}

const initialContactData: ContactFormData = {
    name: "",
    email: "",
    phone: "",
    ambition: "",
    challenges: [],
    deadline: "",
    message: "",
};

export function ContactSection() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<ContactFormData>(initialContactData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const totalSteps = 3;

    const ambitions = [
        { id: "web", label: "Web & SEO Performance", icon: Globe },
        { id: "erp", label: "ERP & Plateformes Métier", icon: ShieldCheck },
        { id: "chatbot", label: "Chatbot & Automatisation IA", icon: Zap },
        { id: "brand", label: "Stratégie & Image de Marque", icon: Layers },
    ];

    const challengesList = [
        { id: "visibility", label: "Visibilité Google", icon: Target },
        { id: "process", label: "Automatisation", icon: Rocket },
        { id: "conversion", label: "Conversion Clients", icon: Sparkles },
        { id: "tech", label: "Dette Technique", icon: Clock },
    ];

    const handleNext = () => setStep(s => Math.min(s + 1, totalSteps));
    const handleBack = () => setStep(s => Math.max(s - 1, 1));

    const toggleChallenge = (id: string) => {
        setFormData(prev => ({
            ...prev,
            challenges: prev.challenges.includes(id)
                ? prev.challenges.filter(c => c !== id)
                : [...prev.challenges, id]
        }));
    };

    const isStep1Valid = formData.name && formData.email && formData.phone;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isStep1Valid) return;
        setIsSubmitting(true);
        await new Promise(r => setTimeout(r, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <section id="contact" className="section-v3 bg-transparent">
            <div className="v3-contact-grid">
                <GsapReveal delay={0.1}>
                    <div className="contact-info">
                        <h2 className="section-title-v3">
                            PARLONS <br />
                            <span className="text-gradient">PROJET</span>
                        </h2>
                        <p className="font-sora text-secondary mb-12">Actionnez les leviers de votre croissance digitale dès aujourd'hui.</p>

                        <div className="info-item">
                            <Mail className="icon" />
                            <span className="font-sora">contact@xceed-digital.com</span>
                        </div>
                        <div className="info-item">
                            <Phone className="icon" />
                            <span className="font-sora">+33 (0)6 12 34 56 78</span>
                        </div>

                        {!isSuccess && (
                            <div className="mt-12 hidden md:block">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-accent-primary"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(step / totalSteps) * 100}%` }}
                                        />
                                    </div>
                                    <span className="text-xs font-mono text-accent-primary">0{step} / 0{totalSteps}</span>
                                </div>
                                <p className="text-xs text-secondary/60 uppercase tracking-widest">Parcours ambassadeur</p>
                            </div>
                        )}
                    </div>
                </GsapReveal>

                <GsapReveal delay={0.2} className="relative">
                    <div className="v3-contact-form-container min-h-[500px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            {!isSuccess ? (
                                <motion.div
                                    key={`step-${step}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full"
                                >
                                    {step === 1 && (
                                        <div className="space-y-6">
                                            <h3 className="text-2xl font-bold text-white mb-8">Commençons par faire connaissance</h3>
                                            <div className="space-y-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-mono text-secondary/60 uppercase ml-1">Nom complet</label>
                                                        <div className="relative">
                                                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-primary/50" size={18} />
                                                            <input
                                                                type="text"
                                                                placeholder="Ex: Alexandre Martin"
                                                                value={formData.name}
                                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                                className="w-full bg-white/10 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white focus:border-accent-primary/50 focus:bg-white/15 outline-none transition-all placeholder:text-white/20"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-mono text-secondary/60 uppercase ml-1">Téléphone</label>
                                                        <div className="relative">
                                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-primary/50" size={18} />
                                                            <input
                                                                type="tel"
                                                                placeholder="06 12 34 56 78"
                                                                value={formData.phone}
                                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                                className="w-full bg-white/10 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white focus:border-accent-primary/50 focus:bg-white/15 outline-none transition-all placeholder:text-white/20"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-mono text-secondary/60 uppercase ml-1">Email professionnel</label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-primary/50" size={18} />
                                                        <input
                                                            type="email"
                                                            placeholder="votre@entreprise.com"
                                                            value={formData.email}
                                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                            className="w-full bg-white/10 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white focus:border-accent-primary/50 focus:bg-white/15 outline-none transition-all placeholder:text-white/20"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-6">Quelle est la nature de votre ambition ?</h3>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {ambitions.map(opt => (
                                                        <button
                                                            key={opt.id}
                                                            onClick={() => setFormData({ ...formData, ambition: opt.id })}
                                                            className={`p-4 rounded-xl border flex items-center gap-3 transition-all text-left relative group ${formData.ambition === opt.id ? 'bg-accent-primary/20 border-accent-primary text-white shadow-[0_0_10px_rgba(0,112,243,0.1)]' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                        >
                                                            <opt.icon size={20} className={formData.ambition === opt.id ? 'text-accent-primary' : 'text-secondary'} />
                                                            <span className="font-bold text-[10px] md:text-xs uppercase tracking-wider">{opt.label}</span>
                                                            <div className={`absolute top-2 right-2 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${formData.ambition === opt.id ? 'border-accent-primary bg-accent-primary' : 'border-white/20'}`}>
                                                                {formData.ambition === opt.id && <Check size={10} className="text-white" strokeWidth={4} />}
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-xs font-mono text-accent-primary/60 uppercase tracking-[0.2em] mb-4">Défis à relever</h3>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {challengesList.map(opt => (
                                                        <button
                                                            key={opt.id}
                                                            onClick={() => toggleChallenge(opt.id)}
                                                            className={`p-3 rounded-lg border flex items-center gap-3 transition-all text-left relative ${formData.challenges.includes(opt.id) ? 'bg-accent-primary/10 border-accent-primary/50 text-white' : 'bg-white/5 border-white/10 text-secondary'}`}
                                                        >
                                                            <div className={`w-3 h-3 rounded-sm border flex items-center justify-center ${formData.challenges.includes(opt.id) ? 'border-accent-primary bg-accent-primary' : 'border-white/20'}`}>
                                                                {formData.challenges.includes(opt.id) && <Check size={8} className="text-white" strokeWidth={4} />}
                                                            </div>
                                                            <span className="text-xs font-medium">{opt.label}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {step === 3 && (
                                        <div className="space-y-6">
                                            <h3 className="text-2xl font-bold text-white mb-8">Horizon & Détails du projet</h3>
                                            <div className="space-y-6">
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                    {[
                                                        { id: "asap", label: "ASAP", desc: "< 1 mois" },
                                                        { id: "standard", label: "Relatif", desc: "1-3 mois" },
                                                        { id: "vision", label: "Vision", desc: "Long terme" }
                                                    ].map(opt => (
                                                        <button
                                                            key={opt.id}
                                                            onClick={() => setFormData({ ...formData, deadline: opt.id })}
                                                            className={`p-4 rounded-xl border flex flex-col items-center justify-center transition-all relative ${formData.deadline === opt.id ? 'bg-accent-primary border-accent-primary text-white shadow-[0_0_15px_rgba(0,112,243,0.3)]' : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'}`}
                                                        >
                                                            <span className="font-bold text-sm tracking-tight uppercase">{opt.label}</span>
                                                            <span className="text-[10px] opacity-60">{opt.desc}</span>
                                                            {formData.deadline === opt.id && (
                                                                <div className="absolute top-1 right-1">
                                                                    <Check size={10} strokeWidth={4} />
                                                                </div>
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-mono text-secondary/60 uppercase ml-1">Message optionnel</label>
                                                    <div className="relative">
                                                        <MessageSquare className="absolute left-4 top-5 text-accent-primary/50" size={18} />
                                                        <textarea
                                                            rows={4}
                                                            placeholder="Parlez-nous brièvement de votre vision..."
                                                            value={formData.message}
                                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                                            className="w-full bg-white/10 border border-white/5 rounded-xl p-4 pl-12 text-white focus:border-accent-primary/50 focus:bg-white/15 outline-none transition-all placeholder:text-white/20 resize-none"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="mt-12 flex items-center justify-between gap-4">
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
                                            disabled={isSubmitting || (step === 1 && !isStep1Valid)}
                                            className="v3-btn-init !scale-100 flex-1 md:flex-none md:min-w-[200px] flex items-center justify-center gap-3 disabled:opacity-30"
                                        >
                                            {isSubmitting ? (
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : step === totalSteps ? (
                                                <>Propulser la demande <Send size={18} /></>
                                            ) : (
                                                <>Suivant <ChevronRight size={18} /></>
                                            )}
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-accent-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-accent-primary/30">
                                        <Check className="text-accent-primary" size={40} strokeWidth={3} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Bien Reçu !</h3>
                                    <p className="text-secondary max-w-sm mx-auto">
                                        Merci {formData.name.split(' ')[0]}, votre demande est entre de bonnes mains. On vous rappelle très vite.
                                    </p>
                                    <button
                                        onClick={() => { setIsSuccess(false); setStep(1); setFormData(initialContactData); }}
                                        className="mt-8 text-accent-primary font-bold hover:text-white transition-colors"
                                    >
                                        Envoyer une autre demande
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
