<template>
  <grid class="video-matrices" :list="datas" v-bind="$attrs">
    <template v-slot:default="slotProps">
      <video-cover
        class="video-cover"
        :video="slotProps.item"
        :adapter="Object.assign(def_adapter, adapter)"
      />
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
    data() {
      return {
        def_adapter: {
          coverUrl: (video) => video['coverUrl'] + '?param=200y110',
          title:    (video) => video['title'],
          type:     (video) => video['type'] === 0? 'mv': 'video',
          author:   (video) => {
            return {
              name: video['creator'][0]['userName'],
              id  : video['creator'][0]['userId']
            }
          },
          duration: (video) => video['durationms'],
          id:       (video) => video['vid'],
          play:     (video) => video['playTime']
        }
      }
    }
  }
</script>

<style scoped>
  .video-matrices {
    width: 870px;
    margin: 0 auto;
  }
</style>
