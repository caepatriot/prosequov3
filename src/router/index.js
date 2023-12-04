import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetsView from '../views/ProjetsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projets',
    name: 'projets',
    component: ProjetsView,
    meta: { breadcrumb: 'Liste de projets' }
  },
  {
    path: '/projets/:id',
    name: 'projets',
    component: HomeView,
    meta: { breadcrumb: ':id' }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
