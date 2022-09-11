<template>
    <div class="container">
        <Breadcrumb :items="['课件模块', '科目管理']" />
        <SubjectList></SubjectList>
        <!-- {{num}} -->
    </div>
</template>
<script >
    // import mitt from '@/utils/mitt.js';
    import SubjectList from './components/subject-list.vue'
    import { computed, ref, inject } from 'vue';
        export default {
            components :{
              SubjectList
            }
        };
//   const num = ref(1);
//   mitt.on('add', e => {
//     num.value= num.value + e;
//   })
</script>
    
<style scoped lang="less">
    .container {
        padding: 0 20px 40px 20px;
        background-color: var(--color-bg-2);
        overflow: hidden;
        height: 100%;
    }
</style>