<template>
  <div class="class-main">
    <br>
    <a-form :model="form" @submit="handleSubmit">
      <a-row :gutter="8">
        <a-col :span="12">
          <!--  双向绑定 v-model  -->
          <a-select
          v-model="selectTitle"
          style="width: 200px;"  
          @click="getDown_List"
           placeholder="下拉菜单"
           >
              <a-option 
              v-for="items in arrList" 
              :key ="items.title"
              :value="items.title"
              >
              {{items.title}}
            </a-option>
          </a-select>
        </a-col>
        <a-col :span="12">
          <a-form-item no-style>
            <a-input v-model = "name"  placeholder="please enter your name..." />
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
import {findAccount} from '../../../../api/AccountManagement.JS'
import {getAccount} from '../../../../api/AccountManagement.JS'
import mitt from '@/utils/mitt.js';
export default {
  data(){
    return{
      arrList:[],
      selectTitle:"",
      name:"",
      tableData:[],
      classList1:[],
    }
  },
  methods:{
    //清空
    clear(){
      this.tableData = [];
    } ,
    //获取全部列表
    getAccountList () {
      getAccount({
        pageSize : 10000
      }).then((res) => { 
        console.log(res);
        console.log(res.data.list);
        this.classList1 = res.data.list
      }).catch((err)=>{
        console.log(err);
      })
    },
    //获取下拉列表
    getDown_List() {
      getTechonology().then((res)=>{
        //  console.log(res.data.data);
         this.arrList = res.data.data ;
        //  console.log(this.arrList);
      })
    },
    // 选中列表
    getSelect_List(){
      findAccount().then((res)=>{

      })
    },
    // 搜索 
    handleSubmit(){
      this.clear();
      
      // console.log("1");
      let _name = this.name ;

      console.log(_name);

      // console.log(this.selectTitle);
      let _selectTitle = this.selectTitle ; 
      this.classList1.forEach((val)=>{
       
        if(val.title==_selectTitle){
          // console.log(val);
          this.tableData.push(val); 
        }
      });
      // console.log(this.tableData);
      
      // this.classList = this.tableData ;

      // console.log(this.classList);  

      this.classList1.forEach((val)=>{
        console.log(val);
       if(val.name==_name){
         console.log(val);
         this.tableData.push(val); 
       }
     });
      mitt.emit('handleSubmit',this.tableData)
    },
    
    
  },
  created(){
    this.getAccountList();
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