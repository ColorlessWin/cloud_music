import {
  song_detail,
  song_list_detail
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
