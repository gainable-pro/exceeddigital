import { MetadataRoute } from 'next';
import { CITIES, SERVICES, BRAND, TOP_20_SLUGS } from '@/lib/seo-dataset';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = `https://${BRAND.domain}`;

    // Base pages
    const staticPages = [
        '',
        '/audit-site-web',
        '/services/creation-site-web-seo',
        '/services/erp-plateformes',
        '/services/chatbot-automatisation',
        '/services/strategie-image',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic pages (City x Service) - Filtered for Phase 1 (Top 20)
    const dynamicPages = CITIES
        .filter(city => TOP_20_SLUGS.includes(city.slug))
        .flatMap((city) =>
            SERVICES.map((service) => ({
                url: `${baseUrl}/${city.slug}/${service.key}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.6,
            }))
        );

    return [...staticPages, ...dynamicPages];
}
