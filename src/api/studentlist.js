import request from "../utils/request";
// 获取所有班级列表数据
export const getStudentAPI = () => {
  return request({
    url: '/Student/addList',
    method: 'POST'
  })
}

// 防止eslint报错 Prefer default export 添加的假api
export const deleteStudentAPI = (id) => {
  return request({
    url: '/Student/delete/{id}',
    method: 'POST'
  })
}
// 查询学生列表
export const queryStudentAPI = ({ realname,
enrollmentTimeShool,mobile,studentclass }) => {
  return request({
    url: '/Student/getList',
    method: 'POST',
    data: {
      realname,
      enrollmentTimeShool,
      mobile,
      studentclass 
    }
  })
}
// 创建学员
export const addStudentAPI = ({ id,realname,mobile,professional,studentclass,num,enrollmentTimeShool}) => {
  return request({
    url: '/Student/addList',
    method: 'POST',
    data:{
      id,
      realname,
      mobile,
      professional,
      studentclass,
      num,
      enrollmentTimeShool
    },
    // data的格式
    // id: '83',
    // realname:'戴龙邦',
    // mobile:'18720138586',
    // professional:'React',
    // class:'Vip14',
    // num:'100',
    // enrollmentTimeShool:'2022-08-10 08:44:11',
  })
}