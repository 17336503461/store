<template>
    <div>
      <br>
        <div>
          <a-space>
            <a-button type="primary" @click="addClassFun">新建技术栈</a-button>
          </a-space>
        </div>
         <br>
        <!-- <a-table :columns="columns" :data="data" class="technology-table"/> -->
        <a-table
        row-key="id"
        :loading="loading"
        :pagination="pagination"
        :data="renderData"
        :bordered="false"
        @page-change="onPageChange"
      >
        <template #columns>
          <a-table-column
            :title="$t('ID')"
            data-index="id"
          />
          <a-table-column
            :title="$t('名称')"
            data-index="title"
          />
          <a-table-column
            :title="'创建时间'"
            data-index="createAt"
          />
          <a-table-column
            :title="'操作'"
            data-index="operations"
          >
            <template #cell="row">
              <a-button v-permission="['admin']" type="text" size="small">
                编辑
              </a-button>
              <a-button @click="delList(row)" v-permission="['admin']" type="text" size="small">
                删除
              </a-button>

              <!-- <a-modal v-model:visible="visible" @cancel="handleCancel"  unmountOnClose>
              <template #title>
                Title
              </template>
              <div>You can cusstomize modal body text by the current situation. This modal will be closed immediately once you
                press the OK button.
              </div>
            </a-modal> -->

            </template>
          </a-table-column>
        </template>
      </a-table>
    </div>
    <div v-show="visible" class="mask">
      <div class="addClassIpt">
        <AddClass
       
          @confirmfun="confirmfun"
          @cancelfun="cancelfun"
        ></AddClass>
      </div>
    </div>
</template>
<script>
  import useLoading from '@/hooks/loading';
  import {getTechonology ,delTechonology} from "../../../../api/TechonologyManage.js"
  import AddClass from  './add-class.vue'

  //loading板子
  const { loading, setLoading } = useLoading(true);
  setLoading(false);

  export default {
  components:{
    AddClass,
  },
  data() {
    return {
      visible: false,
      renderData: [],
    };
  },
  methods:{ 
    
    //创建图层
    addClassFun() {
      this.visible = true;
    },
    cancelfun() {
        this.visible =false 
    },
   //获取技术栈列表
   handleCancel(){},
    getTechonologyList() {
      getTechonology().then((res)=>{
        console.log(res.data.data);
        console.log(this.renderData);
        this.renderData=res.data.data
      })
    },
    //删除事件
    delList(row){
      console.log(row.record.id);
      delTechonology(row.record.id).then((res)=>{
        console.log(res);
        this.getTechonologyList();
      })
    },
    
  },
  created() {
    this.getTechonologyList();
  }
}
  
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
  }
  :deep(.arco-table-th) {
    &:last-child {
      .arco-table-th-item-title {
        margin-left: 16px;
      }
    }
  }
  .mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  .addClassIpt {
    width: 700px;
    height: 250px;
    background-color: rgb(255, 255, 255);
    margin: auto;
    margin-top: 120px;
    padding-top: 10px;
    padding-left: 10px;
    border-radius: 20px;
  }
}
</style>
