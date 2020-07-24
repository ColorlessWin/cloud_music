<template>
  <div v-if="$Check(song)" class="play-preview">
    <img class="cover" :src="song['al']['picUrl'] + '?param=100y100'" alt="">
    <div class="other">
      <span class="name"> {{ song['name'] }} </span>
      <br/>
      <artists class="artists" :artists="artists"/>
    </div>
  </div>
</template>

<script>
  import BusTypes from "@/utils/bus/types";
  import { song_detail } from "@/network/request_show";
  import Artists from "@/components/content/label/Artists";

  export default {
    name: "PlayPreview",
    components: {Artists},
    data() {
      return {
        song: {},
        artists: []
      }
    },

    created() {
      this.$bus.$on(BusTypes.AUDIO_CHANGE, (id) => {
        song_detail(id).then(result => {
          this.song = result['songs'][0]
          this.artists = this.song ['ar'].map((value) => {
            return {
              name: value['name'],
              id: value['id'],
              alia: value['alias']
            }
          })
        })
      })
    }
  }
</script>

<style scoped>
  .play-preview {
    position: relative;
    padding: 5px;
    height: 40px;

    border-top: 1px solid #e0e0e0;
  }

  .other {
    box-sizing: border-box;
    padding: 0 0 0 50px;
    width: 100%;
    height: 100%;

    font-size: 11px;
    font-weight: bold;
    color: #616161;
  }

  .cover, .other {
    float: left;
  }

  .name, .artists {
    height: 17px;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
  }

  .cover {
    position: absolute;
    top: 4px;
    left: 5px;
    height: 40px;
    width: 40px;
    border: 1px solid #e0e0e0;
  }
</style>
