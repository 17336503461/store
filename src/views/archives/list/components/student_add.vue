<template>
  <div>
    <h2 class="title">录入学员</h2>
    <!-- 分割线 -->
    <a-divider :style="{ color: black }" />
    <a-form :model="form" :style="{ width: '680px' }" @submit="submitClassFun">
      <!-- 输入框（ID） -->
      <a-form-item field="classname" label="学员ID：">
        <a-input
          v-model="form.classname"
          placeholder="请输入学员ID"
          style="width: 400px"
        />
      </a-form-item>
      <!-- 输入框（姓名） -->
      <a-form-item field="classname" label="学员姓名：">
        <a-input
          v-model="form.classname"
          placeholder="请输入学员姓名"
          style="width: 400px"
        />
      </a-form-item>
      <!-- 日期选择器（创建时间） -->
      <a-form-item field="time" label="入学时间：">
        <a-date-picker v-model="form.time" style="width: 400px" />
      </a-form-item>
      <!-- 输入框（学生手机） -->
      <a-form-item field="classname" label="学员手机：">
        <a-input
          v-model="form.classname"
          placeholder="请输入学员手机"
          style="width: 400px"
        />
      </a-form-item>
      <!-- 输入框（学生班级） -->
      <a-form-item field="classname" label="学员班级：">
        <a-input
          v-model="form.classname"
          placeholder="请输入学员班级"
          style="width: 400px"
        />
      </a-form-item>
    </a-form>
    
    <!-- 交互按钮（取消和创建） -->
    <div class="btn">
      <a-button type="dashed" class="cancel" @click="cancelFun">取消</a-button>
      <a-button type="primary" class="confirm" @click="confirmFun">创建</a-button>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    teacherlist:{type:Array}
  },
emits: ['confirmfun', 'cancelfun'],
  data() {
    return {
      // 表格收集的数据
      form: {
        "classname": '',
        "studentnum": '',
        "employment": '',
        "time": '',
        "class":''
      },
    };
  },
  methods: {
    // 创建事件
    confirmFun() {
      this.form.teacher = this.teacherlist[this.keyteacher]
      this.$emit('confirmfun',this.form)
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
    }
  }
</style>