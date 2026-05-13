import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/saas-landing-templates",
  images: { unoptimized: true },
};
export default nextConfig;
