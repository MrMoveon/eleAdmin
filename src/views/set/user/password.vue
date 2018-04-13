<template>
  <el-card class='box-card'>
    <div slot='header'>
        <span>修改密码</span>
    </div>
    <el-form :model='ruleForm' status-icon :rules='rules' ref='ruleForm' label-width='80px' class='demo-ruleForm'>
        <el-form-item label='当前密码' prop='oldpass'>
          <el-col :xs='24' :sm='24' :md='12' :lg='10' :xl='8'>
            <el-input type='password'  v-model='ruleForm.oldpass' auto-complete='off'></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label='密码' prop='pass'>
            <el-col :xs='24' :sm='24' :md='12' :lg='10' :xl='8'>
              <el-input type='password' v-model='ruleForm.pass' auto-complete='off'></el-input>
            </el-col>
            <el-col :xs='24' :sm='24' :md='11' :lg='14' :xl='16'><span class='form-tips-text'>6-16个字符</span></el-col>
        </el-form-item>
        <el-form-item label='确认密码' prop='checkPass'>
            <el-col :xs='24' :sm='24' :md='12' :lg='10' :xl='8'>
              <el-input type='password'  v-model='ruleForm.checkPass' auto-complete='off'></el-input>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-button type='primary' @click="submitForm('ruleForm')">确认修改</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</el-card>
</template>

<script>
export default {
  name: 'password',
  data() {
    var validateOldPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (value !== '123456') {
          callback(new Error('当前密码不正确'))
        }
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        oldpass: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        oldpass: [{ validator: validateOldPass, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>

</style>
