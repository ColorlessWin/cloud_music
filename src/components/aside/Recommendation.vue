<template>
  <div class="recommendation">
    <el-submenu index="1" collapse="false">
      <div class="title" slot="title">推荐</div>
      <el-menu-item index="1-1">发现音乐</el-menu-item>
      <el-menu-item index="1-3">视频</el-menu-item>
      <el-menu-item index="1-4" :disabled="!$store.state.isLogin">朋友</el-menu-item>
      <el-menu-item index="1-2" :disabled="!$store.state.isLogin">私人FM</el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
  export default {
    name: "Recommendation"
  }
</script>

<style scoped>
  .test {
    background-color: red;
  }
</style>
