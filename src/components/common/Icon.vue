<template>
  <span>
     <img v-if="!activated"
          :style="{ width: size, height: size }"
          :src="normal"
          @click="onclick">
     <img v-else
       :style="{ width: size, height: size }"
       :src="active"
       @click="onclick">
  </span>
</template>

<script>
  export default {
    name: "IconActivate",
    props: {
      normal:   { type: String,   default: '' },
      active:   { type: String,   default: '' },
      size:     { type: String,   default: '20px' },
      activated:{ type: Boolean,  default: false  }
    },

    methods: {
      onclick() {
        this.$emit('click')
      }
    }
  }
</script>

<style scoped>
  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    cursor: pointer;
  }
</style>
