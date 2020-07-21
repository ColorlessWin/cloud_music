<template>
  <div class="album">
    <div class="left">
      <div class="cover">
        <img :src="adapter.cover(album)" alt="">
      </div>
      <span>{{ adapter.name(album) }}</span>
    </div>
    <div class="right">
      <span> {{ adapter.artist(album) }} </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AlbumCaluse",
    props: {
      album:    { type: Object,   default: () => {} },
      adapter:  { type: Object,   default: () => {} }
    },
  }
</script>

<style scoped>

</style>
