<template>

  <div class="class-main">
    <br>
    <a-form :model="form" @submit="handleSubmit">
      <a-row :gutter="8">
        <a-col :span="12">
          <a-select style="width: 200px;"  v-model="form.seriesId" placeholder="下拉菜单">
            <a-option value="vue">vue</a-option>
            <a-option value="react">react</a-option>
            <a-option value="webpack">webpack</a-option>
          </a-select>
        </a-col>
        <a-col :span="12">
          <a-form-item no-style>
            <a-input  v-model="form.subjectName"  placeholder="please enter your lastname..." />
          </a-form-item>
        </a-col>
      </a-row>
      <a-form-item>
        <a-button html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { reactive } from 'vue';

export default {
  setup() {
      const form = reactive({
        seriesId:'',
        subjectName:''
      });
      const handleSubmit = (data) => {
          console.log("=========", data, form)
      };
      return {
          form,
          handleSubmit,
      }
  },
}
</script>
<style scoped lang="less">
.section-tit{
  width: 300px;
}
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
  .choose ::v-deep(.arco-col-19){
    padding-left: 0;
  }

  .choose ::v-deep(.arco-col-5) {
    padding-left: 74px;
  }
  .choose ::v-deep(.arco-form-item-content) {
    flex: initial;
    width: auto;
  }  
}
</style>