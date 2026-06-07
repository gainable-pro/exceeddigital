import type { Metadata } from "next";
import WebSeoServicePageClient from "./page-client";
import { BRAND } from "@/lib/seo-dataset";

export const metadata: Metadata = {
    title: "Création de site internet & Performance SEO | Exceed Digital",
    description: "Conception de sites vitrines et e-commerce sur mesure, ultra-rapides et optimisés pour le référencement naturel. Boostez votre trafic et vos ventes.",
    openGraph: {
        title: "Création de site internet & Performance SEO | Exceed Digital",
        description: "Conception de sites vitrines et e-commerce sur mesure, ultra-rapides et optimisés pour le référencement naturel. Boostez votre trafic et vos ventes.",
        url: `https://${BRAND.domain}/services/creation-site-web-seo`,
        type: "website",
    },
};

export default function WebSeoServicePage() {
    return <WebSeoServicePageClient />;
}
