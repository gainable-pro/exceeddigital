import { GsapReveal } from "@/components/ui/GsapReveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="section-padding px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                    <GsapReveal delay={0.1} direction="left">
                        <div className="flex flex-col h-full">
                            <h2 className="text-6xl md:text-[9rem] leading-[0.8] mb-12">
                                PARLONS <br /> <span className="text-gradient">PROJET</span>
                            </h2>
                            <p className="text-xl text-slate-400 mb-16 leading-relaxed font-light font-sora max-w-md">
                                Donnez une nouvelle dimension à votre présence digitale. Nos experts vous accompagnent de la vision à l'impact.
                            </p>

                            <div className="space-y-12 flex-1">
                                <div className="flex items-center gap-8 group">
                                    <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-all duration-500">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold font-sora">EMAIL</p>
                                        <span className="text-xl font-sora">contact@xceed-digital.com</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8 group">
                                    <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-all duration-500">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold font-sora">PHONE</p>
                                        <span className="text-xl font-sora">+33 (0)6 12 34 56 78</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-24 pt-12 border-t border-white/5 opacity-40">
                                <p className="text-[10px] uppercase tracking-[0.4em] font-bold font-sora">XCEED DIGITAL EXPERIENCE &copy; 2026</p>
                            </div>
                        </div>
                    </GsapReveal>

                    <GsapReveal delay={0.2} direction="right">
                        <div className="bg-[var(--bg-soft)] p-12 md:p-16 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-primary)] opacity-[0.03] blur-[100px] pointer-events-none" />

                            <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-3">
                                        <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 font-sora">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-[var(--accent-primary)] transition-colors placeholder:text-white/10 font-sora" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 font-sora">Email ID</label>
                                        <input type="email" placeholder="john@xceed.com" className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-[var(--accent-primary)] transition-colors placeholder:text-white/10 font-sora" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 font-sora">Interested Service</label>
                                    <select className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-[var(--accent-primary)] transition-colors appearance-none font-sora">
                                        <option className="bg-[var(--bg-deep)]">High-End Development</option>
                                        <option className="bg-[var(--bg-deep)]">Performance Audit</option>
                                        <option className="bg-[var(--bg-deep)]">Brand Strategy</option>
                                        <option className="bg-[var(--bg-deep)]">Other Vision</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 font-sora">Message</label>
                                    <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-[var(--accent-primary)] transition-colors resize-none placeholder:text-white/10 font-sora"></textarea>
                                </div>
                                <button className="btn-primary w-full shadow-2xl group flex items-center justify-center gap-4">
                                    Send Inquiry <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </GsapReveal>
                </div>
            </div>
        </section>
    );
}
