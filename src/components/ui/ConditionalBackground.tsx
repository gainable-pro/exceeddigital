"use client";

import { usePathname } from "next/navigation";
import { BackgroundShell } from "./BackgroundShell";

export function ConditionalBackground() {
    const pathname = usePathname();
    const isAuditPage = pathname?.startsWith("/audit-site-web");

    if (isAuditPage) return null;
    return <BackgroundShell />;
}
