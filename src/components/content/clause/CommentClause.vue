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
                         class="icon-liked"/>
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

  export default {
    name: "CommentClause",
    components: {Icon, UserName, Avatar},
    props: {
      comment:  { type: Object,   default: {} },
      ater:  { type: Object,   default: ()=> {} }
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
