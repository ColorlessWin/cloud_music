<template>
  <div v-if="$Check(song)">
    <div class="name">{{ song['name'] }}</div>
    <span>专辑：</span><span class="album">{{ song['al']['name'] }}</span>
    <span>歌手：</span><artists class="artists" :artists="song['ar'] | artists"/>
  </div>
</template>

<script>
  import Artists from "@/components/content/label/Artists";
  export default {
    name: "SongBaseInfo",
    components: {Artists},
    props: {
      song:  { type: Object,  default: {} }
    },


    filters: {
      artists(artists) {
        return artists.map(value => {
          return {
            name: value['name'],
            id: value['id'],
            alia: value['alias']
          }
        })
      }
    }
  }
</script>

<style scoped>
 .name {
   font-size: 20px;
 }

  span, .album, .artists {
    font-size: 11px;
  }

  .album {
    margin-right: 20px;
  }

 .album, .artists {
   color: #303f9f;
 }
</style>
