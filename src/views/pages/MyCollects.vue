<template>
    <el-tabs>
      <el-tab-pane label="专辑" :lazy="true">

        <l-area title="收藏的专辑">
          <collection-albums/>
        </l-area>

      </el-tab-pane>
      <el-tab-pane label="歌手" :lazy="true">

        <l-area title="收藏的歌手">
          <collection-artists/>
        </l-area>

      </el-tab-pane>
      <el-tab-pane label="视频" :lazy="true">

        <l-area title="收藏的视频">
          <collection-videos/>
        </l-area>

      </el-tab-pane>
    </el-tabs>
</template>

<script>
  import CollectionAlbums from "@/components/content/complound/CollectionAlbums";
  import CollectionArtists from "@/components/content/complound/CollectionArtists";
  import CollectionVideos from "@/components/content/complound/CollectionVideos";
  import LArea from "@/components/common/LArea";
  export default {
    name: "MyCollects",
    components: {LArea, CollectionVideos, CollectionArtists, CollectionAlbums}
  }
</script>

<style scoped>

</style>
