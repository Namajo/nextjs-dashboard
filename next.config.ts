import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  allowedDevOrigins: ['vm-debian-webserver'],
  crossOrigin: 'anonymous',
}

export default nextConfig;
