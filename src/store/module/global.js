const global = {
  state: {
    isPc: true,
    mobielCollapse: false,
    asideHide: false,
    asideCollapse: false,
    asideWidth: '220px'
  },
  mutations: {
    setAsideCollapse(state, obj) {
      if (obj) {
        return (state.asideCollapse = obj.flag)
      }
      return (state.asideCollapse = !state.asideCollapse)
    },
    setAsideWidth(state, width) {
      if (width) {
        return (state.asideWidth = width)
      }
      return (state.asideWidth = state.asideCollapse ? '64px' : '220px')
    },
    setIsPc(state, flag) {
      return (state.isPc = flag)
    },
    setMobielCollapse(state, obj) {
      if (obj) {
        return (state.asideCollapse = obj.flag)
      }
      return (state.mobielCollapse = !state.mobielCollapse)
    }
  },
  actions: {}
}
export default global
