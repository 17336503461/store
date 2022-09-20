
<template>
    <div class="nav">
        <div class="in_title">欢迎来到 答题系统</div>
        <div class="in_select">
            <a>请选择您的技术 </a>
                 <a-select v-model="value_one" :options="options_one" :field-names="fieldNames_one" :style="{width:'120px'} "
            placeholder="下拉菜单" />
            <a class="in_select_a">请选择科目</a>
                 <a-select v-model="value" :options="options" :field-names="fieldNames" :style="{width:'120px'}"
            placeholder="下拉菜单" />
        </div>
        <div class="in_button">
            <button class="in_but_one">搜索</button>
            <button class="in_but in_but_twe">录入</button>
            <button class="in_but_three">随机答题</button>
        </div >
        <div class="in_message">
            <div v-for="(item,index) in items" :key="index">
                <div class="in_mes">55</div>
                {{item.message}}
            </div>
        </div>
        <div class="in_line"></div>
        <div class="in_menu">
            <a-table class="in_table" :columns="columns" :data="data" column-resizable :pagination="false" :bordered="{cell:true}"></a-table>
        </div>
    </div>
</template>

<script>

import { reactive, ref } from 'vue';

export default {
  setup() {
    const columns = reactive([{
        title: 'ID',
        dataIndex: 'id',
        width: 50,
      },
      {
        title: '科目',
        dataIndex: 'course',
        width: 100,
      },
      {
        title: '题目',
        dataIndex: 'topic',
        width: 200,
      },
      {
        title: '类别',
        dataIndex: 'sort',
        width: 60,
      },
       {
        title: '难度',
        dataIndex: 'difficulty',
        width: 100,
      }, {
        title: '分数',
        dataIndex: 'score',
        width: 100,
      },
       {
        title: '操作',
        dataIndex: 'operate',
        width: 100,
      },
    ]);
    const data = reactive([{
      id: '1',
      course: 'VUE',
      topic: 23000,
      sort: '算法题',
      difficulty: '一颗星',
      score: 34,
      operate: '答题'
    }, {
      id: '2',
      course: 'VUE',
      topic: 25000,
      sort: '判断题',
      difficulty: '二颗星',
      score: 34,
      operate: '答题'
    }, {
      id: '3',
      course: 'HTML',
      topic: 22000,
      sort: '选择题',
      difficulty: '三颗星',
      score: 34,
      operate: '答题'
    }, {
      id: '4',
      course: 'REACT',
      topic: 17000,
      sort: '判断题',
      difficulty: '一颗星',
      score: 34,
      operate: '答题'
    }, {
      id: '5',
      course: 'VUE',
      topic: 27000,
      sort: '算法题',
      difficulty: '一颗星',
      score: 34,
      operate: '答题'
    }]);
    const items =reactive([{
            message:'张某某同学，你的VUE课程还没完成答题课程，请尽快完成本科目的习题！'
        },
        {
            message:'李某某同学，你的VUE课程还没完成答题课程，请尽快完成本科目的习题！'
        },
        {
            message:'梁某某同学，你的VUE课程还没完成答题课程，请尽快完成本科目的习题！'
        }
    ])
    const fieldNames_one = {value: 'id_one', label: 'text_one'}
    const options_one = reactive([
      {
        id_one:1,
        text_one: '前端'
      },
      {
        id_one:2,
        text_one: '后端'
      },
    ]);
    const fieldNames = {value: 'id', label: 'text'}
    const value = ref('');
    const options = reactive([
      {
        id:1,
        text: 'VUE'
      },
      {
        id:2,
        text: 'HTML'
      },
      {
        id:3,
        text: 'REACT'
      },
    ]);

    return {
      columns,
      data,
      value,
      fieldNames_one,
      fieldNames,
      options,
      options_one,
      items
    }
  },
}
</script>
<style scoped>
    a-select:focus-visible{
        outline: #000;
    }
    .in_title{
        font-size: 20px;
        padding:40px 20px;
    }
    .in_table{
        margin-left: 20px;
        margin-right: 100px;
    }
    .in_select{
        margin-left: 30px ;
        margin-bottom: 10px;
    }
    .in_select_a{
        margin-left: 20px;
    }
    .nav{
        background-color: #fff;
        height: 100%;
        width: 100%;
        padding-left: 10px;
    }
    .in_but_one{
        background: #fff;
        border-radius: 4px;
    }
    .in_but_twe{
        margin: 0 20px;
        background:#fff;
        border-radius: 4px;
    }
    .in_but_three{
        background: rgb(109, 97, 97);
        color:#fff;
        border-radius: 4px;
    }
    .in_button{
        background: #fff;
        float: left;
        margin-top: -40px;
        margin-left: 600px;
        padding-bottom: 20px;
    }
    .in_select{
        font-size: 16px;
    }
    .in_menu{
        margin-top: 20px;
    }
    .in_message{
        margin-left: 30px;
    }
    .in_mes{
        opacity:0;
    }
    .in_line{
        width: 98%;
        height: 1px;
        border-top: 1px  solid rgb(138, 131, 131);
        margin-top: 20px;   
    }
</style>