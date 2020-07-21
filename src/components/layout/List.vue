<template>
  <div class="list">
    <slot  v-for="(subclause, index) in list" :item="subclause"> <!--Item--> </slot>
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
