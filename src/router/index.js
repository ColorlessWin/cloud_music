import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const Discover = () => import('@/views/pages/home/Discover')
const PersonalRec = () => import('@/views/pages/home/PersonalRec')
const PlaylistCategory = () => import('@/views/pages/home/PlaylistCategory')
const TopList = () => import('@/views/pages/home/TopList')
const ArtistCategory = ()=> import('@/views/pages/home/ArtistsCategory')
const NewSongs = () => import('@/views/pages/home/NewSongs')

const SongsDetail = () => import('@/views/pages/SongsDetail')
const SearchDetail = () => import('@/views/pages/SearchDetail')
const VideoPlay = () => import('@/views/pages/VideoPlay')
const AlbumDetail = ()=> import('@/views/pages/AlbumDetail')
const ArtistDetail = ()=> import('@/views/pages/ArtistDetail')
const Profile = ()=> import('@/views/pages/Profile')


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
      { path: '/discover/playlists', component: PlaylistCategory },
      { path: '/discover/toplist', component: TopList },
      { path: '/discover/artists', component: ArtistCategory },
      { path: '/discover/newsongs', component: NewSongs }
    ]
  },

  { path: '/playlist/:id',  component: SongsDetail },

  { path: '/search' , component: SearchDetail },

  { path: '/video' , component: VideoPlay },

  { path: '/album/:id' , component: AlbumDetail },

  { path: '/artist/:id' , component: ArtistDetail },

  { path: '/profile/:id' , component: Profile },
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
