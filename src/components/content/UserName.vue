<template>
  <span class="u-name" :style="{ fontSize: fontSize }" ><slot></slot></span>
</template>

<script>
  export default {
    name: "UserName",
    props: {
      uid:       { type: Number,  default: -1     },
      fontSize:  { type: String,  default: '13px' }
    }
  }
</script>

<style scoped>
  .u-name {
    /*font-weight: bold;*/
    cursor: pointer;
  }
</style>
