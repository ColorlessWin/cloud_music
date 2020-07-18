<template>
  <div class="search" style="display: inline-block">
    <input v-model="key"
           class="search-box"
           type="search"
           placeholder="搜索音乐，视频，歌手">
    <span class="el-icon-search search-icon"></span>
  </div>
</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        key: ''
      }
    }
  }
</script>

<style scoped>
  .search-box::-webkit-input-placeholder {
    font-size: 12px;
    font-weight: bold;
  }

  .search-box::-moz-placeholder {
    font-size: 12px;
    font-weight: bold;
  }

  .search-box::-ms-input-placeholder {
    font-size: 12px;
    font-weight: bold;
  }

  .search .search-box {
    height: 24px;
    width: 175px;
    padding-right: 25px;

    font-size: 13px;
    text-indent: 10px;
    outline: none;
    border: none;
    border-radius: 12px;
  }

  .search-box {
    transition: all 0.3s;
  }

  .search-box:hover, .search-box:focus {
    width: 230px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .search-icon {
    width: 30px;
    cursor: pointer;
    transform: translate(-23px, 0);
  }
</style>
