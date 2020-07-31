<template>
  <div class="video-wrap"
       :style="{ width: width, height: height }"
       @mousemove="onMouseMove">
    <video class="play-view" :src="src" :poster="poster"> <slot></slot> </video>
    <div class="controls" :class="{ 'show': mouseMoving }">
      <slider class="progress"
              v-model="ctime"
              :max="duration"
              :buffered="buffered"
              @change="progressChange"/>
      <div class="left">
        <span class="icon play-contr" @click="onchange">
          <img v-if="!playing" src="./icon/play.svg"> <img v-else src="./icon/stop.svg">
        </span>
        <span class="time-text">
          {{ ctime | timeLongFormat}} / {{ duration | timeLongFormat }}
        </span>
      </div>
      <div class="right">
        <volume :value="volume" @input="volumeChange"/>
        <img class="icon full-screen"
             src="./icon/full-screen.svg"
             @click="onfullScreen">
      </div>
    </div>
    <div v-if="ended" class="play-end" @click="onReplay">
      <img src="./icon/replay.svg" class="replay">
    </div>
  </div>
</template>

<script>
  import Slider from "@/components/common/video/Slider";
  import Volume from "@/components/common/video/Volume";
  export default {
    name: "LightVideo",
    components: {Volume, Slider},
    props: {
      src:    { type: String },
      poster: { type: String },
      width: { type: String,  default: '100%' },
      height:{ type: String,  default: 'auto' }
    },

    data() {
      return {
        playing: false,
        duration: 0,
        ctime: 0,
        buffered: 0,
        volume: 70,
        loading: false,
        ended: false,
        video: null,
        mouseStop: null,
        mouseMoving: false
      }
    },

    created() {
      this.mouseStop = this.debounce(()=> {
        this.mouseMoving = false
      }, 2000)
    },

    mounted() {
      this.video = this.$el.querySelector('.play-view')

      setInterval(()=> {
        this.ctime = this.video.currentTime
        let index = this.video.buffered.length - 1
        if (this.video.buffered.length !== 0)
          this.buffered = this.video.buffered.end(index)
      }, 1000)

      this.video.onloadedmetadata = () => {
        this.duration = this.video.duration
      }

      this.video.onended = ()=> { this.ended = true }
      this.video.onplaying = () => { this.ended = false }
    },

    methods: {

      refresh() {
        this.playing = false
        this.duration = 0
        this.ctime = 0
        this.buffered = 0
        this.loading = false
        this.ended = false
      },

      progressChange(value) {
        this.video.currentTime = value
      },

      volumeChange(value) {
        this.video.volume = value / 100
      },

      onfullScreen() {
        this.video.webkitRequestFullScreen()
      },

      onReplay() {
        this.video.currentTime = 0
        this.video.play()
      },

      onchange() {
        if (this.playing) { this.video.pause(); this.playing = false }
        else { this.video.play(); this.playing = true }
      },

      onMouseMove() {
        this.mouseMoving = true
        this.mouseStop()
      },

      debounce(func, delay, _this) {
        let timer = null;
        return function (...args) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() =>{
            func.apply(_this, args)
          }, delay)
        }
      }
    },

    filters: {
      timeLongFormat: function (value, isMs=false,dft = '00:00') {
        let total = parseInt(value);
        if (!isNaN(total)) {
          if (isMs) {
            total = total/1000;
          }
          let hours = parseInt(total / 3600);
          let minutes = parseInt((total % 3600) / 60);
          let seconds = parseInt((total % 3600) % 60);
          let h = hours > 9 ? hours : '0' + hours;
          let m = minutes > 9 ? minutes : '0' + minutes;
          let s = seconds > 9 ? seconds : '0' + seconds;
          if (hours === 0) return m + ':' + s;
          return h + ':' + m + ':' + s;
        }
        else {
          return dft;
        }
      }
    },

    watch: {
      src: function () {
        this.refresh()
      }
    }
  }
</script>

<style scoped>
  .video-wrap {
    position: relative;
    display: flex;
    align-items: center;
    background-color: black;
  }

  .progress {
    margin-bottom: 3px;
  }

  .play-end {
    position: absolute;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, .4);
  }

  .replay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 50px;
    height: 50px;

    cursor: pointer;
  }

  .play-view {
    width: 100%;
    color: white;
  }

  .controls {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    padding: 15px 15px 0 15px;

    opacity: 0;
    transition: opacity 0.4s;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  .controls.show {
    opacity: 1;
  }

  .controls .left, .controls .right {
    display: flex;
    align-items: center;
  }

  .controls .left {
    float: left;
  }

  .controls .right {
    float: right;
  }

  .left .time-text {
    color: white;
    font-size: 12px;
    margin-left: 10px;
  }

  .play-contr {
    width: 25px;
    height: 25px;
  }

  .play-contr > img {
    width: 100%;
    height: 100%;
  }

  .icon {
    cursor: pointer;
  }

  .right .full-screen {
    width: 18px;
    height: 18px;
    margin-left: 15px;
  }
</style>
