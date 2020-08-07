<template>
  <div v-if="$Check(list)" class="grid"
       :style="{ gridTemplateColumns: `repeat(${col}, 1fr)`,
                 gridTemplateRows: `repeat(${row}, auto)`}">
    <slot v-for="(clause, index) in list" :item="clause"> <!--Item--> </slot>
  </div>
</template>

<script>
  export default {
    name: "Grid",
    props: {
      list: { type: Array,   default: [] },
      col:  { type: [Number, String],  default: '4' },
      row:  { type: [Number, String],  default: '0' },
      item: null,
    }
  }
</script>

<style scoped>
  .grid {
    display: grid;
    grid-gap: 20px 20px;
  }
</style>
