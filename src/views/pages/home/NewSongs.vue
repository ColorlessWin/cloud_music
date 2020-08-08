<template>
  <div class="new-songs">
    <div class="header">
      <el-radio-group v-model="selected" size="mini" @change="onChange">
        <el-radio-button label="新歌速递"></el-radio-button>
        <el-radio-button label="新碟上架"></el-radio-button>
      </el-radio-group>
    </div>
    <el-tabs v-model="typeSelected" class="align-left small" @tab-click="onTypeChange">
      <el-tab-pane label="全部" name="ALL-0"></el-tab-pane>
      <el-tab-pane :disabled="isAlbum" label="华语" name="ZH-7"></el-tab-pane>
      <el-tab-pane :disabled="isAlbum" label="欧美" name="EA-96"></el-tab-pane>
      <el-tab-pane :disabled="isAlbum" label="韩国" name="KR-16"></el-tab-pane>
      <el-tab-pane :disabled="isAlbum" label="日本" name="JP-8"></el-tab-pane>
    </el-tabs>

    <component :is="component" :type="type" :area="area"/>

  </div>
</template>

<script>
  import NewSongsGlance from "@/components/content/complound/NewSongsGlance";
  import NewAlbumsGlance from "@/components/content/complound/NewAlbumsGlance";
  export default {
    name: "NewSongs",
    components: {NewSongsGlance},
    data() {
      return {
        isAlbum: false,
        component: NewSongsGlance,
        area: 'ALL',
        type: '0',
        typeSelected: 'ALL-0',
        selected: '新歌速递'
      }
    },

    methods: {
      onTypeChange(tab) {
        let res = tab.name.split('-')
        this.area = res[0]
        this.type = res[1]
      },

      onChange(label) {
        this.typeSelected = 'ALL-0'
        if (label === '新歌速递') {
          this.isAlbum = false
          this.component = NewSongsGlance
        }else if (label === '新碟上架') {
          this.isAlbum = true
          this.component = NewAlbumsGlance
        }
      }
    }
  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
</style>
