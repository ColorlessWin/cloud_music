<template>
  <span>
    <span v-for="(artist, index) in artists">
      <span v-if="index !== 0"> / </span>
      <artist :id="artist['id']" :name="artist['name']" :alia="artist['alia']? artist['alia']: []"/>
    </span>
  </span>
</template>

<script>
  import Artist from "@/components/content/label/Artist";
  export default {
    name: "Artists",
    components: {Artist},
    props: {
      artists: { type: Array,    default: ()=> [] },
    }
  }
</script>

<style scoped>

</style>
