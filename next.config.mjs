/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"], // Common auth providers
  },
};

export default nextConfig;
