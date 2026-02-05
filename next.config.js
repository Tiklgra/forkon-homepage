const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.forkon.de',
      },
      {
        protocol: 'https',
        hostname: 'forkon.de',
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
