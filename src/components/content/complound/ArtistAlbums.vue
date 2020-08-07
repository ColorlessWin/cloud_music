<template>
  <rendering
    :component="require('@/components/content/matrices/AlbumMatrices').default"
    :filling="filling"
    :unique="id"
    :col="5"
    :adapter="adapter"
  />
</template>

<script>
  import AlbumMatrices from "@/components/content/matrices/AlbumMatrices";
  import {artist_album} from "@/network/request_show";
  import Rendering from "@/components/layout/Rendering";
  export default {
    name: "ArtistAlbums",
    components: {Rendering, AlbumMatrices},
    props: {
      id: { type: [String, Number] },
    },
    data() {
      return {
        adapter: {
          coverUrl: (album) => album['blurPicUrl'] + '?param=200y200',
          name:     (album) => album['name'],
          id:       (album) => album['id'],
          publishTime: (album) => album['publishTime']
        }
      }
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
