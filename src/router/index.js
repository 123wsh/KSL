import Vue from 'vue'
import VueRouter from 'vue-router'
//首页
import Home from '../views/home.vue'

import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  ,
  {
    path: '/xshd/:canshu',
    props:true,
    component: () => import(/* webpackChunkName: "xshd" */
      '../views/xshd.vue'
    )
  },
  {
    path: '/xxhd',
    component: () => import(/* webpackChunkName: "xxhd" */
      '../views/xxhd.vue'
    )
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
