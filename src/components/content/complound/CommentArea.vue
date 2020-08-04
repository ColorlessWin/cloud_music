<template>
  <div>
    <div class="content" v-loading="loading">

      <l-area v-if="$Check(hotComment)"
              title="精彩评论"
              font-size="12px">

        <comment-track :datas="hotComment" 
                       :sid="id"
                       :type="type"
                       :adapter="$adapter.comment_caluse"/>
      </l-area>

      <l-area v-if="$Check(comment)"
              title="最新评论"
              font-size="12px">

        <comment-track :datas="comment" 
                       :sid="id"
                       :type="type"
                       :adapter="$adapter.comment_caluse"/>
      </l-area>
      <div v-else class="empty">
        <h1>还没有任何评论，快来抢沙发吧~</h1>
      </div>

    </div>

    <pagination class="pagination"
                :filling="filling"
                :total="total" :limit="30"
                v-model="comment"
                :enable="enable"
                :unique="parseInt(id)"
                @loading="loading = true"
                @loaded="loading = false"/>

  </div>
</template>

<script>
  import LArea from "@/components/common/LArea";
  import CommentTrack from "@/components/content/tracks/CommentTrack";
  import Pagination from "@/components/common/Pagination";
  import {get_comment_request} from "@/network/resolved";
  export default {
    name: "CommentArea",
    components: {CommentTrack, LArea, Pagination},
    props: {
      id:     { type: [Number, String],   default: 0 },
      type:   { type: String,  default: 'playlist' },
      enable: { type: Boolean,  default: true }
    },
    data() {
      return {
        hotComment: [],
        comment: [],
        total: 0,
        loading: false,
      }
    },

    methods: {

      filling(offset, limit) {
        return new Promise(resolve => {
          get_comment_request(this.type)(this.id, offset, limit).then(res => {
            let comment =     res['comments']
            this.hotComment = res['hotComments']
            this.total =      res['total']
            resolve(comment)
          })
        })
      }
    }
  }
</script>

<style scoped>
  .pagination {
    margin-top: 15px;
  }

  .empty {
    line-height: 200px;
    text-align: center;
    color: #b0bec5;
  }
</style>
