<template>
  <div v-if="$Check(detail)" class="song-list-detail container">
    <blur-background :enable="!small" height="200px" :bg="this.detail['coverImgUrl']">

      <!--歌单详情-->
      <detail-show :small="small" :detail="detail" v-loading="loading_one"/>

      <el-tabs class="tabs align-left" v-model="selected">
        <el-tab-pane label="歌曲列表" name="song-tracks" :lazy="true">

<!--          歌曲列表-->
          <better-song-track :id="id"/>

        </el-tab-pane>
        <el-tab-pane label="评论" name="comments" :lazy="true">

<!--          评论列表-->
          <comment-area :id="id"/>

        </el-tab-pane>
        <el-tab-pane label="收藏者" name="collect" :lazy="true">

<!--          收藏者列表-->
          <SongsSubscribers :id="id" :total="detail['subscribedCount']"/>

        </el-tab-pane>
      </el-tabs>

    </blur-background>
  </div>
</template>

<script>
  import { song_list_detail } from "@/network/request_show";

  import DetailShow from "@/components/pages/SongsListDetail/DetailShow";
  import CommentArea from "@/components/content/complound/CommentArea";
  import BetterSongTrack from "@/components/content/complound/BetterSongTrack";
  import SongsSubscribers from "@/components/content/complound/SongsSubscribers";
  import BlurBackground from "@/components/common/BlurBackground";

  export default {
    name: "SongsListDetail",
    props: {
      id: { type: [Number, String] },
      small: { type: Boolean,  default: false }
    },
    components: {
      BlurBackground,
      SongsSubscribers,
      BetterSongTrack, CommentArea, DetailShow
    },

    data() {
      return {
        detail: null,
        selected: 'song-tracks',
        loading_one: true,
      }
    },

    created() {
      this.loadData()
    },

    methods: {

      loadData() {
        this.loading_one = true
        song_list_detail(this.id).then(result => {
          this.detail = result['playlist']
          this.loading_one = false
        })
      },
    },

    watch: {
      id (to, from) {
        this.loadData()
      }
    },
  }
</script>

<style scoped>
  .song-list-detail.container {
    min-width: 600px;
    padding: 10px 20px 10px 20px;
  }
</style>
