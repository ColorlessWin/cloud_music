<template>
  <span class="logo"></span>
<!--  <img class="logo" src="~assets/img/logo.svg">-->
</template>

<script>
  export default {
    name: "Logo"
  }
</script>

<style scoped>
  .logo {
    display: inline-block;
    height: 30px;
    width: 120px;
    background-image: url("~assets/img/logo.svg");
    background-size: 100% 100%;
  }
</style>
