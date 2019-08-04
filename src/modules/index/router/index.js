import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// teacher-info class-create
export default new Router({
  routes: [
    {
      path: '/',
      name: 'class-create',
      component: () => import('../views/class/class-create') // 路由懒加载
    },
    {
      path: '/teacher-info',
      name: 'teacher-info',
      component: () => import('../views/teacher/teacher-info') // 路由懒加载
    },
    {
      path: '/class-mgr',
      name: 'class-mgr',
      component: () => import('../views/class/class-mgr') // 路由懒加载
    },
    {
      path: '/index',
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
