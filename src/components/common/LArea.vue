<template>
  <div class="area">
    <div class="header">
      <div style="display: inline-block"
           :style="{ fontSize: fontSize }"
           class="primary">{{title}}</div>
      <span v-if="is_more" class="more">更多<span class="el-icon-arrow-right"></span></span>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { str_empty } from "@/utils/utils";

  export default {
    name: "LArea",
    props: {
      fontSize: { type: String, default: '16px' },
      title: { type: String,   default: '未命名' },
      more:  { type: String,   default: "" }
    },

    computed: {
      is_more() {
        return !str_empty(this.more)
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 40px;
    position: relative;
    border-bottom: 1px solid #eeeeee;
  }

  .primary {
    position: absolute;
    bottom: 5px;
  }

  .content {
    margin-top: 5px;
  }

  .area .more {
    position: absolute;
    right: 3px;
    bottom: 5px;

    color: #9e9e9e;
    font-size: 10px;
    vertical-align: middle;

    cursor: pointer;
  }

  .area .more > span {
    vertical-align: middle;
    font-size: 0.6em;
  }
</style>
