<template>
  <list class="artist-list" :list="datas">
    <template  v-slot:default="slotProps">
      <artist-caluse class="artist-cover" :artist="slotProps.item" :adapter="adapter"/>
    </template>
  </list>
</template>

<script>
  import List from "@/components/layout/List";
  import ArtistCaluse from "@/components/content/clause/ArtistCaluse";
  export default {
    name: "ArtistTrack",
    components: {ArtistCaluse, List },
    props: {
      // artist:   { type: Object,   default: () => {} },
      datas:    { type: Array,      default: () => [] },
      adapter:  { type: Object,   default: () => {} }
    },

    mounted() {

    }
  }
</script>

<style scoped>
  .artist-list .artist-cover:nth-of-type(odd) {
    background-color: #f5f5f5;
  }

  .artist-list .artist-cover:hover {
    background-color: #eeeeee;
  }
</style>
