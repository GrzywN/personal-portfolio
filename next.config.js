/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US', 'pl-PL'],
    defaultLocale: 'en-US',
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
