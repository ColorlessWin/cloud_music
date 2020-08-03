<template>
  <div class="a-cover" @click="$router.push(`/album/${adapter.id(album)}`)">
    <album-cover-style height="120px" :img="adapter.coverUrl(album)"/>
    <div class="name">{{ adapter.name(album) }}</div>
    <div class="publish-time">{{ adapter.publishTime(album) | dateTimeFormat('yyyy-MM-dd') }}</div>
  </div>
</template>

<script>
  import AlbumCoverStyle from "@/components/content/covers/AlbumCoverStyle";
  export default {
    name: "AlbumCover",
    components: {AlbumCoverStyle},
    props: {
      album:   { type: Object,   default: ()=> {} },
      adapter: { type: Object,   default: ()=> {} }
    }
  }
</script>

<style scoped>
  .a-cover {
    width: 140px;
  }

  .name {
    width: 120px;
    letter-spacing: 0;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .name, .publish-time {
    font-size: 11px;
  }

  .publish-time {
    color: #666666;
  }

  .cover {
    cursor: pointer;
  }
</style>
