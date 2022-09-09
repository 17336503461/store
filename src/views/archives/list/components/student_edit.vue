<template>
  <div>
    <h2 class="title">编辑学员</h2>
    <!-- 分割线 -->
    <a-divider :style="{ color: black }" />
    <a-form :model="form" :style="{ width: '680px' }" @submit="submitClassFun">
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
    
    <!-- 交互按钮（取消和创建） -->
    <div class="btn">
      <a-button type="dashed" class="cancel" @click="cancelFun">取消</a-button>
      <a-button type="primary" class="confirm" @click="confirmFun">确定</a-button>
    </div>
  </div>
</template>

<script>
export default {
  // 接收父组件传递的信息
  props:{
    teacherlist:{type:Array}
  },
// 接收父组件中的方法
emits: ['confirmfun', 'cancelfun'],
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
    };
  },
  methods: {
    // 创建事件
    confirmFun() {
      this.form.teacher = this.teacherlist[this.keyteacher]
      this.$emit('confirmfun')
    },
    // 取消创建事件
    cancelFun() {
      this.$emit('cancelfun')
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
      border: 1px solid #fff;
    }
  }
</style>