/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // static export
  basePath: "",              // no subpath
  assetPrefix: "",           // no prefix needed
  images: {
    unoptimized: true,       // required for static export
  },
};

module.exports = nextConfig;
