<template>
  <div class="pagination__container">

    <el-pagination layout="prev, pager, next"
                   :total="total"
                   :page-size="limit"
                   :current-page="page"
                   @current-change="onPageChange"/>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    model: { prop: 'resolved',  event: 'changed' },

    props: {
      unique:  { default: null },
      limit:   { type: Number,      default: 20 },
      total:   { type: Number,      default: 0 },
      index:   { type: Boolean,     default: false },
      filling: {
        type: Function,
        default: (...args) => { console.warn( 'expect a "filling" func' ); return {}}
      },

      resolved: null
    },

    data() {
      return {
        datas: { 1 : [] },
        offset: 0,
        page: 1
      }
    },

    methods: {
      onPageChange: function (val) {
        this.page = val
        this.offset = (val - 1) * this.limit

        if (!this.datas[this.page]) {
          this.load()
        }else {
          this.commit()
        }
      },

      load() {
        this.$emit('loading')
        this.fillingData().then(res => {
          this.commit();
          this.$emit('loaded')
        })
      },

      async fillingData() {
        let result = this.filling(this.offset, this.limit)
        if (result.then && (typeof result.then) === 'function') {
          return new Promise((resolve, reject) => {
            result.then(res => {
              if (Array.isArray(res)) { this.loadinfo(this.page, res); resolve(res) }
              else console.error('res" no array')
            })
          })
        }else console.error(' expect a Promise ')
      },

      loadinfo(page, data) {
        this.datas[page] = []
        this.datas[page].push(...data);
      },

      discharge(page) {  return this.datas[page] },

      commit() {
        let res = this.discharge(this.page).map(( value, index ) => {
          if (this.index) value.__index = index + this.offset + 1
          return value
        })

        this.$emit('changed', res)
      },

      reload() {
        this.datas = { 1 : [] }
        this.offset = 0
        this.page = 1

        this.load()
      },
    },

    created() {
      this.reload()
    },

    watch: {
      unique: function (newVal, oldVal) {
        if (newVal !== oldVal) this.reload()
      }
    }
  }
</script>

<style scoped>
  .pagination__container .el-pagination{
    text-align: center;
  }
</style>
