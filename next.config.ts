/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const repoName = process.env.NEXT_PUBLIC_BASE_PATH || "/portfolio-04";

const nextConfig = {
  output: "export",
  basePath: isProd ? repoName : "",
  assetPrefix: isProd ? `${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
