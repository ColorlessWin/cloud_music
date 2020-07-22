<template>
  <span v-if="(alia != null && alia.length != 0)" class="artist">
      <span>{{ name }}</span>
      <span  class="alia">({{ alia.join(' / ') }})</span>
  </span>
  <span v-else class="artist">{{ name }}</span>
</template>

<script>
  export default {
    name: "Artist",
    props: {
      name: { type: String,  default: null },
      alia: { type: Array,   default: null },
      id  : { type:Number,   default: 0 }
    }
  }
</script>

<style scoped>
  .alia {
    color: #9e9e9e;
  }

  .artist {
    cursor: pointer;
  }
</style>
