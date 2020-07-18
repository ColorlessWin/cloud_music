import axios from '../utils/request'
const request = axios

export function user_detail(uid) {
  return request( { url: '/user/detail', params: { uid } } )
}
