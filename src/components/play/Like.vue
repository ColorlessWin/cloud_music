<template>
  <icon
    @click="onClick"
    size="29px"
    :normal="require('@/assets/img/love_like.svg')"
    :active="require('@/assets/img/love_liked.svg')"
    :activated="liked"
  />
</template>

<script>
  import BusType from '@/utils/bus/types'
  import { like } from "@/network/behavior";
  import Icon from "@/components/common/Icon";
  export default {
    name: "Like",
    components: {Icon},
    props: {
      liked: { type: Boolean,  default: false },
      id:    { type: [String, Number],  default: -1 }
    },

    methods: {
      onClick() {
        if (!this.$store.state.isLogin) {
          this.$bus.$emit(BusType.PLACE_LOGIN)
          return undefined
        }

        like(this.id, this.liked).then(result => {
          if (result['code'] === 200 && !this.liked) {
            this.$notify.success({
              title: '提示',
              message: '已添加到我喜欢的音乐'
            })
          }
          this.$emit('update:liked', !this.liked)
        })
      }
    }
  }
</script>

<style scoped>

</style>
