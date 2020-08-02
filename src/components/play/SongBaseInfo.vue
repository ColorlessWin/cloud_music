<template>
  <div v-if="$Check(song)">
    <div class="name">{{ song['name'] }}</div>
    <span>专辑：</span><album class="album" :name="song['al']['name']" :id="song['al']['id']"/>
    <span>歌手：</span><artists class="artists" :artists="artists(song['ar'])"/>
  </div>
</template>

<script>
  import Artists from "@/components/content/label/Artists";
  import Album from "@/components/content/label/Album";
  export default {
    name: "SongBaseInfo",
    components: {Album, Artists},
    props: {
      song:  { type: Object,  default: {} }
    },


    methods: {
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
