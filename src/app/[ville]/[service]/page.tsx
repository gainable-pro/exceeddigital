import { CITIES, SERVICES, BRAND, buildCanonical, buildPageId, getLocalFAQ, getNearbyCities, getGeoDetails, getServiceSections } from "@/lib/seo-dataset";
import { ZigZagSections } from "@/components/shared/ZigZagSections";
import { Navbar } from "@/components/layout/Navbar";
import { ArrowRight, Phone, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

type PageProps = {
    params: Promise<{ ville: string; service: string }>;
};

function getCity(villeSlug: string) {
    return CITIES.find((c) => c.slug === villeSlug);
}

function getService(serviceKey: string) {
    return SERVICES.find((s) => s.key === serviceKey);
}

export async function generateStaticParams() {
    return CITIES.flatMap((city) =>
        SERVICES.map((s) => ({
            ville: city.slug,
            service: s.key,
        }))
    );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { ville, service: serviceKey } = await params;
    const city = getCity(ville);
    const service = getService(serviceKey);

    const villeName = city?.name ?? ville;
    const serviceLabel = service?.label ?? serviceKey;
    const geo = city ? getGeoDetails(city.insee) : null;
    
    // Safely extract department number in parentheses
    const deptMatch = geo?.dept.match(/\(([^)]+)\)/);
    const deptNum = deptMatch ? deptMatch[1] : (city ? city.insee.substring(0, 2) : "");
    const location = deptNum ? `${villeName} (${deptNum})` : villeName;

    const path = `/${ville}/${serviceKey}`;
    return {
        title: `${serviceLabel} à ${location} | ${BRAND.name}`,
        description: `Expert en ${serviceLabel.toLowerCase()} à ${location}. Solutions sur mesure, performance technique et stratégie d'acquisition ROI pour entreprises dans le ${geo?.dept || location}.`,
        alternates: { canonical: buildCanonical(path) },
        robots: { index: true, follow: true },
        openGraph: {
            title: `${serviceLabel} à ${location} | ${BRAND.name}`,
            description: `Agence digitale à ${location} spécialisée en ${serviceLabel.toLowerCase()}. Propulsez votre croissance locale dans le ${geo?.dept || location}.`,
            url: buildCanonical(path),
            type: "website",
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { ville, service: serviceKey } = await params;
    const city = getCity(ville);
    const service = getService(serviceKey);

    const villeName = city?.name ?? ville;
    const serviceLabel = service?.label ?? serviceKey;

    const faqs = getLocalFAQ(villeName, serviceLabel);
    const nearCities = getNearbyCities(ville);

    const zigItems = city ? getServiceSections(serviceKey, city) : [];

    return (
        <main className="w-full">
            <Navbar />

            {/* LOCAL HERO */}
            <section className="v3-hero relative !min-h-[60vh] pt-32">
                <div className="v3-hero-grid opacity-20" />
                <div className="v3-hero-content">
                    <div className="v3-hero-badge">
                        <span className="dot" />
                        Expertise Locale — {villeName}
                    </div>
                    <h1 className="v3-hero-title">
                        <span className="white">{serviceLabel.toUpperCase()}</span><br />
                        <span className="text-gradient">À {villeName.toUpperCase()}</span>
                    </h1>
                    <p className="v3-hero-desc !max-w-3xl">
                        {BRAND.name} accompagne les entreprises de **{villeName}** dans leur transformation numérique. {service?.intent}.
                    </p>
                </div>
            </section>

            {/* DYNAMIC SECTIONS */}
            <ZigZagSections items={zigItems} />

            {/* FAQ LOCALE */}
            <section className="section-v3 bg-soft/5">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="section-title-v3 !text-3xl text-center mb-16">Questions fréquentes <br /><span className="text-gradient">à {villeName}</span></h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-glass-bg border border-glass-border hover:border-accent-primary/30 transition-all">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-start gap-3">
                                    <CheckCircle2 className="text-accent-primary shrink-0 mt-1" size={20} />
                                    {faq.q}
                                </h3>
                                <p className="text-secondary leading-relaxed pl-8">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MAILLAGE INTERNE (Villes proches) */}
            <section className="section-v3 border-t border-glass-border">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 uppercase">Projets digitaux <span className="text-accent-primary">proches de {villeName}</span></h2>
                            <div className="flex flex-wrap gap-4">
                                {nearCities.map((c) => (
                                    <Link
                                        key={c.slug}
                                        href={`/${c.slug}/${serviceKey}`}
                                        className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-primary/50 hover:bg-white/10 transition-all group"
                                    >
                                        <MapPin size={18} className="text-secondary group-hover:text-accent-primary transition-colors" />
                                        <span className="font-semibold">{serviceLabel} {c.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="bg-accent-primary/5 p-8 rounded-3xl border border-accent-primary/20">
                            <h3 className="text-xl font-bold text-white mb-4 italic">Vision Globale</h3>
                            <p className="text-secondary mb-6">Explorez notre expertise complète en {serviceLabel.toLowerCase()} au-delà du niveau local.</p>
                            <Link href={`/services/${
                                serviceKey === 'creation-site-web-seo' || serviceKey === 'acquisition-clients'
                                    ? 'creation-site-web-seo'
                                    : serviceKey === 'developpement-sur-mesure' || serviceKey === 'methodes-dev-coaching'
                                    ? 'erp-plateformes'
                                    : serviceKey === 'automatisation-ia'
                                    ? 'chatbot-automatisation'
                                    : 'creation-site-web-seo'
                            }`} className="text-accent-primary font-bold hover:underline flex items-center gap-2">
                                Voir la page pilier {serviceLabel} <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* LOCAL CTA BAR */}
            <section className="section-v3" id="contact-cta">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-glass-bg border border-glass-border rounded-[2.5rem] p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="max-w-xl text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
                                    Prêt à dominer le marché à {villeName} ?
                                </h2>
                                <p className="text-secondary text-lg leading-relaxed">
                                    Discutons de vos objectifs et mettons en place la stratégie qui propulsera votre activité locale à {villeName}.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-accent-primary rounded-full text-white font-extrabold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,112,243,0.3)]"
                                >
                                    Lancer mon projet <ArrowRight size={20} />
                                </Link>
                                <a
                                    href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                                >
                                    <Phone size={18} /> {BRAND.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* JSON-LD SCHEMAS */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "@id": `https://${BRAND.domain}/#local-business-${ville}`,
                            "name": `${BRAND.name} ${villeName}`,
                            "image": `https://${BRAND.domain}/assets/expertise/web.png`,
                            "url": `https://${BRAND.domain}/${ville}/${serviceKey}`,
                            "telephone": BRAND.phone,
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": villeName,
                                "addressCountry": "FR"
                            },
                            "areaServed": {
                                "@type": "City",
                                "name": villeName
                            },
                            "serviceType": serviceLabel,
                            "description": `Agence digitale à ${villeName} spécialisée en ${serviceLabel.toLowerCase()}.`
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Accueil",
                                    "item": `https://${BRAND.domain}/`
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": villeName,
                                    "item": `https://${BRAND.domain}/${ville}/${serviceKey}`
                                }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqs.map(f => ({
                                "@type": "Question",
                                "name": f.q,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": f.a
                                }
                            }))
                        }
                    ]),
                }}
            />
        </main>
    );
}
