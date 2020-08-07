<template>
  <rendering
    :component="require('@/components/content/matrices/CommonVideoMatrices').default"
    :show-creator="false"
    :col="4"
    :filling="filling"
    :unique="id"
  />
</template>

<script>
  import Rendering from "@/components/layout/Rendering";
  import {artist_mv} from "@/network/request_show";
  export default {
    name: "ArtistVideos",
    components: {Rendering},
    props: {
      id: { type: [Number, String], required: true }
    },
    methods: {
      filling() {
        return new Promise(resolve => {
          artist_mv(this.id).then(result => {
            resolve(result['mvs'])
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
