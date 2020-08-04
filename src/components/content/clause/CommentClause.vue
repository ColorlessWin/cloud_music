<template>
  <div class="comment-caluse clearfix">
    <div class="left-avatar">
      <avatar :avatar-url="ater.avatarUrl(ater.user(comment))" size="32px"/>
    </div>
    <div class="comment">
      <user-name class="name" :uid="ater.uid(ater.user(comment))"> {{ ater.name(ater.user(comment)) }} :
      </user-name>
      <span class="content"> {{ ater.content(comment) }} </span>
      <div v-if="!ater.unreplied(comment)" class="replied">
        <user-name class="name" :uid="ater.uid(ater.user(ater.replied(comment)))">
          @{{ ater.name(ater.user(ater.replied(comment))) }} :
        </user-name>
        <span class="content"> {{ ater.content((ater.replied(comment))) }} </span>
      </div>
      <div class="other">
        <span class="time"> {{ ater.time(comment) | dateTimeFormat('yyyy-MM-dd HH:mm') }} </span>
        <span class="option">
          <icon :normal="require('@/assets/img/like.svg')"
                         :active="require('@/assets/img/liked.svg')"
                         :activated="ater.liked(comment)"
                         size="15px"
                         class="icon-liked"
                         @click="onLike"/>
          <span class="liked-count"> {{ ater.likedCount(comment) | logogram }} </span>
          <span class="rep"> | 回复</span>
      </span>
      </div>
    </div>
  </div>
</template>

<script>
  import Avatar from "@/components/content/label/Avatar";
  import UserName from "@/components/content/label/UserName";
  import Icon from "@/components/common/Icon";

  import { comment_like } from "@/network/behavior"
  import BusTypes from "@/utils/bus/types"

  export default {
    name: "CommentClause",
    components: {Icon, UserName, Avatar},
    props: {
      sid:   { type: [String, Number] },
      comment:  { type: Object,   default: {} },
      type:  { type: String,   default: '-1' },
      ater:  { type: Object,   default: ()=> {} }
    },

    methods: {
      onLike() {
        if (!this.$store.state.isLogin) {
          this.$bus.$emit(BusTypes.PLACE_LOGIN)
          return
        }
        comment_like(
          this.sid, 
          this.ater.commentId(this.comment), 
          this.type, 
          !this.ater.liked(this.comment))

          .then(result => {
            this.comment['liked'] = !this.comment['liked']
          })
      }
    }
  }
</script>

<style scoped>

  .name {
    color: #303f9f;
    font-weight: bold;
  }

  .comment-caluse {
    position: relative;
    font-size: 11px;
    line-height: 1.5em;
    min-height: 35px;
    padding: 15px 8px;
    border-bottom: 1px solid #f5f5f5;
  }

  .left-avatar {
    position: absolute;
    left: 0;
  }

  .comment {
    padding: 4px 8px 4px 36px;
  }

  .replied {
    margin-top: 6px;
    background-color: #eeeeee;
    padding: 7px 5px;
    border-radius: 4px;
  }

  .other {
    margin-top: 5px;
  }

  .time {
    float: left;
  }

  .option {
    float: right;
  }

  .time, .rep, .liked-count {
    color: #9e9e9e;
    vertical-align: middle;
  }
</style>
