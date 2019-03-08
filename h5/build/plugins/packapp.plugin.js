const appid = require('./../../package.json').appid
// 平台
const PLATFORMS = {
  universal: 'universal',
  android: 'android',
  ios: 'ios'
}
// 当前环境
const platform = process.env.PLATFORM_ENV || PLATFORMS.universal
const pluginName = 'PackAppPlugin'
// 打包插件
class PackerAppPlugin {
  apply (compiler) {
    // compilation
    compiler.hooks.done.tap(pluginName, (stats) => {
      setTimeout(() => {
        switch (platform) {
          case PLATFORMS.universal:
            break
          case PLATFORMS.android:
            break
          case PLATFORMS.ios:
            break
        }
        console.log(`${appid} [${platform}] build done.`)
      }, 0)
    })
  }
}
module.exports = PackerAppPlugin
