<template>
  <rendering
    :component="require('@/components/content/tracks/SongTracksDecorator').default"
    v-bind="$attrs"
    :id="parseInt(id)"

    :filling="filling"
    :total="total"
    :unique="id"
    :index="true"
  />
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
