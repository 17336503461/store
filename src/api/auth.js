import request from '../utils/request'
import qs from 'qs'
//用户名登录
export function loginByUserNameVerify(data) { 
  return request({
    url :'/users/loginByUserNameVerify' ,
    method: 'post',
    data:qs.stringify(data),
    headers:{"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}
  })
}

export function getUserInfobyUsername() {
  return request({
    url :'/users/byUsernameInfo' ,
    method: 'get',
    headers:{"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}
  })
}