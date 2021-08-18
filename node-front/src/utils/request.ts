import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000000 // request timeout
})

// 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    const res = response.data
    if (response.headers['content-type'] === 'application/octet-stream') {
      return response
    }
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
