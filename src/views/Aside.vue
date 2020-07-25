<template>
  <div class="app-aside light-scroll">
    <el-menu router mode="vertical" :default-openeds="['1', '2']">

      <recommendation/>

      <my-music/>

      <own-song-list/>

      <collect-song-list/>

    </el-menu>
  </div>
</template>

<script>
  import Recommendation from "@/components/aside/Recommendation";
  import MyMusic from "@/components/aside/MyMusic";
  import OwnSongList from "@/components/aside/OwnSongList";
  import CollectSongList from "@/components/aside/CollectSongList";

  export default {
    name: "Aside",
    components: {
      CollectSongList,
      OwnSongList,
      MyMusic,
      Recommendation
    }
  }
</script>

<style scoped>
  .app-aside {
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 52px);

    overflow: auto;
  }
</style>
