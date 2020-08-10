const UploadServerPlugin = require('./plugins/UploadServerPlugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? './' : '/',
  productionSourceMap: false,

  configureWebpack: {

    plugins: [
      /**
       * 项目build后自动将 dist 文件夹下的文件全部上传到服务器
       * option{address} 服务器地址
       * option{port} 端口
       * option{password} 密码， 服务器需要验证密码才能执行更新
       * */
      new UploadServerPlugin({
        address:  process.env.ADDRESS || 'localhost',
        port:     process.env.HOT_UPDATE_PORT || '80',
        password: process.env.MY_KEY || ''
      })
    ],

    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
      }
    },
  }
}
