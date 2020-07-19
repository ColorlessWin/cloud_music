<template>
  <div class="banner">
    <el-carousel v-if="!loading" :interval="4000" type="card" height="180px">
      <el-carousel-item  v-for="(item, index) in banners" :key="index">
        <div class="warp">
          <a class="href" :href="item.url">
            <img class="image" :src="item.imageUrl" alt="">
          </a>
          <span class="type-title" :style="{backgroundColor: item.titleColor}">{{item.typeTitle}}</span>
        </div>
      </el-carousel-item>
    </el-carousel>
    <el-carousel class="loading" v-else :interval="4000" type="card" height="180px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium"></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Banner",
    props: {
      banners: {
        type: Array,
        default: () => []
      },

      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .warp {
    position: relative;
  }

  .warp, .href, .image {
    height: 100%;
    width: 100%;
  }

  .warp .type-title {
    position: absolute;
    right: 0;
    bottom: 8px;
    padding: 0 5px;

    color: white;
    font-size: 8px;
    font-weight: bold;
    line-height: 1.7em;
    height: 1.7em;

    border-top-left-radius: 0.8em;
    border-bottom-left-radius: 0.8em;
  }



  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 180px;
    text-align: center;
    margin: 0;
  }

  .loading .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .loading .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
