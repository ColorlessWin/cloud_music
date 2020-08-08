<template>
  <div class="a-cover" @click="$router.push(`/album/${adapter.id(album)}`)">
    <album-cover-style height="120px" :img="adapter.coverUrl(album)"/>
    <div class="name">{{ adapter.name(album) }}</div>
    <div
      v-if="!showCreator"
      class="publish-time">
      {{ adapter.publishTime(album) | dateTimeFormat('yyyy-MM-dd') }}
    </div>
    <div v-else>
      <artists class="artists" :artists="adapter.artists(album)"/>
    </div>
  </div>
</template>

<script>
  import AlbumCoverStyle from "@/components/content/covers/AlbumCoverStyle";
  import Artists from "@/components/content/label/Artists";
  export default {
    name: "AlbumCover",
    components: {Artists, AlbumCoverStyle},
    props: {
      album:   { type: Object,   default: ()=> {} },
      adapter: { type: Object,   default: ()=> {} },
      showCreator: { type: Boolean, default: false }
    }
  }
</script>

<style scoped>
  .a-cover {
    width: 140px;
    font-size: 11px;
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

  .publish-time, .artists {
    color: #666666;
  }

  .cover {
    cursor: pointer;
  }
</style>
