/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use standalone output when not deploying to Vercel
  ...(process.env.VERCEL ? {} : { output: "standalone" }),
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"], // Common auth providers
  },
};

export default nextConfig;
