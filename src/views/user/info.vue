<template>
  <el-card class="box-card">
    <div slot="header">
        <span>设置我的资料</span>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
     
      <el-form-item label="我的角色" prop="role">
        <el-select v-model="ruleForm.role" placeholder="请选择角色">
          <el-option label="超级管理员" value="super"></el-option>
          <el-option label="普通管理员" value="admin"></el-option>
          <el-option label="审核人员" value="shenhe"></el-option>
          <el-option label="编辑人员" value="bianji"></el-option>
        </el-select>
      </el-form-item>
       <el-form-item label="用户名" prop="username">
         <el-col :xs="24" :sm="24" :md="12" :lg="10" :xl="8">
           <el-input v-model="ruleForm.username"></el-input>
        </el-col>
      </el-form-item>
       <el-form-item label="昵称" prop="nikename">
         <el-col :xs="24" :sm="24" :md="12" :lg="10" :xl="8">
          <el-input v-model="ruleForm.nikename" disabled></el-input>
        </el-col>
        <el-col :xs="24" :sm="24" :md="11" :lg="14" :xl="16"><span class='form-tips-text'>昵称不可修改</span></el-col>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item> 
      <el-form-item label="手机" prop="phone">
        <el-col :xs="24" :sm="24" :md="12" :lg="10" :xl="8">
           <el-input v-model.number="ruleForm.phone"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-col :xs="24" :sm="24" :md="12" :lg="10" :xl="8">
           <el-input v-model="ruleForm.email"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="备注" prop="desc">
        <el-col :xs="24" :sm="24" :md="12" :lg="10" :xl="8">
           <el-input :rows="4" type="textarea" v-model="ruleForm.desc"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
</el-card>
</template>

<script>
export default {
  name: "info",
  data() {
    return {
      ruleForm: {
        username: "",
        nikename: "Jk m",
        role: "",
        sex: "",
        imageUrl: "",
        phone: "",
        email: "",
        desc: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        // nikename: [
        //   { required: true, message: "请输入昵称", trigger: "blur" },
        //   { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        // ],
        role: [{ required: true, message: "请选择角色", trigger: "change" }],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { type: "number", message: "请输入正确的手机号", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          { type: "email", message: "请输入正确的邮箱地址", trigger: "blur,change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 118px;
  height: 118px;
  line-height: 118px;
  text-align: center;
}
.avatar {
  width: 118px;
  height: 118px;
  display: block;
}


</style>
