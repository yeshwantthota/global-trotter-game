/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['via.placeholder.com'],
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3001',
  },
  trailingSlash: true,
}

module.exports = nextConfig 