<template>
  <div class="app-footer">

    <play-control-bar/>

  </div>
</template>

<script>
  import PlayControlBar from "@/components/footer/PlayControlBar";
  export default {
    name: "Footer",
    components: {PlayControlBar}
  }
</script>

<style scoped>
  .app-footer {
    height: 100%;
  }
</style>
