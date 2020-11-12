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
    path: '/bbs',
    name: 'bbs',
    component: () => import('../views/Bbs.vue'),
    props: true,
    children: [
      {
        path: "post",
        component: () => import('../components/CommentForm.vue')
      },
      {
        path: "login",
        component: () => import('../components/Login.vue')
      },
      {
        path: "register",
        component: () => import('../components/Register.vue')
      }
    ]
  },
  {
    path: '/commentary',
    name: 'commentary',
    component: () => import('../views/Commentary.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
