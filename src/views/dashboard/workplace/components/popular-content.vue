<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card
      class="general-card"
      :header-style="{ paddingBottom: '0' }"
      :body-style="{ padding: '17px 20px 21px 20px' }"
    >
      <template #title>
        {{ $t('workplace.Latest.class.arrangement.information') }}
      </template>
      <!-- 

        Next is form which is the class.arrangement.information 
        
       -->
      <a-table :columns="columns" :data="data" class= "classInformation-table" />
    </a-card>
  </a-spin>
</template>

<script lang="ts" >
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import { queryPopularList } from '@/api/dashboard';
  import type { TableData } from '@arco-design/web-vue/es/table/interface';
  import { reactive } from 'vue';

  export default {
    setup() {
      const columns = [
        {
          title: '时间',
          dataIndex: 'name',
          width:187,
        },
        {
          title: '01/11',
          dataIndex: 'salary',
          width:187,
        },
        {
          title: '09/24',
          dataIndex: 'address',
          width:187,

        },
        {
          title: '04/18',
          dataIndex: 'email',
          width:187,
        },
        {
          title: '04/20',
          dataIndex: 'name',
          width:187,
        },
        {
          title: '01/14',
          dataIndex: 'salary',
          width:187,
        },
        {
          title: '04/14',
          dataIndex: 'address',
          width:187,
        },
      ];
      const data = reactive([{
        key: 'class1',
        name: '9:02',
        salary: 23000,
        address: '32 Park Road, London',
        email: 'jane.doe@example.com'
      }, {
        key: 'class2',
        name: '01:03',
        salary: 25000,
        address: '35 Park Road, London',
        email: 'alisa.ross@example.com'
      },
      {
        key: 'class3',
        name: '21:12',
        salary: 0,
        address: '35 Park Road, London',
        address2 :'2222',
        email: 'alisa.ross@example.com',
        
      },
      ]);

      return {
        columns,
        data
      }
    },
  }
  const type = ref('text');
  const { loading, setLoading } = useLoading();
  const renderList = ref<TableData[]>();
  const fetchData = async (contentType: string) => {
    try {
      setLoading(true);
      const { data } = await queryPopularList({ type: contentType });
      renderList.value = data;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  const typeChange = (contentType: string) => {
    fetchData(contentType);
  };
  fetchData('text');
</script>

<style scoped lang="less">
  .general-card {
    min-height: 395px;
  }
  :deep(.arco-table-tr) {
    height: 44px;
    .arco-typography {
      margin-bottom: 0;
    }
  }
  .increases-cell {
    display: flex;
    align-items: center;
    span {
      margin-right: 4px;
    }
  }
  .classInformation-table{
    width: 1620px;
  }
</style>
