/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Required for GitHub Pages project sites (not username.github.io)
  // Only use basePath in production builds (next build), not in dev mode (next dev)
  // Next.js automatically sets NODE_ENV=production during 'next build'
  basePath: process.env.NODE_ENV === 'production' ? '/Planning-for-job-portal' : '',
  trailingSlash: true,
};

export default nextConfig;
