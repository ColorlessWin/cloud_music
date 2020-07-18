const cookie = { __value: null }

Object.defineProperty(cookie, 'value', {
  get() {
    if (!this.__value) this.__value = localStorage.getItem('cookie')
    return this.__value
  },
  set(v) {
    localStorage.setItem('cookie', v)
    this.__value = v
  }
})

export default cookie

