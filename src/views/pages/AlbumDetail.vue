<template>
  <div class="album">
    <album-info-show :album="album"/>

    <el-tabs class="tabs align-left" v-model="selected">
      <el-tab-pane label="歌曲列表" name="song-tracks" :lazy="true">

        <!--  歌曲列表-->
        <song-tracks :datas="songs" :adapter="$adapter.songs_list_to_songs"/>

      </el-tab-pane>
      <el-tab-pane label="评论" name="comments" :lazy="true">

        <!--  评论列表-->
        <comment-area :id="id" type="album"/>

      </el-tab-pane>
      <el-tab-pane label="专辑介绍" name="collect" :lazy="true">

        <description class="desc" :desc="[ { ti: '专辑介绍', txt: album['description'] } ]"/>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import AlbumInfoShow from "@/components/pages/topinfo/AlbumInfoShow";
  import SongTracks from "@/components/content/tracks/SongTracks";
  import CommentArea from "@/components/content/complound/CommentArea";
  import {album_detail} from "@/network/request_show";
  import Description from "@/components/common/Description";
  export default {
    name: "AlbumDetail",
    components: {Description, AlbumInfoShow, SongTracks, CommentArea},
    data() {
      return {
        id: 0,
        album: {},
        songs: [],
        selected: 'song-tracks',
      }
    },

    created() {
      this.id = this.$route.params.id
      this.refresh()
    },

    methods: {
      refresh() {
        album_detail(this.id).then(result => {
          this.album = result['album']
          this.songs = result['songs'].map((value, index) => {
            value['__index'] = index + 1
            return value
          })
        })
      }
    },

    watch: {
      $route() {
        this.id = this.$route.params.id
        this.refresh()
      }
    }
  }
</script>

<style scoped>
  .desc {
    margin-left: 15px;
  }

  .tabs {
    margin-top: 20px;
  }
</style>
