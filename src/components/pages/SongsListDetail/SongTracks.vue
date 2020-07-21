<template>
  <div v-if="$Check(songs)" class="song-track">
    <el-row class="titles" type="flex">
      <el-col class="index" :span="2">序号</el-col>
      <el-col :span="8">音乐标题</el-col>
      <el-col :span="5">歌手</el-col>
      <el-col :span="7">专辑</el-col>
      <el-col :span="2">时长</el-col>
    </el-row>
    <el-row v-for="(song, index) in songs" :key="index">
      <el-col class="index" :span="2">{{ song['__index'] }}</el-col>
      <el-col :span="8">{{ song['name'] }}</el-col>
      <el-col :span="5">
        <user-name v-for="(ar, index) in song['ar']" font-size="11px" :uid="ar['id']">
          {{ ar['name'] }}
        </user-name>
      </el-col>
      <el-col :span="7">{{ song['al']['name'] }}</el-col>
      <el-col :span="2">{{ song['dt'] | timeLongFormat(true)}}</el-col>
    </el-row>
  </div>
</template>

<script>
  import UserName from "@/components/content/UserName";
  export default {
    name: "SongTracks",
    components: {UserName},
    props: {
      songs: { type: Array,  default: () => [] }
    },
  }
</script>

<style scoped>
  .song-track {
    font-size: 11px;
    font-weight: bold;
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
