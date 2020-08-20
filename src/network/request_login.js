import axios from '../utils/request'
import md5 from 'js-md5'
const request = axios

//手机号登录
export function login_cellphone( cellphone, password, hex = true ) {
  let params = { phone: cellphone }
  if (hex) params['md5_password'] = md5.hex(password)
  else params['password'] = password

  return request( { url: '/login/cellphone', params } )
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
