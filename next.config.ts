// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source:
          "/_next/static/(.*).(js|css|json|woff2|eot|ttf|svg|png|jpg|jpeg|gif)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
