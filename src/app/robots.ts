import { MetadataRoute } from 'next';
import { BRAND } from '@/lib/seo-dataset';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/'],
        },
        sitemap: `https://${BRAND.domain}/sitemap.xml`,
    };
}
