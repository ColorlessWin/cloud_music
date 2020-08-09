<template>
  <div v-if="$Check(datas)" class="song-track">
    <el-row class="titles" type="flex">
      <el-col class="index" :span="2">序号</el-col>
      <el-col :span="8">音乐标题</el-col>
      <el-col :span="5">歌手</el-col>
      <el-col :span="7">专辑</el-col>
      <el-col :span="2">时长</el-col>
    </el-row>
    <el-row v-for="(song, index) in datas" :key="index"
      @dblclick.native="onClick(adapter.index(song) - 1,
      adapter.id(song))"
    >
      <el-col class="index" :span="2">{{ adapter.index(song) }}</el-col>
      <el-col :span="8">{{ adapter.name(song) }}</el-col>
      <el-col :span="5">
        <artists :artists="adapter.artists(song)"/>
      </el-col>
      <el-col :span="7">
        <album :name="adapter.album_name(song)" :id="adapter.album_id(song)"/>
      </el-col>
      <el-col :span="2">{{ adapter.duration(song) | timeLongFormat(true)}}</el-col>
    </el-row>
  </div>
</template>
<script>
  import BusTypes from "@/utils/bus/types";

  import UserName from "@/components/content/label/UserName";
  import Artists from "@/components/content/label/Artists";
  import Album from "@/components/content/label/Album";
  import StoreTypes from "@/store/types";
  export default {
    name: "SongTracks",
    components: {Album, Artists, UserName},
    props: {
      id:      { type: Number, default: null },
      playType:{ type: String, default: 'songs'},
      datas:   { type: Array,  default: () => [] },
      adapter: { type: Object, default: () => {} }
    },

    methods: {
      onClick(index, id) {
        if (this.playType === 'songs') {
          if (this.id) {
            this.$store.dispatch(StoreTypes.AUDIO_CHANGE, {
              songsId: this.id,
              index: index
            })}
        }else if (this.playType === 'next') {
          // TODO
        }else if (this.playType === 'track')  {
          this.$store.commit(StoreTypes.AUDIO_CHANGE, {
            songsId: -1,
            songsTracks: this.datas,
            index: index
          })
        }
        this.$bus.$emit(BusTypes.AUDIO_PLAY, { id })
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
    background-color: #fafafa;
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
