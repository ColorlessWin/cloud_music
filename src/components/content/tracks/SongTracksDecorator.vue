<template>
  <song-tracks
    v-bind="$attrs"
    v-on="$listeners"
    :adapter="Object.assign(def_adapter, adapter)"
  />
</template>

<script>
  import SongTracks from "@/components/content/tracks/SongTracks";
  export default {
    name: "SongTracksDecorator",
    components: {SongTracks},
    props: {
      adapter: { type: Object, default: ()=> {} },
    },
    data() {
      return {
        def_adapter: {
          artists:    (song) => song['ar'].map((value) => {
            return {
              name: value['name'],
              id:   value['id'],
              alia: value['alias']
            }
          }),
          album_name: (song) => song['al']['name'],
          album_id  : (song) => song['al']['id'],
          duration:   (song) => song['dt'],
        }
      }
    }
  }
</script>

<style scoped>

</style>
