<template>
  <div class="window">
    <login/>
    <el-container class="container">
      <el-header height="50px">
        <!--顶部-->
        <app-header/>

      </el-header>
      <el-container class="main-container">
        <el-aside class="aside" width="21%">
          <!--侧边栏-->
          <app-aside/>

        </el-aside>
        <el-main>
          <!--    主要视图      -->
          <router-view/>

        </el-main>
      </el-container>
      <el-footer height="45px"></el-footer>
    </el-container>
  </div>
</template>

<script>
import AppHeader from '@/views/Header.vue';
import AppAside from '@/views/Aside.vue'
import Login from "@/views/Login";

export default {
  name: 'Window',
  components: {
    Login,
    AppHeader,
    AppAside,
  }
}
</script>

<style>
  .window {
    height: 700px;
    width: 1200px;
    overflow: hidden;

    margin: auto;
    border-radius: 4px;
    border: 1px solid #eeeeee;
  }

  .window .container {
    height: 100%;
  }

  .container .main-container {
    height: calc(100% - 50px);
  }

  .container .main-container .aside {
    border-right: 1px solid #e6e6e6;
  }

  .window .el-header {
    background-color: #eceff1;
  }
</style>
