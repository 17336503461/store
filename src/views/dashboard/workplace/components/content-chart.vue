<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card
      class="general-card"
      :header-style="{ paddingBottom: 0 }"
      :body-style="{
        paddingTop: '20px',
      }"
      :title="$t('workplace.Top.20.most.popular.questions')"
    >
      <!-- Next is form which is the Top.20.most.popular.questions.-->
        <a-table :columns="columns" :data="data" />
    </a-card>
  </a-spin>
</template>

<script lang="ts" >
  import { ref } from 'vue';
  import { graphic } from 'echarts';
  import useLoading from '@/hooks/loading';
  import { queryContentData, ContentDataRecord } from '@/api/dashboard';
  import useChartOption from '@/hooks/chart-option';
  import { ToolTipFormatterParams } from '@/types/echarts';
  import { AnyObject } from '@/types/global';

  import { reactive } from 'vue';

export default {
  setup() {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id_name',
      },
      {
        title: '题目',
        dataIndex: 'id_problems',
      },
      {
        title: '刷题量',
        dataIndex: 'id_brushProblems',
      },
      {
        title: '录入用户',
        dataIndex: 'id_isEmployed',
      },
      {
        title:'创建时间',
        dataIndex: 'id_makeTime',
      },
      {
        title:'正确率',
        dataIndex: 'id_accuracy',
      }
    ];
    const data = reactive([{
      id_name: '98',
      id_problems: '产品经理必备干货一一实用高效沟通话术',
      id_brushProblems: 71,
      id_isEmployed: '孙忆枫',
      id_makeTime: '10:03',
      id_accuracy:'18',
    }, {
      id_name: '98',
      id_problems: '产品经理必备干货一一实用高效沟通话术',
      id_brushProblems: 71,
      id_isEmployed: '孙忆枫',
      id_makeTime: '10:03',
      id_accuracy:'18',
    }, {
      id_name: '98',
      id_problems: '产品经理必备干货一一实用高效沟通话术',
      id_brushProblems: 71,
      id_isEmployed: '孙忆枫',
      id_makeTime: '10:03',
      id_accuracy:'18',
    }, {
      id_name: '98',
      id_problems: '产品经理必备干货一一实用高效沟通话术',
      id_brushProblems: 71,
      id_isEmployed: '孙忆枫',
      id_makeTime: '10:03',
      id_accuracy:'18',
    }, {
      id_name: '98',
      id_problems: '产品经理必备干货一一实用高效沟通话术',
      id_brushProblems: 71,
      id_isEmployed: '孙忆枫',
      id_makeTime: '10:03',
      id_accuracy:'18',
    }, {
      id_name: '98',
      id_problems: '产品经理必备干货一一实用高效沟通话术',
      id_brushProblems: 71,
      id_isEmployed: '孙忆枫',
      id_makeTime: '10:03',
      id_accuracy:'18',
    }, 
    
    
    ]);

    return {
      columns,
      data
    }
  },
}

  function graphicFactory(side: AnyObject) {
    return {
      type: 'text',
      bottom: '8',
      ...side,
      style: {
        text: '',
        textAlign: 'center',
        fill: '#4E5969',
        fontSize: 12,
      },
    };
  }
  const { loading, setLoading } = useLoading(true);
  const xAxis = ref<string[]>([]);
  const chartsData = ref<number[]>([]);
  const graphicElements = ref([
    graphicFactory({ left: '2.6%' }),
    graphicFactory({ right: 0 }),
  ]);
  const { chartOption } = useChartOption(() => {
    return {
      grid: {
        left: '2.6%',
        right: '0',
        top: '10',
        bottom: '30',
      },
      xAxis: {
        type: 'category',
        offset: 2,
        data: xAxis.value,
        boundaryGap: false,
        axisLabel: {
          color: '#4E5969',
          formatter(value: number, idx: number) {
            if (idx === 0) return '';
            if (idx === xAxis.value.length - 1) return '';
            return `${value}`;
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          interval: (idx: number) => {
            if (idx === 0) return false;
            if (idx === xAxis.value.length - 1) return false;
            return true;
          },
          lineStyle: {
            color: '#E5E8EF',
          },
        },
        axisPointer: {
          show: true,
          lineStyle: {
            color: '#23ADFF',
            width: 2,
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
        },
        axisLabel: {
          formatter(value: any, idx: number) {
            if (idx === 0) return value;
            return `${value}k`;
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: '#E5E8EF',
          },
        },
      },
      tooltip: {
        trigger: 'axis',
        formatter(params) {
          const [firstElement] = params as ToolTipFormatterParams[];
          return `<div>
            <p class="tooltip-title">${firstElement.axisValueLabel}</p>
            <div class="content-panel"><span>总内容量</span><span class="tooltip-value">${(
              Number(firstElement.value) * 10000
            ).toLocaleString()}</span></div>
          </div>`;
        },
        className: 'echarts-tooltip-diy',
      },
      graphic: {
        elements: graphicElements.value,
      },
      series: [
        {
          data: chartsData.value,
          type: 'line',
          smooth: true,
          // symbol: 'circle',
          symbolSize: 12,
          emphasis: {
            focus: 'series',
            itemStyle: {
              borderWidth: 2,
            },
          },
          lineStyle: {
            width: 3,
            color: new graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: 'rgba(30, 231, 255, 1)',
              },
              {
                offset: 0.5,
                color: 'rgba(36, 154, 255, 1)',
              },
              {
                offset: 1,
                color: 'rgba(111, 66, 251, 1)',
              },
            ]),
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(17, 126, 255, 0.16)',
              },
              {
                offset: 1,
                color: 'rgba(17, 128, 255, 0)',
              },
            ]),
          },
        },
      ],
    };
  });
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: chartData } = await queryContentData();
      chartData.forEach((el: ContentDataRecord, idx: number) => {
        xAxis.value.push(el.x);
        chartsData.value.push(el.y);
        if (idx === 0) {
          graphicElements.value[0].style.text = el.x;
        }
        if (idx === chartData.length - 1) {
          graphicElements.value[1].style.text = el.x;
        }
      });
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  fetchData();
</script>

<style scoped lang="less"></style>
