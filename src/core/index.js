import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

// 【1】 整个Vue的入口，在new Vue之后执行，首先初始化一些全局API，需要用到Vue构造函数，进入core/instance/index.js中
// 【17】 再来看看initGlobalAPI，在core/global-api/index.js中
// initGlobalAPI说明我们在引用Vue的时候在这里给Vue初始化了一些全局的配置和API
initGlobalAPI(Vue)

// 【1】 定义了一些服务端渲染的东西
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
