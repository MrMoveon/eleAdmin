<template>
    <div class='admin-system'>
        <div class='admin-breadcrumb'>
            <el-breadcrumb separator-class='el-icon-arrow-right'>
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>设置</el-breadcrumb-item>
                <el-breadcrumb-item>系统设置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card>
        <el-tabs v-model='activeName' @tab-click='handleClick'>
            <el-tab-pane label='网站设置' name='first'>
                <el-form ref='form' :model='form' label-width='100px'>
                    <el-form-item label='网站名称'>
                        <el-input v-model='form.website'></el-input>
                    </el-form-item>
                    <el-form-item label='网站域名'>
                        <el-input v-model='form.domain'></el-input>
                    </el-form-item>
                    <el-form-item label='最大文件上传'>
                        <el-col :xs='24' :sm='24' :md='3' :lg='2' :xl='2'>
                            <el-input v-model='form.size'></el-input>
                        </el-col>
                        <el-col :xs='24' :sm='24' :md='11' :lg='14' :xl='16'><span class='form-tips-text'><span class='dark'>KB </span> 提示：1 M = 1024 KB</span></el-col>
                    </el-form-item>
                    <el-form-item label='上传文件类型'>
                        <el-input v-model='form.fileType'></el-input>
                    </el-form-item>
                    <el-form-item label='首页标题'>
                        <el-input v-model='form.title'></el-input>
                    </el-form-item>
                    <el-form-item label='META关键词'>
                        <el-input type='textarea' :rows='4' v-model='form.meta' placeholder='多个关键词用英文,隔开'></el-input>
                    </el-form-item>
                     <el-form-item label='META描述'>
                        <el-input type='textarea' :rows='4' v-model='form.desc'></el-input>
                    </el-form-item>
                     <el-form-item label='版权信息'>
                        <el-input v-model='form.copyright'></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type='primary' @click='onSubmit'>确认保存</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label='邮箱设置' name='second'>
                 <el-form ref='formEmail' :model='formEmail' label-width='100px'>
                     <el-form-item label='SMTP服务器'>
                        <el-col :xs='24' :sm='24' :md='6' :lg='4' :xl='4'>
                            <el-input v-model='formEmail.smtp'></el-input>
                        </el-col>
                        <el-col :xs='24' :sm='24' :md='11' :lg='14' :xl='16'><span class='form-tips-text'>如：smtp.163.com</span></el-col>
                    </el-form-item>
                    <el-form-item label='SMTP端口号'>
                        <el-col :xs='24' :sm='24' :md='3' :lg='2' :xl='2'>
                            <el-input v-model='formEmail.port'></el-input>
                        </el-col>
                        <el-col :xs='24' :sm='24' :md='11' :lg='14' :xl='16'><span class='form-tips-text'>一般为 25 或 465</span></el-col>
                    </el-form-item>
                    <el-form-item label='发件人邮箱'>
                        <el-input v-model='formEmail.email'></el-input>
                    </el-form-item>
                    <el-form-item label='发件人昵称'>
                        <el-input v-model='formEmail.nickname'></el-input>
                    </el-form-item>
                     <el-form-item label='邮箱登入密码'>
                        <el-input v-model='formEmail.password'></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type='primary' @click='onSubmitEmail'>确认保存</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label='安全设置' name='third'>
                <el-form ref='formSafe' :model='formSafe' label-width='170px'>
                    <el-form-item label='允许访问后台的IP列表'>
                        <el-input type='textarea' :rows='4' v-model='formSafe.ips' placeholder='多个ip用|隔开'></el-input>
                    </el-form-item>
                    <el-form-item label='后台登录失败最大次数'>
                        <el-input type='textarea' v-model='formSafe.errorNum' placeholder=''></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type='primary' @click='onSubmitSafe'>确认保存</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      form: {
        website: 'iuehtml',
        domain: 'http://www.iuehtml.cn',
        size: '2048',
        fileType: 'png|gif|jpg|jpeg|zip|rar',
        title: 'iuehtml前端开发',
        meta: 'META关键词',
        desc: '',
        copyright: '渝ICP备1239123120'
      },
      formEmail: {
        smtp: 'smtp.tence.com',
        port: '465',
        email: '2134234@qq.com',
        nickname: 'iuehtml',
        password: '1232143'
      },
      formSafe: {
        ips: '222.12.12.11|222.12.12.12',
        errorNum: 5
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    onSubmit () {
      this.$message({
        showClose: true,
        message: '保存成功',
        type: 'success'
      })
    },
    onSubmitEmail () {
      this.$message({
        showClose: true,
        message: '保存成功',
        type: 'success'
      })
    },
    onSubmitSafe () {
      this.$message({
        showClose: true,
        message: '保存成功',
        type: 'success'
      })
    }
  }
}
</script>

<style>

</style>
