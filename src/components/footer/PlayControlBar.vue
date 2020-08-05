<template>
  <div class="play-control-bar">
    <div class="control">
      <img src="~assets/img/icon-prev.svg" alt="" class="prev" @click="onPrev">
      <span class="s-p play" @click="ControlPlay"
            :class="{ 'stop': $store.state.player.playing }"></span>
      <img src="~assets/img/icon-next.svg" alt="" class="next" @click="onNext">
    </div>
    <div class="progress">
      <progress-bar :show-tooltip="false" :duration="duration" v-model="ctime" @change="ProgressChange"/>
    </div>
    <div class="volume">
      <volume :show-tooltip="false" v-model="volume" @input="VolumeChange"/>
    </div>
    <div class="other">
      <icon-switch
        :icons="[
          require('@/assets/img/order_play.svg'),
          require('@/assets/img/random_play.svg'),
          require('@/assets/img/single_play.svg'),
        ]"
        size="18px"
        v-model="mode"
      />
    </div>
  </div>
</template>

<script>
  import BusTypes from "@/utils/bus/types";
  import { future } from "@/utils/utils";

  import StoreTypes from "@/store/types";
  import ProgressBar from "@/components/common/ProgressBar";
  import Volume from "@/components/common/Volume";
  import IconSwitch from "@/components/common/IconSwitch";
  export default {
    name: "PlayControlBar",
    components: {IconSwitch, Volume, ProgressBar},
    data() {
      return {
        ctime: 0,
        duration: 0,
        mode: 0, // 0 循环列表 1 随机播放 2单曲循环
        volume: 60,
      }
    },

    created() {

      //下面都是初始化工作
      this.$audioer.volume = this.volume / 100

      this.$audioer.addEventListener("ended", () => {
        this.next(true)
      })


      this.$audioer.addEventListener('error', ()=> {
        this.next(true, true)
        future(() => {
          this.$notify.warning({
            title: '播放失败',
            message: `你暂时无法播放该歌曲，将自动播放下一曲`
          })
        }, 300)
      })

      //让进度条跟播放进度同步
      setInterval(() =>{
        this.duration = this.$audioer.duration
        this.ctime = this.$audioer.currentTime
      }, 1000)

      this.$bus.$on(BusTypes.AUDIO_PLAY, ({ id }) => {
        this.play(id)
      })

      this.$bus.$on(BusTypes.SINGLE_AUDIO_PLAY, (id) => {
        this.play(id)
      })
    },

    methods: {

      hasTrack () {
        if (this.$store.getters.TrackLength === 0) {
          this.$notify.warning({
            title: '提示',
            message : '播放列表为空'
          })
          return false
        }
        return true
      },

      onNext() {
        if (this.hasTrack())
          this.next(false)
      },

      onPrev() {
        if (this.hasTrack())
          this.prev()
      },

      ControlPlay() {
        if (this.hasTrack())
          this.$store.state.player.playing ? this.pause() : this.start()
      },

      VolumeChange() {
        this.$audioer.volume = this.volume / 100
      },

      ProgressChange() {
        this.$audioer.currentTime = this.ctime
      },

      pause() {
        this.$audioer.pause()
        this.$store.commit(StoreTypes.AUDIO_STOP)
      },

      start() {
        this.$audioer.play()
        this.$store.commit(StoreTypes.AUDIO_PLAY)
      },

      play(id) {
        this.pause()
        this.$audioer.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
        this.$bus.$emit(BusTypes.AUDIO_CHANGE, id)
        this.$audioer.play()

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

      next(auto = false, jump = false) {
        let { songsId, current } =  this.$store.state.player
        let index = 0
        if (jump) {
          index = index + 1
          if (index > this.$store.getters.TrackLength - 1) {
            this.pause()
            return
          }
        } else {
          //单曲循环模式下手动切歌
          if (this.mode === 2 && !auto) {
            index = this.range(current + 1)
          }else {
            // 列表循环
            if (this.mode === 0) {
              index = this.range(current + 1)
            // 随机播放
            }else if (this.mode === 1) {
              index = Math.floor(Math.random() * this.$store.getters.TrackLength);
              // 单曲循环
            }else if (this.mode === 2) {
              index = current
            }
          }
        }
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

  .control {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .control {
    width: 140px;
    margin: 0 20px;
  }

  .s-p {
    display: inline-block;
    height: 32px;
    width: 32px;
    background-size: 32px, 32px;
  }

  .s-p.play {
    background-image: url("~assets/img/icon-play.svg");
  }

  .s-p.stop {
    background-image: url("~assets/img/icon-stop.svg") !important;
  }

  .prev, .next, .s-p {
    cursor: pointer;
  }

  .prev, .next {
    box-sizing: border-box;
    height: 28px;
    width: 28px;
    background-color: #409EFF;
    border-radius: 50%;
    padding: 8px;
  }

  .prev:hover, .next:hover, .s-p:hover {
    filter: brightness(90%);
  }

  .progress {
    width: 70%;
  }

  .volume {
    width: 11%;
  }
  .other {
    padding-left: 15px;
  }
</style>
