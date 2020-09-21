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
        meta: {
          title: '测试组件分组',
          icon: 'el-icon-user-solid',
        },
        component: RouteView,
        children: [
          { 
            path: '/testA/testA', 
            meta: {
              title: '组件一',
            },
            component: () => import('@/views/testA.vue')
          },
          { 
            path: '/testA/testB', 
            meta: {
              title: '组件二',
              keepAlive: true
            },
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
            meta: {
              title: '组件三',
              icon: 'el-icon-user-solid',
              keepAlive: true
            },
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
