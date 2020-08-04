const Audioer = {
  install(Vue) {
    Vue.prototype.$audioer = new Audio()
  }
}

export default Audioer
