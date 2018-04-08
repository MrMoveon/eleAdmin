<template>
  <div id="app" class="admin-side-spread">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  mounted() {
   
    this.resize();
    // 设置是否为pc
    window.addEventListener("resize", this.resize);
  },
  methods: {
    resize() {
      var winW = document.documentElement.clientWidth;
      if (winW <= 992) {
        this.$store.commit('setAsideCollapse',{flag:false})
        this.$store.commit("setIsPc", false);
      } else {
        this.$store.commit("setIsPc", true);
      }
    }
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
