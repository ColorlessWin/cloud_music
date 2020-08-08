<template>
  <ul class="detailed-song-caluse" @dblclick="onClick(adapter.index(song) - 1, adapter.id(song))">
    <li class="index">{{ adapter.index(song) }}</li>
    <li class="cover" @click="onClick(adapter.index(song) - 1, adapter.id(song))">
      <img :src="adapter.coverUrl(song)" >
      <span class="icon el-icon-video-play"></span>
    </li>
    <li >
      <span class="name">{{ adapter.name(song) }}</span>
      <span v-if="adapter.alia(song)">（{{ adapter.alia(song) }}）</span>
    </li>
    <li class="name">
      <artists :artists="adapter.artists(song)"/>
    </li>
    <li>
      <album :name="adapter.album_name(song)" :id="adapter.album_id(song)"/>
    </li>
    <li>{{ adapter.duration(song) | timeLongFormat(true) }}</li>
  </ul>
</template>

<script>
  import Artists from "@/components/content/label/Artists";
  import Album from "@/components/content/label/Album";
  export default {
    name: "DetailedSongCaluse",
    components: {Album, Artists},
    props: {
      song :    { type: Object,   default: ()=> {} },
      adapter:  { type: Object,   default: ()=> {} }
    },

    methods: {
      onClick(index, id) {
        this.$emit('play', {index, id})
      }
    }
  }
</script>

<style scoped>
  .detailed-song-caluse {
    display: flex;
    list-style: none;
    height: 45px;
    font-size: 11px;
    color: #666666;
    padding: 0;
  }

  .detailed-song-caluse li {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
  }

  .cover {
    position: relative;
    cursor: pointer;
  }

  .cover img {
    height: 40px;
    width: 40px;
  }

  .cover .icon {
    position: absolute;
    left: 7px;
    top: 11px;
    font-size: 25px;
    opacity: 0.8;
    color: white;
  }

  .name {
    color: black;
  }

  .detailed-song-caluse li:nth-child(1) {
    width: 5%;
    justify-content: center;
  }

  .detailed-song-caluse li:nth-child(2) {
    width: 6%;
    justify-content: left;
  }

  .detailed-song-caluse li:nth-child(3) {
    width: 30%;
  }

  .detailed-song-caluse li:nth-child(4) {
    width: 30%;
  }

  .detailed-song-caluse li:nth-child(5) {
    width: 25%;
  }

  .detailed-song-caluse li:nth-child(6) {
    width: 4%;
  }
</style>
