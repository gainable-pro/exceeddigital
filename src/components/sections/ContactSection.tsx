"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
                            PRÊT À <span className="text-gradient">XCEEDER</span> ?
                        </h2>
                        <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                            Discutons de votre projet et voyons comment nous pouvons transformer votre présence digitale en moteur de performance.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-10 h-10 glass flex items-center justify-center text-cyan-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span>contact@xceed-digital.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-10 h-10 glass flex items-center justify-center text-cyan-400">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span>+33 (0)6 12 34 56 78</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-10 h-10 glass flex items-center justify-center text-cyan-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span>Miramas, France (International Remote)</span>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Nom</label>
                                    <input type="text" placeholder="Votre nom" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Email</label>
                                    <input type="email" placeholder="votre@email.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Service souhaité</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none">
                                    <option>Création de site Web</option>
                                    <option>SEO / Acquisition</option>
                                    <option>Automatisation</option>
                                    <option>Autre</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Message</label>
                                <textarea rows={4} placeholder="Parlez-nous de votre projet..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"></textarea>
                            </div>
                            <button className="w-full py-4 bg-cyan-400 text-black font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-cyan-300 transition-colors">
                                Envoyer <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
