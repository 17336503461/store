import request from '../utils/request' 
//用户名登录
export function loginByUserNameVerify(data) { 
  return request({
    url :'/users/loginByUserNameVerify' ,
    method: 'post',
    data,
  })
}