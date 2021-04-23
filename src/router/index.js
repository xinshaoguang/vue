import Vue from 'vue'
import VueRouter from 'vue-router'
import basicLayout from '../layout/basicLayout.vue'
import login from '@/views/login'
import importRoutes from './routerConfig'

Vue.use(VueRouter)

export const routes = [{
    path: '/',
    name: 'basicLayout',
    component: basicLayout,
    redirect: '/index',
    children: [{
        path: '/index',
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

export default router