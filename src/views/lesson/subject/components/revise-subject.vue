<template>
  <div>
    <h2 class="title"></h2>
    <a-divider :style="{ color: black }" />
    <a-form :model="form"  :style="{ width: '680px' }" @submit="submitClassFun">
      <a-form-item field="classname" label="科目名称：">
        <a-input
          v-model="form.classname"
          placeholder="请输入科目名称"
          style="width: 400px"
        />
      </a-form-item>
      <a-form-item field="seriesId" label="科目 id : " >
        <a-input
          v-model="form.seriesId"
          placeholder="请输入科目id"
          style="width: 400px"
        />
      </a-form-item>
      <div class="btn">
      <a-button type="dashed" class="cancel" @click="cancelFun">取消</a-button>
      <a-button type="primary" class="confirm" @click="confirmFun">创建</a-button>
      </div> 
    </a-form>
    <a-divider :style="{ color: black }" />
  </div>
</template>

<script>

import {addAccount} from '../../../../api/AccountManagement.JS'
import {getAccount} from '../../../../api/AccountManagement.JS'
export default {
  props:{
    teacherlist:{type:Array}
  },
  data() {
    return {
      // classname:[],
      // 表格收集的数据
      form: {
        classname: '',
         seriesId:'' ,
      },
    };
  },
  methods: {
    //获取科目
    getAccountList () {
      getAccount().then((res) => {
        console.log(res.data.data);
        this.classList = res.data.data
      }).catch((err)=>{
        console.log(err);
      })
    },
    // 创建事件
    confirmFun(form) {
      // this.form.teacher = this.teacherlist[this.keyteacher]
      // this.$emit('confirmfun',this.form)
      console.log(this.form.classname,this.form.seriesId);
      //添加科目
      addAccount({
        name:this.form.classname,
        seriesId:this.form.seriesId,
      }).then((res)=>{
        alert("添加成功!");
        getAccountList();
      })
      console.log('1');

      // 关闭窗口
      this.$emit('cancelfun',false)
    },
    // 取消创建事件
    cancelFun() {
      this.$emit('cancelfun',false)
    }
  },
};
</script>

<style scoped lang="less">
  .title {
    margin-left: 50px;
  }
  .btn {
    margin-left: 500px;
    .cancel {
      margin-right: 20px;
    }
  }
  
</style>