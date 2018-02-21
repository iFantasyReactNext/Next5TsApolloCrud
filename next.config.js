const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  webpack(config, options) {
    return config
  },
  typescriptLoaderOptions: {
    transpileOnly: false
  }
})