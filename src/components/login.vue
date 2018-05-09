<template>
  <div class="htmleaf-container">
    <div class="wrapper">
      <div class="container">
        <h1>Welcome</h1>
        <form class="form">
          <input type="text" placeholder="请输入账号" v-model="account">
          <input type="password" placeholder="请输入密码"  v-model="password">
          <button @click="login" id="login-button">Login</button>
        </form>
      </div>
      <ul class="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        account: 'aa', // 账号
        password: 'test', // 密码
        check_box: true, // 记住密码
        role: '',
      }
    },
    created() {

    },
    methods: {
      login() {
        if (!this.account) {
          this.$message.error('请输入账号');
          return;
        }
        if (!this.password) {
          this.$message.error('请输入密码');
          return;
        }
        let send_data = {
          "username": this.account,
          "password": this.password,
        };
        this.axios({
          method: 'post',
          url: 'http://localhost:8888/user/login',
          data: send_data,
          headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Headers': "Content-Type,Access-Token",
            // 'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
          }
        }).then(res => {
          document.cookie = "Authorization=BearereyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYSIsImNyZWF0ZWQiOjE1MjU4NDY0MzU5MjUsImV4cCI6MTUyNjQ1MTIzNX0.H4SvUQ_3w_vQUQtzgUWIcF13s_6wYK19sPgqtQ-QFOQFt0XV2OW_Q4YbuVkmcG6AHBS2YShVXSS0lgk1XC_LJQ";
          let send_data1 = {
            number: this.account,
          };
          this.axios.defaults.withCredentials=true;
          this.axios({
            method: 'post',
            url: 'http://localhost:8888/user/get-by-number',
            data: send_data1,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': "true",

            }
          }).then(res => {
            // this.$router.push(`/shareIndex`);

          });
        });
      },
    },
  }
</script>

<style scoped>
  .wrapper {
    background: #50a3a2;
    background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
    background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
    opacity: 0.8;
    width: 100%;
    height: 960px;
    overflow: hidden;
  }

  .wrapper.form-success .container h1 {
    -webkit-transform: translateY(85px);
    -ms-transform: translateY(85px);
    transform: translateY(85px);
  }
  .container {
    max-width: 600px;
    margin: 10% auto;
    height: 100%;
    text-align: center;
  }
  .container h1 {
    font-size: 40px;
    -webkit-transition-duration: 1s;
    transition-duration: 1s;
    -webkit-transition-timing-function: ease-in-out;
    transition-timing-function: ease-in-out;
    font-weight: 200;
  }
  form {
    padding: 20px 0;
    position: relative;
    z-index: 2;
  }
  form input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.2);
    width: 250px;
    border-radius: 3px;
    padding: 10px 15px;
    margin: 0 auto 10px auto;
    display: block;
    text-align: center;
    font-size: 18px;
    color: white;
    -webkit-transition-duration: 0.25s;
    transition-duration: 0.25s;
    font-weight: 300;
  }
  form input:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  form input:focus {
    background-color: white;
    width: 300px;
    color: #53e3a6;
  }
  form button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    background-color: white;
    border: 0;
    padding: 10px 15px;
    color: #53e3a6;
    border-radius: 3px;
    width: 250px;
    cursor: pointer;
    font-size: 18px;
    -webkit-transition-duration: 0.25s;
    transition-duration: 0.25s;
  }
  form button:hover {
    background-color: #f5f7f9;
  }
  .bg-bubbles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .bg-bubbles li {
    position: absolute;
    list-style: none;
    display: block;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.15);
    bottom: -160px;
    -webkit-animation: square 25s infinite;
    animation: square 25s infinite;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
  }
  .bg-bubbles li:nth-child(1) {
    left: 10%;
  }
  .bg-bubbles li:nth-child(2) {
    left: 20%;
    width: 80px;
    height: 80px;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-duration: 17s;
    animation-duration: 17s;
  }
  .bg-bubbles li:nth-child(3) {
    left: 25%;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
  }
  .bg-bubbles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    -webkit-animation-duration: 22s;
    animation-duration: 22s;
    background-color: rgba(255, 255, 255, 0.25);
  }
  .bg-bubbles li:nth-child(5) {
    left: 70%;
  }
  .bg-bubbles li:nth-child(6) {
    left: 80%;
    width: 120px;
    height: 120px;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
    background-color: rgba(255, 255, 255, 0.2);
  }
  .bg-bubbles li:nth-child(7) {
    left: 32%;
    width: 160px;
    height: 160px;
    -webkit-animation-delay: 7s;
    animation-delay: 7s;
  }
  .bg-bubbles li:nth-child(8) {
    left: 55%;
    width: 20px;
    height: 20px;
    -webkit-animation-delay: 15s;
    animation-delay: 15s;
    -webkit-animation-duration: 40s;
    animation-duration: 40s;
  }
  .bg-bubbles li:nth-child(9) {
    left: 25%;
    width: 10px;
    height: 10px;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-duration: 40s;
    animation-duration: 40s;
    background-color: rgba(255, 255, 255, 0.3);
  }
  .bg-bubbles li:nth-child(10) {
    left: 90%;
    width: 160px;
    height: 160px;
    -webkit-animation-delay: 11s;
    animation-delay: 11s;
  }
  @-webkit-keyframes square {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-700px) rotate(600deg);
      transform: translateY(-700px) rotate(600deg);
    }
  }
  @keyframes square {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-700px) rotate(600deg);
      transform: translateY(-700px) rotate(600deg);
    }
  }
</style>
