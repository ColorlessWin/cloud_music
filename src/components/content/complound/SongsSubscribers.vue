<template>
  <div>

    <div class="content" v-loading="loading">

      <user-track v-if="$Check(users)"
                  :datas="users"
                  :adapter="$adapter.search_to_users"/>

      <div v-else class="empty">
        <h1>还没有任何订阅者~</h1>
      </div>

    </div>

    <pagination class="pagination"          :unique="id"
                v-model="users" :limit="40" :index="true"
                :total="total"              @loading="loading = true"
                :filling="filling"          @loaded="loading = false"/>

  </div>

</template>

<script>
  import UserTrack from "@/components/content/tracks/UserTrack";
  import Pagination from "@/components/common/Pagination";
  import { playlist_subscribers } from "@/network/request_show";
  export default {
    name: "SongsSubscribers",
    components: {UserTrack, Pagination},
    props: {
      id:    { type: [Number, String],   default: 0 },
      total: { type: Number,             default: 0 }
    },

    data() {
      return {
        users: [],
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
