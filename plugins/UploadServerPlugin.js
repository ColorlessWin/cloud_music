const axios = require('axios')
const path = require('path')
const fs = require('fs')

const PLUGIN_NAME = 'UploadServerPlugin'

class UploadServerPlugin {

  constructor(config) { this.config = config }

  apply(compiler) {

    compiler.hooks.afterEmit.tap(PLUGIN_NAME, compilation => {

      if (process.env.NODE_ENV !== 'production')
        return

      let assets = compilation.assets
      this.upload(assets)
        .then(() =>
          console.log('\x1B[32m%s\x1B[39m', 'Upload to complete'))
    })
  }

  upload(assets) {
    return new Promise((resolve, reject) => {
      this.beforeUpdate()
        .then(() => this.updateAll(assets))
        .then(() => resolve())
        .catch(err => {
          let meg = err.response? {
            401: '密码错误！',
            403: '请求暂时被拒接！',
            500: '服务器更新文件失败！'
          }[err.response.status]: ''
          console.log('\x1B[31m%s\x1B[39m', `上传服务器失败!! \n ${meg} \n ${err}`)
        })
    })
  }

  beforeUpdate() {
    let config = this.config
    return axios
      .post(`${config.address}:${config.port}/api/before-update`,{
        key: config.password
    })
  }

  updateAll(assets) {
    let promises = []

    Object.keys(assets)
      .forEach((filename) =>
        promises.push(this.update(filename, assets[filename].existsAt)))

    return Promise.all(promises)
  }

  update(filename, fullPath) {
    let config = this.config

    return new Promise((resolve, reject) => {
      fs.readFile(fullPath, (err, data) => {
        if (err) {
          reject(`fs 读取文件错误：${fullPath} \n ${err}`)
          return
        }

        axios
          .post(`${config.address}:${config.port}/api/hot-update`, {
            key: config.password,
            filename: filename,
            file: data,
        }).then(res => {
          console.log('\x1B[32m%s\x1B[39m', `上传文件成功： dist/${filename}`)
          resolve(res)
        }).catch(err => reject(err))
      })
    })
  }
}

module.exports = UploadServerPlugin
