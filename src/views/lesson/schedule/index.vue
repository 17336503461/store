<template>
    <div class="container">
        <Breadcrumb :items="['课件模块', '班级排课']" />

        <div class="class-main">
            <p class="tit">班级排课</p>
            <a-form :model="form" @submit="handleSubmit">
                <a-form-item class="section-tit" field="grade" label="排课班级:">
                    <a-select v-model="form.grade" placeholder="下拉菜单">
                        <a-option value="vip1">vip1</a-option>
                        <a-option value="vip2">vip2</a-option>
                        <a-option value="vip3">vip3</a-option>
                    </a-select>
                </a-form-item>
                <a-form-item field="course" label="排课课程:">
                    <a-select v-model="form.course" placeholder="下拉菜单">
                        <a-option value="前端">前端</a-option>
                        <a-option value="后端">后端</a-option>
                    </a-select>
                </a-form-item>
                <a-form-item field="subject" label="排课科目:">
                    <a-select v-model="form.subject" placeholder="下拉菜单">
                        <a-option value="vue3">vue3</a-option>
                        <a-option value="typescript">typescript</a-option>
                        <a-option value="elementui">elementui</a-option>
                    </a-select>
                </a-form-item>
                <a-form-item field="time" label="排课时间:">
                    <a-select v-model="form.time" placeholder="下拉菜单">
                        <a-option value="周一">周一</a-option>
                        <a-option value="周二">周二</a-option>
                        <a-option value="周三">周三</a-option>
                    </a-select>
                </a-form-item>
                <a-form-item field="radio" class="choose">
                    <a-radio-group v-model="form.radio">
                        <a-radio value="循环">循环</a-radio>
                        <a-radio value="单次">单次</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item field="week" label="循环周数:">
                    <a-select v-model="form.week" placeholder="下拉菜单">
                        <a-option value="1周">1周</a-option>
                        <a-option value="2周">2周</a-option>
                        <a-option value="3周">3周</a-option>
                    </a-select>
                </a-form-item>
                <a-form-item field="lecturer" label="授课讲师:">
                    <a-select v-model="form.lecturer" placeholder="下拉菜单">
                        <a-option value="王老师">王老师</a-option>
                        <a-option value="董老师">董老师</a-option>
                        <a-option value="郭老师">郭老师</a-option>
                    </a-select>
                </a-form-item>

                <a-form-item class="form-sub">
                    <a-button html-type="submit">保存</a-button>
                </a-form-item>
            </a-form>

        </div>
    </div>
</template>
<script  lang="ts">
import { reactive } from 'vue';

export default {
    setup() {
        const form = reactive({
            grade:'',
            course:'',
            subject:'',
            time:'',
            radio:'循环',
            week:'',
            lecturer:''
        });
        const handleSubmit = (data: any) => {
            console.log(data)
        };
        return {
            form,
            handleSubmit,
        }
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
            height: 950px;
            border: 1px solid #BBBBBB;
        }
    
        .class-main .tit {
            font-size: 20px;
            padding: 12px 0 32px 35px;
            border-bottom: 1px solid #BBBBBB;
            color: var(--color-text-1);
        }
    
        ::v-deep .arco-form-item-label-col>.arco-form-item-label {
            font-size: 14px !important;
            color: var(--color-text-1);
        }
    
        :deep .arco-col-19 {
            padding-left: 38px;
        }
    
        ::v-deep .arco-col-5 {
            display: block;
            padding-left: 95px;
            flex: initial;
            width: auto;
        }
         .choose ::v-deep .arco-col-19{
            padding-left: 0;
        }
         .choose ::v-deep .arco-col-5{
            padding-left: 74px;
        }
        ::v-deep .arco-form-item-content {
            flex: initial;
            width: 120px;
        }
         .choose ::v-deep .arco-form-item-content {
            flex: initial;
            width: auto;
        }
        
        ::v-deep .arco-select-view-single {
            background-color: var(--color-bg-1);
            border: 1px solid rgba(187, 187, 187, 100);
        }
    
        ::v-deep .arco-select-view-single .arco-select-view-input::placeholder {
            color: var(--color-text-1);
        }
    
        ::v-deep .arco-form-item {
            margin-bottom: 26px;
        }
    
        ::v-deep .arco-space-vertical {
            padding-left: 90px;
            margin-bottom: 14px;
            height: 29px;
        }
    
        ::v-deep .arco-radio-group .arco-radio {
            margin-right: 94px;
        }
    
        ::v-deep .arco-btn-size-medium {
            height: 30px;
            padding: 0 25px;
            border: 1px solid rgba(187, 187, 187, 100);
            background-color: var(--color-bg-1);
            color: var(--color-text-1);
            ;
        }
    
        ::v-deep .form-sub .arco-form-item-content {
            padding-left: 98px;
        }
    
    }
</style>