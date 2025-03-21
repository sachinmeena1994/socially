/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Optional if you don't use Next.js Image component
  },
  // ❌ DO NOT use output: "export"
  // ❌ DO NOT use basePath or trailingSlash unless you're on GitHub Pages
};

module.exports = nextConfig;
