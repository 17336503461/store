<template>
<div class="container">
    <Breadcrumb :items="['档案模块', '学员管理']" />
    <StudentList></StudentList>
</div>
</template>
<script  lang="ts">
    import  StudentList from './components/student_list.vue' 

    export default {
        components: {
            StudentList
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