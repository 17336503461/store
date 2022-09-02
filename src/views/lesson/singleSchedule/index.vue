<template>
    <div class="container">
<<<<<<< HEAD
        <Breadcrumb :items="['课件模块', '单次课程']" />
    </div>
    </template>
    <script  lang="ts">
        export default {
            name: 'singleSchedule',
        };
    </script>
    <style scoped lang="less">
        .container {
            padding: 0 20px 40px 20px;
            background-color: var(--color-bg-2);
            overflow: hidden;
            height: 100%;
        }
=======
        <!-- <Breadcrumb :items="['课件模块', '单次课程']" /> -->
        <div class="head">
            <h2 id="course-head">班级排课</h2>
            <div class="class-choose">
                <p id="course-class">排课班级</p>
                <!-- 下拉框 -->
                <a-dropdown @select="handleSelect" :popup-max-height="false">
                    <a-button>下拉菜单
                        <icon-down />
                    </a-button>
                    <template #content>
                        <a-doption>Option 1</a-doption>
                        <a-doption disabled>Option 2</a-doption>
                    </template>
                </a-dropdown>
            </div>
        </div>
        <!-- 课表 -->
        <div class="content">
            <div id="course"></div>
            <div id="course"></div>
            <div id="course">20</div>
            <div id="course">93</div>
            <div id="course">92</div>
            <div id="course">22</div>
            <div id="course">97</div>
            <div id="course">94</div>
            <div id="course">72</div>
            <div id="course">30</div>
            <div id="course">20</div>
            <div id="course">97</div>
            <div id="course">77</div>
            <div id="course">72</div>
            <div id="course">40</div>
            <div id="course">52</div>
            <div id="course" class="active">90</div>
            <div id="course" class="active">90</div>
            <div id="course">22</div>
            <div id="course" class="active">90</div>
            <div id="course" class="active">90</div>
            <div id="course">17</div>
            <div id="course" class="active">90</div>
            <div id="course" class="active">90</div>
            <div id="course">64</div>
            <div id="course" class="active">90</div>
            <div id="course" class="active">90</div>
            <div id="course">32</div>
            <div id="course" class="active">90</div>
            <div id="course" class="active">90</div>
            <div id="course">70</div>
            <div id="course" class="active">90</div>
            <div id="course" class="active">90</div>
            <div id="course"></div>
            <div id="course"></div>
        </div>
    </div>
</template>

    <script  lang="ts">
export default {
    name: 'singleSchedule',
};
</script>
    <style scoped lang="less">
    .container {
        // padding: 0 20px 40px 20px;
        background-color: var(--color-bg-2);
        overflow: hidden;
        height: 100%;
        margin: 10px 10px;
        border: 1px solid var(--color-neutral-4);
    }
    
    #course-head {
        margin-left: 40px;
        margin-top: 20px;
    }
    
    .class-choose {
        display: flex;
    }
    .head{
        border-bottom: 1px solid var(--color-neutral-4);
        height: 100px;
    }
    
    #course-class {
        margin-left: 40px;
        margin-top: 10px;
        margin-right: 20px;
    }
    .content{
        width: 710px;
        height: 192px;
        // background: red;
        margin: 50px 50px;
        border: 1px solid var(--color-neutral-4);
        float: left;
    }
    #course{
        width: 100px;
        height: 38px;
        // background-color: aqua;
        border: 0.5px solid var(--color-neutral-2);
        float: left;
        margin-left: 1px;
        text-align: center;
        line-height: 38px;
    }
    .active{
        background-color: rgb(var(--green-6));
    }
>>>>>>> 171dc00 (个性化排课)
    </style>