<template>
  <div class="discplayer">
    <div class="disc" :class="{ 'playing': playing }">
      <img class="cover" :src="cover" alt="">
    </div>
    <img class="needle" :class="{ 'playing': playing }" src="~assets/img/needle.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "Discplayer",
    props: {
      playing:  { type: Boolean,   default: false },
      cover:    { type: String, default: require('@/assets/test.jpg') }
    }
  }
</script>

<style scoped>
  .discplayer {
    position: relative;
    width: 260px;
    height: 350px;
  }

  .needle {
    position: absolute;
    left: 115px;;
    top: -12px;
    height: 130px;

    transition: all 0.5s;
    transform-origin: 15px 12px;
    transform: rotate(-35deg);
  }

  .needle.playing {
    transform: rotate(0deg);
  }

  .disc.playing {
    animation-play-state: running;
  }

  .disc {
    position: absolute;
    top: 65px;
    width: 260px;
    height: 260px;
    filter: brightness(110%);
    background-image: url("~@/assets/img/disc.png");
    background-size: 260px 260px;
    background-repeat: no-repeat;
  }

  .disc {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    border: 1px solid rgba(20, 20, 20, 0.15);

    animation: 'rotate' 50s linear infinite;
    animation-play-state: paused;
  }

  .cover {
    width: 64%;
    height: 64%;
    border-radius: 50%;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
