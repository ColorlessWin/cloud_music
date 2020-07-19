import axios from '../utils/request'
const request = axios

//手机号登录
export function login_cellphone( cellphone, password ) {

  return request(
    { url: '/login/cellphone', params: { phone: cellphone, password: password } } )
}

//刷新登录状态
export function login_refresh()
  { return request( { url: 'login/refresh' } ) }


//获取登录状态
export function login_status()
  { return request( { url: '/login/status' } ) }


//退出登录
export function logout()
  { return request( { url: '/logout' } ) }
