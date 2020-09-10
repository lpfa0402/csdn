import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 布局容器
const Container = () => import('@/Layout/Container');
// router-view路由组件
const RouteView = () => import('@/Layout/RouteView');
const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: Container,
    children: [
      {
        path: '',
        name: 'Common',
        component: () => import('@/views/testA.vue')
      },
      {
        path: '/testA',
        redirect: '/testA',
        component: RouteView,
        children: [
          { 
            path: '/testA/testA', 
            component: () => import('@/views/testA.vue')
          },
          { 
            path: '/testA/testB', 
            component: () => import('@/views/testB.vue')
          },
        ]
      },
      {
        path: '/testC',
        redirect: '/testC',
        component: RouteView,
        children: [
          {
            path: '/testC',
            component: () => import('@/views/testc.vue'),
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
