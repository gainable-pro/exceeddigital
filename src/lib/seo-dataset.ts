// src/lib/seo-dataset.ts
export type City = {
    name: string;
    slug: string;
    insee: string;
};

export type Service = {
    key: "creation-site-web-seo" | "automatisation-ia" | "developpement-sur-mesure" | "methodes-dev-coaching" | "acquisition-clients";
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
    domain: "www.exceeddigital.fr",
    phone: "06 63 94 57 42",
};

export const SERVICES: Service[] = [
    {
        key: "creation-site-web-seo",
        label: "Création de site web & SEO",
        intent: "conception de sites vitrines et corporate sur mesure, ultra-rapides, optimisés pour la conversion et le référencement naturel",
    },
    {
        key: "automatisation-ia",
        label: "Automatisation & Chatbot IA",
        intent: "intégration d'intelligence artificielle, création de chatbots intelligents 24/7 et automatisation de vos workflows d'entreprise",
    },
    {
        key: "developpement-sur-mesure",
        label: "Application, ERP & SaaS sur mesure",
        intent: "conception de logiciels personnalisés, d'ERP sur mesure et d'applications web robustes adaptées à vos processus métiers",
    },
    {
        key: "methodes-dev-coaching",
        label: "Coaching & Méthodes de développement",
        intent: "accompagnement technique, formation de vos équipes de dev aux meilleures pratiques, clean code, tests et intégration continue",
    },
    {
        key: "acquisition-clients",
        label: "Acquisition de clients",
        intent: "mise en place de tunnels de conversion, campagnes publicitaires ciblées (Google/Facebook Ads) et croissance de votre trafic qualifié",
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
    {
        "name": "Paris",
        "slug": "paris",
        "insee": "75056"
    },
    {
        "name": "Marseille",
        "slug": "marseille",
        "insee": "13055"
    },
    {
        "name": "Lyon",
        "slug": "lyon",
        "insee": "69123"
    },
    {
        "name": "Toulouse",
        "slug": "toulouse",
        "insee": "31555"
    },
    {
        "name": "Nice",
        "slug": "nice",
        "insee": "06088"
    },
    {
        "name": "Nantes",
        "slug": "nantes",
        "insee": "44109"
    },
    {
        "name": "Montpellier",
        "slug": "montpellier",
        "insee": "34172"
    },
    {
        "name": "Strasbourg",
        "slug": "strasbourg",
        "insee": "67482"
    },
    {
        "name": "Bordeaux",
        "slug": "bordeaux",
        "insee": "33063"
    },
    {
        "name": "Lille",
        "slug": "lille",
        "insee": "59350"
    },
    {
        "name": "Rennes",
        "slug": "rennes",
        "insee": "35238"
    },
    {
        "name": "Toulon",
        "slug": "toulon",
        "insee": "83137"
    },
    {
        "name": "Reims",
        "slug": "reims",
        "insee": "51454"
    },
    {
        "name": "Saint-Étienne",
        "slug": "saint-etienne",
        "insee": "42218"
    },
    {
        "name": "Le Havre",
        "slug": "le-havre",
        "insee": "76351"
    },
    {
        "name": "Villeurbanne",
        "slug": "villeurbanne",
        "insee": "69266"
    },
    {
        "name": "Dijon",
        "slug": "dijon",
        "insee": "21231"
    },
    {
        "name": "Angers",
        "slug": "angers",
        "insee": "49007"
    },
    {
        "name": "Grenoble",
        "slug": "grenoble",
        "insee": "38185"
    },
    {
        "name": "Saint-Denis",
        "slug": "saint-denis",
        "insee": "97411"
    },
    {
        "name": "Nîmes",
        "slug": "nimes",
        "insee": "30189"
    },
    {
        "name": "Aix-en-Provence",
        "slug": "aix-en-provence",
        "insee": "13001"
    },
    {
        "name": "Saint-Denis",
        "slug": "saint-denis",
        "insee": "93066"
    },
    {
        "name": "Clermont-Ferrand",
        "slug": "clermont-ferrand",
        "insee": "63113"
    },
    {
        "name": "Le Mans",
        "slug": "le-mans",
        "insee": "72181"
    },
    {
        "name": "Brest",
        "slug": "brest",
        "insee": "29019"
    },
    {
        "name": "Tours",
        "slug": "tours",
        "insee": "37261"
    },
    {
        "name": "Amiens",
        "slug": "amiens",
        "insee": "80021"
    },
    {
        "name": "Annecy",
        "slug": "annecy",
        "insee": "74010"
    },
    {
        "name": "Limoges",
        "slug": "limoges",
        "insee": "87085"
    },
    {
        "name": "Metz",
        "slug": "metz",
        "insee": "57463"
    },
    {
        "name": "Perpignan",
        "slug": "perpignan",
        "insee": "66136"
    },
    {
        "name": "Boulogne-Billancourt",
        "slug": "boulogne-billancourt",
        "insee": "92012"
    },
    {
        "name": "Besançon",
        "slug": "besancon",
        "insee": "25056"
    },
    {
        "name": "Rouen",
        "slug": "rouen",
        "insee": "76540"
    },
    {
        "name": "Orléans",
        "slug": "orleans",
        "insee": "45234"
    },
    {
        "name": "Montreuil",
        "slug": "montreuil",
        "insee": "93048"
    },
    {
        "name": "Caen",
        "slug": "caen",
        "insee": "14118"
    },
    {
        "name": "Saint-Paul",
        "slug": "saint-paul",
        "insee": "97415"
    },
    {
        "name": "Argenteuil",
        "slug": "argenteuil",
        "insee": "95018"
    },
    {
        "name": "Mulhouse",
        "slug": "mulhouse",
        "insee": "68224"
    },
    {
        "name": "Nancy",
        "slug": "nancy",
        "insee": "54395"
    },
    {
        "name": "Tourcoing",
        "slug": "tourcoing",
        "insee": "59599"
    },
    {
        "name": "Roubaix",
        "slug": "roubaix",
        "insee": "59512"
    },
    {
        "name": "Nanterre",
        "slug": "nanterre",
        "insee": "92050"
    },
    {
        "name": "Vitry-sur-Seine",
        "slug": "vitry-sur-seine",
        "insee": "94081"
    },
    {
        "name": "Asnières-sur-Seine",
        "slug": "asnieres-sur-seine",
        "insee": "92004"
    },
    {
        "name": "Créteil",
        "slug": "creteil",
        "insee": "94028"
    },
    {
        "name": "Avignon",
        "slug": "avignon",
        "insee": "84007"
    },
    {
        "name": "Colombes",
        "slug": "colombes",
        "insee": "92025"
    },
    {
        "name": "Poitiers",
        "slug": "poitiers",
        "insee": "86194"
    },
    {
        "name": "Aubervilliers",
        "slug": "aubervilliers",
        "insee": "93001"
    },
    {
        "name": "Aulnay-sous-Bois",
        "slug": "aulnay-sous-bois",
        "insee": "93005"
    },
    {
        "name": "Dunkerque",
        "slug": "dunkerque",
        "insee": "59183"
    },
    {
        "name": "Nouméa",
        "slug": "noumea",
        "insee": "98818"
    },
    {
        "name": "Saint-Pierre",
        "slug": "saint-pierre",
        "insee": "97416"
    },
    {
        "name": "Versailles",
        "slug": "versailles",
        "insee": "78646"
    },
    {
        "name": "Courbevoie",
        "slug": "courbevoie",
        "insee": "92026"
    },
    {
        "name": "Rueil-Malmaison",
        "slug": "rueil-malmaison",
        "insee": "92063"
    },
    {
        "name": "Le Tampon",
        "slug": "le-tampon",
        "insee": "97422"
    },
    {
        "name": "Béziers",
        "slug": "beziers",
        "insee": "34032"
    },
    {
        "name": "Pau",
        "slug": "pau",
        "insee": "64445"
    },
    {
        "name": "La Rochelle",
        "slug": "la-rochelle",
        "insee": "17300"
    },
    {
        "name": "Cherbourg-en-Cotentin",
        "slug": "cherbourg-en-cotentin",
        "insee": "50129"
    },
    {
        "name": "Mérignac",
        "slug": "merignac",
        "insee": "33281"
    },
    {
        "name": "Champigny-sur-Marne",
        "slug": "champigny-sur-marne",
        "insee": "94017"
    },
    {
        "name": "Antibes",
        "slug": "antibes",
        "insee": "06004"
    },
    {
        "name": "Saint-Maur-des-Fossés",
        "slug": "saint-maur-des-fosses",
        "insee": "94068"
    },
    {
        "name": "Ajaccio",
        "slug": "ajaccio",
        "insee": "2A004"
    },
    {
        "name": "Fort-de-France",
        "slug": "fort-de-france",
        "insee": "97209"
    },
    {
        "name": "Saint-Nazaire",
        "slug": "saint-nazaire",
        "insee": "44184"
    },
    {
        "name": "Cannes",
        "slug": "cannes",
        "insee": "06029"
    },
    {
        "name": "Noisy-le-Grand",
        "slug": "noisy-le-grand",
        "insee": "93051"
    },
    {
        "name": "Drancy",
        "slug": "drancy",
        "insee": "93029"
    },
    {
        "name": "Mamoudzou",
        "slug": "mamoudzou",
        "insee": "97611"
    },
    {
        "name": "Cergy",
        "slug": "cergy",
        "insee": "95127"
    },
    {
        "name": "Levallois-Perret",
        "slug": "levallois-perret",
        "insee": "92044"
    },
    {
        "name": "Issy-les-Moulineaux",
        "slug": "issy-les-moulineaux",
        "insee": "92040"
    },
    {
        "name": "Calais",
        "slug": "calais",
        "insee": "62193"
    },
    {
        "name": "Pessac",
        "slug": "pessac",
        "insee": "33318"
    },
    {
        "name": "Colmar",
        "slug": "colmar",
        "insee": "68066"
    },
    {
        "name": "Évry-Courcouronnes",
        "slug": "evry-courcouronnes",
        "insee": "91228"
    },
    {
        "name": "Vénissieux",
        "slug": "venissieux",
        "insee": "69259"
    },
    {
        "name": "Ivry-sur-Seine",
        "slug": "ivry-sur-seine",
        "insee": "94041"
    },
    {
        "name": "Valence",
        "slug": "valence",
        "insee": "26362"
    },
    {
        "name": "Clichy",
        "slug": "clichy",
        "insee": "92024"
    },
    {
        "name": "Quimper",
        "slug": "quimper",
        "insee": "29232"
    },
    {
        "name": "Antony",
        "slug": "antony",
        "insee": "92002"
    },
    {
        "name": "Bourges",
        "slug": "bourges",
        "insee": "18033"
    },
    {
        "name": "La Seyne-sur-Mer",
        "slug": "la-seyne-sur-mer",
        "insee": "83126"
    },
    {
        "name": "Montauban",
        "slug": "montauban",
        "insee": "82121"
    },
    {
        "name": "Villeneuve-d'Ascq",
        "slug": "villeneuve-d-ascq",
        "insee": "59009"
    },
    {
        "name": "Cayenne",
        "slug": "cayenne",
        "insee": "97302"
    },
    {
        "name": "Le Blanc-Mesnil",
        "slug": "le-blanc-mesnil",
        "insee": "93007"
    },
    {
        "name": "Troyes",
        "slug": "troyes",
        "insee": "10387"
    },
    {
        "name": "Pantin",
        "slug": "pantin",
        "insee": "93055"
    },
    {
        "name": "Villejuif",
        "slug": "villejuif",
        "insee": "94076"
    },
    {
        "name": "Chambéry",
        "slug": "chambery",
        "insee": "73065"
    },
    {
        "name": "Niort",
        "slug": "niort",
        "insee": "79191"
    },
    {
        "name": "Fréjus",
        "slug": "frejus",
        "insee": "83061"
    },
    {
        "name": "Neuilly-sur-Seine",
        "slug": "neuilly-sur-seine",
        "insee": "92051"
    },
    {
        "name": "Sarcelles",
        "slug": "sarcelles",
        "insee": "95585"
    },
    {
        "name": "Saint-André",
        "slug": "saint-andre",
        "insee": "97409"
    },
    {
        "name": "Clamart",
        "slug": "clamart",
        "insee": "92023"
    },
    {
        "name": "Lorient",
        "slug": "lorient",
        "insee": "56121"
    },
    {
        "name": "Narbonne",
        "slug": "narbonne",
        "insee": "11262"
    },
    {
        "name": "Bobigny",
        "slug": "bobigny",
        "insee": "93008"
    },
    {
        "name": "Meaux",
        "slug": "meaux",
        "insee": "77284"
    },
    {
        "name": "Maisons-Alfort",
        "slug": "maisons-alfort",
        "insee": "94046"
    },
    {
        "name": "Hyères",
        "slug": "hyeres",
        "insee": "83069"
    },
    {
        "name": "Vannes",
        "slug": "vannes",
        "insee": "56260"
    },
    {
        "name": "Beauvais",
        "slug": "beauvais",
        "insee": "60057"
    },
    {
        "name": "Saint-Louis",
        "slug": "saint-louis",
        "insee": "97414"
    },
    {
        "name": "La Roche-sur-Yon",
        "slug": "la-roche-sur-yon",
        "insee": "85191"
    },
    {
        "name": "Chelles",
        "slug": "chelles",
        "insee": "77108"
    },
    {
        "name": "Corbeil-Essonnes",
        "slug": "corbeil-essonnes",
        "insee": "91174"
    },
    {
        "name": "Saint-Laurent-du-Maroni",
        "slug": "saint-laurent-du-maroni",
        "insee": "97311"
    },
    {
        "name": "Cholet",
        "slug": "cholet",
        "insee": "49099"
    },
    {
        "name": "Bayonne",
        "slug": "bayonne",
        "insee": "64102"
    },
    {
        "name": "Fontenay-sous-Bois",
        "slug": "fontenay-sous-bois",
        "insee": "94033"
    },
    {
        "name": "Saint-Ouen-sur-Seine",
        "slug": "saint-ouen-sur-seine",
        "insee": "93070"
    },
    {
        "name": "Cagnes-sur-Mer",
        "slug": "cagnes-sur-mer",
        "insee": "06027"
    },
    {
        "name": "Vaulx-en-Velin",
        "slug": "vaulx-en-velin",
        "insee": "69256"
    },
    {
        "name": "Épinay-sur-Seine",
        "slug": "epinay-sur-seine",
        "insee": "93031"
    },
    {
        "name": "Saint-Quentin",
        "slug": "saint-quentin",
        "insee": "02691"
    },
    {
        "name": "Sartrouville",
        "slug": "sartrouville",
        "insee": "78586"
    },
    {
        "name": "Sevran",
        "slug": "sevran",
        "insee": "93071"
    },
    {
        "name": "Arles",
        "slug": "arles",
        "insee": "13004"
    },
    {
        "name": "Massy",
        "slug": "massy",
        "insee": "91377"
    },
    {
        "name": "Albi",
        "slug": "albi",
        "insee": "81004"
    },
    {
        "name": "Les Abymes",
        "slug": "les-abymes",
        "insee": "97101"
    },
    {
        "name": "Gennevilliers",
        "slug": "gennevilliers",
        "insee": "92036"
    },
    {
        "name": "Saint-Herblain",
        "slug": "saint-herblain",
        "insee": "44162"
    },
    {
        "name": "Grasse",
        "slug": "grasse",
        "insee": "06069"
    },
    {
        "name": "Bondy",
        "slug": "bondy",
        "insee": "93010"
    },
    {
        "name": "Les Sables-d'Olonne",
        "slug": "les-sables-d-olonne",
        "insee": "85194"
    },
    {
        "name": "Laval",
        "slug": "laval",
        "insee": "53130"
    },
    {
        "name": "Évreux",
        "slug": "evreux",
        "insee": "27229"
    },
    {
        "name": "Saint-Priest",
        "slug": "saint-priest",
        "insee": "69290"
    },
    {
        "name": "Suresnes",
        "slug": "suresnes",
        "insee": "92073"
    },
    {
        "name": "Martigues",
        "slug": "martigues",
        "insee": "13056"
    },
    {
        "name": "Vincennes",
        "slug": "vincennes",
        "insee": "94080"
    },
    {
        "name": "Aubagne",
        "slug": "aubagne",
        "insee": "13005"
    },
    {
        "name": "Saint-Malo",
        "slug": "saint-malo",
        "insee": "35288"
    },
    {
        "name": "Livry-Gargan",
        "slug": "livry-gargan",
        "insee": "93046"
    },
    {
        "name": "Blois",
        "slug": "blois",
        "insee": "41018"
    },
    {
        "name": "Rosny-sous-Bois",
        "slug": "rosny-sous-bois",
        "insee": "93064"
    },
    {
        "name": "La Courneuve",
        "slug": "la-courneuve",
        "insee": "93027"
    },
    {
        "name": "Brive-la-Gaillarde",
        "slug": "brive-la-gaillarde",
        "insee": "19031"
    },
    {
        "name": "Bastia",
        "slug": "bastia",
        "insee": "2B033"
    },
    {
        "name": "Talence",
        "slug": "talence",
        "insee": "33522"
    },
    {
        "name": "Meudon",
        "slug": "meudon",
        "insee": "92048"
    },
    {
        "name": "Montrouge",
        "slug": "montrouge",
        "insee": "92049"
    },
    {
        "name": "Alès",
        "slug": "ales",
        "insee": "30007"
    },
    {
        "name": "Carcassonne",
        "slug": "carcassonne",
        "insee": "11069"
    },
    {
        "name": "Melun",
        "slug": "melun",
        "insee": "77288"
    },
    {
        "name": "Choisy-le-Roi",
        "slug": "choisy-le-roi",
        "insee": "94022"
    },
    {
        "name": "Saint-Germain-en-Laye",
        "slug": "saint-germain-en-laye",
        "insee": "78551"
    },
    {
        "name": "Belfort",
        "slug": "belfort",
        "insee": "90010"
    },
    {
        "name": "Charleville-Mézières",
        "slug": "charleville-mezieres",
        "insee": "08105"
    },
    {
        "name": "Alfortville",
        "slug": "alfortville",
        "insee": "94002"
    },
    {
        "name": "Noisy-le-Sec",
        "slug": "noisy-le-sec",
        "insee": "93053"
    },
    {
        "name": "Sète",
        "slug": "sete",
        "insee": "34301"
    },
    {
        "name": "Chalon-sur-Saône",
        "slug": "chalon-sur-saone",
        "insee": "71076"
    },
    {
        "name": "Bagneux",
        "slug": "bagneux",
        "insee": "92007"
    },
    {
        "name": "Tarbes",
        "slug": "tarbes",
        "insee": "65440"
    },
    {
        "name": "Saint-Brieuc",
        "slug": "saint-brieuc",
        "insee": "22278"
    },
    {
        "name": "Istres",
        "slug": "istres",
        "insee": "13047"
    },
    {
        "name": "Salon-de-Provence",
        "slug": "salon-de-provence",
        "insee": "13103"
    },
    {
        "name": "Puteaux",
        "slug": "puteaux",
        "insee": "92062"
    },
    {
        "name": "Caluire-et-Cuire",
        "slug": "caluire-et-cuire",
        "insee": "69034"
    },
    {
        "name": "Rezé",
        "slug": "reze",
        "insee": "44143"
    },
    {
        "name": "Mantes-la-Jolie",
        "slug": "mantes-la-jolie",
        "insee": "78361"
    },
    {
        "name": "Valenciennes",
        "slug": "valenciennes",
        "insee": "59606"
    },
    {
        "name": "Anglet",
        "slug": "anglet",
        "insee": "64024"
    },
    {
        "name": "Bagnolet",
        "slug": "bagnolet",
        "insee": "93006"
    },
    {
        "name": "Bron",
        "slug": "bron",
        "insee": "69029"
    },
    {
        "name": "Châlons-en-Champagne",
        "slug": "chalons-en-champagne",
        "insee": "51108"
    },
    {
        "name": "Châteauroux",
        "slug": "chateauroux",
        "insee": "36044"
    },
    {
        "name": "Arras",
        "slug": "arras",
        "insee": "62041"
    },
    {
        "name": "Thionville",
        "slug": "thionville",
        "insee": "57672"
    },
    {
        "name": "Villenave-d'Ornon",
        "slug": "villenave-d-ornon",
        "insee": "33550"
    },
    {
        "name": "Castres",
        "slug": "castres",
        "insee": "81065"
    },
    {
        "name": "Bourg-en-Bresse",
        "slug": "bourg-en-bresse",
        "insee": "01053"
    },
    {
        "name": "Thonon-les-Bains",
        "slug": "thonon-les-bains",
        "insee": "74281"
    },
    {
        "name": "Gagny",
        "slug": "gagny",
        "insee": "93032"
    },
    {
        "name": "Le Cannet",
        "slug": "le-cannet",
        "insee": "06030"
    },
    {
        "name": "Angoulême",
        "slug": "angouleme",
        "insee": "16015"
    },
    {
        "name": "Garges-lès-Gonesse",
        "slug": "garges-les-gonesse",
        "insee": "95268"
    },
    {
        "name": "Villepinte",
        "slug": "villepinte",
        "insee": "93078"
    },
    {
        "name": "Stains",
        "slug": "stains",
        "insee": "93072"
    },
    {
        "name": "Gap",
        "slug": "gap",
        "insee": "05061"
    },
    {
        "name": "Poissy",
        "slug": "poissy",
        "insee": "78498"
    },
    {
        "name": "Colomiers",
        "slug": "colomiers",
        "insee": "31149"
    },
    {
        "name": "Wattrelos",
        "slug": "wattrelos",
        "insee": "59650"
    },
    {
        "name": "Draguignan",
        "slug": "draguignan",
        "insee": "83050"
    },
    {
        "name": "Compiègne",
        "slug": "compiegne",
        "insee": "60159"
    },
    {
        "name": "Montélimar",
        "slug": "montelimar",
        "insee": "26198"
    },
    {
        "name": "Boulogne-sur-Mer",
        "slug": "boulogne-sur-mer",
        "insee": "62160"
    },
    {
        "name": "Douai",
        "slug": "douai",
        "insee": "59178"
    },
    {
        "name": "Marcq-en-Barœul",
        "slug": "marcq-en-bar-ul",
        "insee": "59378"
    },
    {
        "name": "Neuilly-sur-Marne",
        "slug": "neuilly-sur-marne",
        "insee": "93050"
    },
    {
        "name": "Le Lamentin",
        "slug": "le-lamentin",
        "insee": "97213"
    },
    {
        "name": "Saint-Joseph",
        "slug": "saint-joseph",
        "insee": "97412"
    },
    {
        "name": "Pontault-Combault",
        "slug": "pontault-combault",
        "insee": "77373"
    },
    {
        "name": "Saint-Benoît",
        "slug": "saint-benoit",
        "insee": "97410"
    },
    {
        "name": "La Ciotat",
        "slug": "la-ciotat",
        "insee": "13028"
    },
    {
        "name": "Joué-lès-Tours",
        "slug": "joue-les-tours",
        "insee": "37122"
    },
    {
        "name": "Tremblay-en-France",
        "slug": "tremblay-en-france",
        "insee": "93073"
    },
    {
        "name": "Chartres",
        "slug": "chartres",
        "insee": "28085"
    },
    {
        "name": "Oullins-Pierre-Bénite",
        "slug": "oullins-pierre-benite",
        "insee": "69149"
    },
    {
        "name": "Franconville",
        "slug": "franconville",
        "insee": "95252"
    },
    {
        "name": "Saint-Martin-d'Hères",
        "slug": "saint-martin-d-heres",
        "insee": "38421"
    },
    {
        "name": "Annemasse",
        "slug": "annemasse",
        "insee": "74012"
    },
    {
        "name": "Savigny-sur-Orge",
        "slug": "savigny-sur-orge",
        "insee": "91589"
    },
    {
        "name": "Échirolles",
        "slug": "echirolles",
        "insee": "38151"
    },
    {
        "name": "Palaiseau",
        "slug": "palaiseau",
        "insee": "91477"
    },
    {
        "name": "Romainville",
        "slug": "romainville",
        "insee": "93063"
    },
    {
        "name": "Saint-Raphaël",
        "slug": "saint-raphael",
        "insee": "83118"
    },
    {
        "name": "Six-Fours-les-Plages",
        "slug": "six-fours-les-plages",
        "insee": "83129"
    },
    {
        "name": "Sainte-Marie",
        "slug": "sainte-marie",
        "insee": "97418"
    },
    {
        "name": "Conflans-Sainte-Honorine",
        "slug": "conflans-sainte-honorine",
        "insee": "78172"
    },
    {
        "name": "Vitrolles",
        "slug": "vitrolles",
        "insee": "13117"
    },
    {
        "name": "Châtillon",
        "slug": "chatillon",
        "insee": "92020"
    },
    {
        "name": "Meyzieu",
        "slug": "meyzieu",
        "insee": "69282"
    },
    {
        "name": "Athis-Mons",
        "slug": "athis-mons",
        "insee": "91027"
    },
    {
        "name": "La Possession",
        "slug": "la-possession",
        "insee": "97408"
    },
    {
        "name": "Matoury",
        "slug": "matoury",
        "insee": "97307"
    },
    {
        "name": "Bezons",
        "slug": "bezons",
        "insee": "95063"
    },
    {
        "name": "Haguenau",
        "slug": "haguenau",
        "insee": "67180"
    },
    {
        "name": "Creil",
        "slug": "creil",
        "insee": "60175"
    },
    {
        "name": "Villeneuve-Saint-Georges",
        "slug": "villeneuve-saint-georges",
        "insee": "94078"
    },
    {
        "name": "Villefranche-sur-Saône",
        "slug": "villefranche-sur-saone",
        "insee": "69264"
    },
    {
        "name": "Saint-Leu",
        "slug": "saint-leu",
        "insee": "97413"
    },
    {
        "name": "Châtenay-Malabry",
        "slug": "chatenay-malabry",
        "insee": "92019"
    },
    {
        "name": "Saint-Chamond",
        "slug": "saint-chamond",
        "insee": "42207"
    },
    {
        "name": "Sainte-Geneviève-des-Bois",
        "slug": "sainte-genevieve-des-bois",
        "insee": "91549"
    },
    {
        "name": "Roanne",
        "slug": "roanne",
        "insee": "42187"
    },
    {
        "name": "Le Perreux-sur-Marne",
        "slug": "le-perreux-sur-marne",
        "insee": "94058"
    },
    {
        "name": "Mâcon",
        "slug": "macon",
        "insee": "71270"
    },
    {
        "name": "Auxerre",
        "slug": "auxerre",
        "insee": "89024"
    },
    {
        "name": "Dumbéa",
        "slug": "dumbea",
        "insee": "98805"
    },
    {
        "name": "Schiltigheim",
        "slug": "schiltigheim",
        "insee": "67447"
    },
    {
        "name": "Trappes",
        "slug": "trappes",
        "insee": "78621"
    },
    {
        "name": "Les Mureaux",
        "slug": "les-mureaux",
        "insee": "78440"
    },
    {
        "name": "Houilles",
        "slug": "houilles",
        "insee": "78311"
    },
    {
        "name": "Le Port",
        "slug": "le-port",
        "insee": "97407"
    },
    {
        "name": "Marignane",
        "slug": "marignane",
        "insee": "13054"
    },
    {
        "name": "Romans-sur-Isère",
        "slug": "romans-sur-isere",
        "insee": "26281"
    },
    {
        "name": "Villiers-sur-Marne",
        "slug": "villiers-sur-marne",
        "insee": "94079"
    }
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
            a: `Notre agence combine expertise technique de pointe et connaissance fine du marché local à ${villeName} pour livrer des solutions digitales adaptées à tous les secteurs d'activité.`
        },
        {
            q: `Quel est le délai pour un projet de ${serviceLabel.toLowerCase()} à ${villeName} ?`,
            a: `Le délai moyen constaté à ${villeName} est de 4 à 8 semaines, selon la complexité fonctionnelle et les intégrations API / logicielles requises.`
        },
        {
            q: `Accompagnez-vous les entreprises de ${villeName} sur le long terme ?`,
            a: `Absolument. Au-delà du lancement, nous assurons le suivi des performances, la maintenance applicative et l'optimisation continue de votre SEO à ${villeName} pour maximiser vos leads.`
        },
        {
            q: `Votre solution de ${serviceLabel.toLowerCase()} est-elle adaptée à mon secteur à ${villeName} ?`,
            a: `Oui, chaque projet est configuré sur mesure en étudiant les concurrents directs de votre secteur d'activité (BTP, santé, commerce, services) à ${villeName}.`
        }
    ];
}

