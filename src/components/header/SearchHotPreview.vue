<template>
  <div class="hot">
    <h5 style="font-weight: unset">热搜榜</h5>
    <div v-for="(item, index) in hots" class="hots">
      <div class="top">{{ index + 1 }}</div>
      <div class="right">
        <span class="s-word"> {{ item['searchWord'] }} </span>
        <span class="score"> {{ item['score'] }} </span>
        <img class="icon" :src="item['iconUrl']" alt="">
        <div class="content"> {{ item['content'] }} </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchHotPreview",
    props: {
      hots: { type: Array,   default: () => [] }
    }
  }
</script>

<style scoped>
  .hot {
    width: 300px;
    height: 430px;
    padding: 0 20px 5px 20px;

    background-color: white;
  }

  .hot .hots .right {
    font-size: 11px;
    margin: auto 0 auto 15px;
  }

  .hot .hots {
    display: flex;
    cursor: pointer;
  }

  .hot .hots:hover {
    background-color: #fafafa;
  }

  .hot .hots .top {
    width: 2em;
    line-height: 3em;
    text-align: center;
  }

  .right .score {
    font-size: 10px;
    margin-left: 10px;
  }

  .right .icon {
    height: 11px;
    margin-left: 6px;
  }

  .hots .top, .right .content, .right .score, .hot h5 {
    color: #b0bec5;
  }

  .hots:not(:nth-child(n+5)) .top {
    font-weight: bold;
    color: red;
  }

  .hots:not(:nth-child(n+5)) .right .s-word {
    font-weight: bold;
  }
</style>
