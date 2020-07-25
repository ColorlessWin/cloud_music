<template>
  <div>
    <song-tracks :datas="songTrack" :id="parseInt(id)" v-loading="loading"
                 :adapter="$adapter.songs_list_to_songs"/>

    <pagination class="pagination"
                v-model="songTrack" :limit="40"
                :total="total"
                :filling="filling"
                :unique="id"
                :index="true"
                @loading="loading = true"
                @loaded="loading = false"/>
  </div>
</template>

<script>
  import { song_tracks } from "@/network/resolved";
  import SongTracks from "@/components/pages/SongsListDetail/SongTracks";
  import Pagination from "@/components/common/Pagination";
  export default {
    name: "BetterSongTrack",
    components: {SongTracks, Pagination},
    props: {
      id: { type: [Number, String],   default: 0 }
    },

    data() {
      return {
        songTrack: [],
        loading: false,
        total: 0
      }
    },

    methods: {
      filling(offset, limit) {
        return new Promise((resolve, reject) => {
          song_tracks(this.id, offset, limit).then(result => {
            this.total = result['metadata']['total']
            resolve(result['data']['songs'])
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
