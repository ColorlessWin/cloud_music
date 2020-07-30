<template>
  <list class="big-video-track" :list="datas">
    <template v-slot:default="slotProps">
      <big-video-caluse class="big-video-caluse" :video="slotProps.item" :adapter="adapter"/>
    </template>
  </list>
</template>

<script>
  import List from "@/components/layout/List";
  import BigVideoCaluse from "@/components/content/clause/BigVideoCaluse";
  export default {
    name: "BigVideoTrack",
    components: {BigVideoCaluse, List},
    props: {
      datas:    { type: Array,    default: () => [] },
      adapter:  { type: Object,   default: () => {} }
    }
  }
</script>

<style scoped>

</style>
