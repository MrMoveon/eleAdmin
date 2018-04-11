<template>
    <div class='theme-dark-blue' :class='collapse'>
            <admin-aside/>
            <div class='admin-wrap-right'>
                <el-header height='50px'>
                    <admin-nav-left/>
                    <admin-nav-right/>
                </el-header>
                <div class='admin-main'>
                    <router-view/>
                </div>
                <div class='admin-body-shadow' @click='hideAside' v-if='mobielCollapse'></div>
            </div>
    </div>
</template>

<script>
import aside from './aside'
import navLeft from './navLeft'
import navRight from './navRight'
import { mapGetters } from 'vuex'
export default {
  name: 'layout',
  data () {
    return {
      asideWidth: '220px'
    }
  },
  computed: {
    ...mapGetters(['isPc', 'pcAsideCollapse', 'mobielCollapse']),
    collapse () {
      if (this.isPc) {
        return this.pcAsideCollapse ? 'admin-pc-fold' : ''
      } else {
        return this.mobielCollapse ? 'admin-fold' : ''
      }
    }
  },
  components: {
    adminAside: aside,
    adminNavLeft: navLeft,
    adminNavRight: navRight
  },
  methods: {
    hideAside () {
      this.$store.commit('setAsideCollapse', { flag: false })
      this.$store.commit('setMobielCollapse')
    }
  }
}
</script>

<style lang='less'>
.el-container {
  height: 100%;
}

.el-header {
  height: 50px;
  padding: 0;
  background-color: #fff;
}

.el-aside {
  height: 100%;
}

.admin-main {
  padding: 15px;
  background: #f2f2f2;
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
