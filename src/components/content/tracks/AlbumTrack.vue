<template>
  <list class="album-list" :list="datas">
    <template v-slot:default="slotProps">
      <album-caluse class="album-caluse"
        :album="slotProps.item"
        :adapter="Object.assign(def_adapter, adapter)"
      />
    </template>
  </list>
</template>

<script>
  import List from "@/components/layout/List";
  import AlbumCaluse from "@/components/content/clause/AlbumCaluse";
  export default {
    name: "AlbumTrack",
    components: {AlbumCaluse, List},
    props: {
      datas:    { type: Array,    default: () => [] },
      adapter:  { type: Object,   default: () => {} }
    },

    data() {
      return {
        def_adapter: {
          cover:    (album) =>  album['picUrl'] + '?param=50y50',
          name :    (album) =>  album['name'],
          id   :    (album) =>  album['id'],
          artist:   (album) =>  {
            return  {
              name: album['artist']['name'],
              id:   album['artist']['id'],
              alia: album['artist']['alias']
            }
          },
        }
      }
    }
  }
</script>

<style scoped>
  .album-list .album-caluse:nth-of-type(odd) {
    background-color: #fafafa;
  }

  .album-list .album-caluse:hover {
    background-color: #eeeeee;
  }
</style>
