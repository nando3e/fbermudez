import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build autocontenido para el contenedor (Dokploy/Hetzner).
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
