<template>
  <rendering
    :component="require('@/components/content/matrices/AlbumMatrices').default"
    :show-creator="true"
    :adapter="adapter"
    :col="5"

    :total="total"
    :filling="filling"
    :limit="50"
    :unique="area"
  />
</template>

<script>
  import Rendering from "@/components/layout/Rendering";
  import {top_album} from "@/network/request_show";
  export default {
    name: "NewAlbumsGlance",
    components: {Rendering},
    props: {
      area: { type: String,   default:'ALL' }
    },
    data() {
      return {
        total: 0,
        adapter: {
          artists: (album) => {
            return album['artists'].map(value => {
              return {
                id: value['id'],
                name: value['name'],
                alia: value['alias']
              }
            })
          }
        }
      }
    },
    methods: {
      filling(offset, limit) {
        return new Promise(resolve => {
          top_album(this.area, offset, limit).then(result => {
            this.total = result['total']
            resolve(result['albums'])
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
