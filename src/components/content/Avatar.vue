<template>
  <img :style="{ width: size, height: size }" :src="avatarUrl" alt="">
</template>

<script>
  export default {
    name: "Avatar",
    props: {
      avatarUrl: { type: String,  default: ''     },
      uid:       { type: Number,  default: -1     },
      size:      { type: String,  default: '50px' }
    }
  }
</script>

<style scoped>
  img {
    border-radius: 50%;
  }
</style>
