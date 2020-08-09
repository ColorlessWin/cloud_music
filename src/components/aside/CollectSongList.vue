<template>
  <div class="collect-song-list">
    <el-submenu index="4" collapse="false" :disabled="!$store.state.isLogin">
      <div class="primary" slot="title">收藏的歌单</div>
      <el-menu-item v-for="(item, index) in playlist" :index="`/playlist/${item.id}`" :key="item.id">{{item.name}}</el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
  import { playlist } from "@/network/request_uesr";
  import StoreTypes from "@/store/types";
  export default {
    name: "CollectSongList",
    data() {
      return { playlist: {} }
    },
    created(){
      playlist(this.$store.state.profile.UID).then(result => {
        const resolved =  result['playlist'].filter((value) => {
          if (value['subscribed']) return value
        })
        this.playlist = resolved
        this.$store.commit(StoreTypes.COLL_PLAYLIST, {
          track: resolved
        })
      })
    }
  }
</script>

<style scoped>

</style>
