<template>
  <div class="songs-cover" @click="$router.push(`/playlist/${songs.id}`)">
    <img :src="songs.picUrl" alt="">
    <div class="visible">
      <div class="detail">
        <div class="name">{{songs.name}}</div>
        <div class="copywriter">{{ songs.copywriter }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SongsCover",
    props: {
      songs: { type: Object,   default: ()=> {} }
    }
  }
</script>

<style scoped>
  .songs-cover {
    position: relative;
    height: 200px;
    width: 160px;

    border-radius: 6px;
    border: 1px solid #eeeeee;
    overflow: hidden;

    cursor: pointer;
  }

  .songs-cover img {
    width: 100%;
    font-size: 0;
  }

  .visible {
    overflow: hidden;
    height: 40px;
    width: 100%;

    margin-top: -5px;
  }

  .copywriter, .name {
    overflow: hidden;
    box-sizing: border-box;
    height: 35px;
    width: 100%;
    padding: 5px 3px;
    font-size: 10px;
    font-weight: bold;
  }

  .songs-cover {
    transition: all 0.3s;
  }

  .detail {
    transition: all 0.3s 0.5s;
  }

  .songs-cover:hover {
    transform: translate(0, -8px);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .songs-cover:hover .detail {
    transform: translate(0, -35px);
  }

</style>
