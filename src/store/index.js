import Vue from 'vue'
import Vuex from 'vuex'

import types from "./types";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    profile: {
      name: null,
      UID: 0,
      avatarUrl: null,
    }
  },
  mutations: {
    [types.UPDATE_LOGIN_STATUS] ( state, { isLogin, profile } ) {
      state.isLogin = isLogin
      state.profile.name = profile.nickname
      state.profile.UID = profile.userId
      state.profile.avatarUrl = profile.avatarUrl
    }
  },
  actions: {
  },
  modules: {
  }
})
