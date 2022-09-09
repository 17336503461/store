<template>
  <div class="container">
    <!-- 学员信息搜索区 -->
    <div class="student_search">
      <div class="student_search_font">学员信息</div>
      <a-row>
        <a-col :span="7">
          <div class="student_search_input">
            <span>学员姓名</span>
            <a-input v-model="params.searchRealname" class="input" placeholder="请输入学员姓名" />
          </div>
        </a-col>
        <a-col :span="7">
          <div class="student_search_input">
            <span>入学时间</span>
            <a-input v-model="params.searchenrollmentTimeShool" class="input" placeholder="请输入学员入学时间" />
          </div>
        </a-col>
      </a-row>

      <a-row>
        <a-col :span="7">
          <div class="student_search_input">
            <span>学员手机</span>
            <a-input v-model="params.searchMobile" class="input" placeholder="请输入学员手机" />
          </div>
        </a-col>
        <a-col :span="7">
          <div class="student_search_input">
            <span>所在班级</span>
            <a-input v-model="params.searchStudentClass" class="input" placeholder="请输入学员所在班级" />
          </div>
        </a-col>
        <a-col :span="8">
          <a-button class="student_change student_reset" type="dashed" @click="resetFrom"
            >重置</a-button
          >
          <a-button class="student_change" type="dashed" @click="searchStudentFun">查询</a-button>
        </a-col>
      </a-row>
    </div>
    <!-- 学员列表区 -->
    <div class="student_list">
      <a-button class="student_entry" type="dashed" @click="addStudentFun"
        >录入学员</a-button
      >
      <a-table
        class="student_from"
        row-key="id"
        :loading="loading"
        :pagination="pagination"
        :data="studentList"
        :bordered="false"
        
        @page-change="onPageChange"
      >
        <template #columns>
          <a-table-column
            :title="$t('ID')"
            data-index="id"
            align="center"
          />
          <a-table-column
            :title="$t('姓名')"
            data-index="realname"
            align="center"
          />
          <a-table-column
            :title="$t('手机号码')"
            data-index="mobile"
            align="center"
          />
          <a-table-column
            :title="$t('学习进度')"
            data-index="professional"
            align="center"
          />
          <a-table-column
            :title="$t('学员班级')"
            data-index="studentclass"
            align="center"
          />
          <a-table-column
            :title="$t('练习题次数')"
            data-index="num"
            align="center"
          />
          <a-table-column
            :title="$t('入学时间')"
            data-index="enrollmentTimeShool"
            align="center"
          />
         
          <a-table-column
            :title="$t('操作')"
            data-index="operations"
            align="center"
          >
            <template #cell="row">
              <a-button v-permission="['admin']" type="text" size="small" @click="editStudentFun(row)">
                {{ $t('编辑') }}
              </a-button>
              <a-button v-permission="['admin']"  type="text" size="small" @click="delStudentList(row)">
                {{ $t('删除') }}
              </a-button>
            </template>
          </a-table-column>
        </template>
      </a-table>
    </div>
    <!-- 新增学员区 -->
    <div v-show="visible" class="mask">
      <div class="StudentIpt">
        <AddStudent
          :teacherlist="teacherList"
          @confirmfun="confirmfun"
          @cancelfun="cancelfun"
        ></AddStudent>
      </div>
    </div>
    <!-- 编辑学员区 -->
    <div v-show="visibleEdit" class="mask">
      <div class="StudentIpt">
        <EditStudent
          :teacherlist="teacherList"
          @confirmfun="confirmfun"
          @cancelfun="cancelfun"
        ></EditStudent>
      </div>
  </div>
  </div>
</template>

