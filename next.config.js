/** @type {import('next').NextConfig} */
const development = process.env.NODE_ENV === "development";
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    distDir: "docs",
    assetPrefix: "./",
    basePath: development ? "" : '/news-site-next-static',
    images: {
        unoptimized: true,
    }
};

module.exports = nextConfig;
