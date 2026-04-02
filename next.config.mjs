import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  devIndicators: false,
  // Set NEXT_BASE_PATH env var when deploying to a GitHub Pages sub-path
  // e.g. NEXT_BASE_PATH=/REAREyeDocs for https://username.github.io/REAREyeDocs
  // Leave unset when using a custom domain (GitHub Pages or EdgeOne Pages)
  ...(process.env.NEXT_BASE_PATH && {
    basePath: process.env.NEXT_BASE_PATH,
    assetPrefix: process.env.NEXT_BASE_PATH,
    env: {
      NEXT_PUBLIC_BASE_PATH: process.env.NEXT_BASE_PATH,
    },
  }),
};

export default withMDX(config);
