import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  images: isStaticExport ? { unoptimized: true } : undefined,
};

export default nextConfig;
