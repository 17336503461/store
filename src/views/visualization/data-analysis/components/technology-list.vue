<template>
    <div>
      <br>
        <div>
          <a-space>
            <a-button type="primary">新建技术栈</a-button>
          </a-space>
        </div>
         <br>
        <a-table :columns="columns" :data="data" class="technology-table"/>
    </div>
</template>
<script>
import { reactive } from 'vue';

export default {
  setup() {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'name',
      },
      {
        title: '名称',
        dataIndex: 'salary',
      },
      {
        title: '创建时间',
        dataIndex: 'address',
      },
      {
        title: '操作',
        dataIndex: 'operate',
      },

    ];
    const data = reactive([{
      key: '1',
      name: '84',
      salary:'WEB开发前端',
      address: '2021-09-20 10:40',
      email: ''
    }, {
      key: '2',
      name: '38',
      salary: 'WEB开发后端',
      address: '2021-09-20 10:38',
      email: ''
    }, {
      key: '3',
      name: '45',
      salary: '人工智能大数据',
      address: '2021-09-20 10:37',
      email: ''
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
</style>