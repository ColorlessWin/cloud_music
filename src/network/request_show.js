import axios from '../utils/request'
const request = axios


//获取主页轮播图
export function main_banner( type ) {
  return request({ url: '/banner', params: { type: type } }) }


//获取推荐歌单
export function personalized( limit ) {
  return request({ url: '/personalized', params: { limit: limit } }) }


//获取歌单详情
export function song_list_detail( id ) {
  return request({ url: '/playlist/detail', params: { id } }) }


//传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情
export function song_detail( ids ) {
  return request( { url: '/song/detail', params: { ids } } )
}
