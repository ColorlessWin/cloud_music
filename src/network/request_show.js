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

//获取热门歌单分类
export function playlist_category() {
  return request({ url: '/playlist/hot' })}


//获取热门歌单分类
export function top_playlist(cat, offset, limit, order = 'hot') {
  return request({ url: '/top/playlist', params: { cat, offset, limit, order } })
}


//获取歌单详情
export function song_list_detail( id ) {
  return request({ url: '/playlist/detail', params: { id } })
}

//获取专辑详情
export function album_detail( id ) {
  return request({ url: '/album', params: { id } })
}


//传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情
export function song_detail( ids ) {
  return request( { url: '/song/detail', params: { ids } } )
}

//传入音乐 id 获取歌词
export function lyric( id ) {
  return request( { url: '/lyric', params: { id } } )
}


//调用此接口 , 传入歌单 id 和 limit 参数 , 可获得该歌单的所有评论 ( 不需要 登录 )
export function comment_playlist(id, offset, limit ) {
  return request( { url: '/comment/playlist', params: { id, offset, limit } } )
}

// 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该音乐的所有评论 ( 不需要 登录 )
export function comment_music(id, offset, limit ) {
  return request( { url: '/comment/music', params: { id, offset, limit } } )
}

// 调用此接口 , 传入视频 id 和 limit 参数 , 可获得该视频的所有评论 ( 不需要 登录 )
export function comment_video(id, offset, limit ) {
  return request( { url: '/comment/video', params: { id, offset, limit } } )
}

// 调用此接口 , 传入视频 id 和 limit 参数 , 可获得该专辑的所有评论 ( 不需要 登录 )
export function comment_album(id, offset, limit ) {
  return request( { url: '/comment/album', params: { id, offset, limit } } )
}

// 调用此接口 , 传入视频 id 和 limit 参数 , 可获得该mv的所有评论 ( 不需要 登录 )
export function comment_mv(id, offset, limit ) {
  return request( { url: '/comment/mv', params: { id, offset, limit } } )
}


//调用此接口 , 传入歌单 id 可获取歌单的所有收藏者
export function playlist_subscribers(id, offset, limit ) {
  return request( { url: '/playlist/subscribers', params: { id, offset, limit } } )
}

//调用此接口 , 可获取视频详情
export function video_detail(type, id) {
  let config = null
  if (type === 'video') config = { url: '/video/detail', params: { id } }
  if (type === 'mv') config = { url: '/mv/detail', params: { mvid: id } }
  if (!config) console.error('not type:', type)
  return request(config)
}

//传入 mv id,可获取 mv 播放地址
export function get_video_url(type, id) {
  let url = '/'
  if (type === 'video') url = '/video/url'
  else if (type === 'mv') url = '/mv/url'
  else console.error('not type:', type)
  return request( { url: url, params: { id } } )
}

//调用此接口 , 可获取相关视频
export function related_allvideo(id) {
  return request( { url: '/related/allvideo', params: { id } } )
}

//调用此接口 , 可获取所有榜单
export function toplist() {
  return request( { url: '/toplist' } )
}

//调用此接口 , 获取歌手分类列表
export function artist_cate_list(area, type, initial, offset, limit) {
  return request( { url: '/artist/list', params: { area, type, initial, offset, limit } } )
}

//调用此接口 , 传入歌手 id, 可获得歌手部分信息和热门歌曲
export function artist_info(id) {
  return request( { url: '/artists', params: { id } } )
}

//调用此接口 , 传入歌手 id, 可获得歌手 mv 信息
export function artist_mv(id) {
  return request( { url: '/artist/mv', params: { id } } )
}

//调用此接口 , 传入歌手 id, 可获得歌手专辑内容
export function artist_album(id, offset = 0, limit = 50) {
  return request( { url: '/artist/album', params: { id, offset, limit } } )
}

//调用此接口 , 传入歌手 id, 可获得歌手描述
export function artist_desc(id) {
  return request( { url: '/artist/desc', params: { id } } )
}




