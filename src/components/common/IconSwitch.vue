<template>
  <img
    class="icon"
    :style="{ width: size, height: size }"
    :src="icons[value]"
    @click="onClick"
  >
</template>

<script>
  export default {
    name: "IconSwitch",
    model: { prop: 'value',  event: 'changed' },
    props: {
      icons: { type: Array },
      size:  { type: String,  default: '30px' },
      value: { type: Number,  default: 0}
    },

    mounted() {
      console.log(this.icons)
    },

    methods: {
      onClick() {
        let change = this.value + 1
        change = change > this.icons.length - 1? 0 : change
        change = change < 0? this.icons.length - 1: change
        this.$emit('changed', change)
      }
    }
  }
</script>

<style scoped>
  .icon {
    cursor: pointer;
  }
</style>
