/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure for GitHub Pages deployment only when deploying to GitHub Pages
  // For local production testing, these should be empty
  basePath: process.env.GITHUB_PAGES === 'true' ? '/cursor-hover-mask-effect' : '',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/cursor-hover-mask-effect/' : '',
  // Enable static export only for GitHub Pages deployment
  output: process.env.GITHUB_PAGES === 'true' ? 'export' : undefined,
}

module.exports = nextConfig
