<template>
    <el-menu  class="admin-nav-left" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
            <i :class="shrink"></i>
        </el-menu-item>
        <el-menu-item index="2">
            <a href="https://www.baidu.com" target="_blank"><i class="ele-icon-website"></i></a>
        </el-menu-item>
        <el-menu-item index="3"><i class="ele-icon-refresh-2"></i></el-menu-item>
    </el-menu>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    name:'admin-nav-left',
    computed:{
        ...mapState([
            'asideCollapse'
        ]),
        shrink(){
            return this.$store.state.global.asideCollapse?'ele-icon-spread-left':'ele-icon-shrink-right';
        }
    },
    methods:{
        ...mapMutations([
            'setAsideCollapse',
            'setAsideWidth'
        ]),
        handleSelect(key, keyPath) {
            if(key==='1'){
                console.log(key)
                this.setAsideCollapse()
                this.setAsideWidth()
            }
        }
    }
}
</script>

<style lang="less" scoped>
.el-menu--horizontal>.el-menu-item{
    padding:0 0px;
    margin: 0 20px;
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
