<template lang="html">
  <el-menu :default-active="thisRouter" theme="dark">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>航班管理</template>
      <el-menu-item-group title="分组一">
        <el-menu-item index="/Airport/depart">出发航班</el-menu-item>
        <el-menu-item index="/Airport/arrive">到达航班</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/home"><router-link to="/home"><i class="el-icon-menu"></i>用户管理</router-link></el-menu-item>
    <el-menu-item index="3"><i class="el-icon-setting"></i>机场管理</el-menu-item>
  </el-menu>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {
      thisRouter:function(){
          //console.log(this.$route.path);
          return this.$route.path;
      }
    },
    mounted() {},
    methods: {
        handleopen: function handleopen() {
            console.log('1');
        },
        handleclose: function handleclose() {
            console.log('2');
        }
    },
    components: {}
}
</script>

<style lang="css">
  .el-menu-item a{
      color: #c0ccda;
      text-decoration: none;
  }

  .el-menu-item .router-link-active{
    color: #20a0ff;
    text-decoration: none;
  }

</style>
