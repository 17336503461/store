<template>
  <div>
    <div>
      <h1>科目管理</h1>
    </div>
    <!-- search -->
    
    <div>
      <a-space>
        <span class="linemarginleft linemarginright">技术栈：</span>
        <SearchSubject></SearchSubject>
        <!-- 搜索按钮 -->
        <a-button
          class="searchbutton"
          type="primary"
          size="small"
          @click="searchClassFun"
          >搜索</a-button
        >
        </a-space>

    </div>
    <!-- 列表部分 -->
    <div>
      <div class="addclassbtn">
        <!-- 创建班级按钮（跳转路由/创建蒙层） -->
        <a-button type="primary" @click="addClassFun">创建科目</a-button>
      </div>
      <div>
        <a-table
        row-key="id"
        :loading="loading"
        :pagination="pagination"
        :data="classList"
        :bordered="false"
        @page-change="onPageChange"
      >
        <template #columns>
          <a-table-column
            :title="$t('ID')"
            data-index="id"
          />
          <a-table-column
            :title="$t('科目名')"
            data-index="name"
          />
          <a-table-column
            :title="$t('技术栈')"
            data-index="technology"
          />
          <a-table-column
            :title="$t('创建时间')"
            data-index="createdTime"
          />
          <a-table-column
            :title="$t('操作')"
            data-index="operations"
          >
            <template #cell="row">
              <a-button v-permission="['admin']" type="text" size="small">
                {{ $t('编辑') }}
              </a-button>
              <a-button @click="delList(row)" v-permission="['admin']" type="text" size="small">
                {{ $t('删除') }}
              </a-button>
            </template>
          </a-table-column>
        </template>
      </a-table>
      </div>
      
    </div>
    
    <div v-show="visible" class="mask">
      <div class="addClassIpt">
        <AddClass
          :teacherlist="teacherList"
          @confirmfun="confirmfun"
          @cancelfun="cancelfun"
        ></AddClass>
      </div>
    </div>
    
  </div>
</template>

<script>

import { getClassesAPI, addClassAPI } from '../../../../api/classmanage';
import SearchSubject from  "./Search-subject.vue"
import AddClass from  './add-class.vue'
export default {
  components:{
    SearchSubject,
    AddClass,
  },
  data() {
    return {
      // 班级列表表头（注释掉width实现自适应）
      columns: [
        // {
        //   title: 'ID',
        //   dataIndex: 'id',
        //   width: 70,
        // },
        // {
        //   title: '科目名',
        //   dataIndex: 'classname',
        //   // width: 140
        // },
        // {
        //   title: '技术栈',
        //   dataIndex: 'studentnum',
        //   // width: 140
        // },
        // {
        //   title: '创建时间',
        //   dataIndex: 'time',
        //   // width: 140
        // },
        // {
        //   title: '操作',
        //   dataIndex: 'employment',
        //   // width: 140
        // },
      ],
      // 班级列表数据(classList为展示数据)
      allClassList: [],
      classList: [{
        id : 82,
        name: "Vue" ,
        technology:"Web开发前端",
        createdTime :"2022-03-07 10:24",
      },{
        id : 21,
        name: "HTML/JavaScript" ,
        technology:"Web开发前端",
        createdTime :"2021-08-08 18:07",
      },{
        id : 37,
        name: "Linux/MQ" ,
        technology:"WEB开发后端",
        createdTime :"2021-06-12 22:28",
      }],
      // 创建新班级数据
      newClassInfo: {},
      // 下拉框（班主任）数据
      teacherList: [],
      // 搜索关键字和下拉关键词
      keyword: '',
      keyteacher: '',
      // 班级列表分页
      pagination: {
        pageSize: 5,
      },
      // 创建班级弹窗是否可见
      visible: false,
    };
  },
  methods:{
    cancelfun() {
        this.visible =false 
    },
    addClassFun() {
      this.visible = true;
    },
  }
}
</script>

<style scoped lang="less">
.searchbutton {
  margin-left: 84px;
}
.linemarginleft {
  margin-right: 37px;
}
.linemarginright {
  margin-left: 37px;
}
.addclassbtn {
  margin-top: 28px;
  margin-bottom: 24px;
  margin-left: 5px;
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
    height: 200px;
    background-color: rgb(255, 255, 255);
    margin: auto;
    margin-top: 120px;
    padding-top: 10px;
    padding-left: 10px;
    border-radius: 20px;
  }
}
</style>