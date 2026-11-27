import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: false,
  },
  async redirects() {
    return [
      // The Facebook lead form links to /privacy-policy.
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
