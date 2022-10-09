<template>
  <div class="top">
      <div class="Info">学生信息</div>
      <div class="InfoR">
        <div class="InfoRName">{{currentUser.realname}}</div>
        <div class="InfoRTel">{{currentUser.mobile}}</div>
        <div class="InfoRPhoto"></div>
      </div>
    </div>
  <hr
    style="filter: alpha(opacity=70, finishopacity=0, style=2)"
    color="gray"
    SIZE="4"
  />
  <a-table :columns="columns" :data="resultData.data" :pagination="false"/>
</template>

<script lang="js">
import qs from 'qs'
  import { onBeforeMount, reactive } from 'vue';
  import {
    getStudentAPI
  } from '../../../../api/studentlist.js';
  export default {
    setup() {
      const columns = [
        {
          title: '入学时间',
          dataIndex: 'registerTime',
        },
        {
          title: '学习科目',
          dataIndex: 'seriesTitle',
        },
        {
          title: '应届',
          dataIndex: 'enrollmentTimeShool',
        },
        {
          title: '专业',
          dataIndex: 'professional',
        },
        {
          title: '当前进度',
          dataIndex: 'subjectName',
        },
        {
          title: '招生老师',
          dataIndex: 'teacherName',
        },
        {
          title: '所在班级',
          dataIndex: 'groupTitle',
        },
        {
          title: '身份证',
          dataIndex: 'idCard',
        },
        {
          title: '毕业学校',
          dataIndex: 'university',
        },
      ];
      const currentUser = reactive({
        realname:"",
        mobile:""
      })
      const resultData = reactive({
        data:[]
      });
      const fetchData = async (
        params = {}
      ) => {
          try {
            const { data } = await getStudentAPI(params);
            const user = data.data.list.pop()
            resultData.data.push( user );
            currentUser.realname = user.realname
            currentUser.mobile = user.mobile
          } catch (err) {
          } finally {
          }
      }
      onBeforeMount(() => {
        fetchData(qs.stringify({ id: 28, pageSize: 1 }))
      })
      return {
        columns,
        resultData,
        currentUser
      };
    },
  };
</script>
<style  scoped lang="less">

  .top{
    width: 90%;
    margin-left: 5%;
    height: 200px;
  }
  .top .Info{
    margin-top: 30px;
    font-size: 25px;
  }
  .top .InfoR{
    margin-right: 5%;
    width: 180px;
    height: 130px;
    float: right;
    position: relative;
  }

  .top .InfoR .InfoRName{
    float: left;
    position: absolute;
    display: inline;
    margin-top: 5px;
    font-size: 20px;
  }
  .top .InfoR .InfoRTel{
    float: left;
    position: absolute;
    margin-top: 40px;
    font-size: 20px;
    margin-right: 30%;
  }
  .top .InfoR .InfoRPhoto{
    position: absolute;
    display: inline;
    float: right;
    width: 90px;
    height: 130px;
    margin-left: 70%;
    background-color: black;
  }
</style>