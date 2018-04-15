<template>
  <div class="body">
    <h3>个人信息</h3>
    <form>
      <p>
        <span>学号: </span><input name="id" disabled class="email" type="text" required="">
      </p>
      <p>
        <span>姓名: </span><input name="name" placeholder="请输入姓名" class="name" required="">
      </p>
      <p>
        <span>邮箱: </span><input name="email" placeholder="请输入邮箱" class="email" type="email" required>
      </p>
      <p>
        <span>手机号: </span><input name="mobile" placeholder="请输入手机号" class="email" type="email" required>
      </p>
      <p>
        <span>旧密码: </span><input name="old_password" placeholder="请输入旧密码" class="email" type="email" required>
      </p>
      <p>
        <span>新密码: </span><input name="new_password" placeholder="请输入新密码" class="email" type="email" required>
      </p>
      <div class="submit">
        <el-button id="button-blue">提交</el-button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "personal_info"
  }
</script>

<style scoped>
  .body {
    margin-top: 80px;
  }
  form {
    margin-left: auto;
    margin-right: auto;
    width: 343px;
    padding: 30px;
    border: 1px solid rgba(0,0,0,.2);
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    background: rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 0 13px 3px rgba(0,0,0,.5);
    -webkit-box-shadow: 0 0 13px 3px rgba(0,0,0,.5);
    box-shadow: 0 0 13px 3px rgba(0,0,0,.5);
    overflow: hidden;
  }
  form span {
    color: #fff;
  }
  input {
    width: 200px;
    height: 48px;
    border: 1px solid rgba(255,255,255,.4);
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
  }

  input[type=submit] {
    cursor: pointer;
  }

  input.name {
    background: rgba(255, 255, 255, 0.4) 16px 16px;
    padding-left: 45px;
  }

  input.email {
    background: rgba(255, 255, 255, 0.4) 16px 20px;
    padding-left: 45px;
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

  input:focus, textarea:focus {
    background-color: rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 0 5px 1px rgba(255,255,255,.5);
    -webkit-box-shadow: 0 0 5px 1px rgba(255,255,255,.5);
    box-shadow: 0 0 5px 1px rgba(255,255,255,.5);
    overflow: hidden;
  }
  .submit {
    width: 320px;
    margin-left: 15px;
  }
  #button-blue {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    width: 100%;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.4);
    color: white;
    font-size: 24px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    font-weight: 700;
  }
  #button-blue:hover {
    background-color: rgba(0,0,0,0);
    color: #0493bd;
  }
</style>
