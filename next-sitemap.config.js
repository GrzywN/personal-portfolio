/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://karolbinkowski.me',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/404' },
      { userAgent: '*', disallow: '/thank-you' },
      { userAgent: '*', disallow: '/pl-PL/404' },
      { userAgent: '*', disallow: '/pl-PL/thank-you' },
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/404', 'thank-you', '/pl-PL/404', '/pl-PL/thank-you'],
};
