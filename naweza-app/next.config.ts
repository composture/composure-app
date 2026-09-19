import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Set pageExtensions for proper TS/TSX resolution
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

export default nextConfig;