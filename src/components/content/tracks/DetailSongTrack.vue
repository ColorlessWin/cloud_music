<template>
  <list class="track" :list="datas">
    <template v-slot:default="slotProps">
      <detailed-song-caluse
        class="caluse"
        :song="slotProps.item"
        :adapter="Object.assign(def_adapter, adapter)"
        v-bind="$attrs"
        v-on="$listeners"
        @play="handlerPlay"
      />
    </template>
  </list>
</template>

<script>
  import List from "@/components/layout/List";
  import DetailedSongCaluse from "@/components/content/clause/DetailedSongCaluse";
  import StoreTypes from "@/store/types";
  import BusTypes from "@/utils/bus/types";
  export default {
    name: "DetailSongTrack",
    components: {DetailedSongCaluse, List},
    props: {
      datas:    { type: Array,    default: () => [] },
      adapter:  { type: Object,   default: () => {} },
      playType: { type: String,   default: 'songs'},
    },
    data() {
      return {
        def_adapter: {
          index: (song) => song['__index'],
          coverUrl:  (song) => song['album']['blurPicUrl'] + '?param=50y50',
          name:      (song) => song['name'],
          alia:      (song) => song['alias'].length === 0? null: song['alias'][0],
          id:        (song) => song['id'],
          album_name:(song) => song['album']['name'],
          album_id:  (song) => song['album']['id'],
          duration:  (song) => song['duration'],
          artists:   (song) => {
            return song['artists'].map(value => {
              return {
                id:  value['id'],
                name:value['name'],
                alia:value['alias']
              }
            })
          },
        }
      }
    },

    methods: {
      handlerPlay({ index, id }) {
        if (this.playType === 'songs') {
          if (this.id) {
            this.$store.dispatch(StoreTypes.AUDIO_CHANGE, {
              songsId: this.id,
              index: index
            })}
        }else if (this.playType === 'next') {
          // TODO
        }else if (this.playType === 'track')  {
          this.$store.commit(StoreTypes.AUDIO_CHANGE, {
            songsId: -1,
            songsTracks: this.datas,
            index: index
          })
        }
        this.$bus.$emit(BusTypes.AUDIO_PLAY, { id })
      }
    }
  }
</script>

<style scoped>
  .track .caluse:nth-of-type(odd) {
    background-color: #fafafa;
  }

  .track .caluse:hover {
    background-color: #eeeeee;
  }
</style>
