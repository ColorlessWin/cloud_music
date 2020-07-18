import axios from '../utils/request'
const request = axios

export function login_cellphone( cellphone, password ) {

  return request(
    { url: '/login/cellphone', params: { phone: cellphone, password: password } } )
}

export function login_refresh()
  { return request( { url: 'login/refresh' } ) }

export function login_status()
  { return request( { url: '/login/status' } ) }

export function logout()
  { return request( { url: '/logout' } ) }
