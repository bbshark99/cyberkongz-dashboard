/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } }
    return config
  },
  images: {
    domains: ['api.reservoir.tools'],
    formats: ['image/jpeg'],
  },
  reactStrictMode: false,
}

module.exports = nextConfig
