import type { Metadata } from "next";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ConditionalBackground } from "@/components/ui/ConditionalBackground";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { BRAND } from "@/lib/seo-dataset";

export const metadata: Metadata = {
    title: "Exceed Digital — Agence Web, Référencement SEO & Solutions IA",
    description: "Conception de sites vitrines et e-commerce sur mesure, développement d'ERP, chatbots intelligents et stratégies d'acquisition locales.",
    metadataBase: new URL(`https://${BRAND.domain}`),
    verification: {
        google: "TD_a3pv1_mHcpbjG7E7AkEF87XR5fqpCu26JQ-tngV0",
    },
    alternates: {},
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <head>
                {/* Google Tag Manager - Replace GTM-XXXXXXX with real ID when provided */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-PRO');`,
                    }}
                />
                <link rel="stylesheet" href="/app.css" />
                <link rel="stylesheet" href="/method_v31.css" />
                <link rel="stylesheet" href="/interactive_hub.css" />

                {/* Organization Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": BRAND.name,
                            "url": `https://${BRAND.domain}`,
                            "logo": `https://${BRAND.domain}/assets/logo.png`,
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": BRAND.phone,
                                "contactType": "customer service"
                            }
                        }),
                    }}
                />
            </head>
            <body>
                {/* GTM (noscript) */}
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PRO" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
                </noscript>

                <ConditionalBackground />
                <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh' }}>
                    <SmoothScroll>
                        {children}
                        <ConditionalFooter />
                    </SmoothScroll>
                </div>
            </body>
        </html>
    );
}
