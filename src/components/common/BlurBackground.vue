<template>
  <div :style="{ width: width, height: height }" class="blur">
    <div class="wrapper">
      <img class="bg" :src="bg" alt="">
    </div>

    <div class="content">
      <slot></slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: "BlurBackground",
    props: {
      bg:     { type: String,   default: '' },
      width:  { type: String,   default: '100%' },
      height: { type: String,   default: '100%' }
    }
  }
</script>

<style scoped>
  .blur {
    position: relative;
    padding: 15px 0;
  }

  .wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;

    background-color: white;
    filter: blur(80px);
  }

  .bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 70%;
    height: 40%;
  }

  .content {
    position: absolute;
    width: 100%;
  }

</style>
