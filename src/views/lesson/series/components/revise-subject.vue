<template>
  <div>
    <h2 class="title"></h2>
    <a-divider :style="{ color: '#000' }" />
    <a-form :model="form"  :style="{ width: '680px' }" >
      <a-form-item field="classname" label="技术栈名称：">
        <a-input
          v-model="form.classname"
          placeholder="请输入技术栈名称"
          style="width: 400px"
        />
      </a-form-item>
      <a-form-item field="seriesId" label="时间" >
        <a-input
          v-model="form.seriesId"
          placeholder="请输入时间"
          style="width: 400px"
        />
      </a-form-item>
      <div class="btn">
      <a-button type="dashed" class="cancel" @click="cancelFun_revise">取消</a-button>
      <a-button type="primary" class="confirm" @click="confirmFun_revise">修改</a-button>
      </div> 
    </a-form>
    <a-divider :style="{ color: '#000' }" />
    <!-- <p>{{row_}}</p> -->
  </div>
</template>

<script>

import {addAccount} from '../../../../api/AccountManagement.JS'
import {getAccount} from '../../../../api/AccountManagement.JS'
import {reviseAccount} from '../../../../api/AccountManagement.JS'
import {reviseTechonology} from '../../../../api/TechonologyManage.js'


export default {
  components:{
  },
  props:["row_"],
    // teacherlist:{type:Array},
  data() {
    
    return {
      // classname:[],
      // 表格收集的数据
      form: {
        classname: '',
         seriesId:'' ,
        
      },
      _row : "" ,
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
    //跳转页面
    gotoa() {
      this.$router.go(0)
    },

    // 修改科目
    confirmFun_revise(form) {
      console.log(this.form.classname,this.form.seriesId);
      //修改科目
      this._row = this.row_ ;
      console.log(this.row_);
      reviseTechonology({
        // subjectId: 54,
        // name:"111" ,
        // id:
        //如何传入id

        id:this.row_,
        title:this.form.classname,
        createAt:this.form.seriesId,
      }).then((res)=>{
        alert("修改成功!");
        // getAccountList(); 写不出来 组件组件 调用函数 
        this.gotoa();
      })
      console.log('1');
      // 关闭窗口
      this.$emit('cancelFun_revise',false)
    },
    // 取消事件
    cancelFun_revise() {
      this.$emit('cancelFun_revise',false)
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