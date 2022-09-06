import request from "../utils/request";
// 获取所有班级列表数据
export const getClassesAPI = (data, header) => {
  return request({
    url: '/lesson/page',
    method: 'POST',
    data: data,
    headers: header
  })
}
// 防止eslint报错 Prefer default export 添加的假api
export const fakerAPI = () => {
  return request({
    url: '/faker',
    method: 'GET'
  })
}
// 创建班级
export const addClassAPI = ({classname, studentnum, time, employment, teacher}) => {
  return request({
    url: '/lesson/add',
    method: 'POST',
    data:{
      classname,
      studentnum,
      time,
      employment,
      teacher
    },
    // data的格式
    // {"classname": "vip100",
    // "studentnum": 52,
    // "time": "2022-08-04",
    // "employment": 21,
    // "teacher": "武老师"}
  })
}
