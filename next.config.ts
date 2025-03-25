import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },

  // Add your custom webpack configuration here
  //...
};

export default nextConfig;
