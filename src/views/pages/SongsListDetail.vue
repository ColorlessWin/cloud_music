<template>
  <div v-if="$Check(detail)" class="song-list-detail container">
<!--歌单详情-->
    <detail-show :detail="detail" v-loading="loading_one"/>

    <el-card :body-style="{ padding: '15px 10px 10px 10px', boxSizing: 'border-box' }">

      <el-tabs class="tabs align-left" v-model="selected" @tab-click="tabClick">
        <el-tab-pane label="歌曲列表" name="song-tracks" :lazy="true">
          <!--歌曲列表-->
          <song-tracks :datas="songTracks" :id="detail['id']" v-loading="loading_two"
                       :adapter="$adapter.songs_list_to_songs"/>

        </el-tab-pane>
        <el-tab-pane label="评论" name="comments" :lazy="true">

          <comment-track :datas="commentTracks" :adapter="$adapter.comment_caluse"/>

        </el-tab-pane>
        <el-tab-pane label="收藏者" name="collect" :lazy="true">角色管理</el-tab-pane>
      </el-tabs>

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
  import { song_list_detail, comment_playlist } from "@/network/request_show";

  import DetailShow from "@/components/pages/SongsListDetail/DetailShow";
  import SongTracks from "@/components/pages/SongsListDetail/SongTracks";
  import Pagination from "@/components/common/Pagination";
  import CommentTrack from "@/components/content/tracks/CommentTrack";

  export default {
    name: "SongsListDetail",
    components: {CommentTrack, Pagination, SongTracks, DetailShow },
    data() {
      return {
        detail: null,
        songTracks: null,
        commentTracks: null,
        limit: 30,
        selected: 'song-tracks',
        loading_one: true,
        loading_two: true,
      }
    },

    created() {
      this.loadData()
    },

    methods: {

      tabClick() {
        if (this.selected === 'comments') {
          comment_playlist(this.detail['id'], 0, 20).then(res => {
            this.commentTracks = res['comments']
            console.log(res)
          })
        }
      },

      loadData() {
        this.loading_one = true
        song_list_detail(this.$route.params.id).then(result => {
          this.detail = result['playlist']
          this.loading_one = false
        })
      },

      filling(offset, limit) {
        this.loading_two = true
        return new Promise((resolve, reject) => {
          song_tracks(this.$route.params.id, offset, limit).then(res => {
            // console.log(res);
            resolve(res['songs'])
            this.loading_two = false
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
