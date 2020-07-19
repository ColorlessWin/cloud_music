<template>
  <div id="app">
    <cloud-music-window/>
  </div>
</template>

<script>
  import CloudMusicWindow from '@/views/Window.vue'

  import { login_refresh, login_status } from "@/network/request_login";
  import StoreTypes from "@/store/types";

  export default {
    components: { CloudMusicWindow },

    beforeCreate() {
      //进入时 检查登录状态并获取用户信息

      return

      login_status().then(result => {
        this.$store.commit(StoreTypes.UPDATE_LOGIN_STATUS, {
          isLogin: true,
          profile: result.profile
        })
      })
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
