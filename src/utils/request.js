import ajax from 'axios'
import { getToken } from './token'

const axios = ajax.create({
  //硬编码  打包的时候 会发生问题 
  baseURL: import.meta.env.VITE_API_BASE_URL
})

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // console.log(config)
  if (getToken()?.length > 0 && config.headers.Authorization === undefined) {
    config.headers.Authorization = `Bearer ${getToken()}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const { data } = response;
  if ( data.code != 200 ) {
    throw new Error( data.message || "请求数据状态异常!" );
  } else {
    return response
  }
}, function (error) {
  // 对响应错误做点什么
  // console.dir(error)
  if (error.response.status === 401) {
    console.log(error);
  }
  return Promise.reject(error)
})

export default ({ url, method = 'GET', params, data, headers }) => {
  return axios({
    url,
    method,
    params,
    data,
    headers
  })
}
