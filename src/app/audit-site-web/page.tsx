"use client";

import { Navbar } from "@/components/layout/Navbar";
import { DiagnosticForm } from "@/components/shared/DiagnosticForm";
import React from "react";

export default function AuditPage() {
    return (
        <main className="min-h-screen bg-[#050505] relative overflow-x-hidden flex flex-col">
            <Navbar onAuditClick={() => { }} isCompact={true} />

            <div className="flex-1 relative flex items-center justify-center p-4 pt-[180px] md:pt-[220px] min-h-screen">
                {/* Background elements to maintain site style */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-primary/20 blur-[120px] rounded-full opacity-50" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-primary/10 blur-[120px] rounded-full opacity-30" />
                    <div
                        className="absolute inset-0 opacity-[0.15]"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }}
                    />
                </div>

                {/* The Audit Form centered block */}
                <div className="relative z-10 w-full flex justify-center py-12">
                    <DiagnosticForm isOpen={true} />
                </div>
            </div>
        </main>
    );
}
