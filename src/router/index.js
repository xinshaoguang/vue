import Vue from 'vue'
import VueRouter from 'vue-router'
import basicLayout from '../layout/basicLayout.vue'
import login from '@/views/login'
import importRoutes from './routerConfig'

import NProgress from "nprogress" //进度条
import "nprogress/nprogress.css"  //进度条样式


Vue.use(VueRouter)

export const routes = [
  // 
  {
    path: '/',
    name: 'basicLayout',
    component: basicLayout,
    redirect: '/index',//路由重定向  父级路由 / +子路由 index
    children: [
      //子路由
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/index.vue')
      },
      ...importRoutes
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router