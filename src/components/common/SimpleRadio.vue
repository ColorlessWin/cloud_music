<template>
  <div class="simple-radio">
    <span v-for="(option, index) in Object.keys(options_map)" class="option">
      <span :class="{ active: option === selected }"
            class="label"
            @click="onClick(option)"
            >{{ option }}</span>
      <span class="split" v-if="index !== options.length - 1">|</span>
    </span>
  </div>
</template>

<script>
  export default {
    name: "SimpleRadio",
    model: { prop: 'selected',  event: 'changed' },
    props: {
      options:  { type: Array,  default: ()=>[] },
      selected: { type: String, default: '' }
    },

    methods: {
      onClick(option) {
        this.$emit('changed', option)
        this.$emit('radio-click', { name: option, value: this.options_map[option] })
      },
    },

    computed: {
      options_map() {
        return this.options.reduce((pre, cur) => {
          return (typeof cur !== 'object' && typeof cur === 'string')
            ?Object.assign(typeof pre === 'string'? { [pre]: pre } : pre, { [cur]: cur })
            :Object.assign(pre, cur)
        })
      }
    }
  }
</script>

<style scoped>
  .simple-radio {
    font-size: 10px;
    display: inline-block;
  }

  .split {
    margin: 0 5px;
  }

  .label {
    display: inline-block;
    padding: 0 5px;
    border-radius: 3px;

    cursor: pointer;
  }

  .active {
    color: white;
    background-color: #bdbdbd;
  }
</style>
