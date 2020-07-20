
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
