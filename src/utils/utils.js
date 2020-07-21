
export function future(func, delay, _this) {
  setTimeout(function () {
    if (_this) func.call(_this)
    else func()
  }, delay)
}

export function str_empty(str) {
  if (!str) return true
  return str.replace(/(^s*)|(s*$)/g, "").length === 0
}


export function debounce(func, delay, _this) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() =>{
      func.apply(_this, args)
    }, delay)
  }
}
