<template>
    <div>
      <br>
        <div>
          <a-space>
            <a-button type="primary">新建技术栈</a-button>
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
            data-index="number"
          />
          <a-table-column
            :title="$t('名称')"
            data-index="name"
          />
          <a-table-column
            :title="$t('searchTable.columns.createdTime')"
            data-index="createdTime"
          />
          <a-table-column
            :title="$t('searchTable.columns.operations')"
            data-index="operations"
          >
            <template #cell="row">
              <a-button v-permission="['admin']" type="text" size="small">
                {{ $t('编辑') }}
              </a-button>
              <a-button @click="delList(row)" v-permission="['admin']" type="text" size="small">
                {{ $t('删除') }}
              </a-button>

              <a-modal v-model:visible="visible" @cancel="handleCancel" unmountOnClose>
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
<script lang="ts" setup>
  import { computed, ref, reactive } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@/hooks/loading';
  import { queryPolicyList, PolicyRecord, PolicyParams } from '@/api/list';
  import { Pagination } from '@/types/global';
  import type { SelectOptionData } from '@arco-design/web-vue/es/select/interface';

  
  const generateFormModel = () => {
    return {
      number: '',
      name: '',
      contentType: '',
      filterType: '',
      createdTime: [],
      status: '',
    };
  };
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  const renderData = ref<PolicyRecord[]>([]);
  const formModel = ref(generateFormModel());
  const basePagination: Pagination = {
    current: 1,
    pageSize: 20,
  };
  
  function delList (row) { 
    console.log(row.record.number);  
 
  }
  
  const pagination = reactive({
    ...basePagination,
  });
  const filterTypeOptions = computed<SelectOptionData[]>(() => [
    {
      label: t('searchTable.form.filterType.artificial'),
      value: 'artificial',
    },
    {
      label: t('searchTable.form.filterType.rules'),
      value: 'rules',
    },
  ]);
  const statusOptions = computed<SelectOptionData[]>(() => [
    {
      label: t('searchTable.form.status.online'),
      value: 'online',
    },
    {
      label: t('searchTable.form.status.offline'),
      value: 'offline',
    },
  ]);
  const fetchData = async (
    params: PolicyParams = { current: 1, pageSize: 20 }
  ) => {
    setLoading(true);
    try {
      const { data } = await queryPolicyList(params);
      renderData.value = data.list;
      pagination.current = params.current;
      pagination.total = data.total;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () =>{}
  const search = () => {
    fetchData({
      ...basePagination,
      ...formModel.value,
    } as unknown as PolicyParams);
  };
  const onPageChange = (current: number) => {
    fetchData({ ...basePagination, current });
  };

  fetchData();
  const reset = () => {
    formModel.value = generateFormModel();
  };
</script>

<script lang="ts">
  export default {
    name: 'SearchTable',
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