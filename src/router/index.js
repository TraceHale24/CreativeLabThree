import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Equipment from "../views/Equipment.vue"
import About from '../views/About.vue'
import AddHike from '../views/AddHike.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/equipment',
    name: 'Equipment',
    component: Equipment
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/addHike',
    name: 'AddHike',
    component:AddHike
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
