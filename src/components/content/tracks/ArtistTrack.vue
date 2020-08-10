<template>
  <list class="artist-list" :list="datas">
    <template  v-slot:default="slotProps">
      <artist-caluse
        class="artist-cover"
        :artist="slotProps.item"
        :adapter="Object.assign(def_adapter, adapter)"
        v-bind="$attrs"
      />
    </template>
  </list>
</template>

<script>
  import List from "@/components/layout/List";
  import ArtistCaluse from "@/components/content/clause/ArtistCaluse";
  export default {
    name: "ArtistTrack",
    components: {ArtistCaluse, List },
    props: {
      datas:   { type: Array,    default: () => [] },
      adapter: { type: Object,   default: () => {} }
    },

    data() {
      return {
        def_adapter: {
          avatarUrl: (artist) => artist['img1v1Url'] + '?param=50y50',
          name:      (artist) => artist['name'],
          alias:     (artist) => artist['alias'],
          id:        (artist) => artist['id']
        }
      }
    },


  }
</script>

<style scoped>
  .artist-list .artist-cover:nth-of-type(odd) {
    background-color: #fafafa;
  }

  .artist-list .artist-cover:hover {
    background-color: #eeeeee;
  }
</style>
