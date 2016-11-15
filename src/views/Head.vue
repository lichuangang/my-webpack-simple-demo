<template lang="html">
  <header>
    <el-row>
      <el-col :span="4"><div>LOGO</div></el-col>
      <el-col :span="12"><div class="title">Vuejs elentui demo</div></el-col>
      <el-col :span="7">
        <el-dropdown menu-align="end">
          <span class="el-dropdown-link">
            欢迎：李传刚<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="el-icon-edit"></i> 修改密码</el-dropdown-item>
            <el-dropdown-item><i class="el-icon-circle-cross"></i> 退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="1">&nbsp;</el-col>
     </el-row>
  </header>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {},
    mounted() {},
    methods: {},
    components: {}
}
</script>

<style lang="css" scoped>
  .title{
    font-size: 18px;
    font-weight: bolder;
  }
  .el-dropdown{
    float: right;
  }
  .el-col{
    line-height: 55px;
    background-color: #324057;
    color: #fff;
  }
  .el-dropdown-link{
    color: #fff;
  }
</style>
