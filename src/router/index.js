import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/inicio.vue'
import tutor_Registro from '../views/tutor_Registro.vue'
import maestro_Registro from '../views/maestro_Registro.vue'
import admin_Registro from '../views/admin_Registro.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Home
  },
  {
    path: '/tutor_Registro',
    name: 'tutor_Registro',
    component: tutor_Registro
  },
  {
    path: '/maestro_Registro',
    name: 'maestro_Registro',
    component: maestro_Registro
  },
  {
    path: '/admin_Registro',
    name: 'admin_Registro',
    component: admin_Registro
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
