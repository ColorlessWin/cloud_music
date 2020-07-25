<template>
  <div class="__volume">
    <span class="icon-volume high" :class="{'cross': isMute }" @click="onclick"></span>
    <el-slider :disabled="isMute"
               class="slider"
               v-bind="$attrs" v-on="$listeners" :value="value"/>
  </div>
</template>

<script>
  export default {
    name: "Volume",
    props: {
      value: { type: Number,    default: 0 },
    },
    data() {
      return {
        isMute: false,
        record: 0
      }
    },

    methods: {
      onclick() {
        let commit = 0
        this.isMute = !this.isMute
        if (this.isMute) { this.record = this.value }
        else { commit = this.record }

        this.$emit('change', commit)
        this.$emit('input', commit)
      }
    }
  }
</script>

<style scoped>
  .__volume {
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .__volume .slider {
    margin-left: 8px;
    flex-grow: 1;
  }

  .__volume .icon-volume {
    width: 18px;
    height: 16px;
    background-size: 16px 14px;
    background-repeat: no-repeat;
  }

  .__volume .icon-volume.cross {
    background-image: url("~assets/img/24gf-volumeCross.svg") !important;
  }

  .__volume .icon-volume.high {
    background-image: url("~assets/img/24gf-volumeHigh.svg");
  }
</style>
