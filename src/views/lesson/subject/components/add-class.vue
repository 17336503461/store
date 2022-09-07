<template>
  <div>
    <h2 class="title"></h2>
    <a-divider :style="{ color: black }" />
    <a-form :model="form" :style="{ width: '680px' }" @submit="submitClassFun">
      <a-form-item field="classname" label="科目名称：">
        <a-input
          v-model="form.classname"
          placeholder="请输入科目名称"
          style="width: 400px"
        />
      </a-form-item>
    </a-form>
    <a-divider :style="{ color: black }" />
    <div class="btn">
      <a-button type="dashed" class="cancel" @click="cancelFun">取消</a-button>
      <a-button type="primary" class="confirm" @click="confirmFun">创建</a-button>
    </div>
  </div>
</template>

<script>

import {addAccount} from '../../../../api/AccountManagement.JS'
export default {
  props:{
    teacherlist:{type:Array}
  },
  data() {
    return {
      // 下拉框关键词
      keyteacher: undefined,
      // 表格收集的数据
      form: {
        "classname": '',
      },
    };
  },
  methods: {
    
    // 创建事件
    confirmFun() {
      // this.form.teacher = this.teacherlist[this.keyteacher]
      this.$emit('confirmfun',this.form)
      addAccount().then((res)=>{
        console.log(res);
      })
      console.log('1');
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