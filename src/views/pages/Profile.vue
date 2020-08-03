<template>
  <div class="profile">
    <profile-show :data="profile"/>

    <user-playlist :uid="uid"/>
  </div>
</template>

<script>
  import ProfileShow from "@/components/pages/topinfo/ProfileShow";
  import {user_detail} from "@/network/request_uesr";
  import UserPlaylist from "@/components/content/complound/UserPlaylist";
  export default {
    name: "Profile",
    components: {UserPlaylist, ProfileShow},
    data() {
      return {
        uid: 0,
        profile: {},
      }
    },

    created() {
      this.uid = this.$route.params.id
      this.refresh()
    },

    methods: {
      refresh() {
        user_detail(this.uid).then(result => {
          this.profile = result
        })
      }
    },

    watch: {
      $route() {
        this.uid = this.$route.params.id
        this.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
