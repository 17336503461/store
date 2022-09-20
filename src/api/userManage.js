/**
 * 
 * 用户管理
 * author:lx 
 * 
 * 
 */
 import request from '../utils/request' 
 export function getUserList(data) { 
  return request({
    url :'auth/pageLesson' ,
    method: 'post',
    data,
  })
}