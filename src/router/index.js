import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'Home', component: Index
  },
  {
    path: '/Login', name: 'Login', component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/About', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/User/:id', name: 'User', component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path: '/Create', name: 'UserCreate', component: () => import(/* webpackChunkName: "about" */ '../views/CreateOrUpdate.vue')
  },
  {
    path: '/Update/:id', name: 'UserUpdate', component: () => import(/* webpackChunkName: "about" */ '../views/CreateOrUpdate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
