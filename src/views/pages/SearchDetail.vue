<template>
  <div class="search">
    <el-tabs v-model="type" @tab-click="onclick">
      <el-tab-pane label="单曲" name="1"></el-tab-pane>
      <el-tab-pane label="歌手" name="100"></el-tab-pane>
      <el-tab-pane label="专辑" name="10"></el-tab-pane>
      <el-tab-pane label="视频" name="1014"></el-tab-pane>
      <el-tab-pane label="歌单" name="1000"></el-tab-pane>
      <el-tab-pane label="用户" name="1002"></el-tab-pane>
    </el-tabs>

    <div class="result-total"> 为你找到 {{this.total}} 条内容</div>

    <div class="content">

      <rendering
        :component="current.component"
        v-bind="current.props"
        :total="total"
        :unique="keywords + type"
        :filling="filling"
        :index="true"
      />

    </div>

  </div>
</template>

<script>
  import { search } from "@/network/request_show";
  import SongTracks from "@/components/content/tracks/SongTracks";
  import ArtistTrack from "@/components/content/tracks/ArtistTrack";
  import AlbumTrack from "@/components/content/tracks/AlbumTrack";
  import SongsTrack from "@/components/content/tracks/SongsTrack";
  import UserTrack from "@/components/content/tracks/UserTrack";
  import VideoMatrices from "@/components/content/matrices/VideoMatrices";

  import Rendering from "@/components/layout/Rendering";

  export default {
    name: "SearchDetail",
    components: {Rendering},
    data() {
      return {
        current: {
          component: SongTracks,
          props: {},
        },
        keywords: '',
        type: '1',
        total: 0,
        dynComponent: {
          '1'     : {
              component: SongTracks,
              props: {
                adapter: this.$adapter.search_to_songs,
                playType: 'next'
           }},
          '1014'  : {
              component: VideoMatrices,
              props: {
                adapter: this.$adapter.search_to_video,
                col: 4
           }},
          '10'    : { component: AlbumTrack, props: { adapter: this.$adapter.search_to_album  }},
          '100'   : { component: ArtistTrack,props: { adapter: this.$adapter.search_to_artists}},
          '1000'  : { component: SongsTrack, props: { adapter: this.$adapter.search_to_playlists}},
          '1002'  : { component: UserTrack,  props: { adapter: this.$adapter.search_to_users}},

        },
        field: {
          '1'     : { result: 'songs',       total: 'songCount',      },
          '10'    : { result: 'albums',      total: 'albumCount',     },
          '100'   : { result: 'artists',     total: 'artistCount',    },
          '1000'  : { result: 'playlists',   total: 'playlistCount'   },
          '1002'  : { result: 'userprofiles',total: 'userprofileCount'},
          '1014'  : { result: 'videos',      total: 'videoCount'      }
        }
      }
    },

    methods: {

      onclick(tab) {
        this.$router.push(`/search?keywords=${this.keywords}&type=${this.type}`)
      },

      refresh() {
        const query = this.$route.query
        this.keywords = query.keywords
        this.type = query.type

        setTimeout(() => {
          this.current.component = this.dynComponent[this.type].component
          this.current.props = this.dynComponent[this.type].props
        })
      },

      filling(offset, limit) {
        return new Promise(resolve => {
          search(this.keywords, offset, limit, this.type).then(res => {
            this.total = res['result'][this.field[this.type].total]
            let result = res['result'][this.field[this.type].result]
            resolve(result)
          })
        })
      },
    },

    created() {
      this.refresh()
    },

    watch: {
      $route(to, from) {
        this.refresh()
      }
    }
  }
</script>

<style scoped>
  .result-total {
    font-size: 10px;
    /*font-weight: bold;*/

    padding: 20px 10px;
  }

  .search {
    min-width: 700px;
  }

  .pagination {
    margin-top: 20px;
  }

  .content {
    width: 100%;
    min-height: 500px;
  }
</style>
