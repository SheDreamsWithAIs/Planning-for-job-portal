/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Required for GitHub Pages project sites (not username.github.io)
  basePath: '/Planning-for-job-portal',
  trailingSlash: true,
};

export default nextConfig;
