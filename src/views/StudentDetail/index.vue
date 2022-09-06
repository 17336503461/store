<template>
  <div class="container">
    <div class="top">
      <div class="Info">学生信息</div>
      <div class="InfoR">
        <div class="InfoRName">董圣炜</div>
        <div class="InfoRTel">183500xxxxx</div>
        <div class="InfoRPhoto"></div>
      </div>
    </div>
    <hr
      style="filter: alpha(opacity=70, finishopacity=0, style=2)"
      width="90%"
      color="gray"
      SIZE="4"
    />
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

  .top{
    width: 90%;
    margin-left: 5%;
    height: 200px;
  }
  .top .Info{
    margin-top: 30px;
    font-size: 25px;
  }
  .top .InfoR{
    margin-right: 5%;
    width: 15%;
    height: 130px;
    float: right;
    position: relative;
    // background-color: gray;
  }

  .top .InfoR .InfoRName{
    float: left;
    position: absolute;
    display: inline;
    margin-top: 5px;
    font-size: 20px;
  }
  .top .InfoR .InfoRTel{
    float: left;
    position: absolute;

    margin-top: 40px;
    font-size: 20px;
    margin-right: 30%;
  }
  .top .InfoR .InfoRPhoto{
    position: absolute;
    display: inline;
    float: right;
    width: 90px;
    height: 130px;
    margin-left: 70%;
    background-color: black;
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
