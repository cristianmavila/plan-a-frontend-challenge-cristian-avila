/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    TMDB_API: process.env.TMDB_API,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_IMG_PATH: process.env.TMDB_IMG_PATH,
  },
};

module.exports = nextConfig;
