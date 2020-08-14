<template>
  <div class="pagination__container">

    <el-pagination
      v-if="!(total <= 0 || total <= limit )"
      layout="prev, pager, next"
      :total="total"
      :page-size="limit"
      :current-page="page"
      @current-change="onPageChange"
      :disabled="(!enable || loading)"
    />
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    model: { prop: 'resolved',  event: 'changed' },

    props: {
      unique:  { default: 'default' },
      limit:   { type: Number,   default: 40 },
      total:   { type: Number,   default: 0 },
      index:   { type: Boolean,  default: false },
      enable:  { type: Boolean,  default: true },
      filling: {
        type: Function,
        default: (...args) => { console.warn( 'expect a "filling" func' ); return {}}
      },

      resolved: null
    },

    data() {
      return {
        loading: false,
        datas: {},
        offset: 0,
        page: 1
      }
    },

    methods: {
      onPageChange: function (val) {
        this.page = val
        this.offset = (val - 1) * this.limit

        this.resolve()
      },

      resolve(first) {
        if (!this.existPage(this.page)) {
          this.load(first)
        }else {
          this.commit()
        }
      },

      load(first) {
        if (!this.enable) return
        this.$emit('loading'); this.loading = true
        this.fillingData(first).then(res => {
          this.commit();
          this.$emit('loaded'); this.loading = false
        })
      },

      async fillingData(first) {
        let result = this.filling(this.offset, this.limit, first)
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
        if (!this.datas[this.unique]) this.datas[this.unique] = {}
        this.datas[this.unique][page] = []
        this.datas[this.unique][page].push(...data)
      },

      discharge(page) { return this.datas[this.unique][page] },

      existPage(page) {
        return this.datas[this.unique] && this.datas[this.unique][page]
      },

      commit() {
        let res = this.discharge(this.page).map(( value, index ) => {
          if (this.index) value.__index = index + this.offset + 1
          return value
        })

        this.$emit('changed', res)
      },

      reload() {
        this.$emit('changed', [])
        this.offset = 0
        this.page = 1

        this.resolve(true)
      },
    },

    created() {
      this.reload()
    },

    watch: {
      unique: function (newVal, oldVal) {
        if (newVal !== oldVal) this.reload()
      },

      enable: function () {
        this.resolve()
      }
    }
  }
</script>

<style scoped>
  .pagination__container .el-pagination{
    text-align: center;
  }
</style>
