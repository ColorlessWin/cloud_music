<template>
  <grid :list="datas" v-bind="$attrs">
    <template v-slot:default="slotProps">
      <common-video-cover
        :video="slotProps.item"
        :adapter="Object.assign(def_adapter, adapter)"
        v-bind="$attrs"
      />
    </template>
  </grid>
</template>

<script>
  import Grid from "@/components/layout/Grid";
  import CommonVideoCover from "@/components/content/covers/CommonVideoCover";
  export default {
    name: "CommonVideoMatrices",
    components: {CommonVideoCover, Grid},
    props: {
      datas:    { type: Array,    default: () => [] },
      adapter:  { type: Object,   default: () => {} }
    },
    data() {
      return {
        def_adapter: {
          cover:    (video) => video['imgurl16v9'] + '?param=320y180',
          type:     (video) => 'mv',
          playCount:(video) => video['playCount'],
          duration: (video) => video['duration'],
          title:    (video) => video['name'],
          vid:      (video) => video['id'],
          artists:  (video) => [{
              id: video['artist']['id'],
              name: video['artist']['name'],
            }]
        }
      }
    }
  }
</script>

<style scoped>

</style>
