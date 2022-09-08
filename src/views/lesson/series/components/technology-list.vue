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

              <a-modal v-model:visible="visible" @cancel="handleCancel" :on-before-ok="handleBeforeOk" unmountOnClose>
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
  import {getTechonology} from "../../../../api/TechonologyManage.js"

  //loading板子
  const { loading, setLoading } = useLoading(true);
  setLoading(false);

  export default {
  components:{
    
  },
  data() {
    return {
      renderData: [],
    };
  },
  methods:{ 
   //获取技术栈列表
    getTechonologyList() {
      getTechonology().then((res)=>{
        console.log(res.data.data);
        console.log(this.renderData);
        this.renderData=res.data.data
      })
    }
      //renderData
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

<!-- <script>
import { reactive } from 'vue';

export default {
  setup() {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: '创建时间',
        dataIndex: 'time',
      },
      {
        title: '操作',
        dataIndex: 'operate',
      },

    ];
    const data = reactive([{
      key: '1',
      id: '84',
      name:'WEB开发前端',
      time: '2021-09-20 10:40',
    }, {
      key: '2',
      id: '38',
      name: 'WEB开发后端',
      time: '2021-09-20 10:38',
    }, {
      key: '3',
      id: '45',
      name: '人工智能大数据',
      time: '2021-09-20 10:37',
    }, 
    ]);

    return {
      columns,
      data
    }
  },
}
</script>
<style>
.technology-table{}
</style> -->