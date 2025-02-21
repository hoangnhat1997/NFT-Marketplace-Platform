/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   "https://api.active.vn",
    //   "https://active.vn",
    //   "https://cdn.active.vn",
    //   "https://test.active.vn",
    //   "https://test-cdn.active.vn",
    //   "103.149.99.18",
    //   "103.149.99.46",
    //   "103.149.99.42",
    //   "103.149.99.42",
    //   "222.253.41.65",
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
