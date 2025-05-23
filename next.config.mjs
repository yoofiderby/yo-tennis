/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
     {
      protocol: 'https',
      hostname: 'cdn.sanity.io',
     },
    ],
   },
  // Exclude debug and sanity-client from SSR bundle so Node can require them
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || []
      config.externals.push('debug')
      config.externals.push('@sanity/client')
    }
    return config
  },
};

export default nextConfig;
