<template>
  <span @click.stop="onclick" class="u-name" ><slot></slot></span>
</template>

<script>
  export default {
    name: "UserName",
    props: {
      uid:       { type: Number,  default: -1     },
      fontSize:  { type: String,  default: '13px' }
    },

    methods: {
      onclick() {}
    }
  }
</script>

<style scoped>
  .u-name {
    /*font-weight: bold;*/
    cursor: pointer;
  }
</style>
