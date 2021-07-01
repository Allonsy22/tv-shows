import Vue from 'vue'
import VueRouter from 'vue-router'
import StartPage from '@/pages/StartPage'
import ShowPage from '@/pages/ShowPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: StartPage
  },
  {
    path: '/show/:id',
    name: 'Show',
    component: ShowPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
