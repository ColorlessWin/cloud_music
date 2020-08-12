import axios from 'axios'
import cookie from "./cookie";
const HOST = process.env.VUE_APP_HOST || 'http://localhost'
const PORT = process.env.VUE_APP_PORT || 3000

const instance = axios.create({
  baseURL: `${HOST}:${PORT}`,
  timeout: 5000
})

instance
  .interceptors
  .request
  .use(config => {
    if (!config.params) config.params = {}
    if (!config.params.cookie) config.params.cookie = cookie.value
    return config
}, error => {
  console.log(error)
})

instance
  .interceptors
  .response
  .use(result => result.data)

export default instance
