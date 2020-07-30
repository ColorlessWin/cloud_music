<template>
  <cover-template height="190px" width="155px"
                  cover-height="155px"
                  @click.native="$router.push(`/playlist/${adapter.id(songs)}`)">
    <img slot="cover" :src="adapter.coverUrl(songs)" alt="">
    <div class="primary" slot="primary">
      <div class="title">{{ adapter.title(songs) }}</div>
    </div>
    <div class="secondary" slot="secondary">
      <span>by</span>
      <user-name class="author" :uid="adapter.author(songs)['id']"> {{ adapter.author(songs)['name'] }}</user-name>
      <br/>
      <span class="el-icon-video-play"></span>
      <span class="playTime"> {{ adapter.playTime(songs) | logogram}} </span>
    </div>
  </cover-template>
</template>

<script>
  import CoverTemplate from "@/components/content/covers/CoverTemplate";
  import UserName from "@/components/content/label/UserName";
  export default {
    name: "NormalSongsCover",
    components: {CoverTemplate, UserName},
    props: {
      songs:    { type: Object,   default: ()=> {} },
      adapter:  { type: Object,   default: ()=> {} }
    }
  }
</script>

<style scoped>
  .primary, .secondary {
    font-size: 11px;
  }
</style>
