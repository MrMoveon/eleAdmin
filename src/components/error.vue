<template>
  <div class='error-tips'>
    <div class='error-tips__icon'>
      <i :class='icon'></i>
    </div>
    <p class='error-tips__desc'>{{tipsText}}</p>
    <div class='error-tips__button'>
      <el-button @click="toHome">返回主页</el-button>
      <el-button type='primary' @click="back">返回上一页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: {
    icon: {
      type: String,
      default: 'ele-icon-403'
    },
    tipsText: {
      type: String,
      default: '系统出错了~~'
    }
  },
  methods: {
    toHome() {
      this.$router.replace({
        path: '/'
      })
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less'>
.error-tips {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -300px;
  width: 300px;
  text-align: center;
  &__icon {
    font-size: 250px;
    color: #409eff;
  }
  &__desc {
    font-size: 16px;
    color: #666;
    margin-top: -40px;
  }
  &__button {
    padding-top: 20px;
  }
}
</style>
