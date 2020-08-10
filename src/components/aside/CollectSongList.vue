<template>
  <div class="collect-song-list">
    <el-submenu index="4" collapse="false" :disabled="!$store.state.isLogin">
      <div class="primary" slot="title">收藏的歌单</div>
      <el-menu-item
        v-for="(item, index) in $store.state.profile.coll_playlist"
        :index="`/playlist/${item.id}`"
        :key="item.id">{{item.name}}
      </el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
  export default {
    name: "CollectSongList",
    data() {
      return { playlist: {} }
    },
    created(){

    }
  }
</script>

<style scoped>

</style>
