import axios from '../utils/request'
const request = axios


//获取主页轮播图
export function main_banner( type ) {
  return request({ url: '/banner', params: { type: type } })
}
