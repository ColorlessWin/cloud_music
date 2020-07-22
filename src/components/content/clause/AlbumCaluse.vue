<template>
  <div class="album-caluse">
    <div class="left">
      <div class="cover">
        <img :src="adapter.cover(album)" alt="">
      </div>
      <span class="name">{{ adapter.name(album) }}</span>
    </div>
    <div class="right">
      <artist :id="adapter.artist(album)['id']"
              :name="adapter.artist(album)['name']"
              :alia="adapter.artist(album)['alia']"/>
    </div>
  </div>
</template>

<script>
  import Artist from "@/components/content/label/Artist";
  export default {
    name: "AlbumCaluse",
    components: {Artist},
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
    font-weight: bold;
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
    margin-left: 10px;
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
