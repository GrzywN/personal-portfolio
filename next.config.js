/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US', 'pl-PL'],
    defaultLocale: 'en-US',
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
