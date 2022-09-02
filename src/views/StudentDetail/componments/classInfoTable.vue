<template>
  <a-space direction="vertical" size="large" fill>
    <a-table
      :columns="columns"
      :data="data"
      @change="handleChange"
    />
  </a-space>
</template>

<script >
  import { reactive, ref } from 'vue';

  export default {
    setup() {

      const columns = [
        {
          title: '科目信息',
          dataIndex: 'name',
        },
        {
          title: '讲师',
          dataIndex: 'name',
        },
        {
          title: '讲师评语',
          dataIndex: 'name',
        },
        {
          title: '课题练习次数',
          dataIndex: 'salary',
          sortable: {
            sortDirections: ['ascend', 'descend'],
          },
          filterable: {
            filters: [
              {
                text: '> 5',
                value: '5',
              },
              {
                text: '> 10',
                value: '10',
              },
            ],
            filter: (value, record) => record.salary > value,
            multiple: true,
          },
        },
        {
          title: '平均分数',
          dataIndex: 'salary',
          sortable: {
            sortDirections: ['ascend', 'descend'],
          },
          filterable: {
            filters: [
            {
                text: '> 60',
                value: '60',
              },
              {
                text: '> 90',
                value: '90',
              },
            ],
            filter: (value, record) => record.salary > value,
            multiple: true,
          },
        },
        {
          title: '学员评分',
          dataIndex: 'email',
        },
        {
          title: '操作',
          dataIndex: 'email',
        },

      ];
      const data = reactive([
        {
          key: '1',
          name: 'Jane Doe',
          salary: 60,
          address: '32 Park Road, London',
          email: 'jane.doe@example.com',
        },
        {
          key: '2',
          name: 'Alisa Ross',
          salary: 90,
          address: '35 Park Road, London',
          email: 'alisa.ross@example.com',
        }
      ]);

      const handleChange = (data, extra) => {
        console.log('change', data, extra);
      };

      return {
        columns,
        data,
        handleChange,
      };
    },
  };
</script>
