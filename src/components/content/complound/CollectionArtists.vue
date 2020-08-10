<template>
  <rendering
    :component="require('@/components/content/tracks/ArtistTrack').default"
    :filling="filling"
  />
</template>

<script>
  import Rendering from "@/components/layout/Rendering";
  import {artist_sublist} from "@/network/request_uesr";
  export default {
    name: "CollectionArtists",
    components: {Rendering},
    methods: {
      filling() {
        return new Promise(resolve => {
          artist_sublist().then(result => {
            resolve(result['data'])
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
