<template>
  <div class="window">
    <login/>
    <el-container class="container">
      <el-header height="50px"> <app-header/> </el-header>
      <el-container>
        <el-aside width="20%"> <app-aside/> </el-aside>
        <el-main></el-main>
      </el-container>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import AppHeader from 'views/Header.vue';
import AppAside from 'views/Aside.vue'
import Login from "./Login";

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

  .window .el-header {
    background-color: #eceff1;
  }
</style>
