<template>
  <div class="header">
    <div class="left">
      <logo/>   <history-move/>   <search/>
    </div>
    <div class="right">
      <login-state/>
    </div>
  </div>
</template>

<script>
  import Logo from 'components/header/Logo.vue'
  import HistoryMove from "components/header/HistoryMove.vue";
  import Search from "components/header/Search";
  import LoginState from "components/header/LoginState";

  export default {
    name: "Header",
    components: {
      Logo,
      HistoryMove,
      Search,
      LoginState
    }
  }
</script>

<style scoped>
  .header {
    height: 100%;
  }

  .header .left, .header .right {
     display: flex;
     align-items: center;
     height: 100%;
   }

  .header .left {
    float: left;
  }

  .header .right {
    float: right;
  }

  .header .left .history-move {
    margin-left: 30px;
  }

  .header .left .search {
    margin-left: 30px;
  }
</style>
