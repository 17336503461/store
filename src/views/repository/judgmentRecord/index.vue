<template>
    <div class="container">
        <!-- <Breadcrumb :items="['题库模块', '判断题录入']" /> -->
        <div class="judgment-head">
            <h3>判断题</h3>
            <div class="judg-option">
                <!-- 技术栈选项 -->
                <div id="jishuzhan-option">
                    <p id="option_title">技术栈：</p>
                    <a-dropdown @select="handleSelect" :popup-max-height="false">
                        <a-button>下拉菜单
                            <icon-down />
                        </a-button>
                        <template #content>
                            <a-doption>Option 1</a-doption>
                            <a-doption>Option 2</a-doption>
                        </template>
                    </a-dropdown>
                </div>
                <!-- 题型难度 -->
                <div id="difficulty-option">
                    <p id="option_title">题型难度：</p>
                    <a-dropdown @select="handleSelect" :popup-max-height="false">
                        <a-button>下拉菜单
                            <icon-down />
                        </a-button>
                        <template #content>
                            <a-doption>Option 1</a-doption>
                            <a-doption>Option 2</a-doption>
                        </template>
                    </a-dropdown>
                </div>
                <!-- 答题分数 -->
                <div id="score-option">
                    <p id="option_title">答题分数：</p>
                    <a-input-number v-model="value" :style="{ width: '320px' }" placeholder="Please Enter"
                        class="input-demo" :min="1" :max="100" model-event="input" />
                    <!-- <div>value: {{ value }}</div> -->
                </div>
            </div>
            <div class="judg-option1">
                <!-- 科目 -->
                <div id="subject-option">
                    <p id="option_title">科目：</p>
                    <a-dropdown @select="handleSelect" :popup-max-height="false">
                        <a-button>下拉菜单
                            <icon-down />
                        </a-button>
                        <template #content>
                            <a-doption>Option 1</a-doption>
                            <a-doption>Option 2</a-doption>
                        </template>
                    </a-dropdown>
                </div>
                <!-- 题型类别 -->
                <div id="types-option">
                    <p id="option_title">题型类别：</p>
                    <a-dropdown @select="handleSelect" :popup-max-height="false">
                        <a-button>下拉菜单
                            <icon-down />
                        </a-button>
                        <template #content>
                            <a-doption>Option 1</a-doption>
                            <a-doption>Option 2</a-doption>
                        </template>
                    </a-dropdown>
                </div>
            </div>
        </div>
        <div class="content">
            <!-- 题目输入框 -->
            <div id="topic">
                <p>题目：</p>
                <a-textarea id="topic-input" placeholder="多行输入" allow-clear :auto-size="{
                    minRows: 2,
                    maxRows: 10
                }" />
            </div>
            <!-- 判断题项 -->
            <div class="judgment-item">
                <!-- 选项1 -->
                <div id="option-one">
                    <p>判断题项：</p>
                    <a-input id="item-input" :style="{ width: '320px', height:'30px' }" placeholder="单行输入" allow-clear />
                    <a-radio value="correctA">正确结果</a-radio>
                </div>
                <!-- 选项2 -->
                <div id="option-two">
                    <a-input id="item-input" :style="{ width: '320px' }" placeholder="单行输入" allow-clear />
                    <a-radio value="correctB">正确结果</a-radio>
                    <a-button type="outline">增加一行</a-button>
                    <a-button type="outline">删除此行</a-button>
                </div>
                <a-button id="submit" type="outline">提交</a-button>
            </div>

        </div>
    </div>
</template>
    <script  lang="ts">
export default {
    name: 'JudgmentRecord',
    data() {
        return {
            value: 1
        }
    },
    setup() {
        const handleSelect = (v) => {
            console.log(v)
        };

        return {
            handleSelect
        }
    },
};
</script>
    <style scoped lang="less">
    .container {
        // padding: 20px 20px 40px 20px;
    
        background-color: white;
        overflow: hidden;
        height: 100%;
        border: 1px solid var(--color-neutral-4);
        margin: 5px 5px 5px 5px;
    }
    
    h3 {
        margin-top: 40px;
        margin-left: 40px;
        margin-bottom: 20px;
        ;
    }
    
    .judg-option {
        display: flex;
        justify-content: flex-start;
        margin-left: 60px;
    }
    
    #jishuzhan-option {
        display: flex;
        justify-content: flex-start;
        margin-right: 100px;
    }
    
    #difficulty-option {
        display: flex;
        justify-content: flex-start;
        margin-right: 100px;
    }
    
    #score-option {
        display: flex;
        justify-content: flex-start;
    }
    
    .judg-option1 {
        display: flex;
        justify-content: flex-start;
        margin-left: 74px;
        margin-top: 20px;
        margin-bottom: 50px;
    }
    
    #subject-option {
        display: flex;
        justify-content: flex-start;
        margin-right: 100px;
    }
    
    #types-option {
        display: flex;
        justify-content: flex-start;
    }
    
    #option_title {
        margin-right: 20px;
    }
    
    .content {
        border-top: 1px solid var(--color-neutral-4);
    }
    
    #topic {
        display: flex;
        justify-content: flex-start;
    }
    
    #topic p {
        margin-left: 100px;
        margin-top: 50px;
    }
    
    #topic-input {
        width: 600px;
        margin-top: 50px;
        margin-left: 20px;
        background-color: #FFF;
        border: 1px solid var(--color-neutral-4);
    }
    
    .judgment-item {
        margin-top: 30px;
    }
    
    #item-input {
        background-color: #FFF;
        border: 1px solid var(--color-neutral-4);
        margin-right: 20px;
        margin-top: 5px;
    }
    
    #option-one {
        display: flex;
        justify-content: flex-start;
        margin-top: 50px;
        margin-left: 70px;
    }
    
    #option-one p {
        margin-right: 20px;
    }
    
    #option-two {
        margin-top: 40px;
        margin-left: 160px;
    }
    #option-two button{
        border: 1px solid var(--color-neutral-4);
        margin-left: 20px;
        color: #000;
    }
    #submit{
        color: #000;
        border: 1px solid var(--color-neutral-4);
        margin-top: 40px;
        margin-left: 160px;
    }
    </style>