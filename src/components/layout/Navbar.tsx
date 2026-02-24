"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Méthode", href: "#method" },
    { name: "Blog", href: "#blog" },
];

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6"
        >
            <div className="glass px-8 py-3 flex items-center gap-12 glow-blue">
                <Link href="/" className="text-xl font-black tracking-tighter">
                    XCEED<span className="text-cyan-400">.</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <Link
                    href="#contact"
                    className="bg-white text-black px-5 py-1.5 rounded-full text-sm font-bold hover:scale-105 transition-transform"
                >
                    Audit Gratuit
                </Link>
            </div>
        </motion.nav>
    );
}
