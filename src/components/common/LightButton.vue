<template>
  <span class="light-button">{{value}}</span>
</template>

<script>
  export default {
    name: "LIghtButton",
    props: {
      value: { default: 'YES', type: String }
    }
  }
</script>

<style scoped>
  .light-button {
    padding: 0.3em 2em;
    border-radius: 1.5em;
    border: none;
    outline: none;
  }
</style>
