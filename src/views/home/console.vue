<template>
    <el-row :gutter="15">
        <el-col :md="16">
            <el-row :gutter="15">
                <!-- 快捷方式 -->
                <el-col :md="12">
                    <el-card class="admin-shortcut">
                        <div slot="header">
                            <span>快捷方式</span>
                        </div>
                        <el-carousel class="admin-card-carousel" indicator-position="outside" :autoplay="false" arrow="never" height="200px">
                            <el-carousel-item>
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
                            </el-carousel-item>
                            <el-carousel-item>
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
                            </el-carousel-item>
                        </el-carousel>
                    
                    </el-card>
                </el-col>
                <!-- 代办事项 -->
                <el-col :md="12">
                    <el-card class="admin-backlog">
                        <div slot="header">
                            <span>代办事项</span>
                        </div>
                        <el-carousel class="admin-card-carousel" indicator-position="outside" :autoplay="false" arrow="never" height="200px">
                            <el-carousel-item>
                                <el-row  :gutter="10">
                                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                        <a class="admin-backlog-body" href="javascript:;">
                                            <h3>待审评论</h3>
                                            <p>66</p>
                                        </a>
                                    </el-col>
                                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                        <a class="admin-backlog-body" href="javascript:;">
                                            <h3>待审帖子</h3>
                                            <p>12</p>
                                        </a>
                                    </el-col>
                                    
                                </el-row>
                                <el-row  :gutter="10">
                                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                        <a class="admin-backlog-body" href="javascript:;">
                                            <h3>待审商品</h3>
                                            <p>24</p>
                                        </a>
                                    </el-col>
                                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                        <a class="admin-backlog-body" href="javascript:;">
                                            <h3>代发货</h3>
                                            <p>5</p>
                                        </a>
                                    </el-col>
                                    
                                </el-row>
                            </el-carousel-item>
                            <el-carousel-item>
                                <el-row  :gutter="10">
                                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                        <a class="admin-backlog-body" href="javascript:;">
                                            <h3>待审评论</h3>
                                            <p>66</p>
                                        </a>
                                    </el-col>
                                </el-row>
                                
                            </el-carousel-item>
                        </el-carousel>
                    </el-card>
                </el-col>
                <!-- 数据概览 -->
                <el-col :md="24">
                    <el-card class="admin-backlog">
                        <div slot="header">
                            <span>数据概览</span>
                        </div>
                        <el-carousel class="admin-card-carousel" indicator-position="outside" :autoplay="false" arrow="never" height="344px">
                            <el-carousel-item>
                                <echarts name="echarts01" height="344px" :options="pvuvOptions"></echarts>
                            </el-carousel-item>
                            <el-carousel-item>
                               <echarts name="echarts02" height="344px" :options="browerOptions"></echarts>
                            </el-carousel-item>
                        </el-carousel>
                    </el-card>
                </el-col>
                <!-- 新增用户 -->
                <el-col :md="24">
                    <el-card class="box-card">
                            <div slot="header">
                                <span>新增用户</span>
                            </div>
                            <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            fixed
                            prop="date"
                            label="日期"
                            width="150">
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="姓名"
                            width="120">
                            </el-table-column>
                            <el-table-column
                            prop="province"
                            label="省份"
                            width="120">
                            </el-table-column>
                            <el-table-column
                            prop="city"
                            label="市区"
                            width="120">
                            </el-table-column>
                            <el-table-column
                            prop="address"
                            label="地址"
                            width="300">
                            </el-table-column>
                            <el-table-column
                            prop="zip"
                            label="邮编"
                            width="120">
                            </el-table-column>
                            <el-table-column
                            fixed="right"
                            label="操作"
                            width="100">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <el-button type="text" size="small">编辑</el-button>
                            </template>
                            </el-table-column>
                        </el-table>
                        </el-card>
                </el-col>
            </el-row>    
        </el-col>    
        <el-col :md="8">
            <el-row :gutter="15">    
                    <!-- 版本信息 -->
                    <el-col :md="24">
                        <el-card class="box-card">
                            <div slot="header">
                                <span>版本信息</span>
                            </div>
                            <el-table :data="vesionData" border :show-header="false" style="width: 100%">
                                <el-table-column prop="label" label="标签" width="180"></el-table-column>
                                <el-table-column label="值">
                                    <template slot-scope="scope">
                                        <el-button  type="primary" size="small" v-if="scope.$index===3">点击下载</el-button>
                                        <template v-else>{{scope.row.value}}</template>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-card>
                    </el-col>
                    <!-- 效果报告 -->
                    <el-col :md="24">
                        <el-card class="admin-report">
                            <div slot="header">
                                <span>效果报告</span>
                            </div>
                            <div class="admin-report-body">
                                <h3 class="admin-report-label">转化率 <span class="admin-report-righttext">同比上涨70%</span></h3>
                                <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
                            </div>
                            <div class="admin-report-body">
                                <h3 class="admin-report-label">签到率 <span class="admin-report-righttext">同比上涨70%</span></h3>
                                <el-progress :text-inside="true" :stroke-width="18" :percentage="50"  status="success"></el-progress>
                            </div>
                        </el-card>
                    </el-col>
                     <!--实时监控 -->
                    <el-col :md="24">
                        <el-card class="admin-monitoring">
                            <div slot="header">
                                <span>实时监控</span>
                            </div>
                            <div class="admin-monitoring-body">
                                <h3 class="admin-monitoring-label">CPU使用率 </h3>
                                <el-progress :text-inside="true" :stroke-width="18" :percentage="30"></el-progress>
                            </div>
                            <div class="admin-monitoring-body">
                                <h3 class="admin-monitoring-label">内存占用率 </h3>
                                <el-progress :text-inside="true" :stroke-width="18" :percentage="90" status="exception"></el-progress>
                            </div>
                        </el-card>
                    </el-col>
                     <!--系统反馈 -->
                    <el-col :md="24">
                        <el-card class="admin-monitoring">
                            <div slot="header">
                                <span>系统反馈</span>
                            </div>
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="E-mail" prop="email">
                                    <el-input v-model="ruleForm.email"></el-input>
                                </el-form-item>
								<el-form-item label="姓名" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="反馈内容" prop="desc">
                                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm')">提交反馈</el-button>
                                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                                </el-form-item>
                                </el-form>
                        </el-card>
                    </el-col>
            </el-row>    
        </el-col>
    </el-row> 
