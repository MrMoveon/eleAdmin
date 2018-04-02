<template>
  <div>
    <el-row :gutter="15">
        <el-col :md="8">
            <el-card class="admin-shortcut">
                <div slot="header">
                    <span>快捷方式</span>
                </div>
                <div class="">
                    <el-row  :gutter="10">
                        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                            <a class="shortcut-btn" href="javascript:;">
                                <i class="ele-icon-website shortcut-icon"></i>
                                <span class="shortcut-text">弹窗</span>
                            </a>
                        </el-col>
                        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                            <a class="shortcut-btn" href="javascript:;">
                                <i class="ele-icon-find-fill shortcut-icon"></i>
                                <span class="shortcut-text">按钮</span>
                            </a>
                        </el-col>
                        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                            <a class="shortcut-btn" href="javascript:;">
                                <i class="ele-icon-loading-2 shortcut-icon"></i>
                                <span class="shortcut-text">进度条</span>
                            </a>
                        </el-col>
                        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                            <a class="shortcut-btn" href="javascript:;">
                                <i class="ele-icon-chat shortcut-icon"></i>
                                <span class="shortcut-text">聊天</span>
                            </a>
                        </el-col>
                    </el-row>
                     <el-row  :gutter="10">
                        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                            <a class="shortcut-btn" href="javascript:;">
                                <i class="ele-icon-read shortcut-icon"></i>
                                <span class="shortcut-text">面板</span>
                            </a>
                        </el-col>
                        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                            <a class="shortcut-btn" href="javascript:;">
                                <i class="ele-icon-tree shortcut-icon"></i>
                                <span class="shortcut-text">徽章</span>
                            </a>
                        </el-col>
                        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                            <a class="shortcut-btn" href="javascript:;">
                                <i class="ele-icon-set shortcut-icon"></i>
                                <span class="shortcut-text">网站设置</span>
                            </a>
                        </el-col>
                        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                            <a class="shortcut-btn" href="javascript:;">
                                <i class="ele-icon-password shortcut-icon"></i>
                                <span class="shortcut-text">密码</span>
                            </a>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
        </el-col>
        <el-col :md="8">
            <el-card class="box-card">
                <div slot="header">
                    <span>代办事项</span>
                </div>
                <div class="text item">
                    列表内容
                </div>
            </el-card>
        </el-col>
        <el-col :md="8">
            <el-card class="box-card">
                <div slot="header">
                    <span>版本信息</span>
                </div>
                <div class="text item">
                    <el-table :data="vesionData" border :show-header="false" style="width: 100%">
                        <el-table-column prop="label" label="标签" width="180"></el-table-column>
                        <el-table-column label="值">
                            <template slot-scope="scope">
                                <el-button  type="primary" size="small" v-if="scope.$index===3">点击下载</el-button>
                                <template v-else>{{scope.row.value}}</template>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-card>
        </el-col>
    </el-row>
   
  </div>
</template>

<script>
export default {
  name: "console",
  data() {
    return {
      vesionData: [
        {
          label: "当前版本",
          value: "v1.0.0-beta7 pro"
        },
        {
          label: "基于框架",
          value: "element-ui 3.23"
        },
        {
          label: "主要特色",
          value: "单页面 / 响应式 / 清爽 / 极简"
        },
        {
          label: "获取渠道",
          value: "单页面 / 响应式 / 清爽 / 极简"
        }
      ]
    };
  }
};
</script>

<style lang="less">
.admin-shortcut{
    a{
        color:#333;
        text-align: center;
        &:hover .shortcut-icon{
            background: #f2f2f2;
        }
    }
    .shortcut-icon{
        display: block;
        height: 60px;
        background-color: #F8F8F8;
        line-height: 60px;
        font-size: 30px;
        transition: all .3s;
    }
    .shortcut-text{
        display: block;
        padding: 10px 0;
        color: #666;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 14px;
    }
}
</style>
