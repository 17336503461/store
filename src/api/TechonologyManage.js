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
    //不会拼接 字符 串路由传参
    data,
  })
}
//删除技术栈
export function delTechonology(data) { 
 return request({
   url :'LessonSeries/delete/' + data,
   method: 'post',
   data,
 })
}
//添加技术栈
export function addTechonology(data) { 
  return request({
    url :'LessonSeries/add',
    method: 'post',
    data,
  })
 }
