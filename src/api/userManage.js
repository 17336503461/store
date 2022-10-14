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
//删除
export function deleteUser (data) {
  return request ({ 
    url :"roles/delete",
    method:"get",
    data,
  })
}
//add
export function addUser (data) {
  return request ({ 
    url :"roles/add",
    method:"post",
    data ,
  })
}