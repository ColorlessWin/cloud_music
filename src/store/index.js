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
      playlist: [],
      coll_playlist: [],
      liked_song: [],
    },

    player: {
      songsId: 0,
      current: 0,
      playing: false,
      playTracks: [],
    }
  },

  getters: {
    TrackLength: state => {
      return state.player.playTracks.length
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

    [types.AUDIO_INSERT] (state, { id }) {
      let current = state.player.current
      let index = state.player.playTracks.length !== 0? current + 1: 0
      state.player.playTracks.splice(index, 0, { id })
      state.player.current = index
    },

    [types.LIKE_LIST_ADD] (state, { id } ) {
      let likelist = state.profile.liked_song
      if (!likelist.includes(id))
        state.profile.liked_song.push(id)
    },

    [types.LIKE_LIST_DEL] (state, { id } ) {
      let likelist = state.profile.liked_song
      let index = likelist.indexOf(id)
      if (index > -1) {
        likelist.splice(index, 1)
      }
    },

    [types.AUDIO_PLAY] (state) { state.player.playing = true },
    [types.AUDIO_STOP] (state) { state.player.playing = false },
    [types.PLAYLIST] (state, { track }) { state.profile.playlist =  track },
    [types.COLL_PLAYLIST] (state, { track }) { state.profile.coll_playlist =  track },
    [types.LIKED_SONG] (state, { track }) { state.profile.liked_song =  track }
  },
  actions: {
    [types.AUDIO_CHANGE] (content, { songsId, index }) {
      if (content.state.player.songsId !== songsId) {
        song_list_detail(songsId).then(result => {
          content.commit(
            types.AUDIO_CHANGE,
            { songsId, songsTracks: result['playlist']['trackIds'], index } )
        })
      } else {
        content.commit(
          types.AUDIO_CHANGE,
          { songsId, songsTracks: content.state.player.playTracks, index } )
      }
    }
  },
  modules: {

  }
})
