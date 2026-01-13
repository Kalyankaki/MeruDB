/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore ESLint errors during production builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ignore TypeScript errors during production builds
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone",
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"], // Common auth providers
  },
};

export default nextConfig;
