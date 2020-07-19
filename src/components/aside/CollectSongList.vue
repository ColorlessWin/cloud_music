<template>
  <div class="collect-song-list">
    <el-submenu index="4" collapse="false" :disabled="$store.state.isLogin">
      <div class="title" slot="title">收藏的歌单</div>
      <el-menu-item index="4-1">我喜欢的音乐</el-menu-item>
      <el-menu-item index="4-2">私人FM</el-menu-item>
      <el-menu-item index="4-3">视频</el-menu-item>
      <el-menu-item index="4-4">朋友</el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
  export default {
    name: "CollectSongList"
  }
</script>

<style scoped>

</style>
