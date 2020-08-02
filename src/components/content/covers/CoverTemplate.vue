<template>
  <div class="c-t" :style="{ 'width': width, 'height': height }">
    <div :style="{ 'width': width, 'height': coverHeight }" class="cover">
      <slot name="cover"></slot>
    </div>
    <div class="mark">
      <div class="info">
        <div class="primary"> <slot name="primary"></slot> </div>
        <div class="secondary"> <slot name="secondary"></slot> </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CoverTemplate",
    props: {
      width:        { type: String,   default: '150px' },
      height:       { type: String,   default: '200px' },
      coverHeight:  { type: String,   default: '150px' }
    },

    mounted() {
      let c_h = this.$el.querySelector('.cover').clientHeight
      let h   = this.$el.clientHeight

      let mark      = this.$el.querySelector('.mark')
      let primary   = this.$el.querySelector('.primary')
      let secondary = this.$el.querySelector('.secondary')

      primary.style.height     = `${h - c_h}px`
      secondary.style.height   = `${h - c_h}px`
      mark.style.height        = `${h - c_h}px`
    }
  }
</script>

<style scoped>
  .c-t {
    border-radius: 6px;
    border: 1px solid #eeeeee;
    overflow: hidden;

    transition:all 0.4s;
    cursor: pointer;
  }

  .cover > * {
    width: 100%;
    height: 100%;
  }

  .mark {
    overflow: hidden;
  }

  .c-t .info {
    background-color: white;
    transition:all 0.3s 0.4s;
  }

  .c-t:hover {
    transform: translate(0, -6px);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .c-t:hover .info {
    transform: translate(0, -50%);
  }

  .primary, .secondary {
    overflow: hidden;
    box-sizing: border-box;
    padding: 1px 3px;
  }
</style>
