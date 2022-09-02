<template>
    <div class="container">
        <Breadcrumb :items="['课件模块', '科目管理']" />
        <SubjectList></SubjectList>
    </div>
</template>
<script>
    import SubjectList from './components/subject-list.vue'
        export default {
            components :{
              SubjectList
            }
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