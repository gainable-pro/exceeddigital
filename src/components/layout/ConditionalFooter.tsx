"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export function ConditionalFooter() {
    const pathname = usePathname();
    const isAuditPage = pathname?.startsWith("/audit-site-web");

    if (isAuditPage) return null;
    return <Footer />;
}
