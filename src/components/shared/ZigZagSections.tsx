"use client";

import Image from "next/image";
import { GsapReveal } from "@/components/ui/GsapReveal";
import { CheckCircle2 } from "lucide-react";

type ZigItem = {
    title: string;
    subtitle?: string;
    paragraphs: string[];
    bullets?: string[];
    image: { src: string; alt: string };
};

export function ZigZagSections({ items }: { items: ZigItem[] }) {
    return (
        <section className="section-v3 space-y-24">
            {items.map((it, idx) => {
                const reverse = idx % 2 === 1;
                return (
                    <div
                        key={it.title}
                        className={`v3-zigzag-item ${reverse ? "reverse" : ""}`}
                    >
                        <GsapReveal
                            direction={reverse ? "right" : "left"}
                            className="v3-zigzag-img-box"
                        >
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
                                <Image
                                    src={it.image.src}
                                    alt={it.image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority={idx === 0}
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-transparent mix-blend-overlay" />
                            </div>
                        </GsapReveal>

                        <GsapReveal
                            direction={reverse ? "left" : "right"}
                            delay={0.2}
                            className="v3-zigzag-content"
                        >
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">
                                    {it.title}
                                </h2>

                                {it.subtitle && (
                                    <p className="text-xl text-accent-primary/80 font-medium italic">
                                        {it.subtitle}
                                    </p>
                                )}

                                <div className="space-y-4">
                                    {it.paragraphs.map((p, i) => (
                                        <p key={i} className="text-lg leading-relaxed text-secondary opacity-90">
                                            {p}
                                        </p>
                                    ))}
                                </div>

                                {it.bullets && it.bullets.length > 0 && (
                                    <ul className="grid grid-cols-1 gap-4 mt-8">
                                        {it.bullets.map((b, i) => (
                                            <li key={i} className="flex items-start gap-3 text-secondary group">
                                                <CheckCircle2 className="text-accent-primary shrink-0 mt-1" size={20} />
                                                <span className="group-hover:text-white transition-colors">{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </GsapReveal>
                    </div>
                );
            })}
        </section>
    );
}
