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
// const nextConfig = {
//   reactStrictMode: true,
//   distDir: "build",
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.(png|jpe?g|gif|woff2)$/i,
//       use: [
//         {
//           loader: 'file-loader',
//         },
//       ],
//     });

//     return config;
// },
// }

// module.exports = nextConfig
