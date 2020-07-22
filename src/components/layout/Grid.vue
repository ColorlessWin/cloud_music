<template>
  <div v-if="$Check(list)" class="grid">
    <slot v-for="(clause, index) in list" :item="clause"> <!--Item--> </slot>
  </div>
</template>

<script>
  export default {
    name: "Grid",
    props: {
      list: { type: Array,   default: [] },
      item: null,
    }
  }
</script>

<style scoped>
  .grid {
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;
  }

  .grid > * {

  }
</style>
