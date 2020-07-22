<template>
  <div style="display: inline-block" class="history-move">
    <span class="el-icon-arrow-left" @click="$router.back()"></span>
    <span class="el-icon-arrow-right" @click="$router.forward()"></span>
  </div>
</template>

<script>
  export default {
    name: "HistoryMove"
  }
</script>

<style scoped>
  .history-move .el-icon-arrow-right,
  .history-move .el-icon-arrow-left {
    padding: 1px 3px;
    border-radius: 3px;
  }

  .history-move .el-icon-arrow-right:hover, .history-move .el-icon-arrow-left:hover {
    background-color: #cfd8dc;
  }

  .history-move .el-icon-arrow-right:active, .history-move .el-icon-arrow-left:active {
    background-color: #b0bec5;
  }
</style>
