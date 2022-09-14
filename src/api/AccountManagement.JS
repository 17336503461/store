/**
 * 
 * 科目管理 accountClassification
 * author:lx 
 * 
 * 
 */
import request from '../utils/request' 
//增加科目
export function addAccount(data) { 
  return request({
    url :'LessonSubject/add' ,
    method: 'post',
    data,
  })
}
// 获取科目列表
export function getAccount(params) {
  return request ({
    url : 'LessonSubject/getList',
    method :'get' ,
    params,
  })
}
//删除科目 
export function deleteAccount (params) {
  return request ({ 
    url :"LessonSubject/delete",
    method:"post",
    params,
  })
}
//修改科目
export function reviseAccount (params) {
  return request ({ 
    url :"LessonSubject/update",
    method:"post",
    params,
  })
}