<template>
  <div class="play-control-bar">
    <div class="control">
      <img src="~assets/img/prev.svg" alt="" class="prev" @click="prev">
      <div class="stop-or-play">
        <img src="~assets/img/play.svg" class="play"></img>
<!--        <img src="~assets/img/stop.svg" class="stop"></img>-->
      </div>
      <img src="~assets/img/next.svg" alt="" class="next" @click="next">
    </div>
    <div class="progress">
      <progress-bar :show-tooltip="false" :duration="duration" v-model="ctime"/>
    </div>
    <div class="volume">
      <volume :show-tooltip="false" v-model="volume"/>
    </div>
    <div class="other">

    </div>
  </div>
</template>

<script>
  import BusTypes from "@/utils/bus/types";
  import { future } from "@/utils/utils";

  import StoreTypes from "@/store/types";
  import ProgressBar from "@/components/common/ProgressBar";
  import Volume from "@/components/common/Volume";
  export default {
    name: "PlayControlBar",
    components: {Volume, ProgressBar},
    data() {
      return {
        ctime: 80,
        duration: 100,

        volume: 60,
      }
    },

    created() {
      this.$root.$el.appendChild(this.$audioer)

      let _this = this
      this.$bus.$on(BusTypes.AUDIO_PLAY, function ({ songsId, index, id }) {
        _this.commit_play(songsId, index)
        _this.play(id)
      })
    },

    methods: {

      stop() {
        this.$audioer.pause()
        this.$store.commit(StoreTypes.AUDIO_STOP)
      },

      play(id) {
        this.$audioer.pause()
        this.$audioer.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
        future(function () {
          this.$audioer.play().catch(err => {
            this.next()
            this.$notify.warning({
              title: '播放失败',
              message: `你暂时无法播放该歌曲，将自动播放下一曲`
            })
          })
        }, 300, this)
        this.$store.commit(StoreTypes.AUDIO_PLAY)
      },

      commit_play(songsId, index) {
        this.$store.dispatch(StoreTypes.AUDIO_CHANGE, { songsId, index })
      },

      prev() {
        let { songsId, current } =  this.$store.state.player
        let index = this.range(current - 1)
        this.commit_play(songsId, index)
        this.play(this.takeout(index))
      },

      next() {
        let { songsId, current } =  this.$store.state.player
        let index = this.range(current + 1)
        this.commit_play(songsId, index)
        this.play(this.takeout(index))
      },

      takeout(index) {
        let playTracks = this.$store.state.player.playTracks
        return playTracks[index]['id']
      },

      range(value) {
        let player =  this.$store.state.player
        value = value > player.playTracks.length - 1 ? 0 : value
        value = value < 0 ? player.playTracks.length - 1 : value
        return value
      }
    }
  }
</script>

<style scoped>
  .play-control-bar {
    height: 100%;
    font-size: 10px;
    display: flex;
    align-items: center;
  }

  .prev, .next, .stop-or-play {
    cursor: pointer;
  }

  .prev:hover, .next:hover, .stop-or-play:hover {
    filter: brightness(90%);
  }

  .prev, .next {
    box-sizing: border-box;
    height: 28px;
    background-color: #409EFF;
    border-radius: 50%;
    padding: 8px;
  }

  .stop-or-play {
    height: 32px;
    width: 32px;
    display: inline-block;
    margin: 0 20px;
  }

  .prev, .next, .stop-or-play {
    vertical-align: middle;
  }

  .stop-or-play > img {
    height: 100%;
  }

  .control {
    text-align: center;
    width: 150px;
  }

  .progress {
    width: 65%;
  }

  .volume {
    width: 10%;
  }
</style>
