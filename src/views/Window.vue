<template>
  <div class="window eff-shadow">
    <login/>
    <el-container class="__container">
      <el-header height="50px">
        <!--顶部-->
        <app-header/>

      </el-header>
      <el-container class="main-container">
        <el-aside class="aside" width="240px">
          <!--侧边栏-->
          <app-aside/>

        </el-aside>
        <el-main class="light-scroll">
          <!--    主要视图      -->
          <router-view/>

        </el-main>
      </el-container>
      <el-footer height="45px">

        <app-footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import AppHeader from '@/views/Header.vue';
import AppAside from '@/views/Aside.vue'
import Login from "@/views/Login";
import AppFooter from "@/views/Footer";

export default {
  name: 'Window',
  components: {
    AppFooter,
    Login,
    AppHeader,
    AppAside,
  }
}
</script>

<style>
  .window {
    resize: both;
    height: 700px;
    width: 1200px;
    overflow: hidden;

    border-radius: 4px;
    background-color: white;
  }

  .window .el-aside {
    resize: horizontal;
    min-width: 120px;
  }

  .window .__container {
    height: 100%;
  }

  .__container .main-container {
    height: calc(100% - 95px);
  }

  .window .el-header {
    background-color: #eceff1;
  }

  .window .el-aside {
    border-right: 1px solid #e0e0e0;;
  }

  .window .el-footer {
    border-top: 1px solid #e0e0e0;;
  }
</style>
