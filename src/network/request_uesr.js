import axios from '../utils/request'
const request = axios

//获取用户详情
export function user_detail( uid ) {
  return request( { url: '/user/detail', params: { uid } } )
}
