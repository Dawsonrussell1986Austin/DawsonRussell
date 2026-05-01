/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Serve the original static homepage at / byte-for-byte.
      { source: "/", destination: "/index.html" },
    ];
  },
};

module.exports = nextConfig;
