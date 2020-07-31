import axios from 'axios'
import cookie from "./cookie";
const HOST = 'http://localhost'
// const HOST = 'http://192.168.10.6'
const PORT = 3000

const instance = axios.create(
  { baseURL: `${HOST}:${PORT}`,  timeout: 5000 })

instance.interceptors.request.use(config => {
  if (!config.params) config.params = {}
  if (!config.params.cookie) config.params.cookie = cookie.value
  return config
}, error => {
  console.log(error)
})

instance.interceptors.response.use(result => {
  return result.data
})

export default instance