<script>
  import AddStudent from './student_add.vue'
  import EditStudent from './student_edit.vue'
  import { getStudentAPI, deleteStudentAPI,queryStudentAPI,addStudentAPI } from '../../../../api/studentlist'

  export default {
    components: {
      AddStudent,
      EditStudent
    },
    data() {
      return {
            // 搜索对象
            params:{
              searchRealname:'',
              searchenrollmentTimeShool:'',
              searchMobile:'',
              searchStudentClass:'',
            },
                

            // 学生列表
            studentList: [
              {
                id: '83',
                realname:'戴龙邦',
                mobile:'18720138586',
                professional:'React',
                studentclass:'Vip14',
                num:'100',
                enrollmentTimeShool:'2022-08-10 08:44:11',
              },
              {
                id: '83',
                realname:'帅哥',
                mobile:'18720138586',
                professional:'React',
                studentclass:'Vip14',
                num:'100',
                enrollmentTimeShool:'2022-08-10 08:44:11',
              },
              {
                id: '83',
                realname:'美女',
                mobile:'18720138586',
                professional:'React',
                studentclass:'Vip14',
                num:'100',
                enrollmentTimeShool:'2022-08-10 08:44:11',
              },
              {
                id: '83',
                realname:'戴龙城',
                mobile:'18720138586',
                professional:'React',
                studentclass:'Vip14',
                num:'100',
                enrollmentTimeShool:'2022-08-10 08:44:11',
              }
            ],
            // 新的学生列表
             newStudentList:[],            
            // 分页
            pagination: {
              pageSize: 3,
            },
            // 录入弹窗
            visible: false,
            visibleEdit: false,
            teacherList:[]
          }
    },

  created() {
    this.acquireStudentList();
  },
  methods: {
    async acquireStudentList() {
      const data = await getStudentAPI()
      console.log(data);
      
  },
    // 添加学员对话框
    addStudentFun() {
      this.visible = true;
    },
    editStudentFun(row) {
      this.visibleEdit = true
      console.log(row.record);
    },
    // 确定
    confirmfun() {
      this.visible = false
      this.visibleEdit = false
    },
    // 取消
    cancelfun() {
      this.visible = false
      this.visibleEdit = false
    },
    // 删除按钮
    delStudentList(row) {
      console.log(row);
    },
    // 重置表单
    resetFrom(){
      this.searchRealname = '';
      this.searchenrollmentTimeShool = ''
      this.searchMobile =''
      this.searchStudentClass =''
    },
    // 搜索
    // searchStudentFun(){
    //   // 输入姓名
    //   if(this.searchRealname !== ''){
    //     this.newStudentList = this.studentList.filter((item)=> {
    //       return item.realname.includes(this.searchRealname)
    //     })
    //   }
    // }
  },

  }
</script>

<style scoped lang="less">
  .container {
    background-color: rgba(255, 255, 255, 100);
    overflow: hidden;
    height: 100%;
    border: 1px solid var(--color-neutral-4);
  }
  // 学员信息搜索框
  .student_search {
    margin: 0 -20px;
    height: 167px;
    border-bottom: 1px solid #bbbbbb;
    .student_search_font {
      font-size: 20px;
      margin: 30px 0 0 42px;
    }
    .student_search_input {
      margin-left: 42px;
      float: left;
      display: block;
      color: rgba(16, 16, 16, 100);
      font-size: 14px;
      text-align: left;
      height: 66px;
      line-height: 66px;
    }
  }

  .input {
    margin-left: 54px;
    width: 200px;
    height: 30px;
    color: rgba(136, 136, 136, 100);
    font-size: 14px;
    text-align: left;
    font-family: Microsoft Yahei;
    border: 1px solid rgba(187, 187, 187, 100);
    background-color: rgba(255, 255, 255, 100);
  }
  .student_change {
    margin: 20px 0 0 49px;
    width: 80px;
    height: 30px;
    border-radius: 4px;
    background-color: rgba(164, 173, 179, 100);
    color: rgba(255, 255, 255, 100);
    font-size: 14px;
    text-align: center;
    font-family: Microsoft Yahei;
    border: 1px solid #bbbbbb;
  }
  .student_reset {
    margin-left: 86px;
    background-color: rgba(255, 255, 255, 100);
    color: rgba(16, 16, 16, 100);
    font-size: 14px;
    text-align: center;
    font-family: Microsoft Yahei;
    border: 1px solid rgba(187, 187, 187, 100);
  }

  .student_entry {
    height: 30px;
    margin: 33px 0 0 24px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 100);
    color: rgba(16, 16, 16, 100);
    font-size: 14px;
    text-align: center;
    font-family: Microsoft Yahei;
    border: 1px solid rgba(187, 187, 187, 100);
  }
  .student_from {
    margin: 27px 20px 0 20px;
  }

  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1000;

    .StudentIpt {
      width: 700px;
      height: 550px;
      background-color: rgb(255, 255, 255);
      margin: auto;
      margin-top: 120px;
      padding-top: 10px;
      padding-left: 10px;
      border-radius: 20px;
    }
  }

</style>
