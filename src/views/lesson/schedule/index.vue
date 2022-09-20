<template>
    <div class="container">
        <Breadcrumb :items="['课件模块', '班级排课']" />
        <SchedyleList></SchedyleList>
        
    </div>
</template>
<script  lang="ts">
import SchedyleList from './components/schedyle-list.vue'


export default {
    components:{
        SchedyleList
    },
    
}
</script>
<style scoped lang="less">
    .container {
        padding: 0 20px 40px 20px;
        background-color: var(--color-bg-2);
        overflow: hidden;
        height: 100%;
    
        .class-main {
            height: 96%;
            border: 1px solid #BBBBBB;
        }
    
        .class-main .tit {
            font-size: 20px;
            padding: 12px 0 32px 35px;
            border-bottom: 1px solid #BBBBBB;
            color: var(--color-text-1);
        }
    
        ::v-deep(.arco-form-item-label-col>.arco-form-item-label) {
            font-size: 14px !important;
            color: var(--color-text-1);
        }
    
        :deep .arco-col-19 {
            padding-left: 38px;
        }
    
        ::v-deep(.arco-col-5) {
            display: block;
            padding-left: 95px;
            flex: initial;
            width: auto;
        }
         .choose ::v-deep(.arco-col-19){
            padding-left: 0;
        }
         .choose ::v-deep(.arco-col-5){
            padding-left: 74px;
        }
        ::v-deep .arco-form-item-content {
            flex: initial;
            width: 120px;
        }
         .choose ::v-deep(.arco-form-item-content) {
            flex: initial;
            width: auto;
        }
        
        ::v-deep(.arco-select-view-single) {
            background-color: var(--color-bg-1);
            border: 1px solid rgba(187, 187, 187, 100);
        }
    
        ::v-deep(.arco-select-view-single .arco-select-view-input::placeholder) {
            color: var(--color-text-1);
        }
    
        ::v-deep(.arco-form-item) {
            margin-bottom: 26px;
        }
    
        ::v-deep .arco-space-vertical {
            padding-left: 90px;
            margin-bottom: 14px;
            height: 29px;
        }
    
        ::v-deep(.arco-radio-group .arco-radio) {
            margin-right: 94px;
        }
    
        ::v-deep(.arco-btn-size-medium) {
            height: 30px;
            padding: 0 25px;
            border: 1px solid rgba(187, 187, 187, 100);
            background-color: var(--color-bg-1);
            color: var(--color-text-1);
            ;
        }
    
        ::v-deep(.form-sub .arco-form-item-content) {
            padding-left: 98px;
        }
    
    }
</style>