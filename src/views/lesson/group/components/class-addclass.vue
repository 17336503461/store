<template>
  <div>
    <h2 class="title">创建班级</h2>
    <!-- 分割线 -->
    <a-divider :style="{ color: black }" />
    <a-form :model="form" :style="{ width: '680px' }" @submit="submitClassFun">
      <!-- 输入框（班级名） -->
      <a-form-item field="classname" label="班级名称：" :rules="[{required:true,message:'name is required'}]" >
        <a-input
          v-model="form.classname" 
          placeholder="请输入班级名称"
          style="width: 400px"
        />
      </a-form-item>
      <!-- 输入框（学生人数） -->
      <a-form-item field="studentnum" label="现有人数：" :rules="[{required:true,message:'name is required'}]">
        <a-input-number
          v-model="form.studentnum"
          placeholder="请输入学生人数"
          style="width: 400px"
        />
      </a-form-item>
      <!-- 输入框（就业人数） -->
      <a-form-item field="studentnum" label="就业人数：" :rules="[{required:true,message:'name is required'}]">
        <a-input-number
          v-model="form.employment"
          placeholder="请输入就业人数"
          style="width: 400px"
        />
      </a-form-item>
      <!-- 日期选择器（创建时间） -->
      <!-- <a-form-item field="time" label="创建时间：">
        <a-date-picker v-model="form.time" style="width: 400px" />
      </a-form-item> -->

      <!-- 下拉框（班主任） -->
      <!-- <a-form-item field="teacher" label="班主任：">
        <a-dropdown
          v-model="form.teacher"
          style="width: 200px"
          @select="selectTeacherFun"
        >
          <a-button style="width: 200px">
            {{
              keyteacher !== undefined ? teacherlist[keyteacher] : '点我选择'
            }}
          </a-button>
          <template #content>
            <a-doption
              v-for="(item, index) in teacherlist"
              :key="index"
              :value="index"
              >{{ item }}</a-doption
            >
          </template>
        </a-dropdown>
      </a-form-item> -->

      <!-- 输入框（班主任） -->
      <a-form-item field="teacher" label="班主任：" :rules="[{required:true,message:'name is required'}]">
        <a-input
          v-model="form.teacher"
          placeholder="请输入班主任"
          style="width: 400px"
        /></a-form-item>
    </a-form>
    <!-- 分割线 -->
    <a-divider :style="{ color: black }" />
    <!-- 交互按钮（取消和创建） -->
    <div class="btn">
      <a-button type="dashed" class="cancel" @click="cancelFun">取消</a-button>
      <a-button type="primary" class="confirm" html-type="submit" @click="confirmFun">创建</a-button>
    </div>
  </div>
</template>

<script>
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
        "studentnum": '',
        "employment": '',
        "teacher": '',
      },
    };
  },
  methods: {
    // 下拉框选择班任事件
    selectTeacherFun(value) {
      this.keyteacher = value;
    },
    // 创建事件
    confirmFun() {
      // this.form.teacher = this.teacherlist[this.keyteacher]
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