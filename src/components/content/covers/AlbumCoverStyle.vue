<template>
  <div :style="{ height: height }" class="a-cover">
    <img :style="{ height: height, width: height }" :src="img" class="cover">
    <img src="@/assets/img/al_cover_mask.png" class="mask" />
  </div>
</template>

<script>
  export default {
    name: "AlbumCoverStyle",
    props: {
      img:    { type: String,  default: '' },
      height: { type: String,  default: '150px' }
    }
  }
</script>

<style scoped>
  .a-cover {
    position: relative;
    display: inline-block;
  }

  .mask {
    height: 100%;
  }

  .cover {
    position: absolute;
    top: 0;
    left: 0;
  }

</style>
