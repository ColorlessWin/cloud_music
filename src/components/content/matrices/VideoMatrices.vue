<template>
  <grid class="video-matrices" :list="datas" v-bind="$attrs">
    <template v-slot:default="slotProps">
      <video-cover class="video-cover" :video="slotProps.item" :adapter="adapter"/>
    </template>
  </grid>
</template>

<script>
  import Grid from "@/components/layout/Grid";
  import VideoCover from "@/components/content/covers/VideoCover";
  export default {
    name: "VideoMatrices",
    components: {VideoCover, Grid},
    props: {
      datas:    { type: Array,    default: () => [] },
      adapter:  { type: Object,   default: () => {} }
    },
  }
</script>

<style scoped>
  .video-matrices {
    width: 870px;
    margin: 0 auto;
  }
</style>
