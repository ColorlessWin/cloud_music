<template>
  <list class="user-track" :list="datas">
    <template v-slot:default="slotProps">
      <user-caluse class="user-caluse" :user="slotProps.item" :adapter="adapter"/>
    </template>
  </list>
</template>

<script>
  import List from "@/components/layout/List";
  import UserCaluse from "@/components/content/clause/UserCaluse";
  export default {
    name: "UserTrack",
    components: { UserCaluse, List },
    props: {
      datas:    { type: Array,    default: () => [] },
      adapter:  { type: Object,   default: () => {} }
    }
  }
</script>

<style scoped>
  .user-track .user-caluse:nth-of-type(odd) {
    background-color: #f5f5f5;
  }

  .user-track .user-caluse:hover {
    background-color: #eeeeee;
  }
</style>
