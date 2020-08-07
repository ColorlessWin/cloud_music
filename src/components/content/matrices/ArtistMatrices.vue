<template>
  <grid class="artist-matrices" :list="datas" v-bind="$attrs">
    <template v-slot:default="slotProps">
      <artist-cover class="artist-cover" :artist="slotProps.item" :adapter="adapter"/>
    </template>
  </grid>
</template>

<script>
  import Grid from "@/components/layout/Grid";
  import ArtistCover from "@/components/content/covers/ArtistCover";
  export default {
    name: "ArtistMatrices",
    components: {ArtistCover, Grid},
    props: {
      datas:    { type: Array,    default: () => [] },
      adapter:  { type: Object,   default: () => {} }
    },
  }
</script>

<style scoped>

</style>
