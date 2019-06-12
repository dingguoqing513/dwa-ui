// const errorHandler = (error, vm, info) => {
//   console.error("抛出全局异常")
//   console.error(vm)
//   console.error(error)
//   console.error(info)
// }
// let GlobalError = {
//   install: (Vue, options) => {
//     // 全局异常处理
//     Vue.config.errorHandler = errorHandler
//     Vue.mixin({
//       beforeCreate() {
//         const methods = this.$options.methods || {}
//         Object.keys(methods).forEach(key => {
//           let fn = methods[key]
//           this.$options.methods[key] = function (...args) {
//             let ret = fn.apply(this, args)
//             if (ret && typeof ret.then === 'function' && typeof ret.catch === "function") {
//               return ret.catch(errorHandler)
//             } else { // 默认错误处理
//               return ret
//             }
//           }
//         })
//       }
//     })
//     Vue.prototype.$throw = errorHandler
//   }
// }
// export default GlobalError