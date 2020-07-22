<template>
  <div class="artist">
    <img :src="adapter.avatarUrl(artist)" alt="" class="avatar">
    <span class="name"> {{ adapter.name(artist) }} </span>
    <span  v-if="adapter.alias(artist).length != 0" class="alias">
      ({{ adapter.alias(artist).join(' / ') }})
    </span>
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

    font-size: 11px;
    font-weight: bold;
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

  .artist .alias {
    color: #9e9e9e;
  }
</style>
