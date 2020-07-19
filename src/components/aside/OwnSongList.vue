<template>
  <div class="own-song-list">
    <el-submenu index="3" collapse="false" :disabled="$store.state.isLogin">
      <div class="title" slot="title">创建的歌单</div>
      <el-menu-item index="3-1">我喜欢的音乐</el-menu-item>
      <el-menu-item index="3-2">私人FM</el-menu-item>
      <el-menu-item index="3-3">视频</el-menu-item>
      <el-menu-item index="3-4">朋友</el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
  export default {
    name: "OwnSongList"
  }
</script>

<style scoped>

</style>
