import type { Metadata } from "next";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ConditionalBackground } from "@/components/ui/ConditionalBackground";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";

export const metadata: Metadata = {
    title: "Xceed Digital — Premium Digital Agency Experience",
    description: "Stratégie, design et technologie pour transformer votre présence en ligne en moteur de croissance.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <head>
                <link rel="stylesheet" href="/app.css" />
                <link rel="stylesheet" href="/method_v31.css" />
                <link rel="stylesheet" href="/interactive_hub.css" />
            </head>
            <body>
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
