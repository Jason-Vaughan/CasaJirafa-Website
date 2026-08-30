import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/guidebook',
        destination: '/guidebook/en',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/guidebook/:path*',
        destination: 'https://pv-ai-guidebook.vercel.app/guidebook/:path*',
      },
    ];
  },
};

export default nextConfig;
