<template>
    <div>
        <div class="admin-logo">
            <span v-if="!asideCollapse">ElementAdmin</span>
            <span v-else>M</span>
        </div>
        <el-menu :default-openeds="['1']" default-active="1-1" :unique-opened="true" :collapse-transition="false" class="el-menu-vertical-demo" background-color="#03152a" text-color="#b3b9bf" @open="handleOpen" @close="handleClose" :collapse="asideCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="ele-icon-home"></i>
                    <span slot="title">主页</span>
                </template>
                <el-menu-item index="1-1" :style="subMenuLeft">控制台</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                 <template slot="title">
                    <i class="ele-icon-component"></i>
                    <span slot="title">组件</span>
                </template>
                <el-menu-item index="2-1" :style="subMenuLeft">栅格</el-menu-item>
                <el-menu-item index="2-2" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-3" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-4" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-5" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-6" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-7" :style="subMenuLeft">按钮</el-menu-item>

                <el-menu-item index="2-8" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-9" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-10" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-11" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-12" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-13" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-14" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-15" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-16" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-17" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-18" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-19" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-20" :style="subMenuLeft">按钮</el-menu-item>
                <el-menu-item index="2-21" :style="subMenuLeft">按钮</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
                <i class="ele-icon-template"></i>
                <span slot="title">模板</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="ele-icon-app"></i>
                <span slot="title">应用</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="ele-icon-user"></i>
                <span slot="title">用户</span>
            </el-menu-item>
            <el-menu-item index="6">
                <i class="ele-icon-set"></i>
                <span slot="title">设置</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'layout-aside',
    data() {
        return {
            isCollapse: true,
            subMenuLeft:{"paddingLeft":'52px'}
        };
    },
    computed:{
        asideCollapse(){
            return this.$store.state.global.asideCollapse
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    
}
.el-menu{
    border-right: none;
}
.el-menu-item{
    padding-left:50px;
}
.admin-logo{
    height: 50px;
    line-height: 50px;
    color:rgba(255,255,255,0.7);
    text-align: center;
    font-size: 16px;
    
}
.el-menu [class^=ele-icon-] {
    margin-right: 5px;
}
</style>
