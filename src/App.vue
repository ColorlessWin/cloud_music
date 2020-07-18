<template>
  <div id="app">
    <cloud-music-window/>
  </div>
</template>

<script>
  import CloudMusicWindow from 'views/Window.vue'
  import {login_refresh, login_status} from "./network/inter_login";
  import { user_detail } from "./network/inter_uesr";
  import StoreTypes from "./store/types";

  export default {
    components: {
      CloudMusicWindow
    },
    beforeCreate() {
      login_status().then(result => {
        this.$store.commit(StoreTypes.UPDATE_LOGIN_STATUS, {
          isLogin: true,
          profile: {
            name: result.profile.nickname,
            UID: result.profile.userId,
            avatarUrl: result.profile.avatarUrl,
          }
        })
      })
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
