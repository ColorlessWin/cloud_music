import Vue from 'vue'
import Vuex from 'vuex'

import types from "./types";
import { song_list_detail } from "@/network/request_show";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    profile: {
      name: null,
      UID: 0,
      avatarUrl: null,
    },

    player: {
      songsId: 0,
      current: 0,
      playing: false,
      playTracks: [],
    }
  },
  mutations: {
    [types.UPDATE_LOGIN_STATUS] ( state, { isLogin, profile } ) {
      state.isLogin = isLogin
      state.profile.name = profile['nickname']
      state.profile.UID = profile['userId']
      state.profile.avatarUrl = profile['avatarUrl']
    },

    [types.AUDIO_CHANGE] (state, { songsId, songsTracks, index } ) {
      state.player.playTracks = songsTracks
      state.player.current = index
      state.player.songsId = songsId
    },

    [types.AUDIO_PLAY] (state) { state.player.playing = true },
    [types.AUDIO_STOP] (state) { state.player.playing = false }
  },
  actions: {
    [types.AUDIO_CHANGE] (content, { songsId, index }) {
      if (content.state.player.songsId !== songsId) {
        song_list_detail(songsId).then(result => {
          content.commit(
            types.AUDIO_CHANGE,
            { songsId, songsTracks: result['playlist']['trackIds'], index: index } )
        })
      } else {
        content.commit(
          types.AUDIO_CHANGE,
          { songsId, songsTracks: content.state.player.playTracks, index: index } )
      }
    }
  },
  modules: {

  }
})
