<template>
  <rendering
    :component="require('@/components/content/matrices/AlbumMatrices').default"
    :filling="filling"
    :unique="id"
    :col="5"
  />
</template>

<script>
  import {artist_album} from "@/network/request_show";
  import Rendering from "@/components/layout/Rendering";
  export default {
    name: "ArtistAlbums",
    components: {Rendering},
    props: {
      id: { type: [String, Number] },
    },
    methods: {
      filling() {
        return new Promise(resolve => {
          artist_album(this.id).then(result => {
            resolve(result['hotAlbums'])
          })
        })
      }
    },
  }
</script>

<style scoped>

</style>
