<template>
  <div class="margin-t">
    <el-form inline label-width="80px">
      <el-form-item label="id">
        <el-input v-model="filter.id"></el-input>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="filter.name"></el-input>
      </el-form-item>
      <el-form-item label="类别">
        <el-input v-model="filter.type"></el-input>
      </el-form-item>
      <el-form-item label="上传者">
        <el-input v-model="filter.uploader"></el-input>
      </el-form-item>
      <el-form-item label="上传时间">
        <el-input v-model="filter.upload_time"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button click="queryData" type="primary">筛选</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="table_data" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "student-select-course",
    data() {
      return {
        filter: {
          id: '',
          category: '',
          name: '',
          uploader: '',
          upload_time: '',
        },
        table_data: [{
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      queryData() {

      },
    }
  }
</script>

<style scoped>
  .margin-t {
    margin-top: 100px;
  }
</style>
