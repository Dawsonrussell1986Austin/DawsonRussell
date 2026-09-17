import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: false,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
