import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Window.vue'

Vue.use(VueRouter)


const Discover = () => import('@/views/pages/home/Discover')
const PersonalRec = () => import('@/views/pages/home/PersonalRec')

const routes = [
  {
    path: '/',
    redirect: '/discover'
  },

  {
    path: '/discover',
    component: Discover,
    children: [
      {
        path: '/',
        redirect: '/discover/recommend'
      },

      {
        path: '/discover/recommend',
        component: PersonalRec
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
