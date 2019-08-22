import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'parent_info_complete',
      component: () => import('../views/parents/complete_info') // 路由懒加载
    }
  ]
})
