<template>
<<<<<<< HEAD
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
=======
    <div class="container">
        <Breadcrumb :items="['课件模块', '班级管理']" />
    </div>
    </template>
    <script  lang="ts">
        export default {
            name: 'group',
        };
    </script>
    <style scoped lang="less">
        .container {
            padding: 0 20px 40px 20px;
            background-color: var(--color-bg-2);
            overflow: hidden;
            height: 100%;
        }
    </style>
>>>>>>> 171dc00 (个性化排课)
