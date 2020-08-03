<template>
  <grid class="normal-songs-matrices" :list="datas" col="5">
    <template v-slot:default="slotProps">
      <normal-songs-cover class="normal-songs-cover" :songs="slotProps.item" :adapter="adapter"/>
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
  }
</script>

<style scoped>

</style>
