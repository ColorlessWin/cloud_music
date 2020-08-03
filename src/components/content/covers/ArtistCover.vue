<template>
  <cover-template height="190px" width="155px"
                  cover-height="155px"
                  @click.native="$router.push(`/artist/${adapter.id(artist)}`)">
    <img slot="cover" :src="adapter.picUrl(artist)" alt="">
    <div class="primary" slot="primary">
      <div class="title">{{ adapter.name(artist) }}</div>
    </div>
    <div class="secondary" slot="secondary">
      <span>歌曲数量:</span>
      <span class="playTime"> {{ adapter.musicSize(artist) }} </span> <br/>
      <span>专辑数量:</span>
      <span class="playTime"> {{ adapter.albumCount(artist) }} </span>
    </div>
  </cover-template>
</template>

<script>
  import CoverTemplate from "@/components/content/covers/CoverTemplate";
  export default {
    name: "ArtistCover",
    components: {CoverTemplate},
    props: {
      artist:   { type: Object,   default: ()=> {} },
      adapter:  { type: Object,   default: ()=> {} }
    }
  }
</script>

<style scoped>
  .primary {
    font-size: 12px;
  }

  .secondary {
    font-size: 10px;
  }
</style>
