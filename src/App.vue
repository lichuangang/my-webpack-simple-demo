<template>
<div id="app">
    <my-head style="height:100%">

    </my-head>
    <el-row>
        <el-col :span="4">
            <my-menu>
            </my-menu>
        </el-col>
        <el-col :span="20">
            <div class="">
                <!-- 路由匹配到的组件将渲染在这里 -->
                <router-view></router-view>
            </div>
        </el-col>
    </el-row>

</div>
</template>

<script>
import MyHead from './views/Head.vue'
import MyMenu from './views/Menu.vue'

export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App22'
        }
    },
    components: {
        MyHead,
        MyMenu
    }
}
</script>

<style>
.el-row {
    height: 100%;
}

.el-row::after {
    background-color: #324057
}
</style>
