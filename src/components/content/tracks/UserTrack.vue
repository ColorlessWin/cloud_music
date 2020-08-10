<template>
  <list class="user-track" :list="datas">
    <template v-slot:default="slotProps">
      <user-caluse
        class="user-caluse"
        :user="slotProps.item"
        :adapter="Object.assign(def_adapter, adapter)"
      />
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
    },
    data() {
      return {
        def_adapter: {
          avatarUrl: (user) => user['avatarUrl'] + '?param=50y50',
          uid:       (user) => user['userId'],
          name:      (user) => user['nickname'],
          synopsis:  (user) => user['signature']
        }
      }
    }
  }
</script>

<style scoped>
  .user-track .user-caluse:nth-of-type(odd) {
    background-color: #fafafa;
  }

  .user-track .user-caluse:hover {
    background-color: #eeeeee;
  }
</style>
