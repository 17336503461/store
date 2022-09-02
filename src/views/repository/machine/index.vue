<template>
  <div class="container">
    <Breadcrumb :items="['题库模块', '机试题']" />
    <div class="machine-main">
      <div class="title">机试题</div>
      <div class="Message">
        <div id="Tech">
          <span class="mes">技术栈归属: </span>
          <span class="mes" id="tec"></span>
        </div>
        <div id="Diff">
          <span class="mes">题型难度: </span>
        </div>
        <div id="Scor">
          <span class="mes">答题分数: </span>
          <span class="mes" id="sco"></span>
        </div>
        <a-rate
          :model-value="data.Diff"
          :count="4"
          readonly
          color="black"
          style="position: absolute; top: -5px; left: 460px; font-size: 24px"
        />
      </div>
      <p id="line"></p>
      <div class="title2">题目:</div>
      <div id="Ques">
        <div id="question"
          >
        </div>
        <a-textarea
          :auto-size="{
            minRows: 2,
            maxRows: 19,
          }"
          style="
            width: 595px;
            height: 428px;
            background-color: white;
            border: 1px solid rgba(187, 187, 187, 100);
          "
        />
        <div id="btn">
          <a-button type="outline" class="button">执行</a-button>
          <a-button type="outline" class="button">确定</a-button>
        </div>
      </div>
    </div>
  </div>
</template>
    <script  lang="ts">
    import { reactive,onMounted } from 'vue';
export default {
  setup() {
        let answer=''; 
        const data = reactive({
            Tech:'后端-java-机试题',
            Diff:3,
            Scor:'5分',
            ques:'现有一个输入数组 , 请书写一段代码 对输入的数组进行查找处理,并返回这个数组内 不重复的值!例如: [ 1,3,45,6,8,10, 3 6 ] 返回值为[1,2,45,8,10]'
        });
        onMounted(() => {
        let a=document.getElementById('tec');
        if(a!=null)
        a.innerText=data.Tech; 
        a=document.getElementById('sco');
        if(a!=null)
        a.innerText=data.Scor;
        a=document.getElementById('question');
        if(a!=null)
        a.innerText=data.ques;
        });
        return {
            data,answer
        }
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
.machine-main {
  height: 950px;
  border: 1px solid #bbbbbb;
  padding-left: 26px;
}
.title {
  width: 60px;
  height: 29px;
  line-height: 29px;
  text-align: center;
  color: rgba(16, 16, 16, 100);
  font-size: 20px;
  margin-top: 49px;
  margin-bottom: 29px;
  font-family: SourceHanSansSC-regular;
}
.Message {
  height: 26px;
  line-height: 26px;
  position: relative;
}
.mes {
  color: rgba(16, 16, 16, 100);
  font-size: 18px;
  font-family: SourceHanSansSC-regular;
}
#Tech {
  width: 377px;
  float: left;
}
#Diff {
  width: 377px;
  float: left;
  line-height: 26px;
  float: left;
}
#Scor {
  width: 377px;
  float: left;
}
#line {
  border-top: 1px solid rgba(187, 187, 187, 100);
  width: 1152px;
  margin: 30px 0px;
}
.title2 {
  width: 42px;
  height: 26px;
  color: rgba(16, 16, 16, 100);
  font-size: 18px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
  margin-bottom: 25px;
}
#Ques {
  margin-left: 60px;
}
#question {
  margin-bottom: 37px;
  width: 595px;
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
#btn {
  margin-top: 57px;
}
.button {
  margin-right: 69px;
  width: 80px;
  height: 30px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 100);
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  text-align: center;
  font-family: Microsoft Yahei;
  border: 1px solid rgba(187, 187, 187, 100);
}
</style>
