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
    </a-card>
  </a-spin>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import { queryPopularList } from '@/api/dashboard';
  import type { TableData } from '@arco-design/web-vue/es/table/interface';

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
</style>
