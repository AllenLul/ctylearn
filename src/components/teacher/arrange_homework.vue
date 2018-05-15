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
        <el-form-item label="上传附件">
          <el-upload  :file-list="homework_list"class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </el-upload>
        </el-form-item>
      </el-form>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :file-list="file_list">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
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
      <el-table-column align="center" prop="type" label="所属课程">
      </el-table-column>
      <el-table-column align="center" prop="upload_time" label="上传时间">
      </el-table-column>
      <el-table-column align="center" prop="deadtime" label="截止时间">
      </el-table-column>
      <el-table-column align="center" prop="remark" label="备注">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="primary" @click="">查看详情</el-button>
          <el-button size="small" type="primary" @click="">删除</el-button>
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
        homework_list: [], // 上传文件列表
        table_data: [],
      }
    },
    methods: {
      queryData() {
        let send_data = {
          "currentPage": 1,
          "pageSize": 12,
        };
        this.axios({
          method: 'post',
          url: 'http://localhost:8888/homework/find-limit-objects',
          data: send_data,
          headers: {
            'Content-Type': 'application/json',
          }
        }).then(res => {

        });
      },
      openDialog() {
        this.dialogVisible = true;
      },
      handleClose() {
        this.dialogVisible = false;
      },
      confirm() {
        let send_data = {

        };
        this.axios({
          method: 'post',
          url: 'http://localhost:8888/homework/add',
          data: send_data,
          headers: {
            'Content-Type': 'application/json',
          }
        }).then(res => {
          this.dialogVisible = false;
        });
      },
    }
  }
</script>

<style scoped>
  .margin-t {
    margin-top: 100px;
  }
  .el-form-item {
    text-align: left;
  }
</style>

