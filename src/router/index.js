import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Window.vue'

Vue.use(VueRouter)


const Discover = () => import('@/views/pages/home/Discover')
const PersonalRec = () => import('@/views/pages/home/PersonalRec')

const SongListDetail =() => import('@/views/pages/SongsListDetail')

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
  },

  {
    path: '/playlist/:id',
    component: SongListDetail
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
