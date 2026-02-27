import type { Metadata } from "next";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

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
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
