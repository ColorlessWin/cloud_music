<template>
  <div class="search">
    <el-tabs v-model="type" @tab-click="onclick">
      <el-tab-pane label="单曲" name="1"></el-tab-pane>
      <el-tab-pane label="歌手" name="100"></el-tab-pane>
      <el-tab-pane label="专辑" name="10"></el-tab-pane>
      <el-tab-pane label="视频" name="1014"></el-tab-pane>
      <el-tab-pane label="歌单" name="1000"></el-tab-pane>
      <el-tab-pane label="歌词" name="1006"></el-tab-pane>
      <el-tab-pane label="电台" name="1009"></el-tab-pane>
      <el-tab-pane label="用户" name="1002"></el-tab-pane>
    </el-tabs>

    <div class="result-total"> 为你找到 {{this.total}} 条内容</div>

    <component :is="dynComponent[type].component"
               :datas="result"
               v-bind="dynComponent[type].props"/>


    <pagination class="pagination" :total="total" v-model="result"
                :limit="30"        :filling="load"
                :unique="$route.query" :index="true"/>

  </div>
</template>

<script>
  import { search } from "@/network/request_show";
  import SongTracks from "@/components/pages/SongsListDetail/SongTracks";
  import ArtistTrack from "@/components/content/track/ArtistTrack";
  import AlbumTrack from "@/components/content/track/AlbumTrack";
  import Pagination from "@/components/common/Pagination";

  export default {
    name: "SearchDetail",
    components: {Pagination, AlbumTrack, ArtistTrack, SongTracks},
    data() {
      return {
        component: 'SongTracks',
        result: [],
        adapter: null,
        keywords: '',
        type: '1',
        total: 0,
        dynComponent: {
          '1'     : { component: 'SongTracks', props: { adapter: this.$adapter.search_to_songs  }},
          '10'    : { component: 'AlbumTrack', props: { adapter: this.$adapter.search_to_album  }},
          '100'   : { component: 'ArtistTrack',props: { adapter: this.$adapter.search_to_artists}},
          '1000'  : { },
          '1002'  : { },
          '1006'  : { },
          '1009'  : { },
          '1014'  : { }
        },
        field: {
          '1'     : { result: 'songs',       total: 'songCount',     },
          '10'    : { result: 'albums',      total: 'albumCount',    },
          '100'   : { result: 'artists',     total: 'artistCount',   },
          '1000'  : { result: 'playlists',   total: 'playlistCount'  },
          '1002'  : { result: 'userprofiles',total: 'userprofileCount'},
          '1006'  : { result: 'songs',       total: 'songCount'       },
          '1009'  : { result: 'djRadios',    total: 'djRadiosCount'   },
          '1014'  : { result: 'videos',      total: 'videoCount'      }
        }
      }
    },

    methods: {

      onclick(tab) {
        this.$router.push(`/search?keywords=${this.keywords}&type=${this.type}`)
      },

      refresh() {
        this.result = []

        const query = this.$route.query
        this.keywords = query.keywords
        this.type = query.type
      },

      load(offset, limit) {
        return new Promise(resolve => {
          search(this.keywords, offset, limit, this.type).then(res => {
            this.total = res['result'][this.field[this.type].total]
            let result = res['result'][this.field[this.type].result]
            console.log(res)
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
    font-weight: bold;

    padding: 20px 10px;
  }

  .pagination {
    margin-top: 20px;
  }
</style>
