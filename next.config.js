
const withImages = require('next-images')


module.exports = withImages({
  eslint: {
    dirs: ['pages', 'utils', 'component'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  webpack(config, options) {
    return config
  }
})