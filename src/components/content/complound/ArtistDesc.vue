<template>
  <description :desc="desc"/>
</template>

<script>
  import Description from "@/components/common/Description";
  import {artist_desc} from "@/network/request_show";
  export default {
    name: "ArtistDesc",
    components: {Description},
    props: {
      id: { type: [String, Number] }
    },
    data() {
      return {
        desc: [],
      }
    },

    created() {
      this.refresh()
    },

    methods: {
      refresh() {
        artist_desc(this.id).then(result => {
          this.desc = result['introduction']
        })
      }
    },

    watch: {
      id() {
        this.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
