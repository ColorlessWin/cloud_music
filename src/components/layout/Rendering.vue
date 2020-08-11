<template>
  <div>
    <div
      style="min-height: 300px"
      v-loading="loading"
    >
      <component
        :is="component"
        v-bind="Object.assign(props, $attrs)"
        v-on="$listeners"
      />

    </div>
    <pagination
      class="pagination"
      v-model="props.datas"
      v-on="$listeners"
      v-bind="$attrs"
      :filling="filling"
      @loading="loading = true"
      @loaded="loading = false"
    />
  </div>
</template>

<script>
  import Pagination from "@/components/common/Pagination";
  export default {
    name: "Rendering",
    components: {Pagination},
    props: {
      component: { type: [Object, Function], required: true},
      filling:   { type: Function, required: true},
    },
    data() {
      return {
        loading: false,
        props: {
          datas: [],
        }
      }
    }
  }
</script>

<style scoped>
  .pagination {
    margin-top: 15px;
  }
</style>
