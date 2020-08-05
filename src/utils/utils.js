
/**
 * 看起来很多余的一个方法 但其实是为了方便通过直接调用一个箭头函数来实现一些优雅方便的写法
 * 示例：
 * let arr = [
 *   { n: '$', v: '-1' },
 *   ...call(()=> {
 *      let map = []
 *      let str_code = String.fromCharCode
 *      for (let i = 0; i < 26; i++) {
 *          map.push({ 'n': str_code(65 + i), 'v': str_code(97 + i)})
 *      } return map
 *    }), { n: '#', v: '0' }
 * ]
 * 在数组初始化时就优雅的构造了一个复杂的数据:
 * arr: [ { n: '$', v: '-1' }, { n: A, v: a}, { n: B, v: b}, ... { n: Z, v: 'z }, { n: '#', v: '0' } ]
 * */
export function call(func) { return func() }


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
      if (_this) func.apply(_this, args)
      else func(args)
    }, delay)
  }
}


//解析lyric格式的歌词
export function lyricParse(lyric) {
  if (!lyric) return {}
  let lyrics_arr = lyric.split('\n')
  let lyric_map = {}
  for (let i = 0; i < lyrics_arr.length - 1; i++) {
    let str_time = /\d{1,2}[.,:]\d{1,2}[.,:]\d{2,3}/.exec(lyrics_arr[i])
    if (str_time) {
      str_time = str_time[0]
      // IE 中的一个大坑
      // IE 浏览器不支持正则中的后置断言和前置断言
      // let m = /(?<=\[)\d{1,2}/.exec(str_time)[0]
      // let s = /(?<=\[\d{1,2}[.,:])\d{1,2}/.exec(str_time)[0]
      let times = str_time.split(/[.,:]/)
      let m = times[0]
      let s = times[1]
      let time = (parseInt(m) * 60) + parseInt(s)
      let result = lyrics_arr[i].split(/\[\d{1,2}[.,:]\d{1,2}[.,:]\d{2,3}]/)[1]
      lyric_map[time] = result ? result : '...'
    }
  }
  return lyric_map
}


