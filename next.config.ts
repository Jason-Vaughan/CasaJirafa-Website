import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
