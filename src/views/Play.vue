<template>
  <div v-if="$Check(song)" class="play" :class="{ 'show': show }">
    <img class="but-back" src="~@/assets/img/back.svg" @click="close">
    <div class="content">
      <blur-background height="400px" :bg="song['al']['picUrl']">
        <div class="primary">

          <div class="left">
            <discplayer class="discplayer"
                        :cover="song['al']['picUrl']"
                        :playing="$store.state.player.playing"/>
          </div>

          <div class="right">
            <song-base-info :song="song"/>
            <lyric class="lyric" :id="id"/>
          </div>

        </div>

      </blur-background>
    </div>
  </div>
</template>

<script>
  import {song_detail} from "@/network/request_show";

  import BlurBackground from "@/components/common/BlurBackground";
  import Discplayer from "@/components/play/Discplayer";
  import SongBaseInfo from "@/components/play/SongBaseInfo";
  import Lyric from "@/components/play/Lyric";
  import BusTypes from "@/utils/bus/types";
  export default {
    name: "Play",
    components: {Lyric, SongBaseInfo, Discplayer, BlurBackground},
    data() {
      return {
        id: 0,
        song: {},
        show: false
      }
    },

    created() {
      this.$bus.$on(BusTypes.AUDIO_CHANGE, (id)=> {
        song_detail(id).then(res=> {
          this.song = res['songs'][0]
          this.id = id
        })
      })

      this.$bus.$on(BusTypes.OPEN_PLAYING_PLANE, ()=> {
        this.open()
      })

      this.$bus.$on(BusTypes.CLOSE_PLAYING_PLANE, ()=> {
        this.close()
      })
    },

    methods: {
      open() { this.show = true },
      close() { this.show = false }
    }
  }
</script>

<style scoped>
  .play {
    position: absolute;
    width: 100%;
    height: 100%;

    background-color: white;
    overflow: hidden;
    z-index: 100;

    visibility: hidden;
    transition: all 0.5s;
    transform: translate(-100%, 0px);
  }

  .play.show {
    visibility: visible;
    transform: translate(0, 0) !important;
  }

  .content {
    width: 1000px;
    margin: 0 auto;
  }

  .left, .right {
    box-sizing: border-box;
    flex-grow: 1;
    width: 50%;
  }

  .discplayer {
    float: right;
  }

  .right {
    padding-top: 50px;
    padding-left: 20px;
  }

  .left {
    padding-right: 90px;
  }

  .lyric {
    margin-top: 20px;
  }

  .primary {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    margin: 0 auto;
  }

  .but-back {
    position: absolute;
    left: 30px;
    top: 20px;
    height: 30px;
    width: 30px;

    cursor: pointer;
  }
</style>
