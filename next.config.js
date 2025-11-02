/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
  },
  images: {
    domains: ['de-taalreis.nl'],
  },
}

module.exports = nextConfig

