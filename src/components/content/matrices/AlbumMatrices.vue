<template>
  <grid class="album-matrices" :list="datas" v-bind="$attrs">
    <template v-slot:default="slotProps">
      <album-cover class="album-cover" :album="slotProps.item" :adapter="adapter"/>
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
  }
</script>

<style scoped>

</style>
