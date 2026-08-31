import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://casajirafapv.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // The guidebook is rewritten via next.config.ts, so Googlebot will naturally crawl it 
    // from the main page links, but its pages aren't natively known by this Next.js app.
    // To solve this, you could ideally merge the guidebook's sitemap.xml here or rely on robots.txt.
  ];
}
