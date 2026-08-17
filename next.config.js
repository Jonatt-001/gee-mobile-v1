/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Required for static HTML exports
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gee-mobile.gee-mobileassets.com',
      },
      {
        protocol: 'https',
        hostname: '**.gee-mobileassets.com',
      },
    ],
  },
};

module.exports = nextConfig;
