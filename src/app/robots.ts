import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // We point Google to the main sitemap. 
    // If the guidebook has its own sitemap (e.g., /guidebook/sitemap.xml), we can list it here too!
    sitemap: [
      'https://casajirafapv.com/sitemap.xml',
      'https://casajirafapv.com/guidebook/sitemap.xml', // Tells Google to also index the guidebook's sitemap
    ],
  };
}
