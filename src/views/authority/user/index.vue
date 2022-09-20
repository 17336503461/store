<template>
    <div>
        <div class="container">
        <Breadcrumb :items="['权限模块', '用户管理']" />
        </div>
        <userList></userList>
    </div>
</template>

    <script  lang="ts">
        import userList from './user-list.vue'
        export default {
            name: 'series',
            components:{userList},
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