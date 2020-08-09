<template>
  <div class="own-song-list">
    <el-submenu index="3" collapse="false" :disabled="!$store.state.isLogin">
      <div class="primary" slot="title">创建的歌单</div>
      <el-menu-item v-for="(item, index) in playlist" :index="`/playlist/${item.id}`" :key="item.id">{{item.name.trim()}}</el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
  import { playlist } from "@/network/request_uesr";
  import StoreTypes from "@/store/types";

  export default {
    name: "OwnSongList",
    data() {
      return { playlist: {} }
    },
    created(){
      playlist(this.$store.state.profile.UID).then(result => {
        const resolved =  result.playlist.filter((value) => {
          if (!value.subscribed) return value
        })
        this.playlist = resolved
        this.$store.commit(StoreTypes.PLAYLIST, {
          track: resolved
        })
      })
    }
  }
</script>

<style scoped>

</style>
