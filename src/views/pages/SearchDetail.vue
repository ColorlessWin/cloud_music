<template>
  <div class="search">
    <el-tabs>
      <el-tab-pane label="单曲" ></el-tab-pane>
      <el-tab-pane label="歌手" ></el-tab-pane>
      <el-tab-pane label="专辑" ></el-tab-pane>
      <el-tab-pane label="视频" ></el-tab-pane>
      <el-tab-pane label="歌单" ></el-tab-pane>
      <el-tab-pane label="歌词" ></el-tab-pane>
      <el-tab-pane label="电台" ></el-tab-pane>
      <el-tab-pane label="用户" ></el-tab-pane>
    </el-tabs>

    <song-tracks :songs="result" :adapter="adapter"/>

  </div>
</template>

<script>
  import { search } from "@/network/request_show";
  import SongTracks from "@/components/pages/SongsListDetail/SongTracks";

  export default {
    name: "SearchDetail",
    components: {SongTracks},
    data() {
      return {
        result: [],
        adapter: {
          index:      (song) => song['__index'],
          name:       (song) => song['name'],
          ars:        (song) => song['artists'],
          ar_id:      (ar)   => ar['id'],
          ar_name:    (ar)   => ar['name'],
          album_name: (song) => song['album']['name'],
          duration:   (song) => song['duration']
        }
      }
    },

    methods: {
      load(keyword, offset, limit, type) {
        search(keyword, offset, limit, type).then(res => {
          console.log(res)
          this.result = res['result']['songs']
        })
      }
    },

    created() {
      const query = this.$route.query
      console.log(query);
      this.load(query.keywords, 0, 30, query.type)
    },

    watch: {
      $route(to, from) {
        // console.log(to, from)
        this.load(to.query.keywords, 0, 30, to.query.type)
      }
    }
  }
</script>

<style scoped>

</style>
