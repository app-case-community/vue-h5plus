const {
  autoPages
} = require('./build/page.config')
const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
const isDev = process.env.NODE_ENV === 'development'

const pages = {
  ...autoPages(['index']), // 首页
  ...autoPages(['helloh5']), // helloh5 模块页面
  ...autoPages(['hellomui']) // hellomui 模块页面
}

const PackerAppPlugin = require('./build/plugins/packapp.plugin')

module.exports = {
  publicPath: isDev ? '/' : './',
  productionSourceMap: isDev,
  pages,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('~', resolve('src'))
  },
  configureWebpack: {
    plugins: [].concat(isDev ? [] : [
      new PackerAppPlugin({
        appid: 'VueH5Plus',
        type: 'h5plus',
        rootDir: resolve('.'),
        originDir: resolve('./dist'),
        distDirs: {
          android: resolve('./../android/app/src/main/assets'),
          ios: resolve('./../ios/app/Pandora')
        }
      })
    ])
  }
}
