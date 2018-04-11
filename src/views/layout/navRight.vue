<template>
    <el-menu class='admin-nav-right' mode='horizontal' @select='handleSelect'>
        <el-menu-item index='1'>
            <el-badge is-dot class='admin-nav-dot'>
                <i class='ele-icon-notice'></i>
            </el-badge>
        </el-menu-item>
        <el-menu-item index='2' class='hidden-md-and-down'>
            <i class='ele-icon-theme'></i>
        </el-menu-item>
        <el-menu-item index='3' class='hidden-md-and-down'>
            <i class='ele-icon-note'></i>
        </el-menu-item>
        <el-submenu index='4'>
            <template slot='title'>Admin</template>
            <el-menu-item index='4-1'>基本资料</el-menu-item>
            <el-menu-item index='4-2'>修改密码</el-menu-item>
            <el-menu-item index='4-3'>退出</el-menu-item>
        </el-submenu>
        <el-menu-item index='5'>
            <i class='ele-icon-moreandroid'></i>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'admin-nav-right',
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang='less'>
.admin-nav-right {
  position: absolute;
  right: 0;
  top: 0;
}

.el-badge__content.is-fixed.is-dot {
  top: 10px;
}

&.el-menu--horizontal {
  border-bottom: none;
  & > .el-menu-item {
    padding: 0 0px;
    margin: 0 15px;
    height: 48px;
    line-height: 46px;
    border-top: 2px solid #fff;
    border-bottom: none;
    &.is-active {
      border-top: 2px solid #20222a;
      border-bottom: none;
      color: #303133;
    }
  }
  & > .el-submenu {
    border-top: 2px solid #fff;
    border-bottom: none;
    .el-submenu__title {
      height: 48px;
      line-height: 48px;
      padding: 0;
      border-bottom: none;
    }
    &.is-active {
      border-top: 2px solid #20222a;
      border-bottom: none;
      color: #303133;
      .el-submenu__title {
        border-bottom: none;
      }
    }
  }
}
</style>
