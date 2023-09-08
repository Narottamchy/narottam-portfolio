/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn-icons-png.flaticon.com','scontent.fdel46-1.fna.fbcdn.net',"www.drupal.org"],
  },
};

module.exports = nextConfig;
