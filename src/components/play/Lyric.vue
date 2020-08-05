<template>
  <div class="lyric">
    <div :style="{ transform: offset }" class="wrapper light-scroll">
      <div v-for="(lyric, index) in Object.values(lyric_map)"
           class="lyric-caluse"
          :class="{ active: index == yindex }">
        <div>{{ lyric['lyric'] }} </div>
        <div v-if="transformLyric">{{ lyric['tlyric'] }} </div>
      </div>
    </div>
    <icon class="icon-fanyi"
          :activated="transformLyric"
          :normal="require('@/assets/img/fanyi.svg')"
          :active="require('@/assets/img/fanyi_full.svg')"
          @click="onTLyric"/>
  </div>
</template>

<script>
  import {lyric} from "@/network/request_show";
  import {lyricParse} from "@/utils/utils";

  import Icon from "@/components/common/Icon";

  export default {
    name: "Lyric",
    components: { Icon },
    props: {
      id:  { type: Number,  default: 0 },
    },

    data() {
      return {
        lyric_map: {},
        transformLyric: true,
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

          if (res['needDesc']) {
            this.lyric_map = { 0: { lyric: '纯音乐, 请欣赏。' }}
            return
          }

          let lyric = lyricParse(res['lrc']['lyric'])
          let tlyric = lyricParse(res['tlyric']? res['tlyric']['lyric']: null)

          let lyric_map = {}
          Object.keys(lyric).forEach((value) => {
            lyric_map[value] = {
              lyric : lyric[value],
              tlyric: tlyric[value] ? tlyric[value] : ''
            }
          })
          this.lyric_map = lyric_map
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

      onTLyric() {
        this.transformLyric = ! this.transformLyric
        this.$nextTick(() => {
          this.moveTo(this.current_index())
        })
      },

      moveTo(index) {
        let wrapper = this.$el.querySelector('.wrapper')
        let target =  Array.from(wrapper.childNodes)[index]
        wrapper.style.transition = 'all 0s'
        this.offset = `translate(0px, ${-(target.offsetTop - 110)}px)`
      },

      move(index) {
        let wrapper = this.$el.querySelector('.wrapper')
        let target =  Array.from(wrapper.childNodes)[index]
        wrapper.style.transition = 'all 0.8s'
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
    position: absolute;
    height: 300px;
    width: 270px;
    overflow: hidden;
  }

  .lyric-caluse {
    font-size: 12px;
    padding: 0.5em 20px 0.5em 0;
    border-radius: 6px;

    transition: text-indent 0.6s;
  }

  .lyric-caluse.active {
    color: white;
    background-color: rgba(0, 0, 0, .2);
    text-indent: 8px;
  }

  .icon-fanyi {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
