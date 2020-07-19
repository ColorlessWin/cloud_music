<template>
  <div class="login-state" @click="onClick">
    <div v-if="!$store.state.isLogin">
      <img class="avatar" src="~@/assets/img/default_avatar.png" alt="">
      <span class="user-name">未登录</span>
    </div>
    <div v-else>
      <img class="avatar" :src="$store.state.profile.avatarUrl" alt="">
      <span class="user-name">{{$store.state.profile.name}}</span>
    </div>
  </div>
</template>

<script>
  import BusTypes from "../../utils/bus/types";

  export default {
    name: "LoginState",

    methods: {
      onClick() {
        if (!this.$store.state.isLogin) {
          this.$bus.$emit(BusTypes.LOGIN_PANEL_CUTOVER)
        }
      }
    }
  }
</script>

<style scoped>

  .avatar, .user-name {
    cursor: pointer;
  }

  .avatar {
    width: 25px;
    height: 25px;
    vertical-align: middle;
    border-radius: 50%;
  }

  .user-name {
    margin-left: 10px;
    font-size: 11px;
    font-weight: bold;
  }

</style>
