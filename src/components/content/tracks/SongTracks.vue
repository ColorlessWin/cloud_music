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
      @dblclick.native="onClick(adter.index(song) - 1,
      adter.id(song))"
    >
      <el-col class="index" :span="2">{{ adter.index(song) }}</el-col>
      <el-col :span="8">{{ adter.name(song) }}</el-col>
      <el-col :span="5">
        <artists :artists="adter.artists(song)"/>
      </el-col>
      <el-col :span="7">
        <album :name="adter.album_name(song)" :id="adter.album_id(song)"/>
      </el-col>
      <el-col :span="2">{{ adter.duration(song) | timeLongFormat(true)}}</el-col>
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

    data() {
      return {
        def_adapter: {
          index     :  (song) => song['__index'],
          name      :  (song) => song['name'],
          artists   :  (song) => song['artists'].map((value) => {
            return {
              name: value['name'],
              id: value['id'],
              alia: value['alias']
            }
          }),
          album_name:  (song) => song['album']['name'],
          album_id  :  (song) => song['album']['id'],
          duration  :  (song) => song['duration'],
          id:         (song) => song['id']
        }
      }
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
    },

    computed: {
      adter() {
        return Object.assign(this.def_adapter, this.adapter)
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
