<template>
  <div class="margin-t">
    <el-form style="text-align: left" inline label-width="80px">
      <el-form-item label="课件id:">
        <el-input v-model="filter.id"></el-input>
      </el-form-item>
      <el-form-item label="课件名:">
        <el-input v-model="filter.name"></el-input>
      </el-form-item>
      <el-form-item label="所属课程:">
        <el-input v-model="filter.course"></el-input>
      </el-form-item>
      <el-form-item label="上传时间:">
        <el-input v-model="filter.uploadtime"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="" type="primary">筛选</el-button>
        <el-button @click="openDialog">上传课件</el-button>
      </el-form-item>
    </el-form>
    <el-dialog title="上传课件" :visible.sync="dialogVisible" :before-close="handleClose">
      <el-form :model="form">
        <el-form-item label="课件名称">
          <el-input v-model="form.course_name" placeholder="请输入课程名称"></el-input>
        </el-form-item>
        <el-form-item label="课件详情">
          <el-input type="textarea" v-model="form.course_detail" placeholder="请输入课程详情"></el-input>
        </el-form-item>
        <el-form-item label="所属学院">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option v-for="item of form.type_list" :label="item.name" :value="item.id" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上传附件">
          <el-upload class="upload-demo" :on-success="upLoad" :file-list="file_list" drag action="http://localhost:8888/file/uploadCourseware" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </el-upload>
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
      <el-table-column align="center" prop="courseCap" label="课件名">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="primary" @click="">下载</el-button>
          <el-button size="small" type="danger" @click="deleteWare(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "file_list",
    data() {
      return {
        filter: {
          course_name: '',
          id: '',
          name: '',
          teacher: '',
          uploadtime: '',
        },
        dialogVisible: false,
        file_src: '',
        object: {
          courseCap: '',
          courseId: this.getUrlId(),
          // downlaodTimes: 0,
          handleType: '',
          id: 0,
          isPass: '',
          type: '',
          url: '',
        },
        form: {
          course_name: '',
          course_detail: '',
          type: '',
          type_list: [],
        },
        pageSize: 12,
        current_page: 1,
        file_list: [],
        table_data: [], // 上传文件列表
      }
    },
    created() {
      this.getFile();
    },
    methods: {
      getFile() {
        let that = this;
        let send_data = {
          pageNum: this.current_page,
          pageSize: this.pageSize,
          object: this.object,
        };
        this.clean(send_data.object);
        this.jquery.ajax({
          url: `http://localhost:8888/courseware/findLimitObjects`,
          beforeSend: function (request) {
            request.setRequestHeader("controller-token", that.getCookie('Authorization'));
          },
          headers: {
            'Content-Type': 'application/json',
          },
          type: 'post',
          data: JSON.stringify(send_data),
          success: (data) => {
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
      upLoad(response) { // upload success
        this.file_src = response.data;
      },
      deleteWare(index, row) {
        let that = this;
        this.jquery.ajax({
          url: `http://localhost:8888/courseware/delete/${row.id}`,
          beforeSend: function (request) {
            request.setRequestHeader("controller-token", that.getCookie('Authorization'));
          },
          headers: {
            'Content-Type': 'application/json',
          },
          // data: JSON.stringify(send_data),
          type: 'get',
          success: () => {
            this.table_data.splice(index, 1);
          },
          error: function (error) {
            console.log(error);
          },
        });
      },
      confirm() {
        let send_data = {
          courseCap: this.form.course_name,
          courseId: this.getUrlId(),
          // downlaodTimes: 0,
          handleType: '',
          id: 0,
          isPass: '',
          type: '',
          url: this.file_src,
        };
        this.clean(send_data);
        let that = this;
        this.jquery.ajax({
          url: `http://localhost:8888/courseware/add`,
          beforeSend: function (request) {
            request.setRequestHeader("controller-token", that.getCookie('Authorization'));
          },
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify(send_data),
          type: 'post',
          success: (data) => {
            window.reload();
          },
          error: function (error) {
            console.log(err);
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
