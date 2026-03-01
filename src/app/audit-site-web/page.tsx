"use client";

import { Navbar } from "@/components/layout/Navbar";
import { DiagnosticForm } from "@/components/shared/DiagnosticForm";
import React from "react";

export default function AuditPage() {
    return (
        <main className="v3-audit-page">
            <Navbar onAuditClick={() => { }} isCompact={true} />

            {/* Immersive Background Shell (Optional, kept for depth) */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.08)_0%,transparent_70%)]" />
            </div>

            {/* Main Interactive Hub */}
            <div className="v3-interactive-hub">
                <DiagnosticForm isOpen={true} />
            </div>
        </main>
    );
}
