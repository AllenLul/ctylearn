<template>
  <div class="margin-t">
    <el-form style="text-align: left" inline label-width="80px">
      <el-form-item label="作业id:">
        <el-input v-model="filter.id"></el-input>
      </el-form-item>
      <el-form-item label="作业名:">
        <el-input v-model="filter.name"></el-input>
      </el-form-item>
      <el-form-item label="所属课程:">
        <el-input v-model="filter.course"></el-input>
      </el-form-item>
      <el-form-item label="布置时间:">
        <el-input v-model="filter.uploadtime"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="queryData" type="primary">筛选</el-button>
        <el-button @click="openDialog">布置作业</el-button>
      </el-form-item>
    </el-form>
    <el-dialog title="布置作业" :visible.sync="dialogVisible" :before-close="handleClose">
      <el-form :model="form">
        <el-form-item label="作业名称">
          <el-input v-model="form.homework_name" placeholder="请输入作业名称"></el-input>
        </el-form-item>
        <el-form-item label="作业详情">
          <el-input type="textarea" v-model="form.homework_detail" placeholder="请输入作业详情"></el-input>
        </el-form-item>
        <el-form-item label="类别">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option v-for="item of form.type_list" :label="item.name" :value="item.id" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属学院">
          <el-select v-model="form.academic" placeholder="请选择">
            <el-option v-for="item of form.academic_list" :label="item.name" :value="item.id" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
         </span>
    </el-dialog>
    <el-table :data="table_data" border tooltip-effect="dark" style="width: 100%" >
      <el-table-column align="center" type="index" width="55">
      </el-table-column>
      <el-table-column align="center" prop="name" label="作业名">
      </el-table-column>
      <el-table-column align="center" prop="endTime" label="截止时间">
      </el-table-column>
      <el-table-column align="center" prop="detail" label="备注">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="primary" @click="">下载</el-button>
          <el-button size="small" @click="deleteRow(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "arrange_homework",
    data() {
      return {
        filter: {
          course_name: '',
          id: '',
          name: '',
          teacher: '',
          upload_time: '',
        },
        dialogVisible: false,
        form: {
          homework_name: '',
          homework_detail: '',
          type: '',
          type_list: [],
          academic: '',
          academic_list: [],
        },
        object: {
          courseId: this.getUrlId(),
          detail: this.form.homework_detail,
          endTime: "2018-05-23T12:13:24.376Z",
          name: this.form.homework_name,
          type: '',
          userId: localStorage.getItem('tid')
        },
        table_data: [],
        pageNum: 1,
        pageSize: 20,
      }
    },
    created() {
      this.queryData();
    },
    methods: {
      queryData() {
        let that = this;
        let send_data = {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          object: this.object,
        };
        this.clean(send_data.object);
        this.jquery.ajax({
          url: `http://localhost:8888/homework/findLimitObjects`,
          beforeSend: function (request) {
            request.setRequestHeader("controller-token", that.getCookie('Authorization'));
          },
          headers: {
            'Content-Type': 'application/json',
          },
          type: 'post',
          data: JSON.stringify(send_data),
          success: (data) => {
            data.data.forEach(item => {
              item.endTime = this.formatDate(new Date(item.endTime));
            });
            this.table_data = data.data;
          },
          error: function (error) {
            console.log(error);
          },
        });
      },
      openDialog() {
        this.dialogVisible = true;
      },
      handleClose() {
        this.dialogVisible = false;
      },
      deleteRow(index, row) {
        let that = this;
        this.jquery.ajax({
          url: `http://localhost:8888/homework/delete/${row.id}`,
          beforeSend: function (request) {
            request.setRequestHeader("controller-token", that.getCookie('Authorization'));
          },
          headers: {
            'Content-Type': 'application/json',
          },
          // data: JSON.stringify(send_data),
          type: 'get',
          success: (data) => {
            this.table_data.splice(index, 1);
          },
          error: function (error) {
            console.log(err);
          },
        });
      },
      confirm() {
        let send_data = {
          name: this.form.course_name,
          tId: localStorage.getItem('tid'),
          handleType: 0,
          indexPic: this.home_work_src,
        };
        let that = this;
        this.jquery.ajax({
          url: `http://localhost:8888/homework/add`,
          beforeSend: function (request) {
            request.setRequestHeader("controller-token", that.getCookie('Authorization'));
          },
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify(send_data),
          type: 'post',
          success: (data) => {
            this.$message.success('长传成功');
          },
          error: function (error) {
            console.log(error);
          },
        });
      },
    }
  }
</script>

<style scoped>
  .margin-t {
    margin-top: 100px;
  }
  .el-dialog, .el-form, .el-form-item {
    text-align: left;
  }
</style>

