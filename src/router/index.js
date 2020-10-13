import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/career',
    name: 'career',
    component: () => import('../views/Career.vue')
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: () => import('../views/Accounts.vue')
  },
  {
    path: '/commentary',
    name: 'commentary',
    component: () => import('../views/commentary.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/demo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
