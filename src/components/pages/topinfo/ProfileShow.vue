<template>
  <div v-if="$Check(data)" class="profile-show">
    <div class="left">
      <img :src="data['profile']['avatarUrl'] + '?param=170y170'"/>
    </div>
    <div class="right">
      <div class="right-top">
        <span class="name"> {{ data['profile']['nickname'] }} </span>
        <icon class="gender"
              v-if="data['profile']['gender'] > 0"
              :normal="require('@/assets/img/wan_sex_m.svg')"
              :active="require('@/assets/img/wan_sex_w.svg')"
              :activated="data['profile']['gender'] == 1"
              size="18px"/>
        <span class="level">Lv.{{ data['level'] }}</span>
      </div>
      <div class="right-center">
        <div class="event">
          <span class="count">{{ data['profile']['eventCount'] | logogram }}</span>
          <span class="label">动态</span>
        </div>
        <div class="follows">
          <span class="count">{{ data['profile']['follows'] | logogram}}</span>
          <span class="label">关注</span>
        </div>
        <div class="followeds">
          <span class="count">{{ data['profile']['followeds'] | logogram}}</span>
          <span class="label">粉丝</span>
        </div>
      </div>
      <div class="right-bottom">
        <br>
        <p>个人介绍：{{ data['profile']['signature'] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from "@/components/common/Icon";
  export default {
    name: "ProfileShow",
    components: {Icon},
    props: {
      data: { type: Object,  default: ()=> {} }
    }
  }
</script>

<style scoped>
  .profile-show {
    display: flex;
  }

  .left img {
    border-radius: 6px;
    height: 170px;
    width: 170px;
  }

  .left {
    padding-left: 2px;
  }

  .right {
    padding-left: 20px;
    flex-grow: 1;
  }

  .right .right-top {
    height: 35px;
    border-bottom: 1px solid #e0e0e0;
  }

  .right .right-top .name {
    font-size: 19px;
    margin-right: 10px;
    color: black;
  }

  .right .right-top .level {
    font-size: 10px;
    font-weight: bold;
    font-style: italic;
    color: red;
    padding: 0 4px;
    border-radius: 10px;
    border: 1px solid red;

    margin-left: 6px;
  }

  .right-center {
    display: flex;
  }

  .right-center > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 5px;
    padding: 0 35px 0 5px;
  }

  .right-bottom {
    font-size: 12px;
  }

  .follows {
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
  }

  .right-center .count {
    font-size: 20px;
    font-weight: bold;
  }

  .right-center .label {
    font-size: 12px;
  }

  .name  {
    font-size: 19px;
    margin-bottom: 20px;
    color: #000;
  }
</style>
