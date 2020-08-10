<template>
  <div class="all-playlists">
    <div class="hot-tags">
      <span>热门标签：</span>
      <span v-for="(tag, index) in tags" class="tags">
        <span class="tag" @click="onTagChange(tag['name'])">{{ tag['name'] }}</span>
        <span v-if="index !== tags.length - 1" class="split">|</span>
      </span>
    </div>

    <rendering
      :component="require('@/components/content/matrices/NormalSongsMatrices').default"
      :filling="filling"
      :col="5"
      :unique="currentTag"
      :total="total"
      :limit="50"
    />
  </div>
</template>

<script>
  import {playlist_category, top_playlist} from "@/network/request_show";
  import Rendering from "@/components/layout/Rendering";

  export default {
    name: "PlaylistCategory",
    components: {Rendering},
    data() {
      return {
        tags: null,
        total: 0,
        currentTag: '华语',
        playlists: [],
      }
    },
    created() {
      playlist_category().then(res => {
        this.tags = res['tags']
      })
    },

    methods: {
      onTagChange(tag) {
        this.currentTag = tag
      },

      filling(offset, limit) {
        return new Promise(resolve => {
          top_playlist(this.currentTag, offset, limit).then(res => {
            this.total = res['total']
            resolve(res['playlists'])
          })
        })
      }
    }
  }
</script>

<style scoped>
  .hot-tags {
    font-size: 11px;
    margin-bottom: 20px;
  }

  .hot-tags .tag {
    cursor: pointer;
  }

  .hot-tags .split {
    display: inline-block;
    padding: 0 10px;
  }

</style>
