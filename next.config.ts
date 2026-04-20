import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/groupe-sb",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
