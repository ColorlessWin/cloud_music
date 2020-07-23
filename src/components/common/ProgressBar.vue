<template>
  <div class="progress-bar">
    <span class="ctime">{{ value | timeLongFormat }}</span>
    <el-slider class="slider" :max="duration" v-bind="$attrs" :value="value" v-on="$listeners"/>
    <span class="duration"> {{ duration | timeLongFormat }} </span>
  </div>
</template>

<script>
  export default {
    name: "ProgressBar",
    props: {
      value:    { type: Number,    default: 0 },
      duration: { type: Number,    default: 0 }
    }
  }
</script>

<style scoped>
  .progress-bar {
    width: 100%;
  }

  .progress-bar .ctime, .progress-bar .duration {
    width: 30px;
    padding: 0 10px;
  }

  .progress-bar .slider {
    display: flex;
    flex-grow: 1;
  }

  .progress-bar {
    display: flex;
    font-weight: bold;
    align-items: center;
  }
</style>
