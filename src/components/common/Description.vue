<template>
  <div class="description">

         <!--   desc    -->

  </div>
</template>

<script>
  export default {
    name: "Description",
    props: {
      desc: { type: Array,  default: ()=> [ { ti: '暂无' ,txt: '' } ] }
    },

    mounted() {
      this.refresh()
    },

    methods: {
      refresh() {
        this.$nextTick(()=> {
          for (let i = this.$el.childNodes.length - 1; i >= 0; i--)
            this.$el.removeChild(this.$el.childNodes[i])

          let desc = this.desc
          for (let i = 0; i < desc.length; i++) {
            let title = desc[i].ti
            let titleDiv = document.createElement('div')
            titleDiv.textContent = title

            titleDiv.style.fontSize = '14px'
            titleDiv.style.fontWeight = 'bold'

            this.$el.appendChild(titleDiv)

            let lines = desc[i].txt.split(/\n/g)
            for (let j = 0; j < lines.length; j++) {
              let line = lines[j]
              let lineP = document.createElement('p')
              lineP.textContent = line

              lineP.style.fontSize = '13px'
              lineP.style.textIndent = '2em'
              lineP.style.color = '#666'

              this.$el.appendChild(lineP)
            }
          }
        })
      }
    },

    watch: {
      desc() {
        this.refresh()
      }
    }
  }
</script>

<style scoped>
  .description > div {
    font-size: 16px;
    font-weight: bold;
  }
</style>
