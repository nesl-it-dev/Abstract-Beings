import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React strict mode
  swcMinify: true, // Enables SWC compiler for faster builds and minification

  images: {
    formats: ["image/avif", "image/webp"], // Serve optimized image formats
    domains: ["your-image-domain.com"], // Add any external domains serving images
    minimumCacheTTL: 31536000, // Cache images for 1 year
  },

  experimental: {
    optimizeCss: true, // Optimize CSS delivery
    scrollRestoration: true, // Improve navigation performance
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache static assets for 1 year
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevents clickjacking attacks
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Prevents MIME sniffing security risk
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload", // Enforce HTTPS
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // Prevent server-side modules from being included in client-side bundles
      };
    }
    return config;
  },
};

export default nextConfig;
