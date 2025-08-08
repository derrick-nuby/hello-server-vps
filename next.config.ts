import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "standalone",
  assetsPrefix: "/web",
  basePath: "/web",
  webpack: (config) => { },

};

export default nextConfig;
