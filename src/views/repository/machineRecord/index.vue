<template>
  <div class="container">
    <Breadcrumb :items="['题库模块', '机试题录入']" />
    <div class="machinebox">
      <div class="title">机试题</div>
      <div class="above">
        <span id="stack">
          <span class="word">技术栈:</span>
          <a-space direction="vertical" size="large" class="pull">
            <a-select
              class="white"
              placeholder="下拉菜单"
              :trigger-props="{ autoFitPopupMinWidth: true }"
            >
              <a-option>选项一</a-option>
              <a-option>选项二</a-option>
              <a-option>选项三</a-option>
            </a-select>
          </a-space>
        </span>
        <span id="diff">
          <span class="word" :style="{ marginLeft: '147px' }">题型难度:</span>
          <a-space direction="vertical" size="large" class="pull">
            <a-select
              class="white"
              placeholder="下拉菜单"
              :trigger-props="{ autoFitPopupMinWidth: true }"
            >
              <a-option>选项一</a-option>
              <a-option>选项二</a-option>
              <a-option>选项三</a-option>
            </a-select>
          </a-space>
        </span>
        <span id="score">
          <span class="word" :style="{ marginLeft: '161px' }">答题分数:</span>
          <a-space
            direction="vertical"
            size="large"
            class="pull"
            :style="{ marginLeft: '18px' }"
          >
            <a-select
              class="white"
              placeholder="1"
              :trigger-props="{ autoFitPopupMinWidth: true }"
            >
              <a-option>1</a-option>
              <a-option>2</a-option>
              <a-option>3</a-option>
            </a-select>
          </a-space>
        </span>
        <br />
        <span id="subject">
          <div
            class="word"
            :style="{
              marginLeft: '48px',
              marginTop: '32pxy',
              display: 'inline-block',
            }"
            >科目:</div
          >
          <a-space
            direction="vertical"
            size="large"
            class="pull"
            :style="{ marginLeft: '54px' }"
          >
            <a-select
              class="white"
              placeholder="下拉菜单"
              :trigger-props="{ autoFitPopupMinWidth: true }"
            >
              <a-option>选项一</a-option>
              <a-option>选项二</a-option>
              <a-option>选项三</a-option>
            </a-select>
          </a-space>
        </span>
        <span id="category">
          <span class="word" :style="{ marginLeft: '150px' }">题型类别:</span>
          <a-space direction="vertical" size="large" class="pull">
            <a-select
              class="white"
              placeholder="下拉菜单"
              :trigger-props="{ autoFitPopupMinWidth: true }"
            >
              <a-option>选项一</a-option>
              <a-option>选项二</a-option>
              <a-option>选项三</a-option>
            </a-select>
          </a-space>
        </span>
      </div>
      <hr :style="{ marginTop: '30px' }" />
      <div class="below">
        <span id="question">
          <span class="word">题目:</span>
          <a-space>
            <a-input
              class="input"
              default-value="多行输入"
              placeholder="Please enter something"
              allow-clear
            />
          </a-space>
        </span>
        <br />
        <span div="test">
          <span class="word" :style="{ marginLeft: '21px', marginTop: '169px' }"
            >测试用例:</span
          >
          <a-space>
            <a-input
              class="little-input"
              :style="{ marginLeft: '42px', marginTop: '67px' }"
              default-value="多行输入"
              placeholder="Please enter something"
              allow-clear
            />
          </a-space>
        </span>
        <span div="result">
          <span class="word" :style="{ marginLeft: '77px', marginTop: '67px' }"
            >结果值:</span
          >
          <a-space>
            <a-input
              class="little-input"
              :style="{ marginLeft: '31px', marginTop: '67px' }"
              default-value="多行输入"
              placeholder="Please enter something"
              allow-clear
            />
          </a-space>
        </span>
        <br />
        <span div="resultexample">
          <span class="word" :style="{ marginLeft: '21px', marginTop: '81px' }"
            >答题用例:</span
          >
          <a-space>
            <a-input
              class="little-input"
              :style="{ marginLeft: '38px', marginTop: '42px' }"
              default-value="多行输入"
              placeholder="Please enter something"
              allow-clear
            />
          </a-space>
        </span>
        <span div="result">
          <span class="word" :style="{ marginLeft: '90px', marginTop: '81px' }"
            >结果值:</span
          >
          <a-space>
            <a-input
              class="little-input"
              :style="{ marginLeft: '18px', marginTop: '42px' }"
              default-value="多行输入"
              placeholder="Please enter something"
              allow-clear
            />
          </a-space>
        </span>
      </div>
      <button class="but"> 提交 </button>
    </div>
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
.machinebox {
  height: 953px;
  width: 1205px;
  border: 1px solid #bbbbbb;
  padding-left: 8px;
}
.pull {
  background: #FFFFFF;
  border: 1px solid #bbbbbb;
  width: 120px;
  height: 30px;
}
#stack .pull {
  margin-left: 43px;
  margin-top: 22px;
}
#diff .pull {
  margin-left: 23px;
  margin-top: 22px;
}
#category .pull {
  margin-left: 23px;
  margin-top: 22px;
}
.word {
  font-size: 18px;
  color: #101010;
  font-family: SourceHanSansSC-regular;
}
#question .word {
  margin-left: 57px;
  margin-top: 29px;
  float: left;
}
.white {
  background: #ffffff;
}
#stack .word {
  margin-left: 43px;
  margin-top: 28px;
  float: left;
}

#question .input {
  width: 639px;
  height: 115px;
  margin-top: 42px;
  margin-left: 42px;
  background: #ffffff;
  border: 1px solid #bbbbbb;
}
.little-input {
  width: 424px;
  height: 65px;
  background: #ffffff;
  border: 1px solid #bbbbbb;
}
.but {
  margin-left: 141px;
  margin-top: 67px;
  background: #ffffff;
  border: 1px solid #bbbbbb;
  border-radius: 4px;
  width: 80px;
  height: 30px;
}
.title {
  left: 246px;
  top: 96px;
  width: 60px;
  height: 29px;
  color: rgba(16, 16, 16, 100);
  font-size: 20px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
  margin-left: 26px;
  margin-top: 36px;
}
</style>