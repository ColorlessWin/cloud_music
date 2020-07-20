import {
  song_detail,
  song_list_detail
} from "@/network/request_show";


export async function song_tracks(sid, offset, limit) {
  let result = await song_list_detail(sid)
  result = result['playlist']['trackIds'].slice(offset, offset + limit).map(value => value['id'])
  result = await song_detail(result.join(','))
  return result
}
