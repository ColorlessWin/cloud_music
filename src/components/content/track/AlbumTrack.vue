<template>
  <list :list="albums">
    <template v-slot:default="slotProps">
      <album-caluse :album="slotProps.item" :adapter="adapter"/>
    </template>
  </list>
</template>

<script>
  import List from "@/components/layout/List";
  import AlbumCaluse from "@/components/content/clause/AlbumCaluse";
  export default {
    name: "AlbumTrack",
    components: {AlbumCaluse, List},
    props: {
      album:    { type: Object,   default: () => {} },
      albums:   { type: Array,    default: () => [] },
      adapter:  { type: Object,   default: () => {} }
    },
  }
</script>

<style scoped>

</style>
