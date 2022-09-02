<template>
  <div class="container">
    <Breadcrumb :items="['题库模块', '选择题']" />
    <div class="Picking">
      <div class="nav">
        <p class="title">选择题</p>
        <div class="description">
          <div>技术栈归属:&nbsp;&nbsp;后端 - mysql - 选择题</div>
          <div class="rate">
            <div>题型难度:&nbsp;&nbsp;</div>
            <a-rate :default-value="4" readonly color="black"/>
          </div>
          <div>答题分数:&nbsp;&nbsp;5分</div>
        </div>
      </div>
      <div class="content">
        <p class="title">题目:</p>
        <div class="questAnswer">
          <p class="question">Mysql的事务隔离有包含以下哪几种特性 :</p>
          <a-space direction="vertical" size="large">
            <a-checkbox-group>
                <a-checkbox value="1">原子性</a-checkbox>
                <a-checkbox value="2">一致性</a-checkbox>
                <a-checkbox value="3">隔离性</a-checkbox>
            </a-checkbox-group>
            <a-checkbox-group>
                <a-checkbox value="1">持久性</a-checkbox>
                <a-checkbox value="2">唯一性</a-checkbox>
                <a-checkbox value="3">排他性</a-checkbox>
            </a-checkbox-group>
          </a-space>
          <a-button type="outline">确定</a-button>
        </div>
      </div>
    </div>
  </div>
</template>
    <script  lang="ts">
export default {
  name: 'Picking',
};
</script>
    <style scoped lang="less">
.container {
  padding: 0 20px 40px 20px;
  background-color: var(--color-bg-2);
  overflow: hidden;
  height: 100%;

  .Picking {
    p {
      margin: 0;
    }

    background-color: #fff;
    height: 100%;

    .nav {
      .title {
        font-size: 20px;
      }

      .description {
        font-size: 18px;
        margin-top: 29px;
        line-height: 18px;
        display: flex;
        align-items: center;

        .rate {
          display: flex;
          align-items: center;
          margin: 0 120px;

          :deep(.arco-rate) {
            min-height: 24px;
          }
        }
      }
    }

    .nav::after {
      display: block;
      content: '';
      width: 100%;
      height: 1px;
      background-color: #bbb;
      margin: 30px 0;
    }

    .content {
      .title {
        font-size: 18px;
      }

      .questAnswer {
        margin-left: 44px;

        .question {
          margin: 18px 0 38px 0;
        }

        :deep(.arco-checkbox-group){
            margin-left: -4px;
        }

        :deep(.arco-checkbox) {
          line-height: 0;
          margin-right: 80px;
          margin-bottom: 15px;
        }

        :deep(.arco-btn) {
          display: block;
          margin-top: 40px;
          width: 80px;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
}
</style>