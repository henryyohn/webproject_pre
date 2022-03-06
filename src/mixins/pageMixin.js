const pageMixin = {
  create() {

  },
  methods: {
    debounce(fn, wait = 1000) {
      let timer = null;
      return function () {
        if (!timer) {
          fn.apply(this, arguments);
        }
        timer = setTimeout(function () {
          clearTimeout(timer);
          timer = null;
        }, wait)
      }
    },
    debounce2(fn, wait = 1000) {
      let timer = null;
      return function () {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        timer = setTimeout(function () {
          fn.apply(this, arguments);
        }, wait)
      }
    },
    Debounce(fn, delay = 300, immediate = false) {
      let timer = null // 闭包存储setTimeout状态
      return function () {
        let self = this // 事件源this
        let args = arguments // 接收事件源的event
        if (timer) clearTimeout(timer) // 存在就清除执行fn的定时器
        if (immediate) { // 立即执行
          let callNow = !timer // 执行fn的状态
          timer = setTimeout(function () {
            timer = null
          }, delay)
          if (callNow) fn.apply(self, args)
        } else { // 非立即执行
          timer = setTimeout(function () { // 或者使用箭头函数将this指向dom
            fn.apply(self, args)
          }, delay)
        }
      }
    }
  }
}
export default pageMixin
