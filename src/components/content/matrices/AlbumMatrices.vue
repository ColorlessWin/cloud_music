<template>
  <grid class="album-matrices" :list="datas" v-bind="$attrs">
    <template v-slot:default="slotProps">
      <album-cover
        class="album-cover"
        :album="slotProps.item"
        :adapter="Object.assign(def_adapter, adapter)"
        v-bind="$attrs"
      />
    </template>
  </grid>
</template>

<script>
  import Grid from "@/components/layout/Grid";
  import AlbumCover from "@/components/content/covers/AlbumCover";
  export default {
    name: "AlbumMatrices",
    components: {AlbumCover, Grid},
    props: {
      datas:    { type: Array,    default: () => [] },
      adapter:  { type: Object,   default: () => {} }
    },

    data() {
      return {
        def_adapter: {
          coverUrl: (album) => album['blurPicUrl'] + '?param=200y200',
          name:     (album) => album['name'],
          id:       (album) => album['id'],
          publishTime: (album) => album['publishTime'],
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
    }
  }
</script>

<style scoped>

</style>
