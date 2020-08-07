module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? './' : '/',
  productionSourceMap: false,
  transpileDependencies: [
    './src/utils/utils.js'
  ],

  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
      }
    },
  }
}
