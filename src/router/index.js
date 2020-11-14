import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Career from '../views/Career.vue'
import Accounts from '../views/Accounts.vue'
import Bbs from '../views/Bbs.vue'
import Commentary from '../views/Commentary.vue'
import CommentForm from '../components/CommentForm.vue'
import CommentList from '../components/CommentList.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import firebaseApp from "@/firebase/firebase.js"

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
    component: Profile
  },
  {
    path: '/career',
    name: 'career',
    component: Career
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: Accounts
  },
  {
    path: '/bbs',
    name: 'bbs',
    component: Bbs,
    props: true,
    children: [
      {
        path: "post",
        components: {
          default: CommentForm,
          CommentList
        },
        meta: { requiresAuth: true }
      },
      {
        path: "login",
        component: Login
      },
      {
        path: "register",
        component: Register
      }
    ]
  },
  {
    path: '/commentary',
    name: 'commentary',
    component: Commentary
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !(await firebaseApp.getCurrentUser())) {
    next({ path: '/bbs/login', query: {redirect: to.fullPath}});
  } else {
    next();
  }
});

export default router
