
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'utils', 'component'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}
