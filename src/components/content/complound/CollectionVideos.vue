<template>
  <rendering
    :component="require('@/components/content/matrices/CommonVideoMatrices').default"
    :filling="filling"
    :col="5"
    :adapter="adapter"
  />
</template>

<script>
  import Rendering from "@/components/layout/Rendering";
  import {mv_sublist} from "@/network/request_uesr";
  export default {
    name: "CollectionVideos",
    components: {Rendering},

    data() {
      return {
        adapter: {
          vid:  (video) => video['vid'],
          type: (video) => video['type'] === 0? 'mv': 'video',
          title:(video) => video['title'],
          cover:(video) => video['coverUrl'] + '?param=320y180',
          creatorId:   (video) => video['creator'][0]['userId'],
          creatorName: (video) => video['creator'][0]['userName'],
          duration:    (video) => video['durationms'],
          playCount:   (video) => video['playTime'],
          artists:     (video) => video['creator'].map(value => {
            return {
              id: value['userId'],
              name: value['userName'],
            }
          })
        }
      }
    },

    methods: {
      filling() {
        return new Promise(resolve =>  {
          mv_sublist().then(result => {
            resolve(result.data)
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
