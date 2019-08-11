import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// teacher-info class-create 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'class-edit',
      component: () => import('../views/class/class-edit') // 路由懒加载
    },
    {
      path: '/class-list',
      name: 'class-list',
      component: () => import('../views/class/class-list') // 路由懒加载
    },
    {
      path: '/teacher-login-pwd',
      name: 'teacher-login-pwd',
      component: () => import('../views/teacher/teacher-login-pwd') // 路由懒加载
    },
    {
      path: '/teacher-home',
      name: 'teacher-home',
      component: () => import('../views/teacher/teacher-home') // 路由懒加载
    },
    {
      path: '/class-create',
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