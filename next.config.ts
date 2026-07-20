import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate static files in `out/` so the presentation can be served by Cloudflare Pages.
  output: "export",
  // Keep the presentation free of the Next.js development indicator.
  devIndicators: false,
};

export default nextConfig;
