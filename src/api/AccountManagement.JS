/**
 * 
 * 科目管理 accountClassification
 * 
 * 
 * 
 */
import request from '../utils/request' 
export function addAccount(data) { 
  return request({
    url :'LessonSubject/add' ,
    method: 'post',
    data,
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
