"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquarePlus, Sparkles, X } from "lucide-react";
import { DiagnosticForm } from "./DiagnosticForm";

export function FloatingDiagnostic() {
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);

    return (
        <>
            <div className="fixed bottom-8 right-8 z-[90] flex flex-col items-end gap-4">
                <AnimatePresence>
                    {showTooltip && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 10 }}
                            className="bg-accent-primary text-white p-4 rounded-2xl shadow-2xl relative mb-2 max-w-[200px]"
                        >
                            <button
                                onClick={() => setShowTooltip(false)}
                                className="absolute -top-2 -right-2 bg-bg-deep text-white rounded-full p-1 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <X size={12} />
                            </button>
                            <div className="flex items-center gap-2 mb-1">
                                <Sparkles size={16} className="text-white/80" />
                                <span className="text-xs font-bold uppercase tracking-wider">Offert</span>
                            </div>
                            <p className="text-sm font-medium leading-tight">Obtenez votre diagnostic digital gratuit en 2 min.</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsOpen(true)}
                    className="relative group p-4 bg-accent-primary rounded-full shadow-[0_0_30px_rgba(0,112,243,0.5)] hover:scale-110 active:scale-95 transition-all outline-none"
                    aria-label="Lancer le diagnostic"
                >
                    <div className="absolute inset-0 bg-accent-primary rounded-full animate-ping opacity-25 group-hover:hidden" />
                    <MessageSquarePlus className="text-white relative z-10" size={32} />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <DiagnosticForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
                )}
            </AnimatePresence>
        </>
    );
}
