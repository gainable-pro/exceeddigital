// src/lib/seo-dataset.ts
export type City = {
    name: string;
    slug: string;
    insee: string;
};

export type Service = {
    key: "creation-site-web" | "seo" | "developpement-api" | "performance-web";
    label: string;
    intent: string;
};

export type Sector = {
    key: "btp" | "sante" | "restauration" | "industrie" | "services";
    label: string;
    bullets: {
        pour: string[];
        contre: string[];
        features: string[];
    };
};

export const BRAND = {
    name: "Exceed Digital",
    domain: "exceeddigital.fr",
    phone: "+33 6 15 62 21 88",
};

export const SERVICES: Service[] = [
    {
        key: "creation-site-web",
        label: "Création de site web",
        intent: "site vitrine ou corporate sur mesure, orienté conversion, SEO-ready, design premium",
    },
    {
        key: "seo",
        label: "SEO",
        intent: "référencement naturel local et national, contenu, technique, netlinking et suivi",
    },
    {
        key: "developpement-api",
        label: "Développement & intégration API",
        intent: "intégrations (CRM, paiement, ERP), automatisations, webhooks, data, sécurisation",
    },
    {
        key: "performance-web",
        label: "Performance web",
        intent: "Core Web Vitals, optimisation vitesse, Lighthouse, images, cache, architecture",
    },
];

export const SECTORS: Sector[] = [
    {
        key: "btp",
        label: "BTP",
        bullets: {
            features: [
                "Galerie de réalisations (avant/après)",
                "Formulaire devis qualifié + upload photos",
                "Pages services (isolation, rénovation, toiture, etc.)",
                "Avis & certifications (RGE, décennale, etc.)",
            ],
            pour: [
                "Génération de leads locaux",
                "Réassurance forte via réalisations",
                "SEO géolocalisé très rentable",
            ],
            contre: [
                "Forte concurrence sur les requêtes locales",
                "Besoin de contenu régulier (réalisations/actus)",
                "Perf mobile essentielle (beaucoup de trafic mobile)",
            ],
        },
    },
    {
        key: "sante",
        label: "Santé",
        bullets: {
            features: [
                "Prise de RDV (Doctolib / Calendly / API)",
                "Pages spécialités + parcours patient",
                "RGPD & sécurité (cookies, formulaires)",
                "FAQ rassurante et informations pratiques",
            ],
            pour: [
                "Notoriété locale + crédibilité",
                "Automatisation de la prise de RDV",
                "Réduction des appels non qualifiés",
            ],
            contre: [
                "Contraintes RGPD / contenu sensible",
                "Obligation de clarté et sobriété",
                "Besoin de mises à jour horaires/infos",
            ],
        },
    },
    {
        key: "restauration",
        label: "Restauration",
        bullets: {
            features: [
                "Menu digital optimisé SEO",
                "Réservation (TheFork / Zenchef / API)",
                "Click & collect / paiement",
                "Photos optimisées + Google Maps",
            ],
            pour: [
                "Augmentation des réservations directes",
                "Meilleure visibilité Google Maps",
                "Conversion rapide depuis mobile",
            ],
            contre: [
                "Photos de qualité indispensables",
                "Mises à jour fréquentes (menu/horaires)",
                "Charge/perf à surveiller sur mobile",
            ],
        },
    },
    {
        key: "industrie",
        label: "Industrie",
        bullets: {
            features: [
                "Pages solutions par métier (B2B)",
                "Téléchargements (PDF, fiches techniques)",
                "Lead magnets + CRM",
                "Multi-langue si besoin",
            ],
            pour: [
                "Cycle long : besoin d’un site très crédible",
                "SEO sur niches B2B performant",
                "Génération de leads qualifiés",
            ],
            contre: [
                "Contenus techniques à produire",
                "UX à travailler pour clarifier l’offre",
                "Intégrations CRM souvent nécessaires",
            ],
        },
    },
    {
        key: "services",
        label: "Services",
        bullets: {
            features: [
                "Pages offres packagées",
                "Prise de RDV / devis",
                "Études de cas",
                "Tracking conversion (GTM/GA4)",
            ],
            pour: [
                "Très bon ROI sur SEO local",
                "Conversion rapide",
                "Offres faciles à segmenter",
            ],
            contre: [
                "Marché souvent saturé",
                "Différenciation essentielle (preuves, cas)",
                "Risque de contenus trop génériques",
            ],
        },
    },
];

