<template>
  <div class="my-music">
    <el-submenu  index="2" collapse="false">
      <div class="primary" slot="title">我的音乐</div>
      <el-menu-item index="2-3" :disabled="!$store.state.isLogin">每日推荐</el-menu-item>
      <el-menu-item index="2-1" :disabled="!$store.state.isLogin">我的音乐云盘</el-menu-item>
      <el-menu-item index="2-2" :disabled="!$store.state.isLogin">我的电台</el-menu-item>
      <el-menu-item index="2-3" :disabled="!$store.state.isLogin">我的收藏</el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
  export default {
    name: "MyMusic"
  }
</script>

<style scoped>

</style>
