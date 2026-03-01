"use client";

import { DiagnosticForm } from "@/components/shared/DiagnosticForm";
import React from "react";

export default function AuditPage() {
    return (
        <main className="min-h-screen bg-[#050505] relative overflow-hidden flex items-center justify-center">
            {/* Background elements to maintain site style */}
            <div className="absolute top-0 left-0 w-full h-full">
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

            {/* The Audit Form will handle its own centering and backdrop */}
            <DiagnosticForm isOpen={true} />
        </main>
    );
}
