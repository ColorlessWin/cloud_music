<template>
  <detail-show :detail="detail"/>
</template>

<script>
  import DetailShow from "@/components/pages/SongsListDetail/DetailShow";
  import {song_list_detail} from "@/network/request_show";
  export default {
    name: "PlayListDetail",
    components: { DetailShow },
    data() {
      return {
        detail: null
      }
    },

    created() {
      this.loadData()
    },

    methods: {
      loadData() {
        console.log('test')
        song_list_detail(this.$route.params.id).then(result => {
          this.detail = result.playlist
        })
      }
    },

    watch: {
      '$route' (to, from) {
        if(to.params.id !== from.params.id){
          this.loadData()
        }
      }
    },
  }
</script>

<style scoped>

</style>
