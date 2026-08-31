import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === 'production';

  return {
    rules: {
      userAgent: '*',
      ...(isProduction ? { allow: '/' } : { disallow: '/' }),
    },
    // We point Google to the main sitemap. 
    // If the guidebook has its own sitemap (e.g., /guidebook/sitemap.xml), we can list it here too!
    sitemap: isProduction 
      ? [
          'https://casajirafapv.com/sitemap.xml',
          'https://casajirafapv.com/guidebook/sitemap.xml',
        ]
      : undefined,
  };
}
