<template>
  <div class="personal-rec">

轮播图
    <main-banner/>

推荐歌单
    <personalized :limit="10"/>

  </div>
</template>


<script>

  import MainBanner from "@/components/content/bannar/MainBanner";
  import LArea from "@/components/common/LArea";
  import SongsCover from "@/components/content/covers/SongsCover";
  import Personalized from "@/components/main/Personalized";

  export default {
    name: "PersonalRec",
    data() {
      return {
        temp: {}
      }
    },

    components: { Personalized, SongsCover, LArea, MainBanner },
  }
</script>

<style scoped>

</style>
