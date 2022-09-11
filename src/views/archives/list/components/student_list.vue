<template>
  <div class="container">
    <!-- 学员信息搜索区 -->
    <div class="student_search">
      <div class="student_search_font">学员信息</div>
      <a-row>
        <a-col :span="7">
          <div class="student_search_input">
            <span>学员姓名</span>
            <a-input v-model="params.realname" class="input" placeholder="请输入学员姓名" />
          </div>
        </a-col>
        <a-col :span="7">
          <div class="student_search_input">
            <span>入学时间</span>
            <a-input v-model="params.enrollmentTimeShool" class="input" placeholder="请输入学员入学时间" />
          </div>
        </a-col>
      </a-row>

      <a-row>
        <a-col :span="7">
          <div class="student_search_input">
            <span>学员手机</span>
            <a-input v-model="params.mobile" class="input" placeholder="请输入学员手机" />
          </div>
        </a-col>
        <a-col :span="7">
          <div class="student_search_input">
            <span>所在班级</span>
            <a-input v-model="params.groupId" class="input" placeholder="请输入学员所在班级" />
          </div>
        </a-col>
        <a-col :span="8">
          <a-button class="student_change student_reset" type="dashed" @click="resetFrom"
            >重置</a-button
          >
          <a-button class="student_change" type="dashed" @click="searchStudentFun(params)">查询</a-button>
        </a-col>
      </a-row>
    </div>
    <!-- 学员列表区 -->
    <div class="student_list">
      <a-upload class="uploadStudent" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
      </a-upload>
      <!-- <a-button class="student_entry" type="dashed" @click="addStudentBtn"
        >录入学员</a-button>
        <a-button class="student_entry" type="dashed" @click="pluginDownload"
        >下载录入模板</a-button> -->
      <a-table
        class="student_from"
        row-key="id"
        :pagination="pagination"
        :data="studentList"
        :bordered="false"
    
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
            data-index="groupId"
            align="center"
          />
          <a-table-column
            :title="$t('练习题次数')"
            data-index="seriesId"
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
    <!-- 编辑学员区 -->
    <div>
      <a-modal
        :visible="visibleEdit"
        title="编辑学员"
        width="640px"
        
        @ok="handleOk"
        @cancel="handleCancel"
      >
      <a-form :model="form" :style="{ width: '600px' }">
      <!-- 输入框（ID） -->
      <a-form-item field="classname" label="学员ID：">
        <a-input
          v-model="form.id"
          placeholder="请输入学员ID"
          style="width: 400px"
        />
      </a-form-item>
      <!-- 输入框（姓名） -->
      <a-form-item field="classname" label="学员姓名：">
        <a-input
          v-model="form.realname"
          placeholder="请输入学员姓名"
          style="width: 400px"
        />
      </a-form-item>
      <!-- 输入框（学生手机） -->
      <a-form-item field="classname" label="学员手机：">
        <a-input
          v-model="form.mobile"
          placeholder="请输入学员手机"
          style="width: 400px"
        />
      </a-form-item>
      <!-- 输入框（学习进度） -->
      <a-form-item field="classname" label="学习进度：">
        <a-input
          v-model="form.groupId"
          placeholder="请输入学员学习进度"
          style="width: 400px"
        />
      </a-form-item>
      <!-- 输入框（学生班级） -->
      <a-form-item field="classname" label="学员班级：">
        <a-input
          v-model="form.studentclass"
          placeholder="请输入学员班级"
          style="width: 400px"
        />
      </a-form-item>
      <!-- 输入框（学生班级） -->
      <a-form-item field="classname" label="练习次数：">
        <a-input
          v-model="form.seriesId"
          placeholder="请输入学员练习次数"
          style="width: 400px"
        />
      </a-form-item>
      <!-- 日期选择器（创建时间） -->
      <a-form-item field="time" label="入学时间：">
        <a-date-picker v-model="form.enrollmentTimeShool" style="width: 400px" />
      </a-form-item>
      
    </a-form>
      </a-modal>
  </div>
  </div>
</template>

<script>
  import mitt from '@/utils/mitt';
  
  import { getStudentAPI, deleteStudentAPI,addStudentAPI ,updateStudentAPI} from '../../../../api/studentlist'

  export default {
    components: {
     
    },
    data() {
      return {
         // 表格收集的数据
            form: {
              id: '',
              realname:'',
              mobile:'',
              professional:'',
              groupId:'',
              seriesId:'',
              enrollmentTimeShool:'',
            },
            // 搜索对象
            params:{
              realname:'',
              enrollmentTimeShool:'',
              mobile:'',
              groupId:'',
            },

            // 学生列表
            studentList: [
            ],
            // 编辑学生对象
             editStudent: {},            
            // 分页
            pagination: {
              pageSize: 3,
            },
            // 录入弹窗
            
            visibleEdit: false,
            
          }
    },

  created() {
    this.acquireStudentList();
  },
  
  methods: {
    
    async acquireStudentList() {
      const res = await getStudentAPI(
        { pageNum:1,pageSize:3},
        {
          'content-type': 'application/json',
        }
      );
      this.studentList = [...res.data.data.list]
      
  },


   editStudentFun(row) {
    this.visibleEdit = true;
    this.form.id = row.record.id
    this.form.realname = row.record.realname
    this.form.mobile = row.record.mobile
    this.form.professional = row.record.professional
    this.form.groupId = row.record.groupId
    this.form.seriesId = row.record.seriesId
    this.form.enrollmentTimeShool = row.record.enrollmentTimeShool
    },
    // 确定
   
    async handleOk() {
      const res = await updateStudentAPI({
        id: this.form.id,
        realname:this.form.realname,
        mobile:this.form.mobile,
        professional:this.form.professional, 
        groupId:this.form.groupId ,
        seriesId:this.form.seriesId,
        enrollmentTimeShool:this.form.enrollmentTimeShool
      },{
        'content-type': 'application/json'
      })
      this.visibleEdit = false;
      this.acquireStudentList()
      
    },
    
    // 取消
    handleCancel() {
      this.visibleEdit = false
    },
    // 删除按钮
    async delStudentList(row) {
      const res = await deleteStudentAPI(row.rowIndex)
      if(res.data.code !== 200) {
       this.$message.error('删除失败！')
      }else{
        this.$message.success('删除成功!')
      }
      this.acquireStudentList()
     
      
    },
    // 查询操作
    async searchStudentFun(data) {
      const res = await getStudentAPI(
        {
          pageNum:1,
          pageSize:3,
          realname:data.realname,
          enrollmentTimeShool:data.enrollmentTimeShool,
          mobile:data.mobile,
          groupId:data.mobile
        },
        {'content-type': 'application/json',})
      // 搜索成功，清空表单
      if(res.data.code === 200) {
        this.resetFrom()
      }
      this.studentList = [...res.data.data.list]
    },
    // 重置表单
    resetFrom(){
      
      this.params.realname = '';
      this.params.enrollmentTimeShool = '';
      this.params.mobile = '';
      this.params.groupId = '';
    },
    // 批量录入
    addStudentBtn() {

    },
    // 下载模板
    pluginDownload(){
     
    }
    
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

  .uploadStudent{
    margin: 28px 0 0 19px;
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

  .student_edit {
    
  }
  .title {
    margin-left: 50px;
  }

</style>
