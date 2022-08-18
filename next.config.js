/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
/* const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: "https:/fakestoreapi.com",
    loader: "custom",
    path: "/",
  },
};
 */
module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  // trailingSlash: true,
  images: {
    domains: ["https:/fakestoreapi.com"],
    loader: "custom",
    path: "/",
  },
  /*  pwa: {
    dest: "public",
    //register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV !== "production",
    swSrc: "sw.js",
  }, */
});