export function getNearbyCities(villeSlug: string) {
    const currentIndex = CITIES.findIndex(c => c.slug === villeSlug);
    if (currentIndex === -1) return [CITIES[0], CITIES[1]];
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

export function getGeoDetails(insee: string) {
    let deptCode = insee.substring(0, 2);
    if (deptCode === "97" || deptCode === "98") {
        deptCode = insee.substring(0, 3);
    }
    const mapping: Record<string, { dept: string; region: string }> = {
        "10": {
                "dept": "Aube (10)",
                "region": "Grand Est"
        },
        "11": {
                "dept": "Aude (11)",
                "region": "Occitanie"
        },
        "12": {
                "dept": "Aveyron (12)",
                "region": "Occitanie"
        },
        "13": {
                "dept": "Bouches-du-Rhône (13)",
                "region": "Provence-Alpes-Côte d'Azur"
        },
        "14": {
                "dept": "Calvados (14)",
                "region": "Normandie"
        },
        "15": {
                "dept": "Cantal (15)",
                "region": "Auvergne-Rhône-Alpes"
        },
        "16": {
                "dept": "Charente (16)",
                "region": "Nouvelle-Aquitaine"
        },
        "17": {
                "dept": "Charente-Maritime (17)",
                "region": "Nouvelle-Aquitaine"
        },
        "18": {
                "dept": "Cher (18)",
                "region": "Centre-Val de Loire"
        },
        "19": {
                "dept": "Corrèze (19)",
                "region": "Nouvelle-Aquitaine"
        },
        "21": {
                "dept": "Côte-d'Or (21)",
                "region": "Bourgogne-Franche-Comté"
        },
        "22": {
                "dept": "Côtes-d'Armor (22)",
                "region": "Bretagne"
        },
        "23": {
                "dept": "Creuse (23)",
                "region": "Nouvelle-Aquitaine"
        },
        "24": {
                "dept": "Dordogne (24)",
                "region": "Nouvelle-Aquitaine"
        },
        "25": {
                "dept": "Doubs (25)",
                "region": "Bourgogne-Franche-Comté"
        },
        "26": {
                "dept": "Drôme (26)",
                "region": "Auvergne-Rhône-Alpes"
        },
        "27": {
                "dept": "Eure (27)",
                "region": "Normandie"
        },
        "28": {
                "dept": "Eure-et-Loir (28)",
                "region": "Centre-Val de Loire"
        },
        "29": {
                "dept": "Finistère (29)",
                "region": "Bretagne"
        },
        "30": {
                "dept": "Gard (30)",
                "region": "Occitanie"
        },
        "31": {
                "dept": "Haute-Garonne (31)",
                "region": "Occitanie"
        },
        "32": {
                "dept": "Gers (32)",
                "region": "Occitanie"
        },
        "33": {
                "dept": "Gironde (33)",
                "region": "Nouvelle-Aquitaine"
        },
        "34": {
                "dept": "Hérault (34)",
                "region": "Occitanie"
        },
        "35": {
                "dept": "Ille-et-Vilaine (35)",
                "region": "Bretagne"
        },
        "36": {
                "dept": "Indre (36)",
                "region": "Centre-Val de Loire"
        },
        "37": {
                "dept": "Indre-et-Loire (37)",
                "region": "Centre-Val de Loire"
        },
        "38": {
                "dept": "Isère (38)",
                "region": "Auvergne-Rhône-Alpes"
        },
        "39": {
                "dept": "Jura (39)",
                "region": "Bourgogne-Franche-Comté"
        },
        "40": {
                "dept": "Landes (40)",
                "region": "Nouvelle-Aquitaine"
        },
        "41": {
                "dept": "Loir-et-Cher (41)",
                "region": "Centre-Val de Loire"
        },
        "42": {
                "dept": "Loire (42)",
                "region": "Auvergne-Rhône-Alpes"
        },
        "43": {
                "dept": "Haute-Loire (43)",
                "region": "Auvergne-Rhône-Alpes"
        },
        "44": {
                "dept": "Loire-Atlantique (44)",
                "region": "Pays de la Loire"
        },
        "45": {
                "dept": "Loiret (45)",
                "region": "Centre-Val de Loire"
        },
        "46": {
                "dept": "Lot (46)",
                "region": "Occitanie"
        },
        "47": {
                "dept": "Lot-et-Garonne (47)",
                "region": "Nouvelle-Aquitaine"
        },
        "48": {
                "dept": "Lozère (48)",
                "region": "Occitanie"
        },
        "49": {
                "dept": "Maine-et-Loire (49)",
                "region": "Pays de la Loire"
        },
        "50": {
                "dept": "Manche (50)",
                "region": "Normandie"
        },
        "51": {
                "dept": "Marne (51)",
                "region": "Grand Est"
        },
        "52": {
                "dept": "Haute-Marne (52)",
                "region": "Grand Est"
        },
        "53": {
                "dept": "Mayenne (53)",
                "region": "Pays de la Loire"
        },
        "54": {
                "dept": "Meurthe-et-Moselle (54)",
                "region": "Grand Est"
        },
        "55": {
                "dept": "Meuse (55)",
                "region": "Grand Est"
        },
        "56": {
                "dept": "Morbihan (56)",
                "region": "Bretagne"
        },
        "57": {
                "dept": "Moselle (57)",
                "region": "Grand Est"
        },
        "58": {
                "dept": "Nièvre (58)",
                "region": "Bourgogne-Franche-Comté"
        },
        "59": {
                "dept": "Nord (59)",
                "region": "Hauts-de-France"
        },
        "60": {
                "dept": "Oise (60)",
                "region": "Hauts-de-France"
        },
        "61": {
                "dept": "Orne (61)",
                "region": "Normandie"
        },
        "62": {
                "dept": "Pas-de-Calais (62)",
                "region": "Hauts-de-France"
        },
        "63": {
                "dept": "Puy-de-Dôme (63)",
                "region": "Auvergne-Rhône-Alpes"
        },
        "64": {
                "dept": "Pyrénées-Atlantiques (64)",
                "region": "Nouvelle-Aquitaine"
        },
        "65": {
                "dept": "Hautes-Pyrénées (65)",
                "region": "Occitanie"
        },
        "66": {
                "dept": "Pyrénées-Orientales (66)",
                "region": "Occitanie"
        },
        "67": {
                "dept": "Bas-Rhin (67)",
                "region": "Grand Est"
        },
        "68": {
                "dept": "Haut-Rhin (68)",
                "region": "Grand Est"
        },
        "69": {
                "dept": "Rhône (69)",
                "region": "Auvergne-Rhône-Alpes"
        },
        "70": {
                "dept": "Haute-Saône (70)",
                "region": "Bourgogne-Franche-Comté"
        },
        "71": {
                "dept": "Saône-et-Loire (71)",
                "region": "Bourgogne-Franche-Comté"
        },
        "72": {
                "dept": "Sarthe (72)",
                "region": "Pays de la Loire"
        },
        "73": {
                "dept": "Savoie (73)",
                "region": "Auvergne-Rhône-Alpes"
        },
        "74": {
                "dept": "Haute-Savoie (74)",
                "region": "Auvergne-Rhône-Alpes"
        },
        "75": {
                "dept": "Paris (75)",
                "region": "Île-de-France"
        },
        "76": {
                "dept": "Seine-Maritime (76)",
                "region": "Normandie"
        },
        "77": {
                "dept": "Seine-et-Marne (77)",
                "region": "Île-de-France"
        },
        "78": {
                "dept": "Yvelines (78)",
                "region": "Île-de-France"
        },
        "79": {
                "dept": "Deux-Sèvres (79)",
                "region": "Nouvelle-Aquitaine"
        },
        "80": {
                "dept": "Somme (80)",
                "region": "Hauts-de-France"
        },
        "81": {
                "dept": "Tarn (81)",
                "region": "Occitanie"
        },
        "82": {
                "dept": "Tarn-et-Garonne (82)",
                "region": "Occitanie"
        },
        "83": {
                "dept": "Var (83)",
                "region": "Provence-Alpes-Côte d'Azur"
        },
        "84": {
                "dept": "Vaucluse (84)",
                "region": "Provence-Alpes-Côte d'Azur"
        },
        "85": {
                "dept": "Vendée (85)",
                "region": "Pays de la Loire"
        },
        "86": {
                "dept": "Vienne (86)",
                "region": "Nouvelle-Aquitaine"
        },
        "87": {
                "dept": "Haute-Vienne (87)",
                "region": "Nouvelle-Aquitaine"
        },
        "88": {
                "dept": "Vosges (88)",
                "region": "Grand Est"
        },
        "89": {
                "dept": "Yonne (89)",
                "region": "Bourgogne-Franche-Comté"
        },
        "90": {
                "dept": "Territoire de Belfort (90)",
                "region": "Bourgogne-Franche-Comté"
        },
        "91": {
                "dept": "Essonne (91)",
                "region": "Île-de-France"
        },
        "92": {
                "dept": "Hauts-de-Seine (92)",
                "region": "Île-de-France"
        },
        "93": {
                "dept": "Seine-Saint-Denis (93)",
                "region": "Île-de-France"
        },
        "94": {
                "dept": "Val-de-Marne (94)",
                "region": "Île-de-France"
        },
        "95": {
                "dept": "Val-d'Oise (95)",
                "region": "Île-de-France"
        },
        "971": {
                "dept": "Guadeloupe (971)",
                "region": "Guadeloupe"
        },
        "972": {
                "dept": "Martinique (972)",
                "region": "Martinique"
        },
        "973": {
                "dept": "Guyane (973)",
                "region": "Guyane"
        },
        "974": {
                "dept": "La Réunion (974)",
                "region": "La Réunion"
        },
        "976": {
                "dept": "Mayotte (976)",
                "region": "Mayotte"
        },
        "988": {
                "dept": "Nouvelle-Calédonie (988)",
                "region": "Nouvelle-Calédonie"
        },
        "01": {
                "dept": "Ain (01)",
                "region": "Auvergne-Rhône-Alpes"
        },
        "02": {
                "dept": "Aisne (02)",
                "region": "Hauts-de-France"
        },
        "03": {
                "dept": "Allier (03)",
                "region": "Auvergne-Rhône-Alpes"
        },
        "04": {
                "dept": "Alpes-de-Haute-Provence (04)",
                "region": "Provence-Alpes-Côte d'Azur"
        },
        "05": {
                "dept": "Hautes-Alpes (05)",
                "region": "Provence-Alpes-Côte d'Azur"
        },
        "06": {
                "dept": "Alpes-Maritimes (06)",
                "region": "Provence-Alpes-Côte d'Azur"
        },
        "07": {
                "dept": "Ardèche (07)",
                "region": "Auvergne-Rhône-Alpes"
        },
        "08": {
                "dept": "Ardennes (08)",
                "region": "Grand Est"
        },
        "09": {
                "dept": "Ariège (09)",
                "region": "Occitanie"
        },
        "2A": {
                "dept": "Corse-du-Sud (2A)",
                "region": "Corse"
        },
        "2B": {
                "dept": "Haute-Corse (2B)",
                "region": "Corse"
        }
};
    return mapping[deptCode] || { dept: `département ${deptCode}`, region: "France" };
}

export function getServiceSections(serviceKey: string, city: City) {
    const geo = getGeoDetails(city.insee);
    const v = city.name;
    const d = geo.dept;
    const r = geo.region;
    const near = getNearbyCities(city.slug);
    const near1 = near[0]?.name || "alentours";
    const near2 = near[1]?.name || "villes proches";

    const spin = {
        pick: <T>(variations: T[], step: number): T => {
            const seed = city.insee.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) + step;
            return variations[seed % variations.length];
        }
    };

    const sections: Record<string, Array<{
        title: string;
        subtitle: string;
        paragraphs: string[];
        bullets: string[];
        image: { src: string; alt: string };
    }>> = {
        "creation-site-web-seo": [
            {
                title: spin.pick([
                    `Création de site web sur mesure à ${v}`,
                    `Conception de site internet et vitrine à ${v}`,
                    `Développement de site vitrine & e-commerce à ${v}`
                ], 1),
                subtitle: spin.pick([
                    `Un design unique et performant pour votre entreprise dans le ${d}`,
                    `Propulsez l'image de votre marque en région ${r}`,
                    `Attirez de nouveaux clients locaux à ${v} et ses environs`
                ], 2),
                paragraphs: [
                    spin.pick([
                        `Nous concevons des sites internet vitrines et e-commerce sur mesure pour les entreprises de ${v} et de la région ${r}. Que vous soyez un artisan du bâtiment (BTP), un cabinet médical, un commerçant local, une PME industrielle ou une startup en pleine croissance, notre approche exclut les templates génériques pour vous offrir une identité visuelle unique et performante.`,
                        `Notre agence crée des sites web vitrines et e-commerce modernes pour les professionnels installés à ${v} et dans tout le ${d}. Du commerce de proximité aux startups de la région ${r}, en passant par le secteur médical ou le BTP, nous concevons des chartes graphiques sur mesure qui reflètent l'ADN de votre entreprise.`,
                        `Donnez vie à vos projets digitaux grâce à nos solutions de conception de sites sur mesure à ${v}. Nous accompagnons les structures de tous secteurs (professions libérales, artisans, industries B2B) pour livrer des interfaces soignées et pensées pour le référencement.`
                    ], 3) + " " + spin.pick([
                        `Notre équipe intervient également auprès des professionnels des communes voisines comme ${near1} et ${near2}.`,
                        `Nous suivons de près les projets des entreprises situées aux alentours de ${v}, notamment à ${near1} et ${near2}.`,
                        `Notre accompagnement de proximité s'étend aux villes proches comme ${near1} ou ${near2} pour maximiser votre présence locale.`
                    ], 4),
                    spin.pick([
                        `Chaque ligne de code est optimisée pour garantir une vitesse de chargement ultra-rapide (Core Web Vitals au vert) et maximiser le taux de conversion de vos visiteurs en clients.`,
                        `En optimisant la structure de nos pages pour mobile, nous garantissons une expérience utilisateur fluide qui incite vos prospects à prendre contact.`,
                        `La rapidité et la sécurité de nos développements web Next.js vous permettent de retenir les visiteurs et d'augmenter significativement vos conversions.`
                    ], 5)
                ],
                bullets: [
                    "Design premium 100% personnalisé et responsive (mobile-first)",
                    "Code propre optimisé Next.js / React pour une vitesse éclair",
                    "Entonnoir de conversion structuré pour capter vos prospects de tout secteur",
                    "Intégrations d'outils d'analyse (GA4, GTM) et de formulaires"
                ],
                image: { src: "/assets/expertise/web.png", alt: `Création de site internet sur mesure à ${v}` }
            },
            {
                title: spin.pick([
                    `Stratégie de référencement naturel (SEO) à ${v}`,
                    `Optimisation SEO et visibilité Google à ${v}`,
                    `Expertise SEO et audit de référencement naturel à ${v}`
                ], 6),
                subtitle: spin.pick([
                    `Dominez les résultats de recherche locaux sur Google à ${v}`,
                    `Positionnez durablement vos services devant vos concurrents locaux`,
                    `Captez un trafic qualifié et ciblé dans le département ${d}`
                ], 7),
                paragraphs: [
                    spin.pick([
                        `Être visible sur Google à ${v} est indispensable pour capter vos clients locaux, quel que soit votre secteur d'activité (BTP, santé, commerce, services). Nous mettons en place une stratégie SEO complète : structure de contenu sémantique, balisage Schema.org et netlinking de confiance.`,
                        `Avoir un site web ne suffit pas ; il doit être trouvé par vos futurs clients dans le ${d}. Nous optimisons votre référencement naturel grâce à des audits de mots-clés rigoureux, une optimisation technique de pointe et une stratégie éditoriale forte.`,
                        `Augmentez votre flux de prospects qualifiés à ${v} en dominant les premières positions des moteurs de recherche. Nous adaptons la structure sémantique de votre site pour répondre précisément aux requêtes locales de votre secteur d'activité.`
                    ], 8),
                    spin.pick([
                        `Nous ciblons les mots-clés stratégiques liés à votre activité dans le ${d} pour vous positionner durablement devant vos concurrents locaux et nationaux.`,
                        `Notre méthodologie SEO permet de générer des visites hautement qualifiées issues de ${v} et des villes environnantes.`,
                        `Nous analysons en détail le positionnement de vos concurrents à ${v} pour vous bâtir une autorité de domaine incontournable.`
                    ], 9)
                ],
                bullets: [
                    "Recherche approfondie de mots-clés locaux et sectoriels à fort potentiel",
                    "Optimisation on-page (balises Hn, meta descriptions uniques)",
                    "Amélioration de votre visibilité Google Maps (Fiche Établissement)",
                    "Stratégie de netlinking pour booster l'autorité de votre domaine"
                ],
                image: { src: "/assets/expertise/strategy.png", alt: `Référencement naturel SEO local à ${v}` }
            },
            {
                title: spin.pick([
                    `Hébergement sécurisé et maintenance réactive à ${v}`,
                    `Maintenance technique et infogérance de votre site à ${v}`,
                    `Hébergement cloud de haute performance et maintenance`
                ], 10),
                subtitle: spin.pick([
                    `Une plateforme toujours en ligne et performante à ${v}`,
                    `Sécurisez votre outil digital et assurez sa pérennité`,
                    `Support réactif et sauvegardes de vos données dans le ${d}`
                ], 11),
                paragraphs: [
                    spin.pick([
                        `Votre site web est propulsé par des architectures cloud modernes (Vercel, AWS), garantissant une disponibilité de 99.9% et une sécurité maximale contre les attaques. Nous prenons en charge la maintenance technique afin que vous puissiez vous concentrer sur votre cœur de métier.`,
                        `Nous confions l'hébergement de vos applications à des serveurs cloud ultra-rapides et sécurisés. Nos contrats de maintenance à ${v} incluent des correctifs proactifs pour devancer les bugs.`,
                        `La continuité de service est critique pour les entreprises de la région ${r}. C'est pourquoi nos solutions d'hébergement Next.js intègrent des pare-feux et des surveillances constantes.`
                    ], 12),
                    spin.pick([
                        `Nous assurons un suivi technique régulier et des mises à jour proactives pour maintenir les performances au sommet.`,
                        `Nos ingénieurs veillent à la mise en œuvre des derniers correctifs de sécurité pour protéger vos données sensibles.`,
                        `Profitez d'un support réactif disponible pour répondre rapidement à vos demandes d'évolution ou d'assistance.`
                    ], 13)
                ],
                bullets: [
                    "Hébergement cloud de pointe avec CDN mondial",
                    "Sauvegardes automatiques quotidiennes de vos données",
                    "Certificat SSL et protection contre les vulnérabilités",
                    "Support technique prioritaire et réactif pour votre sérénité"
                ],
                image: { src: "/assets/expertise/erp.png", alt: `Hébergement sécurisé et maintenance site web` }
            }
        ],
        "automatisation-ia": [
            {
                title: spin.pick([
                    `Intégration d'IA & Chatbots intelligents à ${v}`,
                    `Intelligence artificielle et agents virtuels à ${v}`,
                    `Développement de Chatbots IA personnalisés à ${v}`
                ], 1),
                subtitle: spin.pick([
                    `Disponibilité 24/7 et réponses instantanées pour vos clients à ${v}`,
                    `Automatisez votre support et qualifiez vos leads dans le ${d}`,
                    `Améliorez l'engagement de vos visiteurs grâce à l'IA conversationnelle`
                ], 2),
                paragraphs: [
                    spin.pick([
                        `Automatisez vos premiers niveaux de support client et de qualification commerciale grâce à des agents conversationnels intelligents configurés pour le marché de ${v}. Nos chatbots s'adaptent à toutes les activités du ${d} (cabinets médicaux, e-commerces, artisans BTP, entreprises de services B2B) en apprenant de vos données métiers.`,
                        `Optimisez l'accueil de vos visiteurs à ${v} en intégrant un chatbot intelligent entraîné sur vos documentations internes. Qu'il s'agisse de guider les patients d'un cabinet de santé, de qualifier des devis BTP ou de répondre aux questions e-commerce, l'IA répond 24h/24.`,
                        `Libérez du temps pour vos collaborateurs dans la région ${r} en déléguant les réponses récurrentes à un assistant virtuel intelligent. Nos intégrations d'intelligence artificielle permettent d'orienter naturellement vos prospects locaux.`
                    ], 3) + " " + spin.pick([
                        `Nos équipes accompagnent les entreprises de ${v} et des localités limitrophes comme ${near1} ou ${near2}.`,
                        `Cette technologie de pointe est déployable rapidement pour les professionnels proches de ${v}, par exemple à ${near1} ou ${near2}.`,
                        `Nous installons ces solutions pour vos clients à ${v} ainsi que dans les zones de ${near1} et ${near2}.`
                    ], 4),
                    spin.pick([
                        `Nos chatbots apprennent de vos données métiers pour répondre de manière pertinente et naturelle à vos visiteurs, augmentant ainsi le taux d'engagement.`,
                        `Grâce à une phase d'apprentissage sur vos données spécifiques, l'agent IA répond avec exactitude aux interrogations des internautes.`,
                        `Chaque chatbot est paramétré avec vos règles métiers afin de garantir des réponses conformes à votre image de marque.`
                    ], 5)
                ],
                bullets: [
                    "Qualification automatique de vos prospects qualifiés",
                    "Intégrations multicanaux (Site Web, WhatsApp, Messenger)",
                    "Apprentissage continu basé sur vos documents internes",
                    "Prise de rendez-vous directe intégrée à votre calendrier"
                ],
                image: { src: "/assets/expertise/chatbot.png", alt: `Intégration d'IA et de Chatbot intelligent à ${v}` }
            },
            {
                title: spin.pick([
                    `Automatisation de workflows d'entreprise dans le ${d}`,
                    `Optimisation et automatisation de processus métiers à ${v}`,
                    `Connecteurs d'outils et automatisation de flux à ${v}`
                ], 6),
                subtitle: spin.pick([
                    `Gagnez des heures précieuses en éliminant les tâches répétitives`,
                    `Connectez vos logiciels internes pour fluidifier votre activité à ${v}`,
                    `Zéro saisie manuelle : faites communiquer vos applications métier`
                ], 7),
                paragraphs: [
                    spin.pick([
                        `Nous connectons vos outils quotidiens (CRM, facturation, emails, ERP) grâce à des plateformes d'intégration automatisées. Vos données circulent sans erreur d'un système à l'autre, quel que soit votre secteur.`,
                        `Supprimez les pertes d'informations et les doubles saisies dans vos bureaux de ${v}. Nous créons des automatisations sur mesure reliant votre messagerie, vos outils de devis et votre base de données.`,
                        `Gagnez en productivité opérationnelle dans toute la région ${r} en synchronisant vos outils. Nos experts en intégration modélisent vos processus pour automatiser vos relances et votre facturation.`
                    ], 8),
                    spin.pick([
                        `Libérez vos équipes de ${v} des tâches chronophages à faible valeur ajoutée pour qu'elles se concentrent sur la croissance.`,
                        `Vos collaborateurs se concentrent sur des actions à forte valeur commerciale plutôt que sur du transfert manuel de fichiers.`,
                        `Chaque workflow automatisé est rigoureusement sécurisé pour garantir l'intégrité de vos bases de données.`
                    ], 9)
                ],
                bullets: [
                    "Synchronisation automatique de vos leads avec votre CRM",
                    "Génération et envoi automatisés de factures et devis",
                    "Webhooks et flux de données sécurisés en temps réel",
                    "Mise en place de scénarios complexes (Make, Zapier, code personnalisé)"
                ],
                image: { src: "/assets/expertise/strategy.png", alt: `Automatisation de workflows métiers à ${v}` }
            },
            {
                title: spin.pick([
                    `Optimisation des processus et formation IA à ${v}`,
                    `Audit d'opportunité IA et accompagnement à ${v}`,
                    `Formation de vos collaborateurs aux outils d'IA à ${v}`
                ], 10),
                subtitle: spin.pick([
                    `Adoptez les meilleures technologies d'intelligence artificielle à ${v}`,
                    `Accompagnez le changement et intégrez l'IA dans vos méthodes de travail`,
                    `Préparez votre entreprise du ${d} aux technologies de demain`
                ], 11),
                paragraphs: [
                    spin.pick([
                        `L'intelligence artificielle transforme tous les métiers. Nous auditons vos processus actuels à ${v} pour y intégrer les meilleurs outils du marché (génération de contenu, analyse de données, automatisation de support).`,
                        `Découvrez comment l'IA peut booster les performances de votre structure dans le ${d}. Nous menons des études approfondies pour identifier les leviers de rentabilité applicables à vos équipes.`,
                        `Intégrez sereinement les technologies de LLM et de vision par ordinateur dans votre entreprise de la région ${r}. Notre accompagnement assure une transition technologique réussie.`
                    ], 12),
                    spin.pick([
                        `Nous formons vos équipes pour assurer une adoption fluide et sécurisée de l'IA au quotidien.`,
                        `Nos ateliers pratiques permettent à vos collaborateurs de prendre en main les outils IA de manière autonome.`,
                        `Nous veillons à ce que toutes vos intégrations d'intelligence artificielle respectent scrupuleusement le RGPD.`
                    ], 13)
                ],
                bullets: [
                    "Audit d'opportunité d'intégration de l'IA",
                    "Ateliers pratiques et formation pour vos collaborateurs",
                    "Sécurisation et conformité RGPD de vos intégrations IA",
                    "Accompagnement continu dans l'évolution de vos outils"
                ],
                image: { src: "/assets/expertise/web.png", alt: `Formation IA et optimisation des processus à ${v}` }
            }
        ],
        "developpement-sur-mesure": [
            {
                title: spin.pick([
                    `Développement d'applications web et ERP à ${v}`,
                    `Conception d'applications web et ERP sur mesure à ${v}`,
                    `Développement de plateformes SaaS et ERP métiers à ${v}`
                ], 1),
                subtitle: spin.pick([
                    `Des solutions logicielles qui s'adaptent à votre métier à ${v}`,
                    `Centralisez vos opérations et pilotez votre croissance dans le ${d}`,
                    `Des interfaces logicielles robustes et intuitives en région ${r}`
                ], 2),
                paragraphs: [
                    spin.pick([
                        `Les logiciels standards ne répondent pas toujours à vos spécificités. Que ce soit pour un ERP de suivi de chantier (BTP), une application de télémédecine (santé), un logiciel de gestion des stocks (commerce), ou un SaaS métier dans la région ${r}, nous développons des applications web sur mesure adaptées aux flux réels de votre entreprise à ${v}.`,
                        `Chaque secteur possède des règles métiers uniques qu'un progiciel générique ne peut couvrir. À ${v}, nous programmons vos outils de gestion de stocks, vos ERP de suivi de production industrielle ou vos plateformes de réservation médicale sur mesure.`,
                        `Structurez l'activité de votre entreprise dans le ${d} grâce à un outil logiciel développé spécifiquement pour vos collaborateurs. De la gestion de devis complexes pour le BTP au tableau de bord e-commerce, nous unifions vos besoins.`
                    ], 3) + " " + spin.pick([
                        `Nous intervenons également pour concevoir des outils numériques dans les communes proches, comme ${near1} et ${near2}.`,
                        `Notre équipe de développeurs se déplace régulièrement pour rencontrer nos clients à ${near1} ou ${near2}.`,
                        `Ce service d'ingénierie applicative est disponible pour les professionnels de ${v}, ${near1} et ${near2}.`
                    ], 4),
                    spin.pick([
                        `Centralisez vos données, gérez vos stocks, pilotez vos ventes et suivez vos performances opérationnelles sur une interface intuitive.`,
                        `Grâce à une base de données unifiée, vous disposez d'indicateurs de performance en temps réel pour prendre les bonnes décisions.`,
                        `Nos interfaces utilisateurs sont ergonomiques et pensées pour limiter le temps d'apprentissage de vos collaborateurs.`
                    ], 5)
                ],
                bullets: [
                    "Conception d'architectures logicielles modernes et extensibles (SaaS, ERP, outils métiers)",
                    "Interfaces utilisateurs ergonomiques pensées pour vos collaborateurs",
                    "Gestion fine des droits d'accès et des rôles utilisateurs",
                    "Base de données centralisée et sécurisée pour votre activité"
                ],
                image: { src: "/assets/expertise/erp.png", alt: `Développement d'application web et ERP sur mesure à ${v}` }
            },
            {
                title: spin.pick([
                    `Intégration d'API et connexion de vos systèmes dans le ${d}`,
                    `Développement d'API et connexion de logiciels tiers à ${v}`,
                    `Synchronisation de bases de données et flux d'API à ${v}`
                ], 6),
                subtitle: spin.pick([
                    `Faites communiquer vos logiciels de manière fluide et sécurisée`,
                    `Unifiez votre système d'information pour éliminer les doubles saisies`,
                    `Des flux d'informations automatisés et fiabilisés à ${v}`
                ], 7),
                paragraphs: [
                    spin.pick([
                        `Nous développons et intégrons des API robustes pour connecter votre nouvel outil à vos systèmes comptables, logistiques ou commerciaux existants (Hubspot, Salesforce, Stripe, Sage, etc.).`,
                        `Facilitez la circulation des données de votre structure à ${v}. Nous créons des passerelles sécurisées pour interconnecter vos outils marketing, vos passerelles de paiement Stripe et votre comptabilité.`,
                        `Notre expertise en architecture logicielle dans la région ${r} garantit des flux d'API stables, capables de supporter de fortes charges d'utilisation quotidienne.`
                    ], 8),
                    spin.pick([
                        `Vos données de ${v} sont unifiées pour éliminer les doubles saisies et les pertes d'informations dans toutes vos branches d'activité.`,
                        `La centralisation des flux informatiques élimine les risques d'erreurs humaines et augmente la productivité globale.`,
                        `Chaque intégration d'API tierce fait l'objet de tests de charge rigoureux pour garantir sa fiabilité sur le long terme.`
                    ], 9)
                ],
                bullets: [
                    "Développement d'API REST / GraphQL sécurisées",
                    "Intégrations de passerelles de paiement (Stripe, PayPal, Banques)",
                    "Connexion avec des logiciels tiers (Hubspot, Salesforce, Sage, Cegid)",
                    "Sécurisation des flux de données et gestion d'erreurs d'intégration"
                ],
                image: { src: "/assets/expertise/web.png", alt: `Intégration d'API et connexion logiciels à ${v}` }
            },
            {
                title: spin.pick([
                    `Maintenance applicative et évolutivité (SLA) à ${v}`,
                    `Contrat de support (SLA) et infogérance de vos applications à ${v}`,
                    `Garantie de continuité de service et maintenance applicative`
                ], 10),
                subtitle: spin.pick([
                    `Assurez la continuité de service de vos applications critiques`,
                    `Un support réactif et des serveurs infogérés en région ${r}`,
                    `Suivi technique proactif pour faire évoluer votre logiciel à ${v}`
                ], 11),
                paragraphs: [
                    spin.pick([
                        `Nous offrons un suivi rigoureux pour garantir le bon fonctionnement de votre plateforme sur le long terme à ${v} et dans toute la région ${r}. Nous comprenons que les applications métiers ne peuvent souffrir d'aucune interruption.`,
                        `La maintenance corrective et évolutive est indispensable pour garder vos logiciels performants à ${v}. Nous mettons à votre disposition un interlocuteur dédié pour assurer les mises à jour de sécurité.`,
                        `Bénéficiez d'une tranquillité d'esprit complète dans le ${d}. Nos ingénieurs surveillent l'état des serveurs et appliquent les correctifs nécessaires de manière totalement invisible.`
                    ], 12),
                    spin.pick([
                        `Votre logiciel évolue au rythme de la croissance de votre entreprise pour rester performant.`,
                        `Nous assurons des sauvegardes journalières cryptées pour parer à toute éventualité de perte de données.`,
                        `Notre équipe intervient selon des délais de rétablissement stricts (GTR) définis dans notre accord de support.`
                    ], 13)
                ],
                bullets: [
                    "Supervision en temps réel et alertes de dysfonctionnement",
                    "Mises à jour de sécurité régulières et correctifs rapides",
                    "Hébergement cloud de pointe avec CDN mondial",
                    "Contrat de support personnalisé (SLA) adapté à vos besoins"
                ],
                image: { src: "/assets/expertise/strategy.png", alt: `Maintenance applicative et évolutivité logicielle` }
            }
        ],
        "methodes-dev-coaching": [
            {
                title: spin.pick([
                    `Coaching technique et Mentorat de vos équipes à ${v}`,
                    `Accompagnement de vos développeurs et Clean Code à ${v}`,
                    `Audit de code et mentorat technique des équipes à ${v}`
                ], 1),
                subtitle: spin.pick([
                    `Améliorez les compétences de vos développeurs dans le ${d}`,
                    `Instaurez des standards de qualité et accélérez vos livraisons logicielles`,
                    `Accompagnement technique de proximité pour vos DSI et startups`
                ], 2),
                paragraphs: [
                    spin.pick([
                        `Vous souhaitez structurer votre équipe technique à ${v} ? Nous intervenons auprès de vos développeurs pour les coacher sur les pratiques modernes d'ingénierie logicielle. Que vous soyez un éditeur de logiciel SaaS, une startup de la Tech, ou la DSI d'un grand groupe, nous aidons vos équipes à progresser.`,
                        `Faites monter en compétences vos équipes techniques à ${v} grâce à notre méthodologie de mentorat. Nous formons vos développeurs au Clean Code, aux principes SOLID et à l'architecture logicielle afin d'éviter la dette technique.`,
                        `Optimisez la qualité des développements au sein de votre entreprise dans le ${d}. Nous animons des ateliers pratiques d'architecture et de revue de code pour instaurer une culture d'excellence technique.`
                    ], 3) + " " + spin.pick([
                        `Nos sessions d'accompagnement sont également disponibles pour les équipes de 	ext{${near1}} et 	ext{${near2}}.`,
                        `Nous intervenons sur site ou à distance auprès de vos collaborateurs à ${near1} et ${near2}.`,
                        `Ce coaching technique de haut niveau s'adresse aux startups de ${v}, ${near1} et ${near2}.`
                    ], 4),
                    spin.pick([
                        `Grâce à notre accompagnement, vos équipes gagnent en autonomie, en rigueur et en vitesse de livraison.`,
                        `L'amélioration de la qualité de votre code source réduit drastiquement le temps passé à corriger des bugs en production.`,
                        `Vos développeurs acquièrent les bons réflexes pour collaborer efficacement et maintenir un code propre.`
                    ], 5)
                ],
                bullets: [
                    "Sessions de mentorat technique individuelles et collectives",
                    "Sensibilisation au Clean Code et aux principes SOLID",
                    "Mise en place de revues de code efficaces et constructives",
                    "Accompagnement dans le choix des architectures logicielles"
                ],
                image: { src: "/assets/expertise/strategy.png", alt: `Coaching technique et mentorat développeurs à ${v}` }
            },
            {
                title: spin.pick([
                    `Mise en place de méthodes de dev agiles à ${v}`,
                    `Organisation de projets agiles et Scrum à ${v}`,
                    `Audit de vos workflows et méthodologies agiles à ${v}`
                ], 6),
                subtitle: spin.pick([
                    `Optimisez vos cycles de production et réduisez vos délais de mise sur le marché`,
                    `Structurez la communication entre vos équipes produit et technique à ${v}`,
                    `Réduisez le stress de vos lancements de produits grâce à Scrum/Kanban`
                ], 7),
                paragraphs: [
                    spin.pick([
                        `Nous structurons vos flux de développement (Agile, Scrum, Kanban) pour maximiser la visibilité sur l'avancement des projets et fluidifier la communication. C'est l'assurance d'un projet délivré à temps et sans friction.`,
                        `Améliorez la prédictibilité de vos livraisons logicielles à ${v}. Nous vous aidons à mettre en place des rituels agiles constructifs pour clarifier les rôles et motiver vos équipes techniques.`,
                        `Une bonne organisation technique est indispensable pour la croissance des entreprises du ${d}. Nous auditons vos outils de suivi (Jira, Linear) et formons vos équipes aux meilleures pratiques agiles.`
                    ], 8),
                    spin.pick([
                        `Fini les retards de livraison et le manque de clarté pour les équipes de ${v}.`,
                        `Bénéficiez de cycles de développement plus courts et de lancements plus sereins.`,
                        `La clarté sur les objectifs de sprint redonne du sens au travail quotidien de vos ingénieurs.`
                    ], 9)
                ],
                bullets: [
                    "Audit et réorganisation de vos workflows de développement",
                    "Mise en place d'outils de suivi de projet adaptés (Jira, Linear)",
                    "Définition de rituels agiles (Daily, Sprint Planning, Retrospective)",
                    "Optimisation de la communication entre le produit et la technique"
                ],
                image: { src: "/assets/expertise/web.png", alt: `Mise en place de méthodes agiles et dev à ${v}` }
            },
            {
                title: spin.pick([
                    `Automatisation des déploiements et CI/CD dans la région ${r}`,
                    `Déploiement continu (CI/CD) et DevOps à ${v}`,
                    `Sécurisez vos lancements de versions grâce au DevOps à ${v}`
                ], 10),
                subtitle: spin.pick([
                    `Sécurisez vos mises en production en éliminant les erreurs manuelles`,
                    `Zéro interruption de service lors de vos mises à jour logicielles`,
                    `Des pipelines de déploiement automatisés et validés dans le ${d}`
                ], 11),
                paragraphs: [
                    spin.pick([
                        `Nous mettons en place des pipelines d'intégration et de déploiement continus (CI/CD) pour valider automatiquement la qualité de votre code avant chaque mise en ligne, supprimant ainsi tout risque de régression.`,
                        `Ne craignez plus de mettre à jour vos outils de gestion à ${v}. Grâce aux configurations DevOps (GitHub Actions, GitLab CI), les tests automatisés valident le bon fonctionnement de l'application avant sa mise en ligne.`,
                        `Nous mettons en œuvre des stratégies de déploiement avancées en région ${r} pour supprimer les coupures de service lors des mises à jour majeures de vos applications.`
                    ], 12),
                    spin.pick([
                        `Déployez en toute confiance à ${v} à n'importe quel moment de la journée.`,
                        `Les erreurs de manipulation manuelle lors des lancements de code appartiennent désormais au passé.`,
                        `Votre équipe produit peut livrer de nouvelles fonctionnalités de manière autonome et sécurisée.`
                    ], 13)
                ],
                bullets: [
                    "Mise en place de tests unitaires et d'intégration automatisés",
                    "Configuration de pipelines CI/CD (GitHub Actions, GitLab CI)",
                    "Déploiements automatisés sans interruption de service",
                    "Gestion et sécurisation de vos variables d'environnement"
                ],
                image: { src: "/assets/expertise/erp.png", alt: `CI/CD pipelines et automatisation des déploiements` }
            }
        ],
        "acquisition-clients": [
            {
                title: spin.pick([
                    `Stratégie d'acquisition et Growth Marketing à ${v}`,
                    `Générez un flux régulier de clients qualifiés à ${v}`,
                    `Growth Marketing et acquisition locale de prospects à ${v}`
                ], 1),
                subtitle: spin.pick([
                    `Générez un flux régulier de clients qualifiés dans le ${d}`,
                    `Tunnels d'acquisition sur mesure pour votre activité locale`,
                    `Augmentez vos opportunités commerciales en région ${r}`
                ], 2),
                paragraphs: [
                    spin.pick([
                        `Avoir un site web performant est inutile si personne ne le visite. Nous concevons et déployons des stratégies d'acquisition ciblées pour votre marché à ${v} : génération de leads par téléphone pour le BTP et les services, campagnes de conversion pour le e-commerce, ou prospection automatisée (ABM) pour l'industrie B2B.`,
                        `Attirez de nouveaux prospects hautement qualifiés à ${v} grâce à nos tunnels d'acquisition. De l'artisan BTP voulant des contacts de devis au site marchand cherchant des ventes récurrentes, nous créons des mécaniques adaptées à votre cible.`,
                        `Développez votre part de marché dans le ${d} avec des leviers de Growth Marketing. Nous structurons des landing pages optimisées pour capter l'intérêt des professionnels locaux et maximiser les prises de contact.`
                    ], 3) + " " + spin.pick([
                        `Nos actions de growth marketing couvrent également les communes de ${near1} et ${near2}.`,
                        `Nous aidons les professionnels basés à ${v} mais aussi à ${near1} ou ${near2} à accroître leur notoriété.`,
                        `Bénéficiez de cette dynamique commerciale dans tout votre secteur, y compris à ${near1} et ${near2}.`
                    ], 4),
                    spin.pick([
                        `Nous attirons des visiteurs qualifiés et mettons en place des mécaniques de conversion pour les transformer en clients.`,
                        `Chaque point de contact de votre tunnel de vente est analysé pour augmenter le taux de conversion.`,
                        `Nous construisons des campagnes d'acquisition basées sur des données fiables pour garantir votre retour sur investissement.`
                    ], 5)
                ],
                bullets: [
                    "Définition de votre client idéal (Personas) et de votre positionnement",
                    "Mise en place de tunnels d'acquisition et de landing pages dédiées",
                    "Stratégies de lead generation adaptées au B2B et B2C à ${v}",
                    "Optimisation continue des taux de conversion (A/B testing)"
                ],
                image: { src: "/assets/expertise/strategy.png", alt: `Stratégie d'acquisition et growth marketing à ${v}` }
            },
            {
                title: spin.pick([
                    `Campagnes publicitaires payantes à ${v} (Google & Meta Ads)`,
                    `Acquisition payante (Google Ads, Facebook Ads) à ${v}`,
                    `Gestion et optimisation de campagnes publicitaires à ${v}`
                ], 6),
                subtitle: spin.pick([
                    `Obtenez des résultats immédiats et mesurables sur vos investissements`,
                    `Ciblez précisément les internautes de votre secteur dans le ${d}`,
                    `Augmentez vos ventes locales grâce au trafic publicitaire qualifié`
                ], 7),
                paragraphs: [
                    spin.pick([
                        `Nous gérons et optimisons vos budgets publicitaires sur Google Search, Facebook, Instagram et LinkedIn pour cibler précisément les internautes de ${v} prêts à acheter vos services. Nous optimisons le coût par lead pour chaque secteur.`,
                        `Captez les recherches intentionnelles de vos futurs clients à ${v} via Google Ads. Nous concevons également des campagnes visuelles ciblées sur Meta pour faire découvrir vos services dans tout le ${d}.`,
                        `Le trafic payant est un levier de croissance instantané dans la région ${r}. Nous rédigeons vos annonces publicitaires et configurons vos audiences de manière chirurgicale pour maximiser les leads.`
                    ], 8),
                    spin.pick([
                        `Chaque euro dépensé est tracé pour maximiser votre retour sur investissement (ROI).`,
                        `Nous suivons quotidiennement les indicateurs de performance de vos annonces pour réduire vos coûts par acquisition.`,
                        `Vos budgets sont investis uniquement sur les mots-clés et les profils d'utilisateurs les plus rentables.`
                    ], 9)
                ],
                bullets: [
                    "Création et gestion de campagnes de recherche et Display",
                    "Ciblage géographique précis dans la région ${r}",
                    "Rédaction d'annonces percutantes et conception de visuels",
                    "Optimisation quotidienne des enchères et du coût par lead"
                ],
                image: { src: "/assets/expertise/web.png", alt: `Campagnes Google Ads et Facebook Ads à ${v}` }
            },
            {
                title: spin.pick([
                    `Analyse de données et tracking de conversion à ${v}`,
                    `Tracking de conversion (GA4, GTM) et analytics à ${v}`,
                    `Looker Studio et pilotage par la donnée à ${v}`
                ], 10),
                subtitle: spin.pick([
                    `Prenez des décisions marketing basées sur des chiffres concrets`,
                    `Mesurez avec précision les actions de vos prospects dans le ${d}`,
                    `Des tableaux de bord transparents pour suivre vos performances à ${v}`
                ], 11),
                paragraphs: [
                    spin.pick([
                        `Nous installons et configurons les outils de tracking les plus performants (GA4, GTM, Server-Side) pour mesurer précisément le comportement de vos utilisateurs de ${v} et l'origine de vos ventes, sans perte d'information.`,
                        `Prenez le contrôle de vos statistiques de vente à ${v}. Nous mettons en place un plan de marquage de vos formulaires et boutons pour identifier d'où viennent vos clients les plus rentables.`,
                        `Bénéficiez d'une visibilité totale sur l'efficacité de vos canaux marketing dans la région ${r}. Nous unifions vos statistiques de trafic sur des rapports automatisés.`
                    ], 12),
                    spin.pick([
                        `Visualisez vos performances en temps réel sur des tableaux de bord clairs et transparents.`,
                        `L'implémentation du tracking côté serveur garantit le respect du RGPD et la justesse de vos données.`,
                        `Nous analysons mensuellement vos résultats pour vous formuler des préconisations stratégiques exploitables.`
                    ], 13)
                ],
                bullets: [
                    "Configuration avancée de Google Analytics 4 et Google Tag Manager",
                    "Mise en place du tracking côté serveur (Server-Side) pour contourner AdBlock",
                    "Création de tableaux de bord personnalisés (Looker Studio)",
                    "Rapports mensuels transparents et recommandations stratégiques"
                ],
                image: { src: "/assets/expertise/chatbot.png", alt: `Analyse de données et Looker Studio à ${v}` }
            }
        ]
    };

    return sections[serviceKey] || [];
}
