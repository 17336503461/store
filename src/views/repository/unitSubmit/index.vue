<template>
    <div class="container">
        <Breadcrumb :items="['题库模块', '结业评价']" />
        <div>
            <h3>&nbsp;&nbsp;科目结业提交</h3>
            <div className="total">

                <p className="left">&nbsp;技术栈:
                    <select>
                        <option value="push">下拉菜单</option>
                        <option value="saab">Java</option>
                        <option value="opel">Mysql</option>
                        <option value="audi">Vue</option>
                    </select>
                </p>
                <p className="right">
                    科目:
                    <select>
                        <option value="push">下拉菜单</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </p>
            </div>
            <hr>
            <div className="second">
            <p>科目练习项目地址:</p>
                &nbsp; &nbsp; &nbsp;
                
                <a-textarea placeholder="多行输入" style="width:400px;height:80px;margin-left: 130px;margin-top:-30px;" allow-clear/>
                    <!--<input type="text" placeholder="请填写项目地址" style="width:400px;height:80px;text-align: left">-->
            


            </div>
            <div className="teacher-grade">

                对当前授课教师评分:
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a-rate :default-value="0" allow-clear style="margin-bottom:-5px;"/>
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
                <div className="image-left">对当前授课老师印象:</div>
                <div className="image-right">
                    技术够好&nbsp; 讲课细致&nbsp; 技术一般&nbsp; 讲课卡顿
                    <p>总爱迟到&nbsp; 认真负责&nbsp; 不关心学员&nbsp; 课程互动多</p>
                </div>


            </div>

            <div className="bable">
                &nbsp;&nbsp;&nbsp;其他印象标签(选填):&nbsp;&nbsp;&nbsp;&nbsp;
                <a-input :style="{ width: '320px' }" placeholder="请填选" allow-clear />
            </div>
            <button className="button">提交</button>
        </div>
    </div>
</template>
<script  lang="ts">
export default {
    name: 'UnitSubmit',
};
</script>
<style scoped lang="less">
hr {
    width: 1020px;

    margin-top: 30px;
    margin-bottom: 80px;
    border: 1px solid #ccc;
    float: left;
}

.total {
    width: 100%
}

.total .left {
    float: left;
    width: 24%;
    height: 100%
}

.total .right {
    float: right;
    width: 76%;
    height: 100%
}

.second {
    width: 1000px;
    height: 300px;


}


.teacher-grade {
    /*margin-bottom: 18px;*/
}

.teacher-image {
    margin-top: 40px;

}

.bable {
    margin-top: 120px;
}

.button {
    margin-top: 20px;
    margin-left: 20px;
}

.teacher-image .image-left {
    float: left;
    width: 16%;
    height: 100%
}

.teacher-image .image-right {
    float: right;
    width: 84%;
    height: 100%;
    cursor: pointer;
}
</style>