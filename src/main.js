import 'core-js/stable';
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import cookie from "./utils/cookie";
import Bus from "./utils/bus";
import Filter from "@/utils/filter";
import Audioer from "@/utils/audioer";
import Directive from "@/utils/directive"


import {
  Button,
  Select,
  Input,
  Option,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Card,
  Menu,
  MenuItem,
  Submenu,
  Tabs,
  TabPane,
  Carousel,
  CarouselItem,
  Row,
  Col,
  Pagination,
  Slider,
  RadioButton,
  RadioGroup,
  Popover,

  Loading,
  Notification,
} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/effect.css'
import '@/assets/css/element_ui_style_cover.css'

Vue.use(Button)
Vue.use(Select)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Card)
Vue.use(Input)
Vue.use(Option)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Pagination)
Vue.use(Slider)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Popover)
Vue.use(Loading.directive)

//安装全局filter
Vue.use(Filter)

//安装全局audio
Vue.use(Audioer)

//自定义v-指令
Vue.use(Directive)

const Check = function(obj) {
  if (!obj) return false
  if (typeof obj === 'object' && Object.keys(obj).length === 0) return false
  if (Array.isArray(obj) && obj.length === 0) return false
  return true
}

Vue.config.productionTip = false

Vue.prototype.$cookie = cookie
Vue.prototype.$notify = Notification
Vue.prototype.$bus = Bus
Vue.prototype.$Check = Check


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
