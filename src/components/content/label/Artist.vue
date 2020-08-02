<template>
  <span v-if="(alia != null && alia.length != 0)" class="artist" @click="onclick">
      <span>{{ name }}</span>
      <span  class="alia">({{ alia.join(' / ') }})</span>
  </span>
  <span v-else class="artist" @click="onclick">{{ name }}</span>
</template>

<script>
  export default {
    name: "Artist",
    props: {
      disabled: { type: Boolean,  default: false },
      name: { type: String,  default: null },
      alia: { type: Array,   default: null },
      id  : { type: Number,  default: 0 }
    },

    methods: {
      onclick() {
        if (!this.disabled)
          this.$router.push(`/artist/${this.id}`)
      }
    }
  }
</script>

<style scoped>
  .alia {
    color: #9e9e9e;
  }

  .artist {
    cursor: pointer;
  }
</style>
