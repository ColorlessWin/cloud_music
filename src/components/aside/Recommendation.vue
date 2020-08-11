<template>
  <div class="recommendation">
    <el-submenu index="1" collapse="false">
      <div class="primary" slot="title">推荐</div>
      <el-menu-item
        index="/discover"
      >
        发现音乐
      </el-menu-item>
      <el-menu-item
        index="/mv"
      >
        视频
      </el-menu-item>
      <el-menu-item
        index="/todo"
        :disabled="!$store.state.isLogin"
      >
        朋友
      </el-menu-item>
      <el-menu-item
        index="/todo"
        :disabled="!$store.state.isLogin"
      >
        私人FM
      </el-menu-item>
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
