<template>
  <div class="margin-t">
    <el-form style="text-align: left" inline label-width="80px">
      <el-form-item label="课件id:">
        <el-input v-model="filter.video_id"></el-input>
      </el-form-item>
      <el-form-item label="课件名:">
        <el-input v-model="filter.video_name"></el-input>
      </el-form-item>
      <el-form-item label="教师id:">
        <el-input v-model="filter.teacher_id"></el-input>
      </el-form-item>
      <el-form-item label="教师名称:">
        <el-input v-model="filter.teacher_name"></el-input>
      </el-form-item>
      <el-form-item label="上传时间:">
        <el-input v-model="filter.uploadtime"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="queryData" type="primary">筛选</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="table_data" border tooltip-effect="dark" style="width: 100%" >
      <el-table-column align="center" type="index" width="55">
      </el-table-column>
      <el-table-column align="center" prop="file_name" label="视频名">
      </el-table-column>
      <el-table-column align="center" prop="academic" label="所属学院">
      </el-table-column>
      <el-table-column align="center" prop="type" label="类别">
      </el-table-column>
      <el-table-column align="center" prop="deadtime" label="上传时间">
      </el-table-column>
      <el-table-column align="center" prop="remark" label="备注">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="primary" @click="">通过</el-button>
          <el-button size="small" type="primary" @click="">不通过</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "examine_file",
    data() {
      return {
        filter: {
          video_id: '',
          video_name: '',
          teacher_id: '',
          teacher_name: '',
          uploadtime: '',
        },
        dialogVisible: false,
        table_data: [],
      }
    },
    methods: {
      queryData() {

      },
      handleClose() {
        this.dialogVisible = false;
      },
      confirm() {
        this.dialogVisible = false;
      },
    }
  }
</script>

<style scoped>
  .margin-t {
    margin-top: 100px;
  }
</style>
