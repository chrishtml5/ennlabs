const nextConfig = {
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
        source: '/:path*', 
        destination: '/',
      },
    ];
  },
};

module.exports = nextConfig;