</template>

<script>
import echarts from "@/components/echarts";
// import echartsTheme from './echartsTheme'
export default {
  name: "console",
  data() {
    return {
      //    版本信息
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
      ],
      //   今日流量趋势
      pvuvOptions: {
        title: {
          text: "今日流量趋势",
          textStyle: {
            fontSize: 14
          },
          x: "center"
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "3%",
          right: "3%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "uv",
            type: "line",
            symbolSize: 8,
            areaStyle: { normal: {} },
            data: [0, 182, 400, 234, 160, 330, 0]
          },
          {
            name: "pv",
            type: "line",
            symbolSize: 8,
            areaStyle: { normal: {} },
            data: [0, 132, 300, 134, 190, 230, 0]
          }
        ]
      },
      //   游客浏览器分布
      browerOptions: {
        title: {
          text: "游客浏览器分布",
          textStyle: {
            fontSize: 14
          },
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 1500, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 300, name: "搜索引擎" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      },
      //   新增用户
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      //反馈
      ruleForm: {
        email: "",
        desc: ""
      },
      rules: {
        email: [
          { required: true, message: "请输入您的邮箱，方便我们联系", trigger: "blur" },
          { type: "email", message: "请输入正确的邮箱地址", trigger: "blur,change" }
		],
		name: [{ required: true, message: "请填写姓名", trigger: "blur" }],
        desc: [{ required: true, message: "请填写反馈内容", trigger: "blur" }]
      }
    };
  },
  components: {
    echarts
  },
  mounted() {},
  methods: {
    handleClick(row) {
      console.log(row);
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

<style lang="less">
.admin-shortcut {
  .shortcut-btn {
    color: #333;
    text-align: center;
    &:hover .shortcut-icon {
      background: #f2f2f2;
    }
  }
  .shortcut-icon {
    display: block;
    height: 60px;
    background-color: #f8f8f8;
    line-height: 60px;
    font-size: 30px;
    transition: all 0.3s;
  }
  .shortcut-text {
    display: block;
    padding: 10px 0;
    color: #666;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
  }
}
.admin-backlog {
  .admin-backlog-body {
    display: block;
    height: 90px;
    background-color: #f8f8f8;
    padding: 10px 15px;
    transition: all 0.3s;
    color: #999;
    box-sizing: border-box;
    margin-bottom: 10px;
    h3 {
      font-size: 12px;
      font-weight: normal;
    }
    p {
      font-size: 30px;
      color: #409eff;
    }
  }
}
.admin-report,
.admin-monitoring {
  &-label {
    font-size: 14px;
    font-weight: normal;
    color: #333;
  }
  &-righttext {
    float: right;
    padding-right: 20px;
    font-size: 12px;
    color: #999;
  }
}
</style>
