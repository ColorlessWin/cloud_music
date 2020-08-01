<template>
  <div class="top-list">
    <div class="aside">
      <div class="list">
        <div v-for="(item, index) in toplist" class="top-item">
          <l-area v-if="index == 0" :header="true" title="云音乐特色榜" font-size="12px"/>
          <l-area v-if="index == 4" :header="true" title="全球媒体榜" font-size="12px"/>
          <div class="item" @click="id = item['id']">
            <img :src="item['coverImgUrl'] + '?param=50y50'"  class="cover">
            <div class="info">
              <div class="title">{{ item['name'] }}</div>
              <div class="update-time">{{ item['updateFrequency'] }}</div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <songs-list-detail class="songs" :small="true" :id="id"/>
  </div>
</template>

<script>
  import {toplist} from "@/network/request_show";
  import LArea from "@/components/common/LArea";
  import SongsListDetail from "@/components/content/complound/SongsListDetail";

  export default {
    name: "TopList",
    components: {SongsListDetail, LArea},
    data() {
      return {
        toplist: [],
        id: 19723756 // 云音乐飙升榜歌单id
      }
    },
    created() {
      toplist().then(result => {
        this.toplist = result['list']
        this.id = this.toplist[0]['id']
      })
    }
  }
</script>

<style scoped>
  .top-list {
    display: flex;
  }

  .aside {
    width: 150px;
    /*border-right: 1px solid #eeeeee;*/
  }

  .songs {
    margin-top: 15px;
    flex-grow: 1;
  }

  .item {
    display: flex;
    font-size: 10px;
    font-weight: bold;
    line-height: 1.9em;
    margin: 10px 0;
    cursor: pointer;
  }

  .item .cover {
    height: 40px;
    width: 40px;

    border-radius: 3px;
  }

  .item .info {
    margin-left: 6px;
  }

  .item .info .update-time {
    color: #9e9e9e;
  }
</style>
