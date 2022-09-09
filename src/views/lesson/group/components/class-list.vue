<template>
  <div>
    <!-- 搜索部分 -->
    <a-space>
      <!-- 按班级关键字搜索 -->
      <span class="linemarginleft">班级名称：</span>
      <a-input v-model="keyword" placeholder="请输入关键字" allow-clear />
      <!-- 按班主任搜索 -->
      <span class="linemarginleft linemarginright">班主任：</span>
      <a-dropdown @select="selectTeacherFun">
        <a-button @click="clickTeacherFun">{{
          keyteacher !== '' ? teacherList[keyteacher] : '点我选择'
        }}</a-button>
        <template #content>
          <a-doption
            v-for="(item, index) in teacherList"
            :key="index"
            :value="index"
            >{{ item }}</a-doption
          >
        </template>
      </a-dropdown>
      <!-- 搜索按钮 -->
      <a-button
        class="searchbutton"
        type="primary"
        size="small"
        @click="searchClassFun"
        >搜索</a-button
      >
      <!-- 重置按钮（待定 原型中没有） -->
      <!-- <a-button
        class="resetbutton"
        type="primary"
        size="small"
        @click="resetClassFun"
        >重置</a-button
      > -->
    </a-space>

    <!-- 分割线 -->
    <a-divider :style="{ color: black }" />

    <!-- 列表部分 -->
    <div>
      <div class="addclassbtn">
        <!-- 创建班级按钮（跳转路由/创建蒙层） -->
        <a-button type="primary" @click="addClassFun">创建班级</a-button>
      </div>
      <a-space>
        <!-- 班级列表 -->
        <a-table
          :columns="classcolumns"
          :data="classList"
          :sticky-header="100"
          :pagination="pagination"
        >
          <template #operate="{  }">
            <a-button type="outline" size="mini" class="operatebtn">查看排课</a-button>
            <a-button type="outline" size="mini" class="operatebtn">查看学员</a-button>
            <a-button type="outline" size="mini">排课</a-button>
          </template>
        </a-table>

        <!-- 加入三个操作方法按钮(错误) -->
        <!-- <template #cell="row">
        </template> -->
      </a-space>
    </div>

    <!-- 创建班级组件 -->
    <div v-show="visible" class="mask">
      <div class="addClassIpt">
        <AddClass
          :teacherlist="teacherList"
          @confirmfun="confirmfun"
          @cancelfun="cancelfun"
        ></AddClass>
      </div>
    </div>
  </div>
</template>

<script>
import AddClass from './class-addclass.vue';
import { getClassesAPI, addClassAPI } from '../../../../api/classmanage';

export default {
  components: {
    AddClass,
  },
  data() {
    return {
      // 班级列表表头（注释掉width实现自适应）
      classcolumns: [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 70,
        },
        {
          title: '班级名',
          dataIndex: 'title',
          // width: 140
        },
        {
          title: '现有人数',
          dataIndex: 'currentNumber',
          // width: 140
        },
        {
          title: '创建时间',
          dataIndex: 'createAt',
          // width: 140
        },
        {
          title: '就业人数',
          dataIndex: 'employment',
          // width: 140
        },
        {
          title: '班主任',
          dataIndex: 'teacherId',
          // width: 140
        },
        {
          title: '操作',
          dataIndex: 'operate',
          slotName: 'operate',
          width: 250,
        },
      ],
      // 班级列表数据(classList为展示数据)
      allClassList: [],
      classList: [],
      // 创建新班级数据
      newClassInfo: {},
      // 下拉框（班主任）数据
      teacherList: [],
      // 搜索关键字和下拉关键词
      keyword: '',
      keyteacher: '',
      // 班级列表分页
      pagination: {
        pageNum: 1,
        pageSize: 6,
      },
      // 创建班级弹窗是否可见
      visible: false,
    };
  },
  created() {
    this.initialization();
  },
  methods: {
    // 获取全部班级数据
    async getAllclassDataFun() {
      const res = await getClassesAPI(
        { pageNum: 0, pageSize: 0 },
        {
          'content-type': 'application/json',
        }
      );
      this.allClassList = [...res.data.data.list];
      this.classList = [...res.data.data.list];
      // 折叠备用内容
      // console.log(res);
      // this.allClassList = []
      // this.classList = []
      // this.allClassList = [...this.allClassList, ...res.data.data.list];
      // this.classList = [...this.classList, ...res.data.data.list];
      // if (this.pageNum < res.data.data.total) {
      //   this.pageNum += 1;
      //   this.getAllclassDataFun();
      // }
    },
    // 初始化
    initialization() {
      this.getAllclassDataFun();
    },
    // 创建班级出弹框事件
    addClassFun() {
      this.visible = true;
    },
    // 点击选择班任事件
    clickTeacherFun() {
      // 过滤出所有班主任用于下拉框
      this.teacherList = this.allClassList.map((item) => {
        return item.teacherId;
      });
      console.log(this.teacherList);
      // 班主任数组去重
      this.teacherList = Array.from(new Set(this.teacherList));
      // console.log(this.teacherList);
    },
    // 下拉框选择班任事件
    selectTeacherFun(value) {
      this.keyteacher = value;
      // console.log(this.keyteacher);
    },
    // 点击搜索按钮过滤事件
    searchClassFun() {
      // 输入关键词 未选择班任
      if (this.keyword !== '' && this.keyteacher === '') {
        this.classList = this.allClassList.filter((item) => {
          // console.log(item.title);
          return item.title && item.title.indexOf(this.keyword) !== -1;
        });
        console.log('输入关键词 未选择班任');
      }
      // 未输入关键词 选择班任
      else if (this.keyword === '' && this.keyteacher !== '') {
        this.classList = this.allClassList.filter((item) => {
          return item.teacherId === this.teacherList[this.keyteacher];
        });
        console.log(typeof this.keyteacher);
        console.log('未输入关键词 选择班任');
      }
      // 输入关键词 选择班任
      else if (this.keyword !== '' && this.keyteacher !== '') {
        this.classList = this.allClassList.filter((item) => {
          return (
            item.teacherId === this.teacherList[this.keyteacher] &&
            item.title.indexOf(this.keyword) !== -1
          );
        });
        console.log('输入关键词 选择班任');
      }
      // 空按或其他未知情况
      else if (this.keyword === '' && this.keyteacher === undefined) {
        this.classList = this.allClassList;
        console.log('未关键词 未选择班任 403');
      } else {
        this.classList = this.allClassList;
        console.log('未关键词 未选择班任 404');
      }
      // 重置输入框和下拉框
      this.keyword = '';
      this.keyteacher = '';
    },
    // 子组件中创建按钮点击
    async confirmfun(formdata) {
      // proxy转换成普通对象
      const res = JSON.parse(JSON.stringify(formdata));
      console.log(res,{
          'content-type': 'application/json',
        });
      await addClassAPI(res);
      this.initialization();
      this.visible = false;
    },
    // 子组件中取消按钮点击
    cancelfun() {
      this.visible = false;
    },
  },
};
</script>

<style scoped lang="less">
.operatebtn {
  margin-right: 10px;
}
.searchbutton {
  margin-left: 84px;
}
.linemarginleft {
  margin-right: 37px;
}
.linemarginright {
  margin-left: 37px;
}
.addclassbtn {
  margin-top: 28px;
  margin-bottom: 24px;
  margin-left: 5px;
}

.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  .addClassIpt {
    width: 700px;
    height: 400px;
    background-color: rgb(255, 255, 255);
    margin: auto;
    margin-top: 120px;
    padding-top: 10px;
    padding-left: 10px;
    border-radius: 20px;
  }
}
</style>