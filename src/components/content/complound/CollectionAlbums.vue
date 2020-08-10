<template>
  <rendering
    :component="require('@/components/content/matrices/AlbumMatrices').default"
    :show-creator="true"
    :col="5"
    :adapter="adapter"
    :filling="filling"
  />
</template>

<script>
  import Rendering from "@/components/layout/Rendering";
  import {album_sublist} from "@/network/request_uesr";
  export default {
    name: "CollectionAlbums",
    components: {Rendering},
    data() {
      return {
        adapter: {
          coverUrl: (album) => album['picUrl'] + '?param=200y200'
        }
      }
    },
    methods: {
      filling(...args) {
        return new Promise(resolve =>  {
          album_sublist(...args).then(result => {
            resolve(result['data'])
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
