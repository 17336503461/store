/**
 * 
 * author :lx 
 * 
 * 技术栈管理
 * 
 * 
 */
 import request from '../utils/request' 
 //获取技术栈分类
 export function getTechonology(data) { 
  return request({
    url :'LessonSeries/getList' ,
    method: 'post',
    data,
  })
}
//删除技术栈
export function delTechonology(data) { 
 return request({
   url :'LessonSeries/delete',
   method: 'post',
   data,
 })
}
