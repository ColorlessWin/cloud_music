import axios from '../utils/request'
const request = axios

//获取用户信息 , 歌单，收藏，mv, dj 数量
export function user_subcount() {
  return request( { url: '/user/subcount' } )
}

//获取已收藏的歌曲列表
export function artist_sublist() {
  return request( { url: '/artist/sublist' } )
}

//获取已收藏的专辑列表
export function album_sublist(offset, limit) {
  return request( { url: '/album/sublist', params: { offset, limit } } )
}

//获取已收藏的MV列表
export function mv_sublist() {
  return request( { url: '/mv/sublist' } )
}

//获取用户详情
export function user_detail( uid ) {
  return request( { url: '/user/detail', params: { uid } } )
}


//获取用户歌单
export function playlist( uid ) {
  return request( { url: '/user/playlist', params: { uid } } )
}


//获取用户喜欢的歌曲列表
export function likelist(uid) {
  return request( { url: '/likelist', params: { uid } } )
}
