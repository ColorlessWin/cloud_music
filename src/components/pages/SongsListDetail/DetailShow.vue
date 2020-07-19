<template>
  <div v-if="$check(detail)" class="container clearfix">
    <div class="top clearfix">
      <div class="left">
        <img class="cover eff-shadow" :src="detail.coverImgUrl" alt="">
      </div>
      <div class="center">
        <div class="title">{{detail.name}}</div>
        <div class="user-detail">
          <avatar class="avatar" size="40px" :avatar-url="detail.creator.avatarUrl" :uid="detail.creator.userId"/>
          <user-name font-size="13px" class="user-name">{{detail.creator.nickname}}</user-name>
          <span class="createTime">{{detail.createTime | dateTimeFormat('yyyy-MM-dd') }} 创建</span>
        </div>
        <div class="option">
          <span style="background-color: #2979ff; color: white" class="icon el-icon-video-play"></span>
          <span style="background-color: #ff3d00; color: white" class="icon el-icon-star-off"></span>
          <span style="background-color: #00e676; color: white" class="icon el-icon-link"></span>
        </div>
      </div>
      <div class="info">
        <div class="song-count">歌曲数：{{detail.trackCount | logogram}}</div>
        <div class="play-count">播放：{{detail.playCount | logogram}}</div>
      </div>
    </div>

    <div class="desc">
      <div class="tags">标签：{{detail.tags.join(' / ')}}</div>
      <div class="synopsis">简介：{{detail.description}}</div>
    </div>
  </div>
</template>

<script>
  import { song_list_detail } from "@/network/request_show";
  import Avatar from "@/components/content/Avatar";
  import UserName from "@/components/content/UserName";

  export default {
    name: "DetailShow",
    components: {UserName, Avatar},
    props: {
      detail: { type: Object, default: () => {} }
    },
  }
</script>

<style scoped>
  .container {
    /*display: flex;*/
    position: relative;
    padding: 30px 30px 10px 30px
  }

  .left, .center {
    float: left;
  }

  .left .cover {
    width: 200px;
    border-radius: 10px;
  }

  .center {
    margin-left: 30px;
  }

  .center .title {
    font-size: 20px;
    font-weight: bold;

    margin-top: 15px;
  }

  .user-detail {
    height: 45px;
    display: flex;
    align-items: center;

    margin-top: 20px;
  }

  .user-detail .avatar {
    border: 1px solid #e0e0e0;
  }

  .user-detail .user-name {
    margin-left: 8px;
  }

  .user-detail .createTime {
    margin-left: 25px;
    color: #b0bec5;
  }

  .desc {
    font-size: 12px;
    margin-top: 20px;
  }

  .option {
    margin-top: 25px;
  }

  .option .icon:not(:first-child) {
    margin-left: 15px;
  }

  .option .icon {
    font-size: 18px;
    padding: 10px;
    border-radius: 50%;
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);

    transition: all 0.3s;
    cursor: pointer;
  }


  .info {
    position: absolute;
    top: 50px;
    right: 80px;
    font-size: 11px;
    font-weight: bold;
    color: #bdbdbd;
    width: 90px;
  }
</style>
