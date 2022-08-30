<template>
    <div class="container">
        <Breadcrumb :items="['题库模块', '题库首页']" />
    </div>
    </template>
    <script  lang="ts">
        export default {
            name: 'index',
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