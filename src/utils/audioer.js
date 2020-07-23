const Audioer = {
  install: function (Vue) {
    Vue.prototype.$audioer = new Audio()
  }
}

export default Audioer
