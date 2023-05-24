/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    distDir: "dist",
    assetPrefix: "./",
    basePath: '/news-site-next-static',
    images: {
        unoptimized: true,
    }
};

module.exports = nextConfig;
