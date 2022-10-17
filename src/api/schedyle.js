import request from "../utils/request";
// 获取所有班级列表数据
export const getschedyleClass = (data) => {
    return request({
        url: '/lesson/getList',
        method: 'get',
        data,
    })
}

//获取所有课程 


export const getschedyleLesson = (data) => {
    return request({
        url: '/LessonSeries/getList',
        method: 'get',
        data
    })
}

//获取所有科目
export const getschedyleSub = (data) => {
    return request({
        url: '/LessonSubject/select',
        method: 'post',
        params: data
    })
}


//获取所有老师
export const getschedyleTea = (data = {}) => {
    return request({
        url: '/auth/getList',
        method: 'post',
        data
    })
}

//提交表单
export const Sumbit = (data) => {
    return request({
        url: '/Schedule/reservation',
        method: 'post',
        data
    })
}