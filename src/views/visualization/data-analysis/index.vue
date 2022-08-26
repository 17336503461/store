<template>
  <div class="container">
    <Breadcrumb
      :items="['menu.visualization', 'menu.teaching.material.management']"
    />
    <component :is="technologyList"></component>
  </div>
</template>



<script lang="ts" setup>
  import technologyList from './components/technology-list.vue'
</script>

<script lang="ts">
  export default {
  components: { technologyList },
    name: 'DataAnalysis',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
    margin-bottom: 20px;
  }

  
</style>
