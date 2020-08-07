<template>
  <div>
    <rendering
      :component="require('@/components/content/tracks/SongTracks').default"
      v-bind="$attrs"
      :id="parseInt(id)"
      :adapter="$adapter.songs_list_to_songs"

      :filling="filling"
      :total="total"
      :unique="id"
      :index="true"
    />

  </div>
</template>

<script>
  import { song_tracks } from "@/network/resolved";
  import Rendering from "@/components/layout/Rendering";
  export default {
    name: "BetterSongTrack",
    components: {Rendering},
    props: {
      id: { type: [Number, String],   default: 0 }
    },

    data() {
      return {
        songTrack: [],
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
