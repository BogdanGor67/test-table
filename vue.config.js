module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-table/' : '/',
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  }
};