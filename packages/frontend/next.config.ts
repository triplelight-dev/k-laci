import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      atoms: './atoms'
    }
  }
};

export default nextConfig;
