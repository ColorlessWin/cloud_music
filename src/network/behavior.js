import axios from '../utils/request'
const request = axios

/**
 * 传入 type, 资源 id, 和评论 id cid 和 是否点赞参数 t 即可给对 应评论点赞 ( 需要登录 )
 *
 * */
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

/**
 * 传入类型和歌单 id 可收藏歌单或者取消收藏歌单
 * @param {String | Number} id 歌单id
 * @param { Boolean } t true 收藏歌单  false取消收藏
 * */
export function playlist_sub(id, t) {
  return request( { url: '/playlist/subscribe', params: { id, t: (t + 0) } } )
}

/**
 * 传入音乐 id, 可喜欢该音乐
 * @method like
 * @param {String | Number} id 歌曲id
 * @param {Boolean} like 默认为 true 即喜欢 , 若传 false, 则取消喜欢
 * */
export function like(id, like = true) {
  return request( { url: '/like', params: { id, like } } )
}

/**
 * 可以添加歌曲到歌单或者从歌单删除某首歌曲 ( 需要登录 )
 *  @method playlist_option
 *  @param {String} op [ 'add' | 'del' ] 添加或删除
 *  @param {String | Number} pid 歌单id
 *  @param {String | Number} tracks 歌曲id
 * */
export function playlist_option(op, pid, tracks) {
  return request( { url: '/playlist/tracks', params: { op, pid, tracks } } )
}
