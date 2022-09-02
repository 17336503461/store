<template>
  <div class="container">
    <!-- 学员信息搜索区 -->
    <div class="student_search">
      <div class="student_search_font">学员信息</div>
       <a-row>
        <a-col :span="7">
          <div class="student_search_input">
            <span>学员姓名</span>
            <a-input class="input" placeholder="单行输入" />
          </div>
        </a-col>
        <a-col :span="7">
          <div class="student_search_input">
            <span>入学时间</span>
            <a-input class="input" placeholder="单行输入" />
          </div>
        </a-col>
      </a-row>
      
      <a-row>
        <a-col :span="7">
          <div class="student_search_input">
            <span>学员手机</span>
            <a-input class="input" placeholder="单行输入" />
          </div>
        </a-col>
        <a-col :span="7">
          <div class="student_search_input">
            <span>所在班级</span>
            <a-input class="input" placeholder="单行输入" />
          </div>
        </a-col>
        <a-col :span="8">
          <a-button class="student_change student_reset" type="dashed">重置</a-button>
          <a-button class="student_change" type="dashed">查询</a-button>
        </a-col>
      </a-row>
    </div>
    <!-- 学员列表区 -->
    <div class="student_list">
      <a-button class="student_entry" type="dashed" @click="addStudentFun">录入学员</a-button>
      <a-space class="student_from">
        <a-table
            :columns="student_list_columns"
            :data="studentList"
            :sticky-header="100"
            :pagination="pagination"
          />
      </a-space> 
    </div>
    <!-- 新增学员区 -->
    <div v-show="visible" class="mask">
      <div class="addClassIpt">
        <AddStudent
          :teacherlist="teacherList"
          @confirmfun="confirmfun"
          @cancelfun="cancelfun"
        ></AddStudent>
      </div>
    </div>
  </div>
  
</template>

<script >
  import AddStudent from './student_add.vue'

  export default {
    components: {
      AddStudent
    },
    data() {
      return {
            student_list_columns: [
              {
                title: 'ID',
                dataIndex: 'id',
                width: 65,
              },
              {
                title: '姓名',
                dataIndex: 'id',
                width: 150,
              },
              {
                title: '手机号码',
                dataIndex: 'id',
                width: 150,
              },
              {
                title: '学习进度',
                dataIndex: 'id',
                width: 150,
              },
              {
                title: '学员班级',
                dataIndex: 'id',
                width: 150,
              },
              {
                title: '练习题次数',
                dataIndex: 'id',
                width: 150,
              },
              {
                title: '操作',
                dataIndex: 'id',
                width: 150,
              },
            ],
            // 学生列表
            studentList: [],
            // 分页
            pagination: {
              pageSize: 3,
            },
            // 录入弹窗
            visible: false,
            teacherList:[]
          }
    },

  created() {
    this.acquireStudentList();
  },
  methods: {
    acquireStudentList() {
    },
    // 添加学员对话框
    addStudentFun() {
      this.visible = true;
    },
    // 确定
    confirmfun() {
      this.visible = false
    },
    // 取消
    cancelfun() {
      this.visible = false
    }
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
      border-bottom: 1px solid #BBBBBB;
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
      }
    }
    
    .input {
      margin:20px 0 0 58px;
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
      border: 1px solid #BBBBBB;
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
      margin: 27px 0 0 20px;
    }

    .mask {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 1000;
      .addClassIpt {
        width: 700px;
        height: 450px;
        background-color: rgb(255, 255, 255);
        margin: auto;
        margin-top: 120px;
        padding-top: 10px;
        padding-left: 10px;
        border-radius: 20px;
      }
}
  
</style>