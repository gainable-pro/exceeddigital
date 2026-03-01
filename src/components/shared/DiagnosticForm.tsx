"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Shield, Zap, Globe, Cpu } from "lucide-react";

interface DiagnosticFormProps {
    isOpen: boolean;
}

export function DiagnosticForm({ isOpen }: DiagnosticFormProps) {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        sector: "",
        challenges: [] as string[],
        goals: [] as string[],
        budget: "",
    });

    const sectors = ["E-commerce", "Restaurant", "Immobilier", "Santé", "Conseil", "Startup Tech", "Artisan", "Autre"];
    const challenges = ["Visibilité", "Conversion", "Automatisation", "Design", "Vitesse", "Sécurité", "Scalabilité", "Contenu"];

    const handleNext = async () => {
        if (step === 2) {
            setIsSubmitting(true);
            try {
                const response = await fetch('/api/audit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    setStep(3);
                } else {
                    alert("Une erreur est parvenue lors de l'envoi. Veuillez réessayer.");
                }
            } catch (error) {
                console.error("Submission error:", error);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setStep(s => Math.min(s + 1, 3));
        }
    };
    const handlePrev = () => setStep(s => Math.max(s - 1, 1));

    if (!isOpen) return null;

    return (
        <div className="v3-glass-form">
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="v3-form-header">
                            <div>
                                <h2 className="section-title-v3" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Votre Audit Stratégique</h2>
                                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem' }}>Commençons par les fondamentaux. Qui êtes-vous ?</p>
                            </div>
                            <div className="v3-step-info">
                                <span style={{ fontSize: '10px', fontWeight: 800, color: 'rgba(255,255,255,0.3)' }}>STEP 01/03</span>
                                <div className="v3-step-dot active"></div>
                                <div className="v3-step-dot"></div>
                                <div className="v3-step-dot"></div>
                            </div>
                        </div>

                        <div className="v3-input-grid">
                            <div className="v3-form-group">
                                <label className="v3-form-label">Nom Complet</label>
                                <input
                                    type="text"
                                    placeholder="VOTRE NOM"
                                    className="v3-form-input"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="v3-form-group">
                                <label className="v3-form-label">Email Professionnel</label>
                                <input
                                    type="email"
                                    placeholder="EMAIL@SOCIETE.FR"
                                    className="v3-form-input"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="v3-form-group" style={{ marginBottom: '3rem' }}>
                            <label className="v3-form-label">Nom de l'Entreprise</label>
                            <input
                                type="text"
                                placeholder="NOM DE VOTRE SOCIÉTÉ"
                                className="v3-form-input"
                                value={formData.company}
                                onChange={e => setFormData({ ...formData, company: e.target.value })}
                            />
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <h3 className="v3-form-label" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Secteur d'Activité</h3>
                            <div className="v3-sector-grid">
                                {sectors.map(s => (
                                    <button
                                        key={s}
                                        onClick={() => setFormData({ ...formData, sector: s })}
                                        className={`v3-sector-btn ${formData.sector === s ? 'active' : ''}`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="v3-form-footer">
                            <button className="v3-btn-submit" onClick={handleNext} style={{ width: '100%', flex: 'none' }} disabled={isSubmitting}>
                                {isSubmitting ? "Traitement..." : "Continuer l'Audit"} <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="v3-form-header">
                            <div>
                                <h2 className="section-title-v3" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Défis & Objectifs</h2>
                                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem' }}>Ciblez vos priorités pour une stratégie sur-mesure.</p>
                            </div>
                            <div className="v3-step-info">
                                <span style={{ fontSize: '10px', fontWeight: 800, color: 'rgba(255,255,255,0.3)' }}>STEP 02/03</span>
                                <div className="v3-step-dot active"></div>
                                <div className="v3-step-dot active"></div>
                                <div className="v3-step-dot"></div>
                            </div>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h3 className="v3-form-label" style={{ marginBottom: '1.5rem' }}>Défis Prioritaires</h3>
                            <div className="v3-sector-grid">
                                {challenges.map(c => (
                                    <button
                                        key={c}
                                        onClick={() => {
                                            const newChallenges = formData.challenges.includes(c)
                                                ? formData.challenges.filter(item => item !== c)
                                                : [...formData.challenges, c];
                                            setFormData({ ...formData, challenges: newChallenges });
                                        }}
                                        className={`v3-sector-btn ${formData.challenges.includes(c) ? 'active' : ''}`}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="v3-form-footer" style={{ flexDirection: 'row', gap: '1.5rem' }}>
                            <button className="v3-btn-nav v3-btn-prev" onClick={handlePrev} disabled={isSubmitting}>
                                <ArrowLeft size={16} /> Retour
                            </button>
                            <button className="v3-btn-nav v3-btn-next" onClick={handleNext} disabled={isSubmitting}>
                                {isSubmitting ? "Envoi en cours..." : "Continuer"} <ArrowRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'rgba(0, 112, 243, 0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 2rem',
                                color: '#0070f3',
                                border: '1px solid rgba(0, 112, 243, 0.2)'
                            }}>
                                <CheckCircle2 size={40} />
                            </div>
                            <h2 className="section-title-v3" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Prêt pour l'Excellence ?</h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
                                Votre profil a été analysé. Nos experts préparent votre stratégie personnalisée pour propulser votre business.
                            </p>

                            <div className="v3-input-grid" style={{ maxWidth: '600px', margin: '0 auto 4rem' }}>
                                <div className="v3-form-group" style={{ textAlign: 'center' }}>
                                    <Globe size={24} style={{ margin: '0 auto 1rem', color: '#0070f3' }} />
                                    <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5 }}>Analyse Web</span>
                                    <span style={{ fontWeight: 800 }}>OPTIMISÉE</span>
                                </div>
                                <div className="v3-form-group" style={{ textAlign: 'center' }}>
                                    <Cpu size={24} style={{ margin: '0 auto 1rem', color: '#0070f3' }} />
                                    <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5 }}>Système IA</span>
                                    <span style={{ fontWeight: 800 }}>CONFIGURÉ</span>
                                </div>
                            </div>

                            <button className="v3-btn-submit" style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }} onClick={() => window.location.href = '/'}>
                                Terminer la Session <Zap size={18} />
                            </button>
                        </div>
                    </motion.div >
                )
                }
            </AnimatePresence >
        </div >
    );
}
