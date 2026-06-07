import { CITIES, SERVICES, BRAND } from "@/lib/seo-dataset";
import { Navbar } from "@/components/layout/Navbar";
import { MapPin, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nos Implantations en France | Agence Digitale Exceed Digital",
    description: "Retrouvez l'ensemble de nos implantations et services de création de sites internet, référencement SEO, développement d'ERP et chatbots IA dans 250 villes de France.",
    alternates: {
        canonical: `https://${BRAND.domain}/implantations`,
    },
};

export default function ImplantationsPage() {
    // Group cities by their first letter (normalized to remove accents)
    const groups: Record<string, typeof CITIES> = {};
    
    // Sort cities by name first
    const sortedCities = [...CITIES].sort((a, b) => a.name.localeCompare(b.name, 'fr'));

    sortedCities.forEach((city) => {
        const firstLetter = city.name
            .charAt(0)
            .toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
        
        if (!groups[firstLetter]) {
            groups[firstLetter] = [];
        }
        groups[firstLetter].push(city);
    });

    const alphabet = Object.keys(groups).sort();

    return (
        <main className="w-full bg-[#050505] text-white min-h-screen pb-24 relative overflow-hidden">
            <Navbar isCompact={true} />

            {/* Embedded styles for beautiful glassmorphism and modern grids */}
            <style dangerouslySetInnerHTML={{ __html: `
                .imp-hero {
                    position: relative;
                    padding-top: 180px;
                    padding-bottom: 60px;
                    text-align: center;
                    background: radial-gradient(circle at top center, rgba(0,112,243,0.15) 0%, transparent 60%);
                }
                .imp-grid-bg {
                    position: absolute;
                    inset: 0;
                    background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
                    background-size: 40px 40px;
                    background-position: center top;
                    mask-image: linear-gradient(to bottom, black 50%, transparent);
                    pointer-events: none;
                }
                .imp-container {
                    max-w: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                    position: relative;
                    z-index: 10;
                }
                .imp-title {
                    font-size: clamp(2rem, 4vw, 3.5rem);
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: -0.03em;
                    line-height: 1.1;
                    margin-bottom: 24px;
                }
                .imp-subtitle {
                    font-size: clamp(1rem, 1.5vw, 1.25rem);
                    color: rgba(255, 255, 255, 0.6);
                    max-w: 800px;
                    margin: 0 auto 40px;
                    line-height: 1.6;
                }
                .alphabet-bar {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 8px;
                    margin-bottom: 60px;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 12px;
                    borderRadius: 20px;
                    backdrop-filter: blur(10px);
                }
                .alphabet-link {
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                    background: rgba(255, 255, 255, 0.05);
                    color: rgba(255, 255, 255, 0.8);
                    font-weight: 700;
                    font-size: 14px;
                    transition: all 0.2s ease;
                }
                .alphabet-link:hover {
                    background: #0070f3;
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 0 15px rgba(0, 112, 243, 0.4);
                }
                .letter-section {
                    margin-bottom: 60px;
                    scroll-margin-top: 100px;
                }
                .letter-header {
                    font-size: 3rem;
                    font-weight: 900;
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(0, 112, 243, 0.4);
                    margin-bottom: 30px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }
                .letter-header::after {
                    content: '';
                    flex: 1;
                    height: 1px;
                    background: linear-gradient(90deg, rgba(0, 112, 243, 0.3), transparent);
                }
                .cities-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 24px;
                }
                .city-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 24px;
                    padding: 24px;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .city-card:hover {
                    background: rgba(255, 255, 255, 0.04);
                    border-color: rgba(0, 112, 243, 0.3);
                    transform: translateY(-4px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                }
                .city-name {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .city-name svg {
                    color: #0070f3;
                }
                .services-list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    padding-top: 12px;
                }
                .service-link {
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.5);
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 6px 8px;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                }
                .service-link:hover {
                    color: #0070f3;
                    background: rgba(0, 112, 243, 0.08);
                    padding-left: 12px;
                }
                .service-link svg {
                    opacity: 0;
                    transform: translateX(-5px);
                    transition: all 0.2s ease;
                    color: #0070f3;
                }
                .service-link:hover svg {
                    opacity: 1;
                    transform: translateX(0);
                }
            ` }} />

            <div className="imp-hero">
                <div className="imp-grid-bg" />
                <div className="imp-container">
                    <h1 className="imp-title">
                        Nos <span className="text-gradient">Implantations locales</span>
                    </h1>
                    <p className="imp-subtitle">
                        Exceed Digital déploie ses services de création de sites web sur mesure, de référencement naturel (SEO), d'automatisation intelligente et de développement d'applications dans toute la France. Trouvez nos services dans votre commune.
                    </p>

                    {/* Alphabet quick navigation */}
                    <div className="alphabet-bar">
                        {alphabet.map((letter) => (
                            <a key={letter} href={`#letter-${letter}`} className="alphabet-link">
                                {letter}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="imp-container">
                {/* Render letters and grouped cities */}
                {alphabet.map((letter) => (
                    <section key={letter} id={`letter-${letter}`} className="letter-section">
                        <h2 className="letter-header">{letter}</h2>
                        
                        <div className="cities-grid">
                            {groups[letter].map((city) => (
                                <div key={city.slug} className="city-card">
                                    <h3 className="city-name">
                                        <MapPin size={18} />
                                        {city.name}
                                    </h3>
                                    
                                    <div className="services-list">
                                        {SERVICES.map((service) => (
                                            <Link
                                                key={service.key}
                                                href={`/${city.slug}/${service.key}`}
                                                className="service-link"
                                            >
                                                <span>{service.label}</span>
                                                <ExternalLink size={12} />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
