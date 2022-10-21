<template>
    <div class="container">
        <Breadcrumb :items="['课程管理', '排课管理']" />
        <div class="include">
        <div id="box">
            <div id="title">
                <h1>排课管理</h1>
            </div>
            <div id="range">
                <div id="left">
                    <p>排课时间范围</p>
                    <a-space size="large">
    <a-dropdown>
      <a-button style="text-align:center ;">点击选择时间</a-button>
      <template #content>
        <a-doption>08:00-09:30</a-doption>
        <a-doption>10:00-11:30</a-doption>
        <a-doption >13:30-15:00</a-doption>
        <a-doption >15:30-17:00</a-doption>
      </template>
    </a-dropdown>
</a-space>     
                    <button id="button">确定</button>
                </div>
                <div id="right">
                    <p>排课班级</p>
                    <a-space size="large">
    <a-dropdown>
      <a-button>点击选择班级</a-button>
      <template #content>
        <a-doption>vip1班</a-doption>
        <a-doption>vip2班</a-doption>
        <a-doption >vip3班</a-doption>
        <a-doption >vip4班</a-doption>
      </template>
    </a-dropdown>
</a-space>     
                </div>
                <button id="button">周排课</button>
                <button id="button">月排课</button>
            </div>
        </div>
        <div id="time">
            <div id="child">
                <a-table :columns="columns" :data="data" />
            </div>
        </div>
    </div>
    </div>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
    setup() {
    const columns = [
      {
        title: '时间',
        dataIndex: 'time',
      },
      {
        title: '2022-09-01',
        dataIndex: 'data1',
      },
      {
        title: '2022-09-08',
        dataIndex: 'data2',
      },
      {
        title: '2022-09-15',
        dataIndex: 'data3',
      },
      {
        title: '2022-09-21',
        dataIndex: 'data4',
      },
      {
        title: '2022-09-29',
        dataIndex: 'data5',
      },
      {
        title: '2022-10-07',
        dataIndex: 'data6',
      },
    ];
    const data = reactive([{
      key: '1',
      time: '08:00-09:30',
      data1:'',
      data2:'',
      data3:'',
      data4:'',
      data5:'',
      data6:'',
    }, {
      key: '2',
      time: '10:00-11:30',
      data1:'',
      data2:'',
      data3:'',
      data4:'',
      data5:'',
      data6:'',
    }, {
      key: '3',
      time: '13:30-15:00',
      data1:'',
      data2:'',
      data3:'',
      data4:'',
      data5:'',
      data6:'',
    }, {
      key: '4',
      time: '15:30-17:00',
      data1:'',
      data2:'',
      data3:'',
      data4:'',
      data5:'',
      data6:'',
    }, {
      key: '5',
      time: '16:00- 17:30',
      data1:'',
      data2:'',
      data3:'',
      data4:'',
      data5:'',
      data6:'',
    }]);

    return {
      columns,
      data
    }
  },
}

</script>
<style>
.container {
    margin: 10px;
    height: 100%;
    padding: 0 20px 40px 20px;
    background-color: var(--color-bg-2);
    overflow: hidden;

}

.include{
    border:1px solid gainsboro;
    height: 100%;
    width:100%;
}
#title {
    font-size: 10px;
}

#box {
    border-bottom: 1px solid gainsboro; 
    padding-left: 30px;
    padding-bottom: 13px;
}

#left {
    width: 200px;
    display: inline;
    padding-right: 40px;
}

#right {
    width: 200px;
    display: inline;
    
}

#range p {
    width: 100px;
    display: inline;
    padding-right: 25px;
}

#range button {
    width: 110px;
    margin: 20px;
}
#range #button{
    width: 80px;
    margin: 20px;
}

#time {
    height: 100%;
    padding: 10px;
    /* padding-left: 30px; */
    width: 100%;
    text-align: center;
    line-height: 100%;
    /* left: 50px; */
    position: relative;
    top: 25px;
    /* border: 1px solid gainsboro;  */
}

#range select {
    height: 100%;
    /* margin: 4px; */
    width: 150px;
}

#time tr {
    height: 50px;
}

.data {
    padding: 10px;
}

.CourseTime {
    height: 50px;
    width: 100px;
}

.child {
    position: absolute;

}

table {
    border-spacing: 0;
    border-collapse: collapse;
}


th,
td {
    border: 1px solid #bdc7d7;
}
tbody{
    background-color: rgb(147, 174, 211);
}

</style>