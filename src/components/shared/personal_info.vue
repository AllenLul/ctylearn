<template>
  <div class="body">
    <h3>个人信息</h3>
    <el-form label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号">
        <el-input type="text" v-model="account" auto-complete="off" disabled></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input type="text" v-model="name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input type="text" v-model="mobile" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="学院">
        <el-input type="text" v-model="department" auto-complete="off" disabled></el-input>
      </el-form-item>
      <el-form-item label="旧密码">
        <el-input type="password" v-model="old_password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input type="password" v-model="new_password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="">提交</el-button>
        <el-button @click="">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "personal_info",
    data() {
      return {
        account: '',
        name: '',
        mobile: '',
        department: '',
        old_password: '',
        new_password: '',
      }
    },
    created() {
      let send_data = {

      };
      this.axios({
        method: 'post',
        url: 'http://localhost:8888/',
        data: send_data,
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => {

      });
    },
  }
</script>

<style scoped>
  .body {
    margin-top: 80px;
    padding-right: 10%;
  }
  h3 {
    margin-bottom: 30px;
  }
  ::-webkit-input-placeholder {
    color: #fff;
  }

  :-moz-placeholder{
    color: #fff;
  }

  ::-moz-placeholder {
    color: #fff;
  }

  :-ms-input-placeholder {
    color: #fff;
  }
  .el-input {
    margin-right: 200px !important;
  }

</style>
