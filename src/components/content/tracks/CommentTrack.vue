<template>
  <list class="comment-track" :list="datas">
    <template v-slot:default="slotProps">
      <comment-clause
        class="comment-caluse"
        :comment="slotProps.item"
        :ater="Object.assign(def_adapter, adapter)"
        v-bind="$attrs"
      />
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
    },

    data() {
      return {
        def_adapter: {
          user:         (comment) => comment['user'],
          avatarUrl:    (user) => user['avatarUrl'] + '?param=50y50',
          name:         (user) => user['nickname'],
          uid:          (user) => user['userId'],
          content:      (comment) => comment['content'],
          unreplied:    (comment) => comment['beReplied'].length === 0,
          replied:      (comment) => comment['beReplied'][0],
          commentId:    (comment) => comment['commentId'],
          time:         (comment) => comment['time'],
          liked:        (comment) => comment['liked'],
          likedCount:   (comment) => comment['likedCount']
        }
      }
    }
  }
</script>

<style scoped>
  .comment-track {
    padding: 5px 20px;
  }
</style>
