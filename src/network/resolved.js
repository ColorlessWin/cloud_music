import {
  song_detail,
  song_list_detail,
  comment_music,
  comment_playlist,
  comment_video
} from "@/network/request_show";


export async function song_tracks(sid, offset, limit) {
  let result = await song_list_detail(sid)
  let songs = result['playlist']['trackIds'].slice(offset, offset + limit).map(value => value['id'])
  songs = await song_detail(songs.join(','))
  return {
    metadata: { id: sid, total:  result['playlist']['trackCount']},
    data: songs
  }
}

export function get_comment_request(type) {
  let request = null
  if (type === 'playlist') request = comment_playlist
  if (type === 'music') request = comment_music
  if (type === 'video') request = comment_video
  if (!request) console.error('no type request')
  return request
}
