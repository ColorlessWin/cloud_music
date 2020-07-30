<template>
  <div class="all-playlists">
    <div class="hot-tags">
      <span>热门标签：</span>
      <span v-for="(tag, index) in tags" class="tags">
        <span class="tag" @click="onTagChange(tag['name'])">{{ tag['name'] }}</span>
        <span v-if="index !== tags.length - 1" class="split">|</span>
      </span>
    </div>

    <normal-songs-matrices class="content"
                           :datas="playlists"
                           :adapter="adapter"
                           v-loading="loading"/>

    <pagination :limit="50"
                v-model="playlists"
                :unique="currentTag"
                :total="total" :filling="filling"
                @loading="loading = true"
                @loaded="loading = false"/>
  </div>
</template>

<script>
  import {playlist_category, top_playlist} from "@/network/request_show";
  import NormalSongsMatrices from "@/components/content/matrices/NormalSongsMatrices";
  import Pagination from "@/components/common/Pagination";

  export default {
    name: "PlaylistCategory",
    components: {NormalSongsMatrices, Pagination},
    data() {
      return {
        tags: null,
        total: 0,
        currentTag: '华语',
        playlists: [],
        loading: false,
        adapter: {
          coverUrl: (songs) => songs['coverImgUrl'],
          title:    (songs) => songs['name'],
          playTime: (songs) => songs['playCount'],
          id:       (songs) => songs['id'],
          author:   (songs) => {
            return {
              id: songs['creator']['userId'],
              name: songs['creator']['nickname']
            }
          }
        }
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

  .content {
    margin-bottom: 15px;
  }
</style>
