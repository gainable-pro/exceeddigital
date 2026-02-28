"use client";
import { GsapReveal } from "@/components/ui/GsapReveal";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { Mail, Phone, Send } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="section-v3">
            <div className="v3-contact-grid">
                <GsapReveal delay={0.1}>
                    <div className="contact-info">
                        <h2 className="section-title-v3">
                            <TypewriterText text="PARLONS" delay={0.2} /><br />
                            <span className="text-gradient">
                                <TypewriterText text="PROJET" delay={0.8} />
                            </span>
                        </h2>
                        <p className="font-sora text-secondary mb-12">Donnez une nouvelle dimension à votre présence digitale.</p>

                        <div className="info-item">
                            <Mail className="icon" />
                            <span className="font-sora">contact@xceed-digital.com</span>
                        </div>
                        <div className="info-item">
                            <Phone className="icon" />
                            <span className="font-sora">+33 (0)6 12 34 56 78</span>
                        </div>
                    </div>
                </GsapReveal>

                <GsapReveal delay={0.2}>
                    <form className="v3-contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label className="font-mono">Full Name</label>
                            <input type="text" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label className="font-mono">Email ID</label>
                            <input type="email" placeholder="john@xceed.com" />
                        </div>
                        <div className="form-group">
                            <label className="font-mono">Message</label>
                            <textarea rows={4} placeholder="Your vision..." />
                        </div>
                        <button className="v3-btn-init w-full">Send Inquiry <Send size={14} /></button>
                    </form>
                </GsapReveal>
            </div>
        </section>
    );
}
