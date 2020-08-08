<template>
  <rendering
    :component="require('@/components/content/tracks/DetailSongTrack').default"
    play-type="track"
    :filling="filling"
    :unique="type"
    :index="true"
  />
</template>

<script>
  import Rendering from "@/components/layout/Rendering";
  import {top_song} from "@/network/request_show";
  export default {
    name: "NewSongsGlance",
    components: {Rendering},
    props: {
      type: { type: String,  default: '0' }
    },
    methods: {
      filling() {
        return new Promise(resolve => {
          top_song(this.type).then(result => {
            resolve(result['data'])
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
