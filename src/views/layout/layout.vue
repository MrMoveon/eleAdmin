<template>
    <el-container class="theme-dark-blue">
        <el-aside class="admin-aside" width="">
            <admin-aside/>
        </el-aside>
        <el-container>
            <el-header height="50px">
                <admin-nav-left/>
                <admin-nav-right/>
            </el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
import aside from './aside'
import navLeft from './navLeft'
import navRight from './navRight'
export default {
    name: 'layout',
    data(){
        return {
            asideWidth:'220px'
        }
    },
    components: {
        'adminAside': aside,
        'adminNavLeft':navLeft,
        'adminNavRight':navRight
    }
}
</script>

<style lang="less" scoped>
.el-container {
    height: 100%;
}

.el-header {
    background-color: #fff;
}

.el-aside {
    height: 100%;
    overflow-x: hidden;
    // 隐藏滚动条
    &::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }  
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}


</style>
