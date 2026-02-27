"use client";

import dynamic from "next/dynamic";

const QuantumBackground = dynamic(() => import("@/components/ui/QuantumBackground"), { ssr: false });

export function BackgroundShell() {
    return <QuantumBackground />;
}
