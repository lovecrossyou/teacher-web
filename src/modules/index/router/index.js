import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/home/list') // 路由懒加载
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/home') // 路由懒加载
    },
    {
      path: '/sort',
      name: 'sort',
      component: () => import('../views/home/sort') // 路由懒加载
    }
  ]
})
