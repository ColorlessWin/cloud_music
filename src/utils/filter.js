
const Filter = {

  install: function(Vue) {

    //日期格式化(用法同C# "yyyy-MM-dd HH:mm:ss")
    Vue.filter("dateTimeFormat", function (date, fmt = 'yyyy-MM-dd HH:mm:ss') {  //日期时间格式化
      if (!date) {
        return ''
      }
      if (typeof date === 'string') {
        date = date.replace('T', ' ').replace('Z', '');
        date = new Date(date.replace(/-/g, '/'))
      }
      if (typeof date === 'number') {
        date = new Date(date)
      }
      var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
      }
      var week = {
        '0': '\u65e5',
        '1': '\u4e00',
        '2': '\u4e8c',
        '3': '\u4e09',
        '4': '\u56db',
        '5': '\u4e94',
        '6': '\u516d'
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[date.getDay() + ''])
      }
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
      }
      return fmt
    });

    //秒、毫秒（时长）格式化为时分秒（例：65000ms => 00:01:05）
    Vue.filter('timeLongFormat', function (value, isMs=false,dft = '00:00:00') {
      let total = parseInt(value);
      if (!isNaN(total)) {
        if (isMs) {
          total = total/1000;
        }
        let hours = parseInt(total / 3600);
        let minutes = parseInt((total % 3600) / 60);
        let seconds = parseInt((total % 3600) % 60);
        let h = hours > 9 ? hours : '0' + hours;
        let m = minutes > 9 ? minutes : '0' + minutes;
        let s = seconds > 9 ? seconds : '0' + seconds;
        if (hours === 0) return m + ':' + s;
        return h + ':' + m + ':' + s;
      }
      else {
        return dft;
      }
    });

    Vue.filter('logogram', function (value) {
      if (value >= 10000) {
        return value = (value / 10000).toFixed(1) + '万'
      }
      return value
    })
  }
}

export default Filter
