<template>
  <div>
    <div>
      <h1>科目管理</h1>
    </div>
    <!-- search -->
    <SearchSubject></SearchSubject>
    <div>
      <a-space>
        <span class="linemarginleft linemarginright">技术栈：</span>
    
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
        <a-button type="primary" @click="1">创建科目</a-button>
      </div>
      <a-space>
        <!-- 班级列表 -->
        <a-table
          :columns="classcolumns"
          :data="classList"
          :sticky-header="100"
          :pagination="pagination"
        />
      </a-space>
    </div>
    
  </div>
</template>

<script>

import { getClassesAPI, addClassAPI } from '../../../../api/classmanage';
import SearchSubject from  "./Search-subject.vue"
export default {
  comments:{SearchSubject},
  data() {
    return {
      // 班级列表表头（注释掉width实现自适应）
      classcolumns: [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 70,
        },
        {
          title: '科目名',
          dataIndex: 'attributes.classname',
          // width: 140
        },
        {
          title: '技术栈',
          dataIndex: 'attributes.studentnum',
          // width: 140
        },
        {
          title: '创建时间',
          dataIndex: 'attributes.time',
          // width: 140
        },
        {
          title: '操作',
          dataIndex: 'attributes.employment',
          // width: 140
        },
      ],
      // 班级列表数据(classList为展示数据)
      allClassList: [],
      classList: [],
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