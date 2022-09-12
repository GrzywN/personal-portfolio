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
};

module.exports = nextConfig;
