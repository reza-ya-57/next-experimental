/** @type {import('next').NextConfig} */

const withFonts = require('next-fonts');

module.exports = withFonts({
  reactStrictMode: true,
  enableSvg: true,
  webpack(config, options) {
    return config;
  }
});