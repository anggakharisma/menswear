// vue.config.js
module.exports = {
    css: {
      modules: true
    },
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/menswear-front/'
    : '/'
  }
