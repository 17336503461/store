<template>
  <div class="class-main">
    <br>
    <a-form :model="form" @submit="handleSubmit">
      <a-row :gutter="8">
        <a-col :span="12">
          <a-select
          style="width: 200px;"  
          @click="getDown_List"
           placeholder="下拉菜单"
           >
              <a-option 
              v-for="items in arrList" 
              :key ="items.title"
              value="items.title"
              >
              {{items.title}}
            </a-option>
          </a-select>
        </a-col>
        <a-col :span="12">
          <a-form-item no-style>
            <a-input   placeholder="please enter your name..." />
          </a-form-item>
        </a-col>
        <a-form-item>
          <a-button html-type="submit">搜索</a-button>
        </a-form-item>
      </a-row>
    </a-form>
  </div>
</template>
<script>
import { reactive } from 'vue';
import {getTechonology} from '../../../../api/TechonologyManage.js'
export default {
  data(){
    return{
      arrList:[],
    }
  },
  methods:{
    //获取下拉列表
    getDown_List() {
      getTechonology().then((res)=>{
        //  console.log(res.data.data);
         this.arrList = res.data.data ;
        //  console.log(this.arrList);
      })
    },
  },
  created(){
    
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