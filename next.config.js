/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/sap-onboarding',
  // assetPrefix: '/sap-onboarding/',
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  productionBrowserSourceMaps: false, // Disable source maps in production
};

module.exports = nextConfig;
