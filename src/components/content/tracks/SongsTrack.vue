<template>
  <list class="songs-track" :list="datas">
    <template v-slot:default="slotProps">
      <songs-caluse class="songs-caluse" :songs="slotProps.item" :adapter="adapter"/>
    </template>
  </list>
</template>

<script>
  import List from "@/components/layout/List";
  import SongsCaluse from "@/components/content/clause/SongsCaluse";
  export default {
    name: "SongsTrack",
    components: {SongsCaluse, List},
    props: {
      datas:    { type: Array,    default: () => [] },
      adapter:  { type: Object,   default: () => {} }
    }
  }
</script>

<style scoped>
  .songs-track .songs-caluse:nth-of-type(odd) {
    background-color: #fafafa;
  }

  .songs-track .songs-caluse:hover {
    background-color: #eeeeee;
  }
</style>
