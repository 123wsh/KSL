import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'


//header全局组件
import MyHeader from "./components/Header.vue"
Vue.component("my-header",MyHeader)
//右侧固定bar
import RightBar from "./components/RightBar.vue"
Vue.component("right-bar",RightBar)
//footer
import FooterBar from  "./components/Footer.vue"
Vue.component("footer-bar",FooterBar)

axios.defaults.baseURL = 'http://127.0.0.1'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
