<template>
  <div class="artist-info-show">
    <div class="left">
      <img :src="artist['img1v1Url'] + '?param=170y170'"/>
    </div>
    <div class="right">
      <div class="name">
        <artist class="artist"
                :disabled="true"
                :name="artist['name']"
                :id="artist['id']"
                :alia="artist['alias']"/>
      </div>
      <br/>
      <span>单曲数：{{ artist['musicSize'] }}</span> <br/>
      <span>专辑数：{{ artist['albumSize'] }}</span> <br/>
      <span>MV数：{{ artist['mvSize'] }} </span>
    </div>
  </div>
</template>

<script>
  import Artist from "@/components/content/label/Artist";
  export default {
    name: "ArtistInfoShow",
    components: {Artist},
    props: {
      artist: { type: Object,  default: ()=> {} }
    }
  }
</script>

<style scoped>
  .artist-info-show {
    display: flex;
  }

  .left img {
    border-radius: 6px;
    height: 170px;
    width: 170px;
  }

  .left {
    padding-left: 25px;
  }

  .right {
    padding-left: 40px;
  }

  .name .artist {
    font-size: 19px;
    margin-bottom: 20px;
    color: #000;
  }

  .right span {
    font-size: 12px;
    color: #666;
  }
</style>
