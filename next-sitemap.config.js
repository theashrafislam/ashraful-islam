/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://theashrafislam.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://theashrafislam.com/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/_next/static/',
      },
    ],
  },
};