/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/cursor-hover-mask-effect' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cursor-hover-mask-effect/' : '',
}

module.exports = nextConfig
