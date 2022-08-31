<template>
    <div class="container">
        <Breadcrumb :items="['题库模块', '机试题录入']" />
    </div>
    </template>
    <script  lang="ts">
        export default {
            name: 'MachineRecord',
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