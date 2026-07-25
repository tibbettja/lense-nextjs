import pkg_config from "./package.json" with { type: "json" };

const isProd = process.env.NODE_ENV === "production";
const isVPS = process.env.VPS === "enabled";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: isProd && !isVPS ? "export" : undefined,
  async redirects() {
    return [
      {
        source: "/auth/signin",
        destination: "/",
        permanent: true,
      },
    ];
  },
  env: {
    NEXT_PUBLIC_VERSION: pkg_config.version,
  },
  basePath: "",
  assetPrefix: "",
  images: isProd || isVPS
    ? {
        unoptimized: true,
      }
    : undefined,
};

export default nextConfig;
