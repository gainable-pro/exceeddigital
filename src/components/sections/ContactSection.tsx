import { GsapReveal } from "@/components/ui/GsapReveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <GsapReveal delay={0.1} direction="left">
                        <div>
                            <h2 className="text-5xl md:text-8xl font-black mb-10 uppercase tracking-tighter leading-[0.9]">
                                PRÊT À <br /> <span className="text-gradient">XCEEDER</span> ?
                            </h2>
                            <p className="text-xl text-slate-400 mb-16 leading-relaxed font-light max-w-md">
                                Discutons de votre projet et voyons comment nous pouvons transformer votre présence digitale en moteur de performance.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6 text-slate-300 group">
                                    <div className="w-12 h-12 border border-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">contact@xceed-digital.com</span>
                                </div>
                                <div className="flex items-center gap-6 text-slate-300 group">
                                    <div className="w-12 h-12 border border-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">+33 (0)6 12 34 56 78</span>
                                </div>
                                <div className="flex items-center gap-6 text-slate-300 group">
                                    <div className="w-12 h-12 border border-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Miramas, France (Remote)</span>
                                </div>
                            </div>
                        </div>
                    </GsapReveal>

                    <GsapReveal delay={0.2} direction="right">
                        <div className="glass p-12 border border-white/5">
                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">Nom complet</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-white/5 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-white/10" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">Identifiant Email</label>
                                        <input type="email" placeholder="john@xceed.com" className="w-full bg-white/5 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-white/10" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">Service d'intérêt</label>
                                    <select className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none">
                                        <option className="bg-bg-deep">Design Immersif (Quantum)</option>
                                        <option className="bg-bg-deep">Performance & SEO</option>
                                        <option className="bg-bg-deep">Automatisation Core</option>
                                        <option className="bg-bg-deep">Autre Vision</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">Message</label>
                                    <textarea rows={4} placeholder="Parlez-nous de votre vision..." className="w-full bg-white/5 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none placeholder:text-white/10"></textarea>
                                </div>
                                <button className="w-full py-6 bg-white text-black font-black text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                    Initier le projet <Send className="w-3 h-3" />
                                </button>
                            </form>
                        </div>
                    </GsapReveal>
                </div>
            </div>
        </section>
    );
}
