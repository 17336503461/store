<template>

  <div class="class-main">
    <br>
    <a-form :model="form" @submit="handleSubmit">
      <a-form-item class="section-tit" field="grade" >
        <a-select v-model="form.grade" placeholder="下拉菜单">
          <a-option value="vue" @click="handle_vue">vue</a-option>
          <a-option value="react">react</a-option>
          <a-option value="webpack">webpack</a-option>
        </a-select>
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