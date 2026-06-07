import type { Metadata } from "next";
import HomeClient from "./page-client";
import { BRAND } from "@/lib/seo-dataset";

export const metadata: Metadata = {
    title: "Exceed Digital | Agence Web, Référencement SEO & Solutions IA",
    description: "Création de sites internet sur mesure, développement d'applications web/ERP, intégration de chatbots IA et stratégies d'acquisition locales.",
    openGraph: {
        title: "Exceed Digital | Agence Web, Référencement SEO & Solutions IA",
        description: "Création de sites internet sur mesure, développement d'applications web/ERP, intégration de chatbots IA et stratégies d'acquisition locales.",
        url: `https://${BRAND.domain}`,
        type: "website",
    },
};

export default function Home() {
    return <HomeClient />;
}