export const CITIES: City[] = [
    { name: "Paris", slug: "paris", insee: "75056" },
    { name: "Marseille", slug: "marseille", insee: "13055" },
    { name: "Lyon", slug: "lyon", insee: "69123" },
    { name: "Toulouse", slug: "toulouse", insee: "31555" },
    { name: "Nice", slug: "nice", insee: "06088" },
    { name: "Nantes", slug: "nantes", insee: "44109" },
    { name: "Montpellier", slug: "montpellier", insee: "34172" },
    { name: "Strasbourg", slug: "strasbourg", insee: "67482" },
    { name: "Bordeaux", slug: "bordeaux", insee: "33063" },
    { name: "Lille", slug: "lille", insee: "59350" },
    { name: "Rennes", slug: "rennes", insee: "35238" },
    { name: "Toulon", slug: "toulon", insee: "83137" },
    { name: "Reims", slug: "reims", insee: "51454" },
    { name: "Saint-Étienne", slug: "saint-etienne", insee: "42218" },
    { name: "Le Havre", slug: "le-havre", insee: "76351" },
    { name: "Villeurbanne", slug: "villeurbanne", insee: "69266" },
    { name: "Dijon", slug: "dijon", insee: "21231" },
    { name: "Angers", slug: "angers", insee: "49007" },
    { name: "Grenoble", slug: "grenoble", insee: "38185" },
    { name: "Saint-Denis (La Réunion)", slug: "saint-denis-reunion", insee: "97411" },
    { name: "Nîmes", slug: "nimes", insee: "30189" },
    { name: "Aix-en-Provence", slug: "aix-en-provence", insee: "13001" },
    { name: "Saint-Denis (93)", slug: "saint-denis-93", insee: "93066" },
    { name: "Clermont-Ferrand", slug: "clermont-ferrand", insee: "63113" },
    { name: "Le Mans", slug: "le-mans", insee: "72181" },
    { name: "Brest", slug: "brest", insee: "29019" },
    { name: "Tours", slug: "tours", insee: "37261" },
    { name: "Amiens", slug: "amiens", insee: "80021" },
    { name: "Annecy", slug: "annecy", insee: "74010" },
    { name: "Limoges", slug: "limoges", insee: "87085" },
    { name: "Metz", slug: "metz", insee: "57463" },
    { name: "Perpignan", slug: "perpignan", insee: "66136" },
    { name: "Boulogne-Billancourt", slug: "boulogne-billancourt", insee: "92012" },
    { name: "Besançon", slug: "besancon", insee: "25056" },
    { name: "Rouen", slug: "rouen", insee: "76540" },
    { name: "Orléans", slug: "orleans", insee: "45234" },
    { name: "Montreuil", slug: "montreuil", insee: "93048" },
    { name: "Caen", slug: "caen", insee: "14118" },
    { name: "Saint-Paul (La Réunion)", slug: "saint-paul-reunion", insee: "97415" },
    { name: "Argenteuil", slug: "argenteuil", insee: "95018" },
    { name: "Mulhouse", slug: "mulhouse", insee: "68224" },
    { name: "Nancy", slug: "nancy", insee: "54395" },
    { name: "Tourcoing", slug: "tourcoing", insee: "59599" },
    { name: "Roubaix", slug: "roubaix", insee: "59512" },
    { name: "Nanterre", slug: "nanterre", insee: "92050" },
    { name: "Vitry-sur-Seine", slug: "vitry-sur-seine", insee: "94081" },
    { name: "Asnières-sur-Seine", slug: "asnieres-sur-seine", insee: "92004" },
    { name: "Créteil", slug: "creteil", insee: "94028" },
    { name: "Avignon", slug: "avignon", insee: "84007" },
    { name: "Colombes", slug: "colombes", insee: "92025" },
    { name: "Poitiers", slug: "poitiers", insee: "86194" },
    { name: "Aubervilliers", slug: "aubervilliers", insee: "93001" },
    { name: "Aulnay-sous-Bois", slug: "aulnay-sous-bois", insee: "93005" },
    { name: "Dunkerque", slug: "dunkerque", insee: "59183" },
    { name: "Saint-Pierre (La Réunion)", slug: "saint-pierre-reunion", insee: "97416" },
    { name: "Versailles", slug: "versailles", insee: "78646" },
    { name: "Courbevoie", slug: "courbevoie", insee: "92026" },
    { name: "Rueil-Malmaison", slug: "rueil-malmaison", insee: "92063" },
    { name: "Le Tampon (La Réunion)", slug: "le-tampon", insee: "97422" },
    { name: "Béziers", slug: "beziers", insee: "34032" },
    { name: "Pau", slug: "pau", insee: "64445" },
    { name: "La Rochelle", slug: "la-rochelle", insee: "17300" },
    { name: "Cherbourg-en-Cotentin", slug: "cherbourg-en-cotentin", insee: "50129" },
    { name: "Mérignac", slug: "merignac", insee: "33281" },
    { name: "Champigny-sur-Marne", slug: "champigny-sur-marne", insee: "94017" },
    { name: "Antibes", slug: "antibes", insee: "06004" },
    { name: "Saint-Maur-des-Fossés", slug: "saint-maur-des-fosses", insee: "94068" },
    { name: "Ajaccio", slug: "ajaccio", insee: "2A004" },
    { name: "Fort-de-France", slug: "fort-de-france", insee: "97209" },
    { name: "Saint-Nazaire", slug: "saint-nazaire", insee: "44184" },
    { name: "Cannes", slug: "cannes", insee: "06029" },
    { name: "Noisy-le-Grand", slug: "noisy-le-grand", insee: "93051" },
    { name: "Drancy", slug: "drancy", insee: "93029" },
    { name: "Cergy", slug: "cergy", insee: "95127" },
    { name: "Levallois-Perret", slug: "levallois-perret", insee: "92044" },
    { name: "Issy-les-Moulineaux", slug: "issy-les-moulineaux", insee: "92040" },
    { name: "Calais", slug: "calais", insee: "62193" },
    { name: "Pessac", slug: "pessac", insee: "33318" },
    { name: "Colmar", slug: "colmar", insee: "68066" },
    { name: "Évry-Courcouronnes", slug: "evry-courcouronnes", insee: "91228" },
    { name: "Vénissieux", slug: "venissieux", insee: "69259" },
    { name: "Ivry-sur-Seine", slug: "ivry-sur-seine", insee: "94041" },
    { name: "Valence", slug: "valence", insee: "26362" },
    { name: "Clichy", slug: "clichy", insee: "92024" },
    { name: "Quimper", slug: "quimper", insee: "29232" },
    { name: "Antony", slug: "antony", insee: "92002" },
    { name: "Bourges", slug: "bourges", insee: "18033" },
    { name: "La Seyne-sur-Mer", slug: "la-seyne-sur-mer", insee: "83126" },
    { name: "Montauban", slug: "montauban", insee: "82121" },
    { name: "Villeneuve-d'Ascq", slug: "villeneuve-d-ascq", insee: "59009" },
    { name: "Cayenne", slug: "cayenne", insee: "97302" },
    { name: "Le Blanc-Mesnil", slug: "le-blanc-mesnil", insee: "93007" },
    { name: "Troyes", slug: "troyes", insee: "10387" },
    { name: "Pantin", slug: "pantin", insee: "93055" },
    { name: "Villejuif", slug: "villejuif", insee: "94076" },
    { name: "Chambéry", slug: "chambery", insee: "73065" },
    { name: "Niort", slug: "niort", insee: "79191" },
    { name: "Fréjus", slug: "frejus", insee: "83061" },
    { name: "Neuilly-sur-Seine", slug: "neuilly-sur-seine", insee: "92051" },
    { name: "Sarcelles", slug: "sarcelles", insee: "95585" },
];

