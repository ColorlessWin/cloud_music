<template>
  <el-popover
    trigger="click"
    placement="right"
    width="300"
  >

    <div class="playlist light-scroll">
      <ul>
        <li v-for="(item, index) in $store.state.profile.playlist"
            @click="onClick(item['id'], item['name'])">
          <icon :normal="require('@/assets/img/music.svg')" size="1.8em"/>
          {{ item['name'] }}
        </li>
      </ul>
    </div>

    <icon
      slot="reference"
      :normal="require('@/assets/img/collect.svg')"
      size="28px"
    />
  </el-popover>
</template>

<script>
  import Icon from "@/components/common/Icon";
  import {playlist_option} from "@/network/behavior";
  export default {
    name: "Collect",
    components: {Icon},
    props: {
      id: { type: [String, Number],  required: true }
    },

    methods: {
      onClick(songsId, songsName) {
        playlist_option('add', songsId, this.id).then(result => {
          if (result.code === 200) {
            this.$notify.success({
              title: '添加成功',
              message: `已添加到"${songsName}"`
            })
          } else if (result.code === 502) {
            this.$notify.warning({
              title: '添加失败',
              message: `"${songsName}"中已经存在该歌曲`
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
  .playlist {
    max-height: 500px;
    overflow: auto;

    font-size: 12px;
  }

  .playlist ul {
    list-style: none;
    padding: 0;
  }

  .playlist ul li {
    height: 3.2em;
    line-height: 3.2em;
    cursor: pointer;

    padding-left: 8px;
  }

  .playlist ul li:hover {
    background-color: #eeeeee;
    border-radius: 6px;
  }

</style>
