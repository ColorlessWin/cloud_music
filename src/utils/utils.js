
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


//解析lyric格式的歌词
export function lyricParse(lyric) {
  let lyrics_arr = lyric.split('\n')
  let lyric_map = {}
  for (let i = 0; i < lyrics_arr.length - 1; i++) {
    let str_time = /\[\d{2}:\d{2}\.\d{2,3}]/.exec(lyrics_arr[i])
    if (!str_time) continue
    str_time = str_time[0]
    let time = (parseInt(/(?<=\[)\d{2}/.exec(str_time)[0]) * 60) + parseInt(/(?<=\[\d{2}:)\d{2}/.exec(str_time)[0])
    let result = /(?<=]).+/.exec(lyrics_arr[i])
    lyric_map[time] = result ? result[0] : '...'
  }
  return lyric_map
}
