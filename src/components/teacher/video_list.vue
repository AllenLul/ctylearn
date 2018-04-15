<template>
  <article class="wrap">
    <div>
      <h1 style="display: inline-block">我的视频</h1>
      <el-button size="mini" @click="openDialog">上传视频</el-button>
    </div>
    <el-row>
      <el-col :span="8" v-for="(o, index) in 12" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../assets/images/lessons/123.jpg" class="image">
          <div>
            <span>视频</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">进入</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog title="上传视频" :visible.sync="dialogVisible" :before-close="handleClose">
      <el-form :model="form">
        <el-form-item label="视频名称">
          <el-input v-model="form.video_name" placeholder="请输入视频名称"></el-input>
        </el-form-item>
        <el-form-item label="视频详情">
          <el-input type="textarea" v-model="form.video_detail" placeholder="请输入视频详情"></el-input>
        </el-form-item>
        <el-form-item label="所属课程">
          <el-select v-model="form.course" placeholder="请选择">
            <el-option v-for="item of form.course_list" :label="item.name" :value="item.id" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="handleClose">取 消</el-button>
    <el-button type="primary" @click="confirm">确 定</el-button>
  </span>
    </el-dialog>
  </article>
</template>

<script>
  export default {
    name: "video_list",
    data() {
      return {
        dialogVisible: false,
        form: {
          video_name: '',
          video_detail: '',
          course: '',
          course_list: [],
        },
      }
    },
    methods: {
      openDialog() {
        this.dialogVisible = true;
      },
      handleClose() {
        this.dialogVisible = false;
      },
      confirm() {
        this.dialogVisible = false;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    margin: 60px auto 0;
  }
  #showShare {
    overflow: hidden;
    background-color: #ffffff;
    font-family: "microsoft yahei";
    padding-bottom:30px;
  }
  h1 {
    padding-top: 45px;
  }
  .el-card {
    margin-left: 10px;
  }
  .el-col-offset-2 {
    margin-left: 0;
  }
  .el-col-8 {
    width: 16.66%;
    margin-top: 20px;
  }
  .bottom {
    margin-top: 5px;
    line-height: 12px;
    .button {
      float: right;
      padding: 2px 5px ;
    }
  }
  .image {
    width: 100%;
    height: 100%;
  }
</style>
