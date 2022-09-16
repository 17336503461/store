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
        <!-- <a-button
          class="searchbutton"
          type="primary"
          size="small"
          @click="searchClassFun"
          >搜索</a-button
        > -->
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
            data-index="title"
          />
          <a-table-column
            :title="$t('创建时间')"
            data-index="createAt"
          />
          <a-table-column
            :title="$t('操作')"
            data-index="operations"
          >
            <template #cell="row">
              <a-button @click ="reviseList(row)" v-permission="['admin']" type="text" size="small">
                {{ $t('编辑') }}
              </a-button>
              <a-popconfirm  @ok="delList(row)" content="Are you sure you want to delete?" type="error">
                  <a-button  v-permission="['admin']" type="text" size="small">
                    {{ $t('删除') }}
                  </a-button>
            </a-popconfirm>
            </template>
          </a-table-column>
        </template>
      </a-table>
      </div>
    </div>
    <div v-show="visible" class="mask">
      <div class="addClassIpt">
        <AddClass
       
          @confirmfun="confirmfun"
          @cancelfun="cancelfun"
        ></AddClass>
      </div>
    </div>
    <div v-show="visible_revise" class="mask">
      <div class="addClassIpt">
        <ReviseClass
          @confirmFun_revise="confirmFun_revise"
          @cancelFun_revise="cancelFun_revise"
          v-bind:row_ = "row_"
          >
        </ReviseClass>
      </div>
    </div>
  </div>
</template>

<script>

import { getClassesAPI, addClassAPI } from '../../../../api/classmanage';
import SearchSubject from  "./Search-subject.vue"
import AddClass from  './add-class.vue'
import {ref} from 'vue'
import {getAccount} from '../../../../api/AccountManagement.JS'
import {deleteAccount} from '../../../../api/AccountManagement.JS' 
import {reviseAccount} from '../../../../api/AccountManagement.JS' 
import ReviseClass from './revise-subject.vue'
import mitt from '@/utils/mitt.js';

export default {
  components:{
    SearchSubject,
    AddClass,
    ReviseClass,
  },
  data() {
    return {
      classList: [],
      // 创建新班级数据
      newClassInfo: {},
      // 班级列表分页
      pagination: {
        pageSize: 25,
      },
      // 创建班级弹窗是否可见
      visible: false,
      visible_revise:false,

      row_ : "1" ,
    };
  },
  methods:{ 
    
    //获取科目列表
    
    getAccountList () {
      getAccount({
        pageSize : 10000
      }).then((res) => { 
        console.log(res);
        console.log(res.data.list);
        this.classList = res.data.data.list
      }).catch((err)=>{
        console.log(err);
      })
    },
    cancelfun() {
        this.visible =false 
    },
    addClassFun() {
      this.visible = true;
    },
    async confirmfun(formdata){
      // proxy转换成普通对象
      // const res = JSON.parse(JSON.stringify(formdata))
      // console.log(res);
      // await addClassAPI(res)
      // this.initialization()
      console.log(formdata);
      this.visible = false
      console.log(this.visible);
    },
    // 删除科目 
    delList(row) {
      console.log(row.record.id);
      console.log(typeof(row.record.id));
      console.log(typeof(deleteAccount));
      deleteAccount({
        subjectId : row.record.id
      }).then((res)=>{
        alert("删除成功!") ;
        // 更新列表
        this.getAccountList();
      })
    },
    //修改科目
    cancelFun_revise(){
      this.visible_revise =false 
    },
    reviseList(row) {
      //row
      // console.log(row.record.id);
      // console.log(row.record.name);
    
      this.visible_revise = true;
      mitt.emit('reviseAccount',row)

      // this.row_ = row.record.id;

      // console.log(this.row_);
    },
    // // 获取new的列表select
    //  getSelectList(){
      
    //  },
      
    
  },
  created() {
    this.getAccountList();
    mitt.on("handleSubmit",(data)=>{
      console.log("******");
      console.log(data);
      this.classList = data ; 
    })
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
    height: 350px;
    background-color: rgb(255, 255, 255);
    margin: auto;
    margin-top: 120px;
    padding-top: 10px;
    padding-left: 10px;
    border-radius: 20px;
  }
}
</style>