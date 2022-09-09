import request from "../utils/request";
// 获取所有班级列表数据
export const getClassesAPI = (data, header) => {
  return request({
    url: '/lesson/page',
    method: 'POST',
    data,
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
export const addClassAPI = ({ classname, studentnum, employment, teacher }) => {
  return request({
    url: '/lesson/add',
    method: 'POST',
    data: {
      title: classname,
      currentNumber: studentnum,
      employment,
      headmaster: teacher,
    },
    // data的格式
    // {
    //   "currentNumber": 0,
    //   "employment": 0,
    //   "headmaster": "string",
    //   "title": "string"
    // }
  })
}
