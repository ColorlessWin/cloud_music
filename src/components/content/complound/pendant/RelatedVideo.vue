<template>
  <l-area title="相关视频" font-size="14px">
    <big-video-track :datas="datas" :adapter="adapter"/>
  </l-area>
</template>

<script>
  import BigVideoTrack from "@/components/content/tracks/BigVideoTrack";
  import LArea from "@/components/common/LArea";
  import {related_allvideo} from "@/network/request_show";
  export default {
    name: "RelatedVideo",
    props: {
      id: { type: [Number, String],  default: 0 }
    },
    data() {
      return {
        datas: [],
        adapter: {
          coverUrl: (video) => video['coverUrl'] + '?param=140y75',
          title:    (video) => video['title'],
          duration: (video) => video['durationms'],
          creatorId:(video) => video['creator'][0]['userId'],
          creatorName: (video) => video['creator'][0]['userName'],
          playTime: (video) => video['playTime'],
          vid:      (video) => video['vid'],
          type:     (video) => video['type'] === 0? 'mv': 'video',
        }
      }
    },
    components: {LArea, BigVideoTrack },
    created() {
      this.refresh()
    },

    methods: {
      refresh() {
        related_allvideo(this.id).then(result => {
          this.datas = result['data']
        })
      }
    },

    watch: {
      id: function () {
        this.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
