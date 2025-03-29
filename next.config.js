/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['claudenation.org'], // Add any domains here that will host images
  },
  // This setting enables using static exports for GitHub Pages if needed
  output: process.env.EXPORT_MODE === 'static' ? 'export' : undefined,
}

module.exports = nextConfig 