import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Element)

import Home from './views/home/index.vue'

/**
 * 路由
 */
const routes = [
  { path: '/home', component: Home },
]

let router = new VueRouter({
  routes
});

/**/
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
