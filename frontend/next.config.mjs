/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to a project page (not username.github.io), uncomment and set your repo name:
  // basePath: '/Planning-for-job-portal',
  // trailingSlash: true,
};

export default nextConfig;
