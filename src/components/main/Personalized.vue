<template>
  <div class="personalized">
    <l-area title="推荐歌单" more="todo">
      <div class="content">
        <songs-cover class="cover" v-for="(item, index) in result" :songs="item" :key="index"/>
      </div>
    </l-area>
  </div>
</template>

<script>
  import { personalized } from "@/network/request_show";

  import SongsCover from "@/components/content/covers/SongsCover";
  import LArea from "@/components/common/LArea";
  export default {
    name: "Personalized",
    components: {LArea, SongsCover},
    props: {
      limit: { type: Number,   default: 5 }
    },
    data() {
      return {
        result: {},
      }
    },

    created() {
      personalized(this.limit).then(result => {
        this.result = result.result
      })
    }
  }
</script>

<style scoped>
  .personalized .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .cover:nth-child(n+6) {
    margin-top: 35px;
  }
</style>
