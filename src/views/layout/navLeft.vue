<template>
    <el-menu  class="admin-nav-left" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" v-if="isPc">
            <i :class="shrink"></i>
        </el-menu-item>
        <el-menu-item index="4" v-else>
            <i :class="mobielArrow"></i>
        </el-menu-item>
        <el-menu-item index="2"  class="hidden-md-and-down">
            <a href="https://www.baidu.com" target="_blank"><i class="ele-icon-website"></i></a>
        </el-menu-item>
        <el-menu-item index="3"><i class="ele-icon-refresh-2"></i></el-menu-item>
    </el-menu>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'admin-nav-left',
    computed:{
        ...mapGetters([
            'isPc',
            'pcAsideCollapse',
            'mobielCollapse'
        ]),
        shrink(){
            return this.pcAsideCollapse?'ele-icon-spread-left':'ele-icon-shrink-right';
        },
        mobielArrow(){
            return this.mobielCollapse?'ele-icon-shrink-right':'ele-icon-spread-left'
        }
        
    },
    methods:{
        ...mapMutations([
            'setAsideCollapse',
            'setAsideWidth'
        ]),
        handleSelect(key, keyPath) {
            if(key==='1'){
                this.setAsideCollapse()
                this.setAsideWidth()
            }
            if(key==='4'){
               this.setAsideWidth('220px')
               this.setAsideCollapse({flag:false})
               this.$store.commit('setMobielCollapse')
            }
        }
    }
}
</script>

<style lang="less" scoped>
.el-menu--horizontal>.el-menu-item{
    padding:0 0px;
    margin: 0 15px;
    height: 50px;
    line-height: 46px;
    border-top: 2px solid #fff;
    border-bottom: none;
    &.is-active {
        border-top: 2px solid #20222A;
        border-bottom: none;
        color: #303133;
    }
}

</style>
