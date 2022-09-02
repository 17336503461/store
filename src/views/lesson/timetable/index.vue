<template>
    <div class="container">
        <div id="box">
            <div id="title">
                <h1>排课管理</h1>
            </div>
            <div id="range">
                <div id="left">
                    <p>排课时间范围</p>
                    <select v-model="value" placeholder="请选择排课时间">
                        <option v-for="item in options1" :key="item.value1" :label="item.label" :value="item.value1">
                        </option>
                    </select>
                    <button>确定</button>
                </div>
                <div id="right">
                    <p>排课班级</p>
                    <select v-model="value" placeholder="请选择排课班级">
                        <option v-for="item in options2" :key="item.valuea" :label="item.label" :value="item.valuea">
                        </option>
                    </select>
                    </div>
                    <button>周排课</button>
                    <button>月排课</button>
                </div>
            </div>
        <div id="time">
            <div id="child">
     <table>
       <thead>
		<tr>
			<th class="CourseTime">时间</th>
			<th class="data">2022-09-01</th>
			<th class="data">2022-09-08</th>
			<th class="data">2022-09-15</th>
            <th class="data">2022-09-21</th>
            <th class="data">2022-09-29</th>
            <th class="data">2022-10-07</th>
            <th class="data">2022-10-14</th>
		</tr>
	</thead>
        <tbody>
			<tr>
				<td class="CourseTime">8:00- 9:30</td>
				<td class="choose"></td>
				<td class="choose"></td>
				<td class="choose"></td>
                <td class="choose"></td>
				<td class="choose"></td>
				<td class="choose"></td>
                <td class="choose"></td>
			</tr>
            <tr>
				<td class="CourseTime">10:00-11:30</td>
				<td class="choose"></td>
				<td class="choose"></td>
				<td class="choose"></td>
                <td class="choose"></td>
				<td class="choose"></td>
				<td class="choose"></td>
                <td class="choose"></td>
			</tr>
            <tr>
				<td class="CourseTime">13:30-15:00</td>
				<td class="choose"></td>
				<td class="choose"></td>
				<td class="choose"></td>
                <td class="choose"></td>
				<td class="choose"></td>
				<td class="choose"></td>
                <td class="choose"></td>
			</tr>
            <tr>
				<td class="CourseTime">15:30-17:00</td>
				<td class="choose"></td>
				<td class="choose"></td>
				<td class="choose"></td>
                <td class="choose"></td>
				<td class="choose"></td>
				<td class="choose"></td>
                <td class="choose"></td>
			</tr>
		</tbody>
			
</table>	
</div>		
        </div>
    </div>
</template>
    <script lang="ts">
export default {
    data() {
        return {
            options1: [
            {
                value: '',
                label: '请选择时间范围'
            },{
                value1: '选项1',
                label: ' 8:00- 9:30'
            }, {
                value1: '选项2',
                label: '10:00-11:30'
            }, {
                value1: '选项3',
                label: '13:30-15:00'
            }, {
                value1: '选项4',
                label: '15:30-17:00'
            }, ],
            value1:'',
            options2: [
            {
                value: '',
                label: '请选择排课班级'
            },{
                valuea: '选项a',
                label: ' vip1班'
            }, {
                valuea: '选项b',
                label: 'vip2班'
            },
            {
                valuea: '选项c',
                label: 'vip3班'
            }, {
                valuea: '选项d',
                label: 'vip4班'
            }, {
                valuea: '选项e',
                label: 'vip5班'
            }, ],
            valuea: ''
        }

    }
}
</script>
    <style>
    .container {
        background-color: white;
        border: solid gainsboro;
        margin: 10px;
        height: 100%;
    }
    
    #title {
        font-size: 10px;
    }
    
    #box {
        border: solid gainsboro;
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
        padding-right: 30px;
    }
    
    #range button {
        width: 100px;
        padding-right: 5px;
        margin: 10px;
    }
    
    #time {
        height: 100%;
        padding-left: 30px;
        width: 100%;
        text-align: center;
        line-height: 100%;
        left:50px;
        position: relative;
        top:25px;
    }
    #range select {
        height: 100%;
        margin: 4px;
        width: 150px;
    }
    #time tr{
       height: 50px;
    }
    .data{
        padding: 10px;
    }
    .CourseTime{
        height: 50px;
        width:100px;
    }
    .child{
       position: absolute;

    }
    table{
        border-spacing: 0;
        border-collapse: collapse;
    }

    th,td{
         border:1px solid #bdc7d7;
    }
    .choose:hover{
        background-color: rgb(147, 174, 211);
        
    }
    </style>