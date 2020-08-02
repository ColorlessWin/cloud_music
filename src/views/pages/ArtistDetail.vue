<template>
  <div>
    <artist-info-show :artist="artist"/>

    <el-tabs class="tabs align-left" v-model="selected">
      <el-tab-pane label="热门歌曲(TOP 50)" name="hot-songs" :lazy="true">

        <!--  歌曲列表-->
        <song-tracks :datas="hotSongs" :adapter="$adapter.songs_list_to_songs"/>

      </el-tab-pane>
      <el-tab-pane label="专辑" name="album" :lazy="true">

        <artist-albums :id="id"/>

      </el-tab-pane>
      <el-tab-pane label="MV" name="mv" :lazy="true">


      </el-tab-pane>
      <el-tab-pane label="歌手详情" name="artist-detail" :lazy="true">

        <artist-desc :id="id"/>

      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
  import ArtistInfoShow from "@/components/pages/topinfo/ArtistInfoShow";
  import SongTracks from "@/components/content/tracks/SongTracks";
  import {artist_info} from "@/network/request_show";
  import ArtistAlbums from "@/components/content/complound/ArtistAlbums";
  import ArtistDesc from "@/components/content/complound/ArtistDesc";
  export default {
    name: "ArtistDetail",
    components: {ArtistDesc, ArtistAlbums, ArtistInfoShow, SongTracks},
    data() {
      return {
        id: 0,
        artist: {},
        hotSongs:[],
        selected: 'hot-songs'
      }
    },

    created() {
      this.id = this.$route.params.id
      this.refresh()
    },

    methods: {
      refresh() {
        artist_info(this.id).then(result => {
          this.artist = result['artist']
          this.hotSongs = result['hotSongs'].map((value, index) =>{
            value['__index'] = index + 1
            return value
          })
          console.log(result)
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

</style>
