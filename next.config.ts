import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: [
    "twitter-api-v2"
  ],
  allowedDevOrigins: ["*"]
};

export default nextConfig;
