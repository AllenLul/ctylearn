<template>
  <div id="pagehead">
    <div class="headWrap">
      <p class="img">
        <img src="../../assets/ued_logo.jpg" alt="logo">
      </p>
      <div class="menu">
        <el-menu default-active="1" unique-opened class="el-menu-demo" mode="horizontal" menu-trigger="click">
          <router-link :to="'/shareIndex'"><el-menu-item index="1">首页</el-menu-item></router-link>
          <!-- <router-link :to="''"><el-menu-item index="2">关于</el-menu-item></router-link> -->
          <el-submenu index="2">
            <template slot="title">课程</template>
            <router-link :to="'teacher-course'">
              <el-menu-item index="2-1">我的课程</el-menu-item>
            </router-link>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">资料</template>
            <router-link :to="'teacher-video-list'">
              <el-menu-item index="3-1">我的视频</el-menu-item>
            </router-link>
            <router-link :to="'teacher-file-list'">
              <el-menu-item index="3-2">我的课件</el-menu-item>
            </router-link>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">作业</template>
            <router-link :to="'teacher-arrange-homework'">
              <el-menu-item index="4-1">布置作业</el-menu-item>
            </router-link>
          </el-submenu>
          <router-link :to="'luntan'">
            <el-menu-item index="5">论坛</el-menu-item>
          </router-link>
          <el-button type="text" v-text="user.name" @click="openUserInfo"></el-button>
          <el-button style="margin-top: 12px;" @click="showExit">退出</el-button>
        </el-menu>
      </div>
      <el-dialog size="large" title="个人信息" :visible.sync="dialog_visible" :before-close="handleClose">
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
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialog_visible = false">取 消</el-button>
          <el-button type="primary" @click="dialog_visible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'pagehead_teacher',
    data(){
      return {
        user: {
          name: 'test',
        },
        account: '',
        name: '',
        mobile: '',
        department: '',
        old_password: '',
        new_password: '',
        dialog_visible: false,
      }
    },
    created() {
      this.jquery.ajax({
        url:`http://localhost:8888/user/getByNumber/${localStorage.getItem('account')}`,
        beforeSend: function(request) {
          request.setRequestHeader("controller-token", document.cookie);
        },
        headers: {
          'Content-Type': 'application/json',
        },
        type:'get',
        success: (data) => {
          this.user.name = data.data.name;
        },
        error: function (error) {
          console.log(err);
        },
      });
    },
    methods:{
      showExit() {
        this.$confirm('即将退出, 是否继续?', '退出', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => {
          this.$router.replace(`/login`);
        });
      },
      handleClose() {
        this.dialog_visible = false;
      },
      openUserInfo() {
        this.dialog_visible = true;
      },
    }
  }
</script>
<style scoped>
  #pagehead {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    font-family: "microsoft yahei";
    z-index: 10;
    box-shadow: 0px 3px 15px 0px rgba(0,0,0,.2);
  }
  .headWrap {
    margin: 0 auto;
  }
  p {
    float: left;
    margin-left: 30px;
  }
  .el-menu {
    background-color: white;
  }
  p.img {
  }
  .el-menu-item {
    padding: 0 10px
  }
  i {
    display: none;
  }
  strong {
    display: none;
  }
  @media (min-width: 760px){
    p.img {
      display: block;
    }
    .el-menu-item {
      padding: 0 20px
    }
    div.menu {
      float: right;
    }
    .menushow {
      display: block;
    }
  }
  @media (max-width: 760px){
    .el-menu-item {
      float:none !important;
    }
    .menu {
      display: none;
      margin-top: 60px;
      position: absolute;
      width: 100%;
      box-shadow: 0 2px 2px rgba(0,0,0,.3);
    }
    i {
      display: block;
      float: right;
      font-size: 30px;
      color: gray;
      margin-top: 10px;
      margin-right: 10px;
    }
  }
  @media (min-width: 760px){
    .headWrap {
      width: 750px;
    }
  }
  @media (min-width: 992px){
    .headWrap {
      width: 970px;
    }
  }
  @media (min-width: 1200px){
    .headWrap {
      width: 1170px;
    }
  }
</style>
