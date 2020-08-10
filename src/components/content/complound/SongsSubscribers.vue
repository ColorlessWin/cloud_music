<template>
  <div>
    <rendering
      :component="require('@/components/content/tracks/UserTrack').default"
      :unique="id"
      :total="total"
      :filling="filling"
    />
  </div>

</template>

<script>
  import { playlist_subscribers } from "@/network/request_show";
  import Rendering from "@/components/layout/Rendering";
  export default {
    name: "SongsSubscribers",
    components: {Rendering},
    props: {
      id:    { type: [Number, String],   default: 0 },
      total: { type: Number,             default: 0 }
    },

    data() {
      return {
        loading: false,
      }
    },

    methods: {
      filling(offset, limit) {
        return new Promise((resolve, reject) => {
          playlist_subscribers(this.id, offset, limit).then(result => {
            resolve(result['subscribers'])
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
