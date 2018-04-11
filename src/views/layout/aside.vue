<template>
    <div class="admin-aside">
        <div class="admin-logo" :style="{'width':asideWidth}">
            <span v-if="!asideCollapse">ElementAdmin</span>
            <span v-else><img src="../../assets/images/top-logo.png" alt=""></span>
        </div>
        <el-menu :default-openeds="['1']" default-active="1-1" router :unique-opened="true" :collapse-transition="true" class="el-menu-vertical-demo" background-color="#03152a" text-color="#b3b9bf" @open="handleOpen" @close="handleClose" :collapse="asideCollapse">
            <el-submenu index="1"  class="child-padding">
                <template slot="title">
                    <i class="ele-icon-home"></i>
                    <span slot="title">主页</span>
                </template>
                <el-menu-item index="1-1" :route="{name:'home'}">控制台</el-menu-item>
            </el-submenu>
            <el-submenu index="2" class="child-padding">
                 <template slot="title">
                    <i class="ele-icon-component"></i>
                    <span slot="title">组件</span>
                </template>
                <el-menu-item index="2-1">栅格</el-menu-item>
                <el-menu-item index="2-2">按钮</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
                <i class="ele-icon-plane"></i>
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
            <el-submenu index="6"  class="child-padding">
                <template slot="title">
                    <i class="ele-icon-set"></i>
                    <span slot="title">设置</span>
                </template>
                <el-menu-item index="6-1" class="parent-padding" :route="{name:'system'}">
                    系统设置
                </el-menu-item>
                <el-submenu index="6-2" class="parent-padding">
                    <template slot="title">我的设置</template>
                    <el-menu-item index="6-2-1" :route="{name:'info'}">基本资料</el-menu-item>
                    <el-menu-item index="6-2-2" :route="{name:'password'}">我的密码</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: 'layout-aside',
  data () {
    return {
      isCollapse: true,
      subMenuLeft: { paddingLeft: '52px' }
    }
  },
  computed: {
    asideWidth () {
      return this.$store.state.global.asideWidth
    },
    asideCollapse () {
      return this.$store.state.global.asideCollapse
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" >
// 二级
.child-padding{
    .el-menu-item {
      padding-left:56px !important;
    }
}
// 三级
.parent-padding {
   .el-submenu__title {
    padding-left: 56px !important;
  }
  .el-menu-item {
      padding-left: 80px !important;
    }
}
</style>
