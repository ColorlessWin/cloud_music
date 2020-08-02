<template>
  <span class="album" @click.stop="$router.push(`/album/${id}`)"> {{ name }} </span>
</template>

<script>
  export default {
    name: "Album",
    props: {
      id:   { type: [String, Number] },
      name: { type: [String] }
    }
  }
</script>

<style scoped>
  .album {
    cursor: pointer;
  }
</style>
