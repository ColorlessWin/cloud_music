<template>
  <div v-if="$Check(list)" class="list">
    <slot v-for="(clause, index) in list" :item="clause"> <!--Item--> </slot>
  </div>
</template>

<script>
  export default {
    name: "List",
    props: {
      list: { type: Array,   default: [] },
      item: null,
    }
  }
</script>

<style scoped>

</style>
