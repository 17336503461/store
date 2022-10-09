<template>
  <div class="container">
    <!-- 学员信息搜索区 -->
    <div class="student_search">
      <div class="student_search_font">学员信息</div>
      <a-row>
        <a-col :span="10">
          <div class="student_search_input">
            <span>学员姓名</span>
            <a-input
              v-model="params.realname"
              class="input"
              placeholder="请输入学员姓名"
            />
          </div>
        </a-col>
        <a-col  :span="10">
          <div class="student_search_input">
            <span>入学时间</span>
            <a-input
              v-model="params.enrollmentTimeShool"
              class="input"
              placeholder="请输入学员入学时间"
            />
          </div>
        </a-col>
        <a-col  :span="4"></a-col>
      </a-row>
      <a-row>
        <a-col :span="10">
          <div class="student_search_input">
            <span>学员手机</span>
            <a-input
              v-model="params.mobile"
              class="input"
              placeholder="请输入学员手机"
            />
          </div>
        </a-col>
        <a-col :span="10">
          <div class="student_search_input">
            <span>所在班级</span>
            <a-input
              v-model="params.groupId"
              class="input"
              placeholder="学员所在班级"
            />
          </div>
        </a-col>
        <a-col :span="4"></a-col>
      </a-row>
      <a-row>
        <a-col style="text-align: right; margin-bottom: 20px;">
        <a-button
            class="student_change student_reset"
            type="dashed"
            @click="resetFrom"
            >重置</a-button
          >
          <a-button
            class="student_change"
            type="dashed"
            @click="searchStudentFun(params)"
            >查询</a-button
          >
          </a-col>
      </a-row>
    </div>
    <!-- 学员列表区 -->
    <div class="student_list">
      <div type="primary" class="uploadStudent">
        <input
          type="file"
          class="input_addstudent"
          accept="application/msexcel"
          @change="fileChange"
        />
        <a-button type="primary" class="download_model">
          <a
            href="/addStudentList.xlsx"
            download="addStudentList.xlsx"
            style="text-decoration: none"
            >下载模板</a
          >
      </a-button>
      </div>

      <a-table
        class="student_from"
        row-key="id"
        :data="studentList"
        :bordered="false"
        :pagination="false"
      >
        <template #columns>
          <a-table-column :title="$t('ID')" data-index="id" align="center" />
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
            data-index="subjectName"
            align="center"
          />
          <a-table-column
            :title="$t('学员班级')"
            data-index="groupTitle"
            align="center"
          />
          <a-table-column
            :title="$t('练习题次数')"
            data-index="practice"
            align="center"
          />
          <a-table-column
            :title="$t('入学时间')"
            data-index="registerTime"
            align="center"
          />

          <a-table-column
            :title="$t('操作')"
            data-index="operations"
            align="center"
          >
            <template #cell="row">
              <a-button
                v-permission="['admin']"
                type="text"
                size="small"
                @click="editStudentFun(row)"
              >
                {{ $t('编辑') }}
              </a-button>
              <a-button
                v-permission="['admin']"
                type="text"
                size="small"
                @click="delStudentList(row)"
              >
                {{ $t('删除') }}
              </a-button>
            </template>
          </a-table-column>
        </template>
      </a-table>
      <a-pagination class="pagination" :total="params.total" show-page-size/>
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
            <a-date-picker
              v-model="form.enrollmentTimeShool"
              style="width: 400px"
              value-format="YYYY-MM-DD HH:mm:ss"
            />
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
  </div>
</template>

