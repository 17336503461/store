import request from "../utils/request"
// 获取所有班级列表数据
export const getStudentAPI = (data, header) => {
  return request({
    url: '/Student/getList',
    method: 'POST',
    data,
    headers: header
  })
}

// 删除学生
export const deleteStudentAPI = (data,header) => {
  return request({
    url: `/Student/delete/${data}`,
    method: 'POST',
    data,
    headers: header
  })
}
// 查询学生列表
export const updateStudentAPI = (data,header) => {
  return request({
    url: '/Student/update',
    method: 'POST',
    data,
    headers: header
  })
}
// 创建学员
export const addStudentAPI = (data) => {
  return request({
    url: '/Student/addList',
    method: 'POST',
    data
  })
}