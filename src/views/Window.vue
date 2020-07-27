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

          <!--当前播放的歌曲预览-->
          <play-preview/>

        </el-aside>
        <el-main class="light-scroll">
          <!--    主要视图      -->
          <router-view/>

        </el-main>

        <playing/>

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
import PlayPreview from "@/views/PlayPreview";
import Playing from "@/views/Playing";

export default {
  name: 'Window',
  components: {
    Playing,
    PlayPreview,
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

    margin: 20px auto auto auto;
  }

  .window .el-aside {
    resize: horizontal;
    min-width: 230px;
    border-right: 1px solid #e0e0e0;;
  }

  .window .__container {
    height: 100%;
  }

  .__container .main-container {
    position: relative;
    height: calc(100% - 95px);
  }

  .window .el-header {
    background-color: #eceff1;
  }

  .window .el-footer {
    border-top: 1px solid #e0e0e0;;
  }
</style>
