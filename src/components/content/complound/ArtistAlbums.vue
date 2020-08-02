<template>
  <album-matrices :datas="albums" :adapter="adapter"/>
</template>

<script>
  import AlbumMatrices from "@/components/content/matrices/AlbumMatrices";
  import {artist_album} from "@/network/request_show";
  export default {
    name: "ArtistAlbums",
    components: {AlbumMatrices},
    props: {
      id: { type: [String, Number] },
    },
    data() {
      return {
        albums: [],
        adapter: {
          coverUrl: (album) => album['blurPicUrl'] + '?param=200y200',
          name:     (album) => album['name'],
          id:       (album) => album['id'],
          publishTime: (album) => album['publishTime']
        }
      }
    },

    created() {
      this.refresh()
    },

    methods: {
      refresh() {
        artist_album(this.id).then(result => {
          this.albums = result['hotAlbums']
        })
      }
    },

    watch: {
      id() {
        this.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
