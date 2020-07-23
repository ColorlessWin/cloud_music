<template>
  <div class="songs-caluse" @click="$router.push(`/playlist/${adapter.id(songs)}`)">
    <div class="left">
      <img :src="adapter.cover(songs)" alt="" class="cover">
      <span class="name">{{ adapter.name(songs) }}</span>
    </div>
    <div class="right">
      <span class="total">{{adapter.total(songs)}}首</span>
<!--      <span class="by">by</span>-->
<!--      <user-name :uid="adapter.creator(songs)['id']">{{ adapter.creator(songs)['name'] }}</user-name>-->
    </div>
  </div>
</template>

<script>
  import UserName from "@/components/content/label/UserName";
  export default {
    name: "SongsCaluse",
    components: {UserName},
    props: {
      songs:    { type: Object,   default: ()=> {} },
      adapter:  { type: Object,   default: ()=> {} }
    }
  }
</script>

<style scoped>
  .songs-caluse {
    height: 45px;
    line-height: 45px;
    padding: 6px 10px;

    font-size: 11px;
    font-weight: bold;
    border-radius: 5px;

    cursor: pointer;
  }

  .left, .right {
    display: inline-block;
    width: 50%;
  }

  .right {
    color: #757575;
  }

  .cover {
    border-radius: 5px;
  }

  .name {
    margin-left: 10px;
  }

  .cover, .name {
    vertical-align: middle;
  }

  .total {
    display: inline-block;
    width: 20%;
  }

</style>
