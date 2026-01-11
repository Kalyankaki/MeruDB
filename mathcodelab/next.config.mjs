/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Azure App Service / Docker deployment
  output: "standalone",
  
  // Image optimization configuration for Azure CDN
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google profile images
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // GitHub avatars
      },
      {
        protocol: "https",
        hostname: "*.blob.core.windows.net", // Azure Blob Storage
      },
    ],
  },

  // Environment variables validation
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },

  // Headers for security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirects for common routes
  async redirects() {
    return [
      {
        source: "/login",
        destination: "/auth/signin",
        permanent: true,
      },
      {
        source: "/signup",
        destination: "/auth/signin",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
