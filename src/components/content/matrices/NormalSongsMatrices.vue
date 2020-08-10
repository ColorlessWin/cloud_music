<template>
  <grid :list="datas" v-bind="$attrs">
    <template v-slot:default="slotProps">
      <normal-songs-cover
        :songs="slotProps.item"
        :adapter="Object.assign(def_adapter, adapter)"
        v-bind="$attrs"
      />
    </template>
  </grid>
</template>

<script>
  import Grid from "@/components/layout/Grid";
  import NormalSongsCover from "@/components/content/covers/NormalSongsCover";
  export default {
    name: "NormalSongsMatrices",
    components: {NormalSongsCover, Grid},
    props: {
      datas:    { type: Array,    default: () => [] },
      adapter:  { type: Object,   default: () => {} }
    },

    data() {
      return {
        def_adapter: {
          coverUrl: (songs) => songs['coverImgUrl'],
          title:    (songs) => songs['name'],
          playTime: (songs) => songs['playCount'],
          id:       (songs) => songs['id'],
          author:   (songs) => {
            return {
              id: songs['creator']['userId'],
              name: songs['creator']['nickname']
            }
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
