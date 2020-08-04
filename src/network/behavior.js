import axios from '../utils/request'
const request = axios

// 传入 type, 资源 id, 和评论 id cid 和 是否点赞参数 t 即可给对 应评论点赞 ( 需要登录 )
export function comment_like( id, cid, type, t ) {
  let type_map = {
    music: 0,
    mv   : 1,
    playlist: 2,
    album: 3,
    video: 5 
  }
  return request({ 
    url: 'comment/like', 
    params: { 
      id, cid, 
      type: type_map[type],
      t: (t + 0)
    } 
  })
}

// 传入类型和歌单 id 可收藏歌单或者取消收藏歌单
export function playlist_sub(id, t) {
  return request( { url: '/playlist/subscribe', params: { id, t: (t + 0) } } )
}