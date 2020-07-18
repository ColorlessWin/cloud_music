<template>
  <input class="light-input" :type="type" :placeholder="placeholder"
         @input="$emit('input', $event.target.value)"/>
</template>
:
<script>
  export default {
    name: "LightInput",
    props: {
      placeholder: { default: '请输入内容', type: String },
      type:        { default: 'text',      type: String },
      value:       { default: '',          type: String },
    }
  }
</script>

<style scoped>

  .light-input {
    box-sizing: border-box;
    height: 2.8em;
    width: 100%;
    border: 1px solid #cfd8dc;
    border-radius: 1.5em;
    text-indent: 1em;
    outline: none;
  }

  .light-input::-webkit-input-placeholder { font-size: 0.85em; }
  .light-input::-moz-placeholder { font-size: 0.85em; }
  .light-input::-ms-input-placeholder { font-size: 0.85em }
</style>
