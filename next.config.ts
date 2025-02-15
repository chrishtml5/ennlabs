import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false,
    remotePatterns: [],
    domains: [
      'www.ennlabs.com',
      'ennlabs.vercel.app',
      'ennlabs-chrisg-alderlakeios-projects.vercel.app'
    ],
  },
  async rewrites() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
      },
    ];
  },
};

export default nextConfig;
