/**
 * 
 * 科目管理 accountClassification
 * 
 * 
 * 
 */
import request from '../utils/request' 
//增加科目
export function addAccount(params) { 
  return request({
    url :'LessonSubject/add' ,
    method: 'post',
    params,
  })
}
// 获取科目列表
export function getAccount(data) {
  return request ({
    url : 'LessonSubject/getList',
    method :'post' ,
    data,
  })
}
//删除科目 
export function deleteAccount (params) {
  return request ({ 
    url :"LessonSubject/delete",
    method:"post" ,
    params,
  })
}
