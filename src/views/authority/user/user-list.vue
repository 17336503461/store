<template>
  <div>
    <div>
      <h1 class="user-info">用户信息</h1>
    </div>
    <div>
      <a-space class="user-bar">
        <span>用户姓名</span>
        <a-input :style="{width:'320px'}" placeholder="单行输入" allow-clear />
        <span>技术栈</span>
        <a-input :style="{width:'320px'}" placeholder="单行输入" allow-clear />
        
        <span>用户手机</span> 
        <a-input :style="{width:'320px'}" placeholder="单行输入" allow-clear />
        <span>身份选择</span> 
        <a-input :style="{width:'320px'}" placeholder="单行输入" allow-clear />
      </a-space>
    </div>

    <!-- 列表部分 -->
    <div>
      <div class="addclassbtn">
        <!-- 创建班级按钮（跳转路由/创建蒙层） -->
        <a-button type="primary" @click="addClassFun">创建科目</a-button>
        <a-button type="primary" @click="addClassFun" class="user-reset">重置</a-button>
        <a-button type="primary" @click="addClassFun" class="user-research">查询</a-button>
      </div>
      <div>
        <a-table
        row-key="id"
        :loading="loading"
        :pagination="pagination"
        :data="classList"
        :bordered="false"
      >
        <template #columns>
          <a-table-column 
            :title="$t('ID')"
            data-index="id"
          />
          <a-table-column
            :title="$t('科目名')"
            data-index="name"
          />
          <a-table-column
            :title="$t('技术栈')"
            data-index="title"
          />
          <a-table-column
            :title="$t('创建时间')"
            data-index="createAt"
          />
          <a-table-column
            :title="$t('操作')"
            data-index="operations"
          >
            <template #cell="row">
              <a-button @click ="reviseList(row)" v-permission="['admin']" type="text" size="small">
                {{ $t('编辑') }}
              </a-button>
              <a-popconfirm  @ok="delList(row)" content="Are you sure you want to delete?" type="error">
                  <a-button  v-permission="['admin']" type="text" size="small">
                    {{ $t('删除') }}
                  </a-button>
            </a-popconfirm>
            </template>
          </a-table-column>
        </template>
      </a-table>
      </div>
    </div>
    <div v-show="visible" class="mask">
      <div class="addClassIpt">
        <AddClass
       
          @confirmfun="confirmfun"
          @cancelfun="cancelfun"
        ></AddClass>
      </div>
    </div>
    <div v-show="visible_revise" class="mask">
      <div class="addClassIpt">
        <ReviseClass
          @confirmFun_revise="confirmFun_revise"
          @cancelFun_revise="cancelFun_revise"
          v-bind:row_ = "row_"
          >
        </ReviseClass>
      </div>
    </div>
  </div>
</template>

<script>
import {getUserList} from '../../../api/userManage.js'
export default {
  components:{
    
  },
  data() {
    return {
      
    }
  },
  methods:{ 
    handleUserList(){

    }
  },
  created() {
    
  }
}

</script>

<style scoped lang="less">
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
    height: 350px;
    background-color: rgb(255, 255, 255);
    margin: auto;
    margin-top: 120px;
    padding-top: 10px;
    padding-left: 10px;
    border-radius: 20px;
  }
  
}
.user-info{
    margin-left: 20px;
}

.user-bar{
  margin-left: 20px;
}
.user-reset{
  margin-left: 1205px;
}
.user-research{
  margin-left: 10px;
}
</style>