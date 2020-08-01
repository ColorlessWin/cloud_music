<template>
  <div v-if="$Check(album)" class="album-info-show">
    <div class="left">
      <album-cover-style height="170px" :img="album['picUrl'] + '?param=250y250'"/>
    </div>
    <div class="right">
      <div class="name"> {{ album['name'] }} </div>
      <span>歌手：</span> <artist class="artist"
                                 :name="album['artist']['name']"
                                 :id="album['artist']['id']"
                                 :alia="album['artist']['alias']"/>
      <br/>
      <span>发行时间：{{ album['publishTime'] | dateTimeFormat('yyyy-MM-dd') }}</span> <br/>
      <span>发行公司：{{ album['company'] }}</span>
    </div>
  </div>
</template>

<script>
  import AlbumCoverStyle from "@/components/content/covers/AlbumCoverStyle";
  import Artist from "@/components/content/label/Artist";
  export default {
    name: "AlbumInfoShow",
    components: {Artist, AlbumCoverStyle},
    props: {
      album: { type: Object,  default: ()=> {} }
    }
  }
</script>

<style scoped>
  .album-info-show {
    display: flex;
  }

  .left {
    padding-left: 25px;
  }

  .right {
    padding-left: 40px;
  }

  .name {
    font-size: 19px;
    margin-bottom: 20px;
  }

  .right .artist {
    color: #293cc2;
  }

  .right span {
    font-size: 12px;
    color: #666;
  }
</style>
