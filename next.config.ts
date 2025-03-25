import type { NextConfig } from "next";
// https://d8mbkzpwhwsvw.cloudfront.net/_next/image?url=%2Fblue-background.jpg&w=640&q=75
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  remotePatterns: [
    {
      urlPattern: "https://d8mbkzpwhwsvw.cloudfront.net/",
      // Add more properties if needed
    },
  ],

  // Add your custom webpack configuration here
  //...
};

export default nextConfig;
