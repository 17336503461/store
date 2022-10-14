<template>
  <div class="container">
    <div class="table">
      <userInfoPage class="InfoPage"></userInfoPage>
      <div class="Info">科目信息</div>
      <classInfoTable class="classInfoPage"></classInfoTable>
    </div>
  </div>
</template>
<script lang="ts">
  import userInfoPage from './componments/userInfoPage.vue'
  import classInfoTable from './componments/classInfoTable.vue'

  export default {
    components: {
      userInfoPage,
      classInfoTable
    },
  };
</script>
<style scoped lang="less">
  .container {
    padding: 0 20px 40px 20px;
    background-color: var(--color-bg-2);
    overflow: hidden;
    height: 100%;
  }
  .InfoPage{
    margin-top: 50px;
    width: 90%;
    margin-left: 5%;
  }
  .table{
    margin-top: 50px;
    width: 90%;
    margin-left: 5%;
  }
  .table .Info{
    margin-top: 50px;
    font-size: 25px;
  }
  .table .classInfoPage{
    margin-top: 50px;
  }
</style>
