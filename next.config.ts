import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: isGithubPages ? "/mksoo-portfolio" : "",
  assetPrefix: isGithubPages ? "/mksoo-portfolio" : "",
  trailingSlash: true, // export시 필요하다고 함.
  output: "export",
  images: {
    unoptimized: true, // ← 이 줄 추가!
  },
};

export default nextConfig;
