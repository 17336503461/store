<template>
  <div class="class-main">
    <p class="tit">班级排课</p>
    <a-form :model="form" @submit="handleSubmit" class="form">
      <a-form-item
        class="section-tit"
        field="grade"
        label="排课班级:"
        :rules="[{ required: true, message: '请选择班级' }]"
      >
        <a-select
          v-model="form.grade"
          placeholder="下拉菜单"
          :rules="[{ true: true, message: 'must be true' }]"
        >
          <a-option
            :value="item.id"
            v-for="item in optionClass"
            :key="item.id"
            >{{ item.title }}</a-option
          >
        </a-select>
      </a-form-item>
      <a-form-item
        field="course"
        label="排课课程:"
        :rules="[{ required: true, message: '请选择课程' }]"
      >
        <a-select
          v-model="form.course"
          placeholder="下拉菜单"
          @change="changeLesson"
        >
          <a-option
            :value="item.id"
            v-for="item in optionLesson"
            :key="item.id"
            >{{ item.seriesTitle }}</a-option
          >
        </a-select>
      </a-form-item>
      <a-form-item
        field="subject"
        label="排课科目:"
        :rules="[{ required: true, message: '请选择科目' }]"
      >
        <a-select
          v-model="form.subject"
          placeholder="下拉菜单"
          :disabled="ischeckObj"
        >
          <a-option :value="item.id" v-for="item in optionSub" :key="item.id">{{
            item.name
          }}</a-option>
        </a-select>
      </a-form-item>
      <a-form-item
        field="lecturer"
        label="授课讲师:"
        :rules="[{ required: true, message: '请选择讲师' }]"
      >
        <a-select v-model="form.lecturer" placeholder="下拉菜单">
          <a-option :value="item.id" v-for="item in optionTea" :key="item.id">{{
            item.realname
          }}</a-option>
        </a-select>
      </a-form-item>
      <a-form-item
        field="time"
        label="排课时间:"
        :rules="[{ required: true, message: '请选择时间' }]"
      >
        <a-range-picker
          showTime
          v-model="form.time"
          :time-picker-props="{ defaultValue: ['00:00:00', '09:09:06'] }"
          format="YYYY-MM-DD HH:mm:ss"
        />
      </a-form-item>
      <a-form-item field="radio" class="choose">
        <a-radio-group v-model="form.radio">
          <a-radio value="循环">循环</a-radio>
          <a-radio value="单次">单次</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        field="week"
        label="循环周数:"
        v-if="form.radio == '循环'"
        :rules="[{ required: true, message: '请选择循环周数' }]"
      >
        <a-select v-model="form.week" placeholder="下拉菜单">
          <a-option value="1">1周</a-option>
          <a-option value="2">2周</a-option>
          <a-option value="3">3周</a-option>
        </a-select>
      </a-form-item>
      <a-form-item class="form-sub">
        <a-button html-type="submit">保存</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script  lang="ts">
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Message } from '@arco-design/web-vue';
import {
  getschedyleClass,
  getschedyleLesson,
  getschedyleSub,
  getschedyleTea,
  Sumbit,
} from '../../../../api/schedyle';

export default {
  setup() {
    const form = reactive({
      grade: '',
      course: '',
      subject: '',
      time: [],
      radio: '循环',
      week: '',
      lecturer: '',
    });
    const getData = () => {
      getClass();
    };
    let ischeckObj = ref(true);
    let optionClass = ref([]);
    let optionLesson = ref([]);
    let optionSub = ref([]);
    let optionTea = ref([]);
    const getClass = () => {
      getschedyleClass().then((res) => {
        optionClass.value = res.data.data;
      });
      getschedyleLesson().then((res) => {
        optionLesson.value = res.data.data;
      });
      getschedyleTea().then((res) => {
        optionTea.value = res.data.data;
      });
    };
    const changeLesson = (value) => {
      form.subject = '';
      getschedyleSub({ seriesId: value }).then((res) => {
        optionSub.value = res.data.data;
        ischeckObj.value = false;
      });
    };
    const route = useRoute();
    if (route.query.id) {
      form.grade = route.query.id.toString();
    }
    const handleSubmit = (data: any) => {
      const params = {
        groupId: form.grade,
        seriesId: form.course,
        subjectId: form.subject,
        teacherId: form.lecturer,
        beginAt: form.time[0],
        endAt: form.time[1],
      };
      Sumbit(params).then((res: any) => {
        console.log(res);
        if (res.data.data.code == '200') {
          Message.success('排课成功');
          form.grade = '';
          form.course = '';
          form.subject = '';
          form.time = [];
          form.radio = '循环';
          form.week = '';
          form.lecturer = '';
        } else {
          Message.warning(res.data.data.message);
        }
      });
    };
    getData();
    return {
      form,
      route,
      optionClass,
      optionLesson,
      ischeckObj,
      optionSub,
      optionTea,
      getData,
      getClass,
      handleSubmit,
      changeLesson,
    };
  },
};
</script>
<style scoped lang="less">
.container {
  padding: 0 20px 40px 20px;
  background-color: var(--color-bg-2);
  overflow: hidden;
  height: 100%;

  .class-main .tit {
    font-size: 20px;
    padding: 12px 0 32px 35px;
    border-bottom: 1px solid #bbbbbb;
    color: var(--color-text-1);
  }
  .choose ::v-deep(.arco-col-19) {
    padding-left: 0;
  }

  .choose ::v-deep(.arco-col-5) {
    padding-left: 74px;
  }
  .choose ::v-deep(.arco-form-item-content) {
    flex: initial;
    width: auto;
  }
  .form ::v-deep(.arco-form-item-content) {
    width: 380px;
  }
}
</style>