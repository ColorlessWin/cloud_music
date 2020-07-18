import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import cookie from "./utils/cookie";
import Bus from "./utils/bus";

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

  Notification,
} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/effect.css'

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


Vue.config.productionTip = false


Vue.prototype.$cookie = cookie
Vue.prototype.$notify = Notification
Vue.prototype.$bus = Bus
console.log('cookie: ', Vue.prototype.$cookie.value);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
