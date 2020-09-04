export function debounce(fun, wait) {
  let itemout;
  return function () {
    let context = this;
    let ages = arguments;
    clearTimeout(itemout)
    itemout = setTimeout(function () {
      fun.apply(context, ages)
    }, wait)
  }
}
//防抖函数


//时间戳
//正则表达式--->字符串匹配
export function formatDate(date, fmt) {
  // 获取年份
  // y
  // y+  表示1个或多个y
  // y*  表示0个或多个y
  // y?  表示0个或1个y
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}