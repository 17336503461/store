<template>
    <div class="container">
        <Breadcrumb :items="['题库模块', '结业评价']" />
        <div>
            <h2>&nbsp;&nbsp;科目结业提交</h2>
            <div className="total">

                <p className="left">&nbsp;&nbsp;技术栈:
                    <select v-model="series" @change="getSubjectList">
                        <option>请选择</option>
                        <option v-for="(item,index) in techlist" :value="item.id"  key="index" >{{item.title}}</option>
                    </select>
                </p>
                <p className="right">
                    科目:
                    <select v-model="subject">
                        <option>请选择</option>
                        <option v-for="(item,index) in subjectlist" :value="item.id"  key="index" >{{item.title}}</option>
                    </select>
                </p>
            </div>
            <hr>
            <div className="second">
                <p>&nbsp;&nbsp;科目练习项目地址:</p>
                &nbsp; &nbsp; &nbsp;

                <a-textarea placeholder="多行输入" style="width:400px;height:80px;margin-left: 130px;margin-top:-30px;"
                    v-model="address" allow-clear />
                <!--<input type="text" placeholder="请填写项目地址" style="width:400px;height:80px;text-align: left">-->



            </div>
            <div className="teacher-grade">

                &nbsp;&nbsp;对当前授课教师评分:
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a-rate :default-value="0" allow-clear style="margin-bottom:-5px;" />
                <!--<icon-star size='20px'/>
                <icon-star size='20px'/>
                <icon-star size='20px'/>
                <icon-star size='20px'/>
                <icon-star size='20px'/>-->
                <!--
                <a-space size="large">
                    <icon-star :style="{ fontSize: '20px' }" />
                    <icon-star :style="{ fontSize: '20px' }" />
                    <icon-star :style="{ fontSize: '20px' }" />
                    <icon-star :style="{ fontSize: '20px' }" stroke-linecap="round" />
                    <icon-star :style="{ fontSize: '20px' }" stroke-linejoin="arcs" />
                </a-space>
            -->
            </div>
            <div className="teacher-image">
                <div className="image-left">&nbsp;&nbsp;对当前授课老师印象:</div>
                <div className="image-right">
                    <a-space wrap>
                        <a-tag v-for="(item, index) of data" :key="index" :color="coloring()" checkable bordered>{{ item.value }}</a-tag>
                    </a-space>
                </div>


            </div>

            <div className="bable">
                &nbsp;&nbsp;&nbsp;其他印象标签(选填):&nbsp;&nbsp;&nbsp;&nbsp;
                <a-input :style="{ width: '320px' }" placeholder="请填选" allow-clear v-model="write" />
            </div>
            <a-space>

                <a-button type="outline" className="button">提交</a-button>
            </a-space>

        </div>
    </div>
</template>
<script>
//import postgetList from './views/unitSubmit.vue';//request.js还没写
//import {postgetList} from '';
import {getTechonology} from "@/api/TechonologyManage.js"
import {getAccount} from '@/api/AccountManagement.JS'
export default {
    name: 'UnitSubmit',
    data() {
        return {
            techlist: [],//技术栈分类
            subjectlist: [],//科目分类
            address: '',
            write: '',
            series:0,
            subject:0,
        }
    },
    methods: {
        coloring() {
	        return '#' + (Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0'))
        },
        getSeriesList(){
            getTechonology().then(r=>{
                this.techlist = r.data.data
            })
        },
        getSubjectList(){
            if ( this.series > 0 )
                getAccount({seriesId:this.series}).then(r=>{
                    this.subjectlist = r.data.list
                })
        }
    },
    created() {
        this.getSeriesList()
    },
    setup() {
        const data = [{
            value: '技术够好',
        }, {

            value: '讲课细致',
        }, {

            value: '技术一般'
        }, {

            value: '讲课卡顿',
        },
        {
            value: '总爱迟到'
        },
        {

            value: '认真负责'
        },
        {

            value: '不关心学员'
        },
        {

            value: '课程互动多'
        }];

        return {
            data
        }
    },
};
</script>
<style scoped lang="less">
.container {
    background-color: #fff;
    width: 100%;

}

hr {
    width: 1020px;

    margin-top: 30px;
    margin-bottom: 80px;
    border: 1px solid #ccc;
    float: left;
}

.total {
    width: 100%;
    font-size: 15px;

}

.total .left {

    float: left;

    width: 34%;
    height: 100%
}

.total .right {
    float: right;
    width: 66%;
    height: 100%
}

.second {
    width: 1000px;
    height: 300px;
    font-size: 15px;


}


.teacher-grade {
    margin-bottom: 70px;
    font-size: 15px;

}

.teacher-image {
    margin-top: 40px;
    font-size: 15px;

}

.bable {
    margin-top: 180px;
}

.button {
    margin-top: 60px;
    margin-left: 20px;
    color: #000;
    border: 1px solid var(--color-neutral-4);
    width: 70px;
    height: 25px;
    border-radius: 5px;
    font-size: 15px;
}

.teacher-image .image-left {
    float: left;
    width: 15%;
    height: 100%
}

.teacher-image .image-right {
    float: right;
    width: 85%;
    height: 100%;
    cursor: pointer;
    font-size: 13px;
}

.teacher-image .image-right :hover {
    color: #1e90ff;
    font-weight: 400;
}
</style>