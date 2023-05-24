/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    distDir: "docs",
    assetPrefix: debug ? "./" : "https://flashdesignory.github.io/news-site-next-static/",
    images: {
        unoptimized: true,
    }
};

module.exports = nextConfig;
