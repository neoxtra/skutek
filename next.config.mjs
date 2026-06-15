/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/files/:path*',
        destination: 'https://res.cloudinary.com/dv68rvg7w/image/upload/:path*'
      },
    ]
  }
};

export default nextConfig;