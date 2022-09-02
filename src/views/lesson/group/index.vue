<template>
  <div class="container">
    <Breadcrumb
      :items="['menu.visualization', '班级管理']"
    />
    <ClassManage></ClassManage>
  </div>
</template>

<script>
import ClassManage from './components/class-list.vue'

export default {
  components:{
    ClassManage
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
    margin-bottom: 20px;
  }
</style>
