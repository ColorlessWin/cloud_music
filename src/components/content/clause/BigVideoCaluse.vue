<template>
  <div class="big-video-caluse">
    <div class="cover" @click="onClick">
      <img :src="adapter.coverUrl(video)" alt="">
      <span class="play-time"> {{ adapter.playTime(video) | logogram }} </span>
    </div>
    <div class="info">
      <div class="title"> {{ adapter.title(video) }} </div>
      <div class="duration"> {{ adapter.duration(video) | timeLongFormat(true) }} </div>
      <user-name class="user-name" :uid="adapter.creatorId(video)">by {{ adapter.creatorName(video) }}</user-name>
    </div>
  </div>
</template>

<script>
  import UserName from "@/components/content/label/UserName";
  export default {
    name: "BigVideoCaluse",
    components: {UserName},
    props: {
      video:  { type: Object,   default: () =>{} },
      adapter:{ type: Object,   default: ()=> {} }
    },

    methods: {
      onClick() {
        let type = this.adapter.type(this.video)
        let id = this.adapter.vid(this.video)
        this.$router.push(`/video?type=${type}&id=${id}`)
      }
    }
  }
</script>

<style scoped>
  .big-video-caluse {
    display: flex;
    align-items: center;
    height: 70px;

    font-size: 11px;
  }

  .cover {
    position: relative;
    cursor: pointer;
  }

  .cover img {
    height: 60px;
    width: 110px;
  }

  .info {
    padding-left: 5px;
  }

  .title {
    height: 2.6em;
    overflow: hidden;
  }

  .info .duration, .info .user-name {
    color: #757575;
  }

  .cover .play-time {
    position: absolute;
    top: 0;
    right: 1px;
    color: white;
    font-size: 10px;
    padding: 0 4px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .user-name {
    display: inline-block;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
  }
</style>
