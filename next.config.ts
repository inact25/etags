import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'etags.cylink.site',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        // Cloudflare R2 public domain for NFT images
        protocol: 'https',
        hostname: '*.r2.dev',
      },
      {
        // Alternative R2 custom domain pattern
        protocol: 'https',
        hostname: '*.cloudflarestorage.com',
      },
      {
        // Ghost CMS blog images
        protocol: 'https',
        hostname: 'blog.javapixa.com',
      },
      {
        // Unsplash images (used by Ghost)
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        // Ghost CDN
        protocol: 'https',
        hostname: 'static.ghost.org',
      },
    ],
  },
};

export default nextConfig;
