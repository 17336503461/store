<template>
  <div class="container">
    <Breadcrumb :items="['题库模块', '判断题录入']" />
    <div class="judgment">
      <div class="nav">
        <p class="title">判断题</p>
        <div class="description">
          <div>技术栈归属:&nbsp;&nbsp;前端 - vue - 判断题</div>
          <div class="rate">
            <div>题型难度:&nbsp;&nbsp;</div>
            <a-rate :default-value="4" readonly />
          </div>
          <div>答题分数:&nbsp;&nbsp;5分</div>
        </div>
      </div>
      <div class="content">
        <p class="title">题目:</p>
        <div class="questAnswer">
          <p class="question">关于 VUE 框架描述不正确的一项是 : </p>
          <a-radio-group direction="vertical">
            <a-radio value="A">A</a-radio>
            <a-radio value="B">B</a-radio>
          </a-radio-group>
          <a-button type="outline">确定</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import url('./judgment.less');
</style>
<script  lang="ts">
  export default {
    name: 'judgment',
  };
</script>