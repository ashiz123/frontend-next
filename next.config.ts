import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Proxy requests to '/api/*' path
        destination: 'http://localhost:3000/api/:path*', // Your backend server running on port 5000
      },
    ];
  },
};

export default nextConfig;
