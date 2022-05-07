import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// 【2】 Vue的构造函数，其中只执行了一个函数 this._init(options)
// 【2】 这个_init，在instance/init.js中，进入生命周期的init函数
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

// 【6】 这些Mixin方法我们也来看一看，在运行Vue环境时就执行下面这些方法。首先是initMixin(Vue)，其中定义了_init
initMixin(Vue)
// 【6】 再看看stateMixin(Vue)，在instance/state.js中
stateMixin(Vue)
// 【9】 在instance/events.js中
eventsMixin(Vue)
// 【10】 在instance/lifecycle.js中
lifecycleMixin(Vue)
// 【11】 在instance/render.js
renderMixin(Vue)

export default Vue
