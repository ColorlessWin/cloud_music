<template>
  <list class="comment-track" :list="datas">
    <template v-slot:default="slotProps">
      <comment-clause class="comment-caluse" :comment="slotProps.item" :ater="adapter"/>
    </template>
  </list>
</template>

<script>
  import List from "@/components/layout/List";
  import CommentClause from "@/components/content/clause/CommentClause";
  export default {
    name: "CommentTrack",
    components: {CommentClause, List},
    props: {
      datas:    { type: Array,    default: () => [] },
      adapter:  { type: Object,   default: () => {} }
    }
  }
</script>

<style scoped>
  .comment-track {
    padding: 5px 20px;
  }
</style>