<script lang="js">
  import qs from 'qs';
  import _ from 'lodash'
  import * as XLSX from 'xlsx';
  import {
    getStudentAPI,
    deleteStudentAPI,
    addStudentAPI,
    updateStudentAPI,
  } from '../../../../api/studentlist';

  export default {
    components: {},
    data() {
      return {
        // 表格收集的数据
        form: {
          id: '',
          realname: '',
          mobile: '',
          professional: '',
          groupId: '',
          seriesId: '',
          enrollmentTimeShool: '',
        },
        // 搜索对象
        params: {
          realname: '',
          enrollmentTimeShool: '',
          mobile: '',
          groupId: '',
          pageNum: 1,
          pageSize: 10,
          total:0
        },

        // 学生列表
        studentList: [],
        // 编辑学生对象
        editStudent: {},
        // 录入弹窗

        visibleEdit: false,
      };
    },

    created() {
      this.acquireStudentList();
    },

    methods: {
      async acquireStudentList() {
        const res = await getStudentAPI(
          qs.stringify(  this.omitBy(this.params) )
        );
        this.studentList = res.data.data.list
        this.params.total = res.data.data.total
      },

      editStudentFun(row) {
        this.visibleEdit = true;
        this.form.id = row.record.id;
        this.form.realname = row.record.realname;
        this.form.mobile = row.record.mobile;
        this.form.professional = row.record.professional;
        this.form.groupId = row.record.groupId;
        this.form.seriesId = row.record.seriesId;
        this.form.enrollmentTimeShool = row.record.enrollmentTimeShool;
      },
      // 确定
      pluginDownload() {
        window.location.href = '../addStudentList.xlsx';
      },
      async handleOk() {
        const res = await updateStudentAPI(
          {
            id: this.form.id,
            realname: this.form.realname,
            mobile: this.form.mobile,
            professional: this.form.professional,
            groupId: this.form.groupId,
            seriesId: this.form.seriesId,
            enrollmentTimeShool: this.form.enrollmentTimeShool,
          },
          {
            'content-type': 'application/json',
          }
        );
        this.visibleEdit = false;
        this.acquireStudentList();
      },

      // 取消操作
      handleCancel() {
        this.visibleEdit = false;
      },
      // 删除按钮
      async delStudentList(row) {
        const res = await deleteStudentAPI(row.record.id);
        if (res.data.code !== 200) {
          this.$message.error('删除失败！');
        } else {
          this.$message.success('删除成功!');
        }
        this.acquireStudentList();
      },
      // 查询操作
      async searchStudentFun(data) {
        const res = await getStudentAPI(
          qs.stringify( this.omitBy(data) )
        );
      
        // 搜索成功，清空表单
        if (res.data.code === 200) {
          this.studentList = res.data.data.list
          this.params.total = res.data.data.total
        }
        
      },
      omitBy(data){
        return _.omitBy(data, function (item) {
            return !item
          })
      },
      // 重置表单
      resetFrom() {
        this.params.realname = '';
        this.params.enrollmentTimeShool = '';
        this.params.mobile = '';
        this.params.groupId = '';
      },
      fileChange(e) {
        // file 对象数组
        if (e.target.files.length) {
          const file = e.target.files[0];
          this.doReadExcelFile(file);
        }
      },
      async doReadExcelFile(file) {
        this.readFile(file).then((dataBinary) => {
          const workBook = XLSX.read(dataBinary, {
            type: 'binary',
            cellDates: true,
          });
          const workSheet = workBook.Sheets[workBook.SheetNames[0]];
          const data = XLSX.utils.sheet_to_json(workSheet);
          const res = addStudentAPI(data)
          this.acquireStudentList()
        });
      },
      readFile(file) {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsBinaryString(file);
          reader.onload = (ev) => {
            resolve(ev.target.result);
          };
        });
      }
    },
  };
</script>

<style scoped lang="less">
  .pagination{
    float: right;
    margin-top: 10px;
  }
  .container {
    background-color: rgba(255, 255, 255, 100);
    overflow: hidden;
    height: 100%;
    border: 1px solid var(--color-neutral-4);
  }
  // 学员信息搜索框
  .student_search {
    margin: 0 -20px;
    height: auto;
    border-bottom: 1px solid #bbbbbb;
    .student_search_font {
      font-size: 20px;
      margin: 30px 0 0 42px;
    }
    .student_search_input {
      width: auto;
      margin-left: 30px;
      float: left;
      display:inline-flex;
      color: rgba(16, 16, 16, 100);
      font-size: 14px;
      text-align: left;
      height: 66px;
      line-height: 66px;
    }
  }

  .input {
    margin-left: 20px;
    margin-top: 18px;
    width: auto;
    height: 30px;
    color: rgba(136, 136, 136, 100);
    font-size: 14px;
    text-align: left;
    font-family: Microsoft Yahei;
    border: 1px solid rgba(187, 187, 187, 100);
    background-color: rgba(255, 255, 255, 100);
    input {
      width: auto;
    }
  }
  .student_change {
    margin: 0px 30px 0 0px;
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

  .uploadStudent {
    display: block;
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
  .input_addstudent {
    border: none;
  }
  .download_model {
    float: right;
  }
  .title {
    margin-left: 50px;
  }
</style>
