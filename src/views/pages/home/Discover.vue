<template>
  <div class="home">
    <el-tabs>
      <el-tab-pane label="个性推荐"></el-tab-pane>
      <el-tab-pane label="歌单"></el-tab-pane>
      <el-tab-pane label="主播电台"></el-tab-pane>
      <el-tab-pane label="排行榜"></el-tab-pane>
      <el-tab-pane label="歌手"></el-tab-pane>
      <el-tab-pane label="最新音乐"></el-tab-pane>
    </el-tabs>

    <!---->
    <router-view/>

  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
