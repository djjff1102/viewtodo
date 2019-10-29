import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import singleBlog from '../views/singleBlog.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add',
    name: 'add',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/add.vue')
  },{
    path: '/blog/:id',
    name: 'singleBlog',
    component: singleBlog
  }
]

const router = new VueRouter({
  routes
})

export default router
