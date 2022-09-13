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
              <a-button v-permission="['admin']" type="text" size="small"
              @click ="editTechonology(row)"
              
              >
                编辑
              </a-button>
              <a-button @click="delList(row)" v-permission="['admin']" type="text" size="small">
                删除
              </a-button>

              <a-modal v-model:delvisible="delvisible" @cancel="handleCancel" >
              <template #title>
                Title
              </template>
              <div>是否删除
              </div>
            </a-modal>

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
    <div v-show="visible_revise" class="mask">
      <div class="addClassIpt">
        <ReviseClass
          @confirmFun_revise="confirmFun_revise"
          @cancelFun_revise="cancelFun_revise"
          v-bind:row_ = "row_"
          >
        </ReviseClass>
      </div>
    </div>
</template>
<script>
  import useLoading from '@/hooks/loading';
  import {getTechonology ,delTechonology} from "@/api/TechonologyManage.js"
  import AddClass from  './add-class.vue'
  import ReviseClass from  './revise-subject.vue'
  //loading板子
  const { loading, setLoading } = useLoading(true);
  setLoading(false);

  export default {
  components:{
    AddClass,
    ReviseClass,
  },
  data() {
    return {
      visible: false,
      renderData: [],
      visible_revise:false,
      pagination: {
        pageSize: 25,
      },
      row_ : "1",
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
    //创建图层二 编辑
    cancelFun_revise(){
      this.visible_revise =false 
    },
    

    handleCancel(){},

   //获取技术栈列表
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
        alert("删除成功！");
        this.getTechonologyList();
      })
    },
    //编辑技术栈
    editTechonology(row) {
      // console.log("1");
      this.visible_revise = true;
      // this.$emit("confirmFun_revise",row)
      // row_ : row ;
      // console.log(row.record.id);
      this.row_ = row.record.id ;
      console.log(this.row_);
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
