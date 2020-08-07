<template>
  <div class="album-caluse" @click="$router.push(`/album/${adapter.id(album)}`)">
    <div class="left">
      <div class="cover">
        <album-cover-style height="45px" :img="adapter.cover(album)"/>
      </div>
      <span class="name">{{ adapter.name(album) }}</span>
    </div>
    <div class="right">
      <artist
        :id="adapter.artist(album)['id']"
        :name="adapter.artist(album)['name']"
        :alia="adapter.artist(album)['alia']"
      />
    </div>
  </div>
</template>

<script>
  import Artist from "@/components/content/label/Artist";
  import AlbumCoverStyle from "@/components/content/covers/AlbumCoverStyle";
  export default {
    name: "AlbumCaluse",
    components: {AlbumCoverStyle, Artist},
    props: {
      album:    { type: Object,   default: () => {} },
      adapter:  { type: Object,   default: () => {} }
    },
  }
</script>

<style scoped>
  .album-caluse {
    height: 45px;
    line-height: 45px;
    padding: 6px 10px;

    font-size: 11px;
    border-radius: 5px;

    cursor: pointer;
  }

  .left, .right {
    display: inline-block;
  }

  .left {
    width: 50%;
  }

  .album-caluse .cover {
    display: inline-block;
  }

  .album-caluse .name {
    margin-left: 18px;
  }

  .album-caluse .cover, .album-caluse .name {
    vertical-align: middle;
  }

  .album-caluse .cover, .cover img {
    height: 45px;
    width: 45px;
    border-radius: 5px;
  }
</style>
