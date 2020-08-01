
/**
 * 看起来很多余的一个方法 但其实是为了实现类似Python中的列表构造语法
 * 示例：
 * let arr = [
 *   { n: '热门', v: '-1' },
 *   ...call(()=> {
 *      let map = []
 *      let str_code = String.fromCharCode
 *      for (let i = 0; i < 26; i++) {
 *          map.push({ 'n': str_code(65 + i), 'v': str_code(97 + i)})
 *      } return map
 *    }), { n: '#', v: '0' }
 *
 * ]
 * 在数组初始化时就优雅的构造了一个复杂的数据:
 * arr: [ { n: A, v: a}, { n: B, v: b}, { n: C, v: c} ... { n: Z, v: 'z } ]
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
    let str_time = /\[\d{2}:\d{2}[\.,:]\d{2,3}]/.exec(lyrics_arr[i])
    if (str_time) {
      str_time = str_time[0]
      let time = (parseInt(/(?<=\[)\d{2}/.exec(str_time)[0]) * 60) + parseInt(/(?<=\[\d{2}:)\d{2}/.exec(str_time)[0])
      let result = /(?<=]).+/.exec(lyrics_arr[i])
      lyric_map[time] = result ? result[0] : ''
    }
  }
  return lyric_map
}


