<template>
  <l-area class="mv" title="全部MV">

    <span>地区：</span><simple-radio :options="areaLabel" v-model="area"/> <br>
    <span>类型：</span><simple-radio :options="typeLabel" v-model="type"/> <br>
    <span>排序：</span><simple-radio :options="orderLabel" v-model="order"/> <br>

    <rendering
      class="mvs"
      :component="require('@/components/content/matrices/CommonVideoMatrices').default"
      :adapter="adapter"
      :show-creator="true"
      :total="total"
      :filling="filling"
      :unique="area + type + order"
    />

  </l-area>
</template>

<script>
  import SimpleRadio from "@/components/common/SimpleRadio";
  import Rendering from "@/components/layout/Rendering";
  import {mvs} from "@/network/request_show";
  import LArea from "@/components/common/LArea";
  export default {
    name: "Mv",
    components: {LArea, Rendering, SimpleRadio},

    data() {
      return {
        total: -1,
        area: '全部',
        type: '全部',
        order: '上升最快',
        areaLabel: ['全部', '内地', '港台', '欧美', '日本'],
        typeLabel: ['全部', '官方版', '原声', '现场版', '网易出品'],
        orderLabel:['上升最快', '最热', '最新'],

        adapter: {
          cover:    (video) => video['cover'] + '?param=320y180',
          type:     (video) => 'mv',
          artists:  (video) => {
            return video['artists'].map(value => {
              return {
                id:   value['id'],
                name: value['name'],
                alia: value['alias'].slice(-2)
              }
            })
          }
        }
      }
    },

    methods: {
      filling(offset, limit, first_load) {
        return new Promise(resolve => {
          mvs(this.area, this.type, this.order, offset, limit)
            .then(result => {
              if (first_load) this.total = result['count']
              resolve(result['data'])
            })
        })
      }
    }
  }
</script>

<style scoped>
  .mv span {
    font-size: 11px;
  }

  .mvs {
    margin-top: 15px;
  }
</style>