export const TOP_20_SLUGS = [
    "paris", "lyon", "marseille", "toulouse", "nice", "nantes", "montpellier",
    "strasbourg", "bordeaux", "lille", "rennes", "toulon", "reims",
    "saint-etienne", "le-havre", "dijon", "angers", "grenoble", "nimes", "aix-en-provence"
];

export function getLocalFAQ(villeName: string, serviceLabel: string) {
    return [
        {
            q: `Pourquoi choisir Exceed Digital pour votre ${serviceLabel.toLowerCase()} à ${villeName} ?`,
            a: `Notre agence combine expertise technique de pointe et connaissance du marché de ${villeName} pour livrer des solutions qui génèrent un ROI mesurable.`
        },
        {
            q: `Quel est le délai pour un projet de ${serviceLabel.toLowerCase()} à ${villeName} ?`,
            a: `Le délai moyen constaté à ${villeName} est de 4 à 8 semaines, selon la complexité et les intégrations API requises.`
        },
        {
            q: `Accompagnez-vous les entreprises de ${villeName} sur le long terme ?`,
            a: `Absolument. Au-delà du lancement, nous assurons le suivi des performances, la maintenance technique et l'optimisation continue de votre SEO à ${villeName}.`
        },
        {
            q: `Votre solution de ${serviceLabel.toLowerCase()} est-elle adaptée au marché local de ${villeName} ?`,
            a: `Oui, chaque projet est personnalisé avec une analyse de la concurrence à ${villeName} pour vous garantir un avantage stratégique réel.`
        }
    ];
}

export function getNearbyCities(villeSlug: string) {
    const currentIndex = CITIES.findIndex(c => c.slug === villeSlug);
    // Simple heuristic: take the 3 next cities in the list for maillage
    return [
        CITIES[(currentIndex + 1) % CITIES.length],
        CITIES[(currentIndex + 2) % CITIES.length],
    ];
}

export function buildCanonical(path: string) {
    return `https://${BRAND.domain}${path}`;
}

export function buildPageId(opts: { ville: string; service: string; secteur?: string }) {
    return `page_${opts.ville}_${opts.service}${opts.secteur ? "_" + opts.secteur : ""}`;
}
