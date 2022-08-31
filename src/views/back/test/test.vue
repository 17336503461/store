<template>
  <div class="container">
    <div class="content">
      <h1>自定义的View页面</h1>

        <a-form :model="form" :style="{width:'600px'}">
            <a-form-item field="name" label="用户姓名" validate-trigger="input" required>
            <a-input v-model="form.name" placeholder="please enter your username..." />
            <template #extra>
                <div>Used to login</div>
            </template>
            </a-form-item>
            <a-form-item field="post" label="用户密码" validate-trigger="input" required>
            <a-input v-model="form.post" placeholder="please enter your post..." />
            <template #extra>
                <div>Used to login</div>
            </template>
            <template #help>
                <div>Custom valitae message</div>
            </template>
            </a-form-item>
            <a-form-item field="isRead">
            <a-checkbox v-model="form.isRead">
                I have read the manual
            </a-checkbox>
            </a-form-item>
        </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
      name: '',
      post: '',
      isRead: false,
    });

</script>

<script lang="ts">
  export default {
    name: 'test',
  };
</script>

<style scoped lang="less">

.container{
    background-color: #FFF;
}

</style>
