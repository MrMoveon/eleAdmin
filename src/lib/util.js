let util = {}
// 设置title
util.title = function (title) {
  title = title || 'iuehtml'
  window.document.title = title
}
export default util
