<template>
  <div class="fold" :class="{ 'unfold': unfold }">
    <div class="content" v-mline-text="text"></div>
    <span v-if="overflow"
          :class="{ 'reverse': unfold }"
          class="collapse el-icon-arrow-down"
          @click="unfold = !unfold"></span>
  </div>
</template>

<script>
export default {
  name: "TextFold",
  props: {
    text: { type: String, default: '' }
  },
  data() {
    return {
      overflow: false,
      content: null,
      unfold: false,
      boxHeight: 0,
    }
  },

  mounted() {
    this.boxHeight = this.$el.clientHeight
  },

  methods: {
    update() {
      this.overflow = this.content.clientHeight > this.boxHeight  
    }
  },

  updated() {
    this.$nextTick(function () {
      this.content = this.$el.querySelector('.content')
      this.update()
    })
  },
}
</script>

<style scoped>
  .fold {
    position: relative;
    height: 3.9em;
    padding-right: 20px;
    border-radius: 5px;
    overflow: hidden;
  }

  .collapse {
    position: absolute;
    top: 3px;
    right: 5px;

    font-weight: bold;
    cursor: pointer;
  }

  .collapse {
    transition: all 0.4s;
  }

  .unfold {
    height: auto;
  }

  .reverse {
    transform: rotate(-180deg);
  }

</style>
