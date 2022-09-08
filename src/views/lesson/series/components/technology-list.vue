<template>
    <div>
      <br>
        <div>
          <a-space>
            <a-button type="primary" @click="touch_techonology">新建技术栈</a-button>
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

              <a-modal v-model:visible="visible" @cancel="handleCancel"  unmountOnClose>
              <template #title>
                Title
              </template>
              <div>You can cusstomize modal body text by the current situation. This modal will be closed immediately once you
                press the OK button.
              </div>
            </a-modal>

            </template>
          </a-table-column>
        </template>
      </a-table>
    </div>
</template>
<script>
  import useLoading from '@/hooks/loading';
  import {getTechonology ,delTechonology } from "../../../../api/TechonologyManage.js"
  
  //loading板子
  const { loading, setLoading } = useLoading(true);
  setLoading(false);

  export default {
  components:{
    
  },
  data() {
    return {
      visible:false,
      renderData: [],
    };
  },
  methods:{ 
    

   //获取技术栈列表
   handleCancel(){},
    getTechonologyList() {
      getTechonology().then((res)=>{
        console.log(res.data.data);
        console.log(this.renderData);
        this.renderData=res.data.data
      })
    },
    //删除技术栈list
    //  创建事件
    addClassFun() {
      this.visible = true
    },
    //删除事件
    delList(row){
      console.log(row.record.id);
      delTechonology(row.record.id).then((res)=>{
        console.log(res);
        this.getTechonologyList();
      })
    }
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
</style>
