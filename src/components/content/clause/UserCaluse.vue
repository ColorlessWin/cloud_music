<template>
  <div class="user-caluse clearfix">
    <div class="left">
      <avatar class="avatar" :avatar-url="adapter.avatarUrl(user)" :uid="adapter.uid(user)" size="40px"/>
      <span class="name"> {{ adapter.name(user) }} </span>
    </div>
    <div class="right">
      <div class="synopsis">{{ adapter.synopsis(user) }}</div>
    </div>
  </div>
</template>

<script>
  import Avatar from "@/components/content/label/Avatar";
  export default {
    name: "UserCaluse",
    components: {Avatar},
    props: {
      user:     { type: Object,   default: ()=> {} },
      adapter:  { type: Object,   default: ()=> {} }
    }
  }
</script>

<style scoped>
  .user-caluse {
    min-width: 50px;
    font-size: 12px;
    font-weight: bold;
    padding: 6px 10px;

    border-radius: 5px;
    cursor: pointer;
  }

  .avatar, .name {
    margin-left: 10px;
    vertical-align: middle;
  }

  .left, .right {
    float: left;
  }

  .left {
    width: 30%;
    vertical-align: top;
  }

  .right {
    width: 70%;
    text-overflow: ellipsis;
    min-height: 38px;
  }

  .right {
    display: flex;
    align-items: center;
  }
</style>
