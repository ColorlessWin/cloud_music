<template>
  <div class="home">
    <el-tabs v-model="selected" @tab-click="handleClick">
      <el-tab-pane label="个性推荐" name="personal"></el-tab-pane>
      <el-tab-pane label="歌单" name="playlist"></el-tab-pane>
      <el-tab-pane label="主播电台"></el-tab-pane>
      <el-tab-pane label="排行榜" name="toplist"></el-tab-pane>
      <el-tab-pane label="歌手"></el-tab-pane>
      <el-tab-pane label="最新音乐"></el-tab-pane>
    </el-tabs>

    <!---->
    <router-view/>

  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        selected: 'personal',
        router_map: {
          'personal': '/discover/recommend',
          'playlist': '/discover/playlists',
          'toplist' : '/discover/toplist',
        }
      }
    },

    created() {
      this.refresh()
    },

    methods: {
      handleClick(tab) {
        this.$router.push(this.router_map[tab.name])
      },

      refresh() {
        Object.keys(this.router_map).forEach((value => {
          if (this.$route.path.indexOf(this.router_map[value]) !== -1) {
            this.selected = value
          }
        }))
      }
    },

    watch: {
      $route: function (to, from) {
        this.refresh()
      }
    }
  }
</script>

<style scoped>
  .home {
    width: 880px;
    margin: 0 auto;
  }
</style>
