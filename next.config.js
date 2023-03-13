/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: "dev-only",
      labelFormat: "[dirname]-[filename]-[local]",
    },
  },
  env: {
    gqlServer: "https://guidepoint-api.ureca.im/graphql",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: "/",
};

module.exports = nextConfig;
