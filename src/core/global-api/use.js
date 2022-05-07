/* @flow */

import { toArray } from '../util/index'

// 【18】 这个方法为Vue.use定义了两种使用方法。
// 第一种就是你写的插件（plugin参数）是一个对象，然后Vue.use会找到这个对象中的install方法作为入口调用
// 第二种就是你传来的参数就是一个函数，然后直接执行这个函数。当install方法被同一个插件多次调用，插件将只会被安装一次。

export function initUse (Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    const args = toArray(arguments, 1)
    args.unshift(this)
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
