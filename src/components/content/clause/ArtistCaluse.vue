<template>
  <div class="artist">
    <img :src="adapter.avatarUrl(artist)" alt="" class="avatar">
    <span class="name"> {{ adapter.name(artist) }} </span>
  </div>
</template>

<script>
  export default {
    name: "ArtistCaluse",
    props: {
      artist:   { type: Object,   default: () => {} },
      adapter:  { type: Object,   default: () => {} }
    },
  }
</script>

<style scoped>
  .artist {
    height: 45px;
    line-height: 45px;
    padding: 6px 10px;

    font-size: 12px;
    border-radius: 5px;

    cursor: pointer;
  }

  .artist .name, .artist .avatar {
    vertical-align: middle;
  }

  .artist .name {
    margin-left: 10px;
  }

  .artist .avatar {
    display: inline-block;
    height: 45px;
    width: 45px;
    border-radius: 5px;
  }
</style>
