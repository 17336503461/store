<template>
  <a-table :columns="columns" :data="data" :pagination="false"/>
</template>

<script lang="ts">
  import { reactive } from 'vue';

  export default {
    setup() {
      const columns = [
        {
          title: '入学时间',
          dataIndex: 'enrollmentTimeShool',
        },
        {
          title: '学习科目',
          dataIndex: 'salary',
        },
        {
          title: '应届',
          dataIndex: 'salt',
        },
        {
          title: '专业',
          dataIndex: 'professional',
        },
        {
          title: '当前进度',
          dataIndex: 'lastIp',
        },
        {
          title: '招生老师',
          dataIndex: 'teacherId',
        },
        {
          title: '所在班级',
          dataIndex: 'groupId',
        },
        {
          title: '身份证',
          dataIndex: 'idCard',
        },
        {
          title: '毕业学校',
          dataIndex: 'university',
        },
      ];
      const data = reactive([
        {
          enrollmentTimeShool: '1',
          idCard: '1',
          groupId: '1',
          teacherId: '1',
          university: '1',
          professional: '1',
          lastIp: '1',
          salt: '1',
          salary: '1',
        },
      ]);

      return {
        columns,
        data,
      };
    },
  };
</script>