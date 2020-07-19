<template>
  <banner :banners="banners" :loading="loading"/>
</template>

<script>
  import Banner from "@/components/content/bannar/Banner";

  import { main_banner } from "@/network/request_show";

  export default {
    name: "MainBanner",
    data() {
      return {
        banners: [],
        loading: true
      }
    },

    components: {Banner},

    beforeCreate() {
      main_banner(0).then(result => {
        if (result.code === 200) {
          this.banners = result.banners
          this.loading = false
          console.log(result)
        }
      })
    }
  }
</script>

<style scoped>

</style>
