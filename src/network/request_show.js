import axios from '../utils/request'
const request = axios


//获取主页轮播图
export function main_banner( type ) {
  return request({ url: '/banner', params: { type: type } }) }


//获取热搜列表(简略)
export function search_hot() { return request({ url: '/search/hot'}) }


//获取热搜列表(详情)
export function search_hot_detail() { return request({ url: '/search/hot/detail'}) }


//获取搜索建议
export function search_suggest( keywords, type ) {
  return request({ url: '/search/suggest', params: { keywords , type} }) }


//传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开
export function search( keywords, offset, limit , type) {
  return request({ url: '/search', params: { keywords , offset, limit, type } }) }

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

//传入音乐 id 获取歌词
export function lyric( id ) {
  return request( { url: '/lyric', params: { id } } )
}


//调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该音乐的所有评论 ( 不需要 登录 )
export function comment_playlist(id, offset, limit ) {
  return request( { url: '/comment/playlist', params: { id, offset, limit } } )
}

// 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该音乐的所有评论 ( 不需要 登录 )
export function comment_music(id, offset, limit ) {
  return request( { url: '/comment/music', params: { id, offset, limit } } )
}


//调用此接口 , 传入歌单 id 可获取歌单的所有收藏者
export function playlist_subscribers(id, offset, limit ) {
  return request( { url: '/playlist/subscribers', params: { id, offset, limit } } )
}


