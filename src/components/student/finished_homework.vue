<template>
  <div class="margin-t">
    <el-form inline label-width="80px">
      <el-form-item label="所属课程:">
        <el-input v-model="filter.course"></el-input>
      </el-form-item>
      <el-form-item label="作业id:">
        <el-input v-model="filter.id"></el-input>
      </el-form-item>
      <el-form-item label="作业名:">
        <el-input v-model="filter.name"></el-input>
      </el-form-item>
      <el-form-item label="所属教师:">
        <el-input v-model="filter.teacher"></el-input>
      </el-form-item>
      <el-form-item label="完成时间:">
        <el-input v-model="filter.deadtime"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button click="queryData" type="primary">筛选</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="table_data" border tooltip-effect="dark" style="width: 100%" >
      <el-table-column align="center" type="index" width="55">
      </el-table-column>
      <el-table-column align="center" prop="name" label="作业名">
      </el-table-column>
      <el-table-column align="center" prop="type" label="所属课程">
      </el-table-column>
      <el-table-column align="center" prop="deadtime" label="截止时间">
      </el-table-column>
      <el-table-column align="center" prop="teacher" label="所属教师">
      </el-table-column>
      <el-table-column align="center" prop="remark" label="备注">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="danger" @click="">写作业</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "finished-homework",
    data() {
      return {
        filter: {
          course: '',
          id: '',
          name: '',
          teacher: '',
          deadtime: '',
        },
        table_data: [],
      }
    },
    methods: {
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

