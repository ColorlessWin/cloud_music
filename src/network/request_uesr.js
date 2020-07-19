import axios from '../utils/request'
const request = axios

//获取用户详情
export function user_detail( uid ) {
  return request( { url: '/user/detail', params: { uid } } )
}


//获取用户歌单
export function playlist( uid ) {
  return request( { url: '/user/playlist', params: { uid } } )
}
