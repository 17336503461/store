<template>
    <div class="container">
        <Breadcrumb :items="['权限模块', '权限管理']" />
        <div class="maxtop">
            <div class="title">
                <h1>权限列表</h1>
            </div>
            <div class="top">
                <div class="minTop">
                    <p>权限组ID</p>
                    <a-input :style="{width:'170px' }" placeholder="请输入权限组ID..." allow-clear />
                    <p>权限UPL</p>
                    <a-input :style="{width:'170px'}" placeholder="请输入权限URL..." allow-clear />
                    <p>排序规则</p>
                    <a-input :style="{width:'170px'}" placeholder="请输入排序规则..." allow-clear />
                    <a-button type="primary">搜索</a-button>
                </div>
                <div class="minBottom">
                    <p>权限组名</p>
                    <a-input :style="{width:'170px'  }" placeholder="请输入权限组名..." allow-clear />
                    <p>创建时间</p>
                    <a-date-picker style="width: 170px;" show-time :time-picker-props="{ defaultValue: '09:09:06' }"
                        format="YYYY-MM-DD HH:mm:ss" @change="onChange" @select="onSelect" @ok="onOk" />
                    <p id="special">权限组用户</p>
                    <a-input :style="{width:'170px'}" placeholder="请输入权限组用户..." allow-clear />
                    <a-button type="primary">重置</a-button>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="upBottom">
                <a-button type="primary">新建权限组</a-button>
            </div>
            <div class="downButtom">
                <a-table :data="data"  :bordered="{wrapper: true, cell: true}">
                    <template #columns>
                        <a-table-column title="ID" data-index="id"></a-table-column>
                        <a-table-column title="权限组名" data-index="authorityName"></a-table-column>
                        <a-table-column title="创建时间" data-index="createTime"></a-table-column>
                        <a-table-column title="操作">
                            <template #cell="{ record }">
                                <a-button @click="$modal.info({ title:'ID', content:record.name })">编辑权限菜单</a-button>
                                <a-button @click="$modal.info({ title:'ID', content:record.name })">关联用户</a-button>
                            </template>
                        </a-table-column>
                    </template>
                </a-table>
            </div>
        </div>
    </div>

</template>
<script  lang="ts">
import { reactive } from 'vue';
// import { ref } from 'vue';

export default {
    // setDate() {
    //     function onSelect() {
    //         console.log('onSelect');
    //     }

    //     function onChange() {
    //         console.log('onChange: ');
    //     }

    //     function onOk() {
    //         console.log('onOk: ');
    //     }
    //     return {
    //         onSelect,
    //         onChange,
    //         onOk,
    //     };
    // },
    setup() {
        // const show = ref(true)
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                align: 'center',
            },
            {
                title: '权限组名',
                dataIndex: 'authorityName',
                align: 'center',
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                align: 'center',
            },
            {
                title: '操作',
                dataIndex: 'operate',
                align: 'center',
            },
        ];
        const data = reactive([{
            key: '1',
            id: 65,
            authorityName: '讲师',
            createTime: '2021-09-14 19:30',
        }, {
            key: '2',
            id: 43,
            authorityName: '管理员',
            createTime: '2021-03-16 07:53',
        }, {
            key: '3',
            id: 4,
            authorityName: '招生老师',
            createTime: '2021-10-10 01:22',
        },
        ]);

        return {
            columns,
            data,
            // show
        }
    },
}
    ;

</script>
<style scoped lang="less">
.container {
    background-color: white;
    border: solid gainsboro;
    margin: 10px;
    height: 100%;
}

.title {
    font-size: 10px;
}

.maxtop {
    border: solid rgb(var(--gray-2));
    padding-left: 30px;
    padding-bottom: 13px;
}

#special {
    margin: 10px 17px;
}

.minTop {
    display: inline;
}

.top p {
    display: inline;
    margin: 10px 25px;
}

.top button {
    margin: 10px 30px;
    width: 80px;
}

.upBottom {
    margin: 10px 25px;
}

.downButtom {
    width: 960px;
    margin: auto;
}
.dowmButtom {
  /deep/.arco-table-th {
    text-align: center;
  }
}
</style>