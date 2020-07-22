<template>
  <div v-if="$Check(detail)" class="song-list-detail container">
<!--歌单详情-->
    <detail-show :detail="detail"/>

    <el-card :body-style="{ padding: '15px 10px 10px 10px', boxSizing: 'border-box' }">
<!--歌曲列表-->
      <song-tracks :datas="songTracks" :adapter="$adapter.songs_list_to_songs"/>
    </el-card>

<!--页码-->
    <pagination class="pagination"
                v-model="songTracks" :limit="40"
                :total="detail['trackCount']"
                :filling="filling"
                :unique="this.$route.params.id"
                :index="true"/>

  </div>
</template>

<script>
  import { song_tracks } from "@/network/resolved";
  import { song_list_detail } from "@/network/request_show";

  import DetailShow from "@/components/pages/SongsListDetail/DetailShow";
  import SongTracks from "@/components/pages/SongsListDetail/SongTracks";
  import Pagination from "@/components/common/Pagination";

  export default {
    name: "SongsListDetail",
    components: { Pagination, SongTracks, DetailShow },
    data() {
      return {
        detail: null,
        songTracks: null,
        limit: 30,
      }
    },

    created() {
      this.loadData()
    },

    methods: {
      loadData() {
        song_list_detail(this.$route.params.id).then(result => {
          this.detail = result['playlist']
        })
      },

      filling(offset, limit) {
        return new Promise((resolve, reject) => {
          song_tracks(this.$route.params.id, offset, limit).then(res => {
            console.log(res);
            resolve(res['songs'])
          })
        })
      }
    },

    watch: {
      '$route' (to, from) {
        if(to.params.id !== from.params.id){
          this.loadData()
        }
      }
    },
  }
</script>

<style scoped>
  .song-list-detail.container {
    min-width: 600px;
    padding: 10px 20px 10px 20px;
  }

  .song-list-detail .pagination {
    margin: 20px auto auto auto;
  }
</style>
