import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Window.vue'

Vue.use(VueRouter)


const Discover = () => import('@/views/pages/home/Discover')
const PersonalRec = () => import('@/views/pages/home/PersonalRec')
const PlaylistCategory = () => import('@/views/pages/home/PlaylistCategory')

const SongListDetail =() => import('@/views/pages/SongsListDetail')
const SearchDetail = () => import('@/views/pages/SearchDetail')
const VideoPlay = () => import('@/views/pages/VideoPlay')


const routes = [
  {  path: '/',  redirect: '/discover'  },

  {
    path: '/test',
    component: () => import('@/test')
  },

  {
    path: '/discover',  component: Discover,
    children: [
      { path: '/',  redirect: '/discover/recommend' },
      { path: '/discover/recommend', component: PersonalRec },
      { path: '/discover/playlists', component: PlaylistCategory }
    ]
  },

  {  path: '/playlist/:id',  component: SongListDetail },

  { path: '/search' , component: SearchDetail },

  { path: '/video/:id' , component: VideoPlay },

]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
