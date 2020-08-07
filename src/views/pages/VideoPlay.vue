<template>
  <div v-if='$Check(videoInfo)' class="video-container">
    <div class="main">
      <span v-if="type == 'video'" class="el-icon-arrow-left">{{ videoInfo['title'] }}</span>
      <span v-else class="el-icon-arrow-left">{{ videoInfo['name'] }}</span>

      <user-name
        v-if="type == 'video'" class="creator"
        :uid="videoInfo['creator']['userId']">
        by {{ videoInfo['creator']['nickname'] }}
      </user-name>
      <artists
        v-else
        class="creator"
        :artists="videoInfo['artists'].map(value => {
          return {
            id: value['id'],
            name: value['name'],
          }
        })"
      />
      <light-video class="play-view" :poster="videoInfo['coverUrl']" :src='videoUrl'></light-video>
      <comment-area :id='id' :type="type"/>
    </div>
    <div class="aside">
      <l-area class="video-presentation" title="视频介绍" font-size="14px">
        <span class="publish-time">发布时间：{{ videoInfo['publishTime'] | dateTimeFormat('yyyy-MM-dd') }}</span>
        <span v-if="type == 'video'" class="play-time">播放：{{ videoInfo['playTime'] | logogram }}</span>
        <span v-else class="play-time">播放：{{ videoInfo['playCount'] | logogram }}</span>

        <div v-if="type == 'video'" class="description" v-mline-text="videoInfo['description']"></div>
        <div v-else class="description" v-mline-text="videoInfo['desc']"></div>
      </l-area>
      <related-video :id="id"/>
    </div>
  </div>
</template>

<script>
  import UserName from "@/components/content/label/UserName";
  import LightVideo from "@/components/common/video/LightVideo";
  import CommentArea from '@/components/content/complound/CommentArea'
  import RelatedVideo from "@/components/content/complound/pendant/RelatedVideo";
  import LArea from "@/components/common/LArea";
  import {video_detail, get_video_url} from "@/network/request_show";
  import Artists from "@/components/content/label/Artists";
  export default {
    name: "VideoPlay",
    components: {Artists, LArea, LightVideo, UserName, CommentArea, RelatedVideo},
    data() {
      return {
        id: 0,
        type: 'video',
        videoInfo: {},
        videoUrl : ''
      }
    },

    created() {
      this.reset()
      this.refresh()
    },

    methods: {

      reset() {
        this.videoInfo = {}
        this.id = this.$route.query.id
        this.type = this.$route.query.type
      },

      refresh() {
        video_detail(this.type, this.id).then(result => {
          this.videoInfo = result['data']
          let vid = this.type ==='video'? result['data']['vid']: result['data']['id']
          return get_video_url(this.type, vid)
        }).then(result => {
          this.videoUrl = this.type === 'video'
            ? result['urls'][0]['url']
            : result['data']['url']
        })
      }
    },

    watch: {
      $route: function () {
        this.reset()
        this.refresh()
      }
    }
  }
</script>

<style scoped>
  .video-container {
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
    display: flex;
  }

  .video-container .main {
    width: 75%;
  }

  .main .creator {
    margin-left: 10px;
    font-size: 12px;
  }

  .main .play-view {
    margin-top: 5px;
  }

  .video-container .aside {
    padding-left: 20px;
    width: 25%;
  }

  .video-presentation {
    min-height: 150px;
  }

  .video-presentation .publish-time,
  .video-presentation .play-time {
    color: #9e9e9e;
  }

  .video-presentation .play-time {
    margin-left: 20px;
  }

  .aside .video-presentation {
    font-size: 11px;
  }

  .video-presentation .description {
    padding-top: 5px;
    color:#212121;
  }
</style>
