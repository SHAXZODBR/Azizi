/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This will skip ESLint checking during builds
  },
  typescript: {
    ignoreBuildErrors: true, // This will skip TypeScript type checking during builds
  },
};

module.exports = nextConfig;
