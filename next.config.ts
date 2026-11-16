import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/buchen",
        destination: "https://benberger-padel.ebusy.de/",
        permanent: false,
      },
    ];
  },
  serverExternalPackages: ["sanity", "@sanity/vision", "next-sanity", "swr"],
  images: {
    qualities: [75, 90],
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
