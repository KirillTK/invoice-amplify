/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'standalone',
  serverRuntimeConfig: {},
  publicRuntimeConfig: {}
}

module.exports = nextConfig;
