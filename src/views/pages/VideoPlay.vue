<template>
  <div v-if='$Check(videoInfo)' class="video-container">
    <div class="main">
      <span class="el-icon-arrow-left">{{ videoInfo['title'] }}</span>
      <user-name class="creator" 
                 :uid="videoInfo['creator']['userId']">
        by {{ videoInfo['creator']['nickname'] }}
      </user-name>
      <light-video class="play-view" :poster="videoInfo['coverUrl']" :src='videoUrl'></light-video>
      <comment-area :id='id' type='video'/>
    </div>
    <div class="aside">
      <l-area class="video-presentation" title="视频介绍" font-size="14px">
        <span class="publish-time">发布时间：{{ videoInfo['publishTime'] | dateTimeFormat('yyyy-MM-dd') }}</span>
        <span class="play-time">播放：{{ videoInfo['playTime'] | logogram }}</span>
        <div class="description" v-mline-text="videoInfo['description']"></div>
      </l-area>
      <l-area title="相关推荐" font-size="14px">
        
      </l-area>
    </div>
  </div>
</template>

<script>
  import UserName from "@/components/content/label/UserName";
  import LightVideo from "@/components/common/video/LightVideo";
  import CommentArea from '@/components/content/complound/CommentArea'
  import LArea from "@/components/common/LArea";
  import {video_detail, get_video_url} from "@/network/request_show";
  export default {
    name: "VideoPlay",
    components: {LArea, LightVideo, UserName, CommentArea},
    data() {
      return {
        id: 0,
        videoInfo: {},
        videoUrl : ''
      }
    },

    created() {
      video_detail(this.$route.params.id).then(result => {
        this.videoInfo = result['data']
        this.id = this.videoInfo['vid']
        console.log(result)
        return get_video_url(result['data']['vid'])
      }).then(result => {
        this.videoUrl = result['urls'][0]['url']
      })
    }
  }
</script>

<style scoped>
  .video-container {
    max-width: 1200px;
    min-width: 800px;
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
