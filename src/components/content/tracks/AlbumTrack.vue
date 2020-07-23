<template>
  <list class="album-list" :list="datas">
    <template v-slot:default="slotProps">
      <album-caluse class="album-caluse" :album="slotProps.item" :adapter="adapter"/>
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
      datas:    { type: Array,    default: () => [] },
      adapter:  { type: Object,   default: () => {} }
    },
  }
</script>

<style scoped>
  .album-list .album-caluse:nth-of-type(odd) {
    background-color: #f5f5f5;
  }

  .album-list .album-caluse:hover {
    background-color: #eeeeee;
  }
</style>
