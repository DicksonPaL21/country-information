/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    typedRoutes: true,
  }
}

module.exports = nextConfig
