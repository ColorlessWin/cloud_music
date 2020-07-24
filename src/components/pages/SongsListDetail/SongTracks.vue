<template>
  <div v-if="$Check(datas)" class="song-track">
    <el-row class="titles" type="flex">
      <el-col class="index" :span="2">序号</el-col>
      <el-col :span="8">音乐标题</el-col>
      <el-col :span="5">歌手</el-col>
      <el-col :span="7">专辑</el-col>
      <el-col :span="2">时长</el-col>
    </el-row>
    <el-row v-for="(song, index) in datas" :key="index" @dblclick.native="onClick(index, adapter.id(song))">

      <el-col class="index" :span="2">{{ adapter.index(song) }}</el-col>
      <el-col :span="8">{{ adapter.name(song) }}</el-col>
      <el-col :span="5">
        <artists :artists="adapter.artists(song)"/>
      </el-col>
      <el-col :span="7">{{ adapter.album_name(song) }}</el-col>
      <el-col :span="2">{{ adapter.duration(song) | timeLongFormat(true)}}</el-col>
    </el-row>
  </div>
</template>

<script>
  import BusTypes from "@/utils/bus/types";

  import UserName from "@/components/content/label/UserName";
  import Artists from "@/components/content/label/Artists";
  export default {
    name: "SongTracks",
    components: {Artists, UserName},
    props: {
      id:      { type: Number, default: null },
      datas:   { type: Array,  default: () => [] },
      adapter: { type: Object, default: () => {} }
    },

    methods: {
      onClick(index, id) {
        if (this.id)
          this.$bus.$emit(BusTypes.AUDIO_PLAY, { songsId: this.id, index, id })
        else this.$bus.$emit(BusTypes.SINGLE_AUDIO_PLAY, id)
      }
    }
  }
</script>

<style scoped>
  .song-track {
    font-size: 11px;
  }

  .song-track .el-row {
    height: 3.5em;
    border-radius: 4px;
  }

  .song-track .el-col {
    text-overflow: ellipsis;
    line-height: 3.5em;
    height: 3.5em;
    overflow: hidden;
  }

  .song-track .el-row:nth-of-type(odd) {
    background-color: #f5f5f5;
  }

  .index {
    text-align: center;
  }

  .song-track .titles {
    background-color: #e0e0e0 !important;
  }

  .song-track .el-row:hover {
    background-color: #e0e0e0;
  }
</style>
