<template>
  <songs-list-detail :id="$route.params.id"/>
</template>

<script>
  import SongsListDetail from "@/components/content/complound/SongsListDetail";
  export default {
    name: "SongsDetail",
    components: {SongsListDetail}
  }
</script>

<style scoped>

</style>
