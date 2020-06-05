import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:sessionStorage.getItem("uname")?sessionStorage.getItem("uname"):"",
    password:sessionStorage.getItem("upwd")?sessionStorage.getItem("upwd"):"",
    isLogin:sessionStorage.getItem("isLogin")?sessionStorage.getItem("isLogin"):false
  },
  getters:{
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
