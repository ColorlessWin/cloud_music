<template>
  <div class="lyric">
    <div :style="{ transform: offset }" class="wrapper light-scroll">
      <div v-for="(lyric, index) in Object.values(lyric_map)"
           class="lyric-caluse"
          :class="{ active: index == yindex }"> {{ lyric }} </div>
    </div>
  </div>
</template>

<script>
  import {lyric} from "@/network/request_show";
  import {lyricParse} from "@/utils/utils";

  export default {
    name: "Lyric",
    props: {
      id:  { type: Number,  default: 0 },
    },

    data() {
      return {
        lyric_map: {},
        yindex: 0,
        offset: 'translate(0px, -90px)'
      }
    },

    created() {
      this.reload()

      setInterval(()=> {
        this.refresh()
      }, 1000)
    },

    methods: {
      reload() {
        lyric(this.id).then(res=> {
          this.lyric_map = lyricParse(res['lrc']['lyric'])
        })
      },

      refresh() {
        this.yindex = this.current_index()
        this.move(this.yindex)
      },

      current_index() {
        let i = 0
        Object.keys(this.lyric_map).forEach((value, index) => {
          if (value <= this.$audioer.currentTime) i = index
        })
        return i
      },

      move(index) {
        let wrapper = this.$el.querySelector('.wrapper')
        let target =  Array.from(wrapper.childNodes)[index]
        this.offset = `translate(0px, ${-(target.offsetTop - 110)}px)`
      }
    },

    watch: {
      id: function () {
        this.reload()
      }
    }
  }
</script>

<style scoped>
  .lyric {
    height: 350px;
    overflow: hidden;
  }

  .lyric-caluse {
    font-size: 12px;
    height: 2.4em;
  }

  .lyric .wrapper {
    transition: all 0.8s;
  }

  .lyric-caluse.active {
    color: white;
  }
</style>
