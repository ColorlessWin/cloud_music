<template>
  <div class="result">
    <div v-for="(item, index) in suggest" :key="index" class="item"
         @click="$emit('on-click', item['keyword'])">
      <span class="el-icon-search"></span> <span>{{ suggest[index]['keyword'] }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchSuggestPreview",
    props: {
      suggest: { type: Array,    default: ()=> [] }
    },
  }
</script>

<style scoped>
  .result {
    font-size: 12px;
    font-weight: bold;
    color: #616161;
    min-width: 300px;
    padding: 15px 0px;

    background-color: white;
  }

  .result .item {
    line-height: 3em;
    padding: 0 20px;

    cursor: pointer;
  }

  .result .item:hover {
    background-color: #fafafa;;
  }

  .result .item span:nth-child(1) {
    font-size: 1em;
  }
</style>
