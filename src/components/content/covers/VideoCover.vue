<template>
  <cover-template height="145px" width="200px" cover-height="110px">
    <img slot="cover" :src="adapter.coverUrl(video)" alt="">
    <div class="primary" slot="primary">
      <div class="title">{{ adapter.title(video) }}</div>
    </div>
    <div class="secondary" slot="secondary">
      <span>by</span>
      <user-name class="author" :uid="adapter.author(video)['id']"> {{ adapter.author(video)['name'] }} </user-name>
      <br/>
      <span class="el-icon-video-play"></span>
      <span class="duration"> {{ adapter.duration(video) | timeLongFormat(true) }} </span>
      <span class="el-icon-view"></span>
      <span class="play"> {{ adapter.play(video) | logogram}} </span>
    </div>
  </cover-template>
</template>

<script>
  import CoverTemplate from "@/components/content/covers/CoverTemplate";
  import UserName from "@/components/content/label/UserName";
  export default {
    name: "VideoCover",
    components: {UserName, CoverTemplate},
    props: {
      video:    { type: Object,   default: ()=> {} },
      adapter:  { type: Object,   default: ()=> {} }
    }
  }
</script>

<style scoped>
  .primary, .secondary {
    font-size: 11px;
  }

  .secondary .el-icon-view {
    margin-left: 8px;
  }

  .secondary .author {
    font-weight: bold;
  }
</style>
