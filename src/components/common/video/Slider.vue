<template>
  <div class="slider" @mousedown.prevent="mousedown = true">
    <div class="slider__runway">
      <div class="slider__buffered"
           :style="{width: `${(buffered / max) * 100}%`}"></div>
      <div class="slider__bar"
           :style="{width: `${(m_value / max) * 100}%`}">
        <div class="slider__button"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Slider",
    props: {
      value:    { type: Number, default: 0 },
      buffered: { type: Number, default: 0 },
      max:      { type: Number, default: 100 },
      disabled: { type: Boolean, default: false }
    },
    data() {
      return {
        mousedown: false,
        m_value: 0,
      }
    },

    created() {
      document.addEventListener('mouseup', (event)=> {
        if (this.mousedown) {
          this.valueChange(event.clientX)
          this.$emit('change', this.m_value)
        }
        this.mousedown = false
      })

      document.addEventListener('mousemove',  (event)=> {
        if (!this.mousedown) return
        this.valueChange(event.clientX)
      })

      this.m_value = this.value
    },

    methods: {

      valueChange(offset) {
        if (this.disabled) return
        offset = offset - this.$el.getBoundingClientRect().left
        offset = Math.min(offset, this.$el.clientWidth)
        offset = Math.max(offset, 0)
        this.m_value = offset / this.$el.clientWidth * this.max

        this.$emit('input', this.m_value)
      }
    },

    watch: {
      value: function () {
        if (!this.mousedown)
          this.m_value = this.value
      }
    }
  }
</script>

<style scoped>
  .slider, .slider__runway, .slider__bar, .slider__buffered {
    position: relative;
    height: 4px;
    border-radius: 3px;
    cursor: pointer;
  }

  .slider {
    padding: 8px 0;
  }

  .slider__bar .slider__button {
    width: 9px;
    height: 9px;
    background-color: white;
    border-radius: 50%;

    position: absolute;
    right: -4px;
    top: -2px;

    transition: opacity 0.4s 1s;
    opacity: 0;
  }

  .slider__runway {
    background-color: rgba(255, 255, 255, 0.3);
  }

  .slider__buffered, .slider__bar {
    position: absolute;
    left: 0;
  }

  .slider__buffered {
    width: 60%;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .slider__bar {
    background-color: rgba(255, 255, 255, 1);
  }

  .slider:hover .slider__button {
    transition-delay: 0s;
    opacity: 1;
  }
</style>
