// vue.config.js
module.exports = {
  css: {
    modules: true
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/menswear/'
    : '/'
}
