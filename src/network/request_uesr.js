import axios from '../utils/request'
const request = axios

//获取用户信息 , 歌单，收藏，mv, dj 数量
export function user_subcount() {
  return request( { url: '/user/subcount' } )
}

//获取用户详情
export function user_detail( uid ) {
  return request( { url: '/user/detail', params: { uid } } )
}


//获取用户歌单
export function playlist( uid ) {
  return request( { url: '/user/playlist', params: { uid } } )
}
