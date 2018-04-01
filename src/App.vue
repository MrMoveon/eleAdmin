<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  mounted(){
    window.addEventListener('resize',function(){
      
    })
  }
}
</script>

<style>
#app{
  height: 100%;
}
</style>
