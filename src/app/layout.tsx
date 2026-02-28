import type { Metadata } from "next";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { BackgroundShell } from "@/components/ui/BackgroundShell";
import { FloatingDiagnostic } from "@/components/shared/FloatingDiagnostic";
import { Footer } from "@/components/layout/Footer";

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
            </head>
            <body>
                <BackgroundShell />
                <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh' }}>
                    <SmoothScroll>
                        {children}
                        <Footer />
                    </SmoothScroll>
                </div>
            </body>
        </html>
    );
}
