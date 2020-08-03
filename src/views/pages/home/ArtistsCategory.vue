<template>
  <div class="artists-category">
    <span>语种:</span> <simple-radio v-model="area" :options="areaLabel" @radio-click="onAreaChanged"/>       <br/>
    <span>分类:</span> <simple-radio v-model="type" :options="typeLabel" @radio-click="onTypeChanged"/>       <br/>
    <span>筛选:</span> <simple-radio v-model="initial" :options="initialLabel" @radio-click="onInitChanged"/> <br/>

    <l-area :header="true" font-size="14px" title="歌手"/>

    <artist-matrices class="artists" :datas="artists" :adapter="adapter" v-loading="loading"/>

  </div>
</template>

<script>
  import { call } from "@/utils/utils";
  import {artist_cate_list} from "@/network/request_show";
  import SimpleRadio from "@/components/common/SimpleRadio";
  import LArea from "@/components/common/LArea";
  import ArtistMatrices from "@/components/content/matrices/ArtistMatrices";

  export default {
    name: "ArtistsCategory",
    components: {ArtistMatrices, LArea, SimpleRadio},
    data() {
      return {
        max_limit: 50,
        artists: [],
        from: {
          area: '-1',
          type: '-1',
          initial:'-1',
        },
        loading: false,
        area: '全部',
        type: '全部',
        initial:'热门',
        areaLabel: [ { '全部': '-1' }, { '华语': '7' }, { '欧美': '96' },
                     { '韩国': '16' }, { '日本': '8' }, { '其它': '0' } ],
        typeLabel: [ { '全部': '-1' }, { '男歌手': '1' }, { '女歌手': '2' },
                     { '乐队': '3' }],
        initialLabel: [ { '热门': '-1' },
          ...call(()=> {
            let map = []
            let str_code = String.fromCharCode
            for (let i = 0; i < 26; i++) {
              map.push({ [str_code(65 + i)]: str_code(97 + i)})
            } return map
        }), { '#': '0' }],

        adapter: {
          picUrl    : (artist) => artist['img1v1Url'] + '?param=150y150',
          name      : (artist) => artist['name'],
          id        : (artist) => artist['id'],
          musicSize : (artist) => artist['musicSize'],
          albumCount: (artist) => artist['albumSize'],
        }
      }
    },

    created() {
      this.reload()
    },

    methods: {
      onAreaChanged(option) {
        this.from.area = option.value
        this.reload()
      },

      onTypeChanged(option) {
        this.from.type = option.value
        this.reload()
      },

      onInitChanged(option) {
        this.from.initial = option.value
        this.reload()
      },

      reload() {
        let from = this.from
        this.loading = true
        artist_cate_list(from.area, from.type, from.initial, 0, this.max_limit)
          .then(result => {
            this.artists = result['artists']
            this.loading = false
        })
      }
    },

    computed: {
      querystring() {
        return Object.values(this.from).reduce((pre, cur) => `${pre},${cur}`)
      }
    },
  }
</script>

<style scoped>
  .artists-category span {
    font-size: 10px;
  }

  .artists {
    margin-top: 15px;
  }
</style>
