export default {
  /**
   * 设置Cookie
   */
  setCookie (key, value, expireDays) {
    const d = new Date()
    d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000))
    document.cookie = `${key}=${value}; expires=${d.toUTCString()}`
  },
  /**
   * 获取cookie
   */
  getCookie (key) {
    const k = `${key}=`
    const cookieArr = document.cookie.split(';')

    for (let i = 0; i < cookieArr.length; i++) {
      let cookie = cookieArr[i]
      while (cookie.charAt(0) === ' ') cookie = cookie.substring(1)
      if (cookie.indexOf(k) !== -1) return cookie.substring(k.length, cookie.length)
    }

    return ''
  },
  /**
   * 查看视口尺寸
   */
  getViewportOffset () {
    if (window.innerHeight) {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
    // IE
    if (document.compatMode === 'CSS1Compat') {
      // 标准模式
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    } else {
      // 混杂模式
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }
    }
  },
  /**
   * 转换时间格式
   */
  formDate (date, type) {
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    m = m < 10 ? `0${m}` : m
    let d = date.getDate()
    d = d < 10 ? `0${d}` : d
    if (type == '/') {
      return `${y}/${m}/${d}`
    }
    return `${y}-${m}-${d}`
  }

}
