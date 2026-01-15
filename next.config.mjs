/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dangerously allow production builds to complete even with errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
