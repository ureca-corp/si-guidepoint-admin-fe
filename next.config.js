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
  images: {
    unoptimized: true,
  },
  assetPrefix: ".",
};

module.exports = nextConfig;
