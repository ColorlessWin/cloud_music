<template>
  <div class="common-video-cover">
    <div :style="{ width: width, height: height }" class="cover" @click="onClick">
      <img :src="adapter.cover(video)">
      <span class="play-count">{{ adapter.playCount(video) | logogram }}</span>
      <span class="duration">{{ adapter.duration(video) | timeLongFormat(true) }}</span>
    </div>
    <div class="info">
      <div class="title">{{ adapter.title(video) }}</div>
      <div v-show="showCreator" class="creator">
        <user-name
          v-if="adapter.type(video) === 'video'"
          :uid="adapter.creatorId(video)"
        >
        by {{ adapter.creatorName(video) }}
        </user-name>
        <artists v-else :artists="adapter.artists(video)"/>
      </div>
    </div>
  </div>
</template>

<script>
  import UserName from "@/components/content/label/UserName";
  import Artists from "@/components/content/label/Artists";
  import adapter from "@/utils/adapter";
  export default {
    name: "CommonVideoCover",
    components: {Artists, UserName},
    props: {
      video:   { type: Object,  default: ()=> {} },
      adapter: { type: Object,  default: ()=> {} },
      width:   { type: String,  default: 'auto' },
      height:  { type: String,  default: 'auto' },
      showCreator:{ type: Boolean,  default: true }
    },
    methods: {
      onClick() {
        let type = this.adapter.type(this.video)
        let vid = this.adapter.vid(this.video)
        this.$router.push(`/video?type=${type}&id=${vid}`)
      }
    }
  }
</script>

<style scoped>
  .common-video-cover {
    display: inline-block;
    font-size: 10px;
  }

  .cover {
    position: relative;
    cursor: pointer;
  }

  .play-count, .duration {
    color: white;
    padding: 0 3px;
    background-color: rgba(0, 0, 0, .2);
    border-radius: 3px;
  }

  .play-count {
    position: absolute;
    top: 0;
    right: 1px;
  }

  .duration {
    position: absolute;
    bottom: .4em;
    left: 1px;
  }

  .cover, .cover img {
    width: 100%;
    border-radius: 3px;
  }
</style>
