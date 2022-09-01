<template>

  <div class="class-main">
    <p class="tit">班级排课</p>
    <a-form :model="form" @submit="handleSubmit">
      <a-form-item class="section-tit" field="grade" label="排课班级:">
        <a-select v-model="form.grade" placeholder="下拉菜单">
          <a-option value="vip1">vip1</a-option>
          <a-option value="vip2">vip2</a-option>
          <a-option value="vip3">vip3</a-option>
        </a-select>
      </a-form-item>
      <a-form-item field="course" label="排课课程:">
        <a-select v-model="form.course" placeholder="下拉菜单">
          <a-option value="前端">前端</a-option>
          <a-option value="后端">后端</a-option>
        </a-select>
      </a-form-item>
      <a-form-item field="subject" label="排课科目:">
        <a-select v-model="form.subject" placeholder="下拉菜单">
          <a-option value="vue3">vue3</a-option>
          <a-option value="typescript">typescript</a-option>
          <a-option value="elementui">elementui</a-option>
        </a-select>
      </a-form-item>
      <a-form-item field="time" label="排课时间:">
        <a-select v-model="form.time" placeholder="下拉菜单">
          <a-option value="周一">周一</a-option>
          <a-option value="周二">周二</a-option>
          <a-option value="周三">周三</a-option>
        </a-select>
      </a-form-item>
      <a-form-item field="radio" class="choose">
        <a-radio-group v-model="form.radio">
          <a-radio value="循环">循环</a-radio>
          <a-radio value="单次">单次</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item field="week" label="循环周数:">
        <a-select v-model="form.week" placeholder="下拉菜单">
          <a-option value="1周">1周</a-option>
          <a-option value="2周">2周</a-option>
          <a-option value="3周">3周</a-option>
        </a-select>
      </a-form-item>
      <a-form-item field="lecturer" label="授课讲师:">
        <a-select v-model="form.lecturer" placeholder="下拉菜单">
          <a-option value="王老师">王老师</a-option>
          <a-option value="董老师">董老师</a-option>
          <a-option value="郭老师">郭老师</a-option>
        </a-select>
      </a-form-item>

      <a-form-item class="form-sub">
        <a-button html-type="submit">保存</a-button>
      </a-form-item>
    </a-form>

  </div>
</template>
<script  lang="ts">
import { reactive } from 'vue';

export default {
  setup() {
      const form = reactive({
          grade:'',
          course:'',
          subject:'',
          time:'',
          radio:'循环',
          week:'',
          lecturer:''
      });
      const handleSubmit = (data: any) => {
          console.log(data)
      };
      return {
          form,
          handleSubmit,
      }
  },
}
</script>
<style scoped lang="less">

.container {
  padding: 0 20px 40px 20px;
  background-color: var(--color-bg-2);
  overflow: hidden;
  height: 100%;

  .class-main .tit {
    font-size: 20px;
    padding: 12px 0 32px 35px;
    border-bottom: 1px solid #BBBBBB;
    color: var(--color-text-1);
  }
  .choose ::v-deep .arco-col-19 {
    padding-left: 0;
  }

  .choose ::v-deep .arco-col-5 {
    padding-left: 74px;
  }
  .choose ::v-deep .arco-form-item-content {
    flex: initial;
    width: auto;
  }  
}
</style>