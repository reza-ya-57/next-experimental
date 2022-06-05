/** @type {import('next').NextConfig} */

const withFonts = require('next-fonts');

module.exports = withFonts({
  reactStrictMode: true,
  distDir: "build",
  enableSvg: true,
  webpack(config, options) {
    return config;
  }
});