// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Needed for GitHub Pages
  basePath: "/socially", // 👈 Important if your repo is not root
};

module.exports = nextConfig;
