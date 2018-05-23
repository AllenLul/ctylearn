<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="header1">
      <img :src="indexPic" class="image">
      <div class="course-detail">
        <h2 v-text="course_name"></h2>
        <p>教师: <span v-text="teacher_name"></span></p>
        <p>课程详情: <span v-text="course_detail"></span></p>
        <el-button v-if="role == 'student'" class="button-pos" type="primary">立即参加</el-button>
        <el-button v-if="role != 'student'" class="button-pos"  type="primary" @click="openDialog">上传视频</el-button>
        <el-button v-if="role != 'student'" class="button-pos"  @click="goToWare">上传课件</el-button>
        <el-button v-if="role != 'student'" class="button-pos"  @click="goToHomework">布置作业</el-button>
      </div>
    </div>
    <div class="cource-pos">
      <h1>课程视频</h1>
      <div>
        <ul class="ul-pos">
          <li v-for="(item,index) of list" :key="item.id">
            <img class="video-img" src="../../assets/images/lessons/5.jpg" alt="">
            <div>
              <span v-text="item.name">视频1</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button" @click="playVideo(item.id)">播放</el-button>
                <el-button type="text" class="button" @click="deleteVideo(index, item.id)">删除</el-button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <el-dialog title="上传视频" :visible.sync="dialogVisible" :before-close="handleClose">
      <el-form :model="form">
        <el-form-item label="视频名称">
          <el-input v-model="form.video_name" placeholder="请输入视频名称"></el-input>
        </el-form-item>
        <el-form-item label="视频详情">
          <el-input type="textarea" v-model="form.video_detail" placeholder="请输入视频详情"></el-input>
        </el-form-item>
        <el-form-item label="上传附件">
          <el-upload class="upload-demo"  :on-success="upLoad" :file-list="file_list" drag action="http://localhost:8888/file/uploadVideo" multiple>
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
  </el-card>
</template>

<script>
  export default {
    name: "course_detail",
    data() {
      return {
        list: [],
        course_name: '',
        teacher_name: '',
        course_detail: '',
        file_list: [],
        dialogVisible: false,
        indexPic: '',
        role: '',
        form: {
          video_name: '',
          video_detail: '',
        },
      }
    },
    created() {
      this.role = localStorage.getItem('role');
      let course_id = this.getUrlId();
      let that = this;
      this.jquery.ajax({
        url: `http://localhost:8888/course/${course_id}`,
        beforeSend: function (request) {
          request.setRequestHeader("controller-token", that.getCookie('Authorization'));
        },
        headers: {
          'Content-Type': 'application/json',
        },
        type: 'get',
        // data: JSON.stringify(send_data),
        success: (data) => {
          that.course_name = data.data.name;
          that.teacher_name = localStorage.getItem('t_name');
          that.indexPic = data.data.indexPic;
          that.course_detail = '';
        },
        error: function (error) {
          console.log(error);
        },
      });
      let send_data = {
        courseId: course_id,
      };
      this.jquery.ajax({
        url: `http://localhost:8888/video/findLimitObjects`,
        beforeSend: function (request) {
          request.setRequestHeader("controller-token", that.getCookie('Authorization'));
        },
        headers: {
          'Content-Type': 'application/json',
        },
        type: 'post',
        data: JSON.stringify(send_data),
        success: (data) => {
          this.list = data.data;
        },
        error: function (error) {
          console.log(err);
        },
      });
    },
    methods: {
      openDialog() {
        this.dialogVisible = true;
      },
      handleClose() {
        this.dialogVisible = false;
      },
      upLoad(response) { // upload success
        this.videoSrc = response.data;
      },
      confirm() {
        let send_data = {
          courseId: this.getUrlId(),
          length: 0,
          id: localStorage.getItem('tid'),
          name: this.form.video_name,
          url: this.videoSrc
        };
        let that = this;
        this.jquery.ajax({
          url: `http://localhost:8888/video/add`,
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
            console.log(error);
          },
        });
      },
      playVideo(video_id) {
        this.$router.push(`/video-player/${video_id}`);
      },
      goToWare() {
        this.$router.push(`/teacher-file-list/${this.getUrlId()}`);
      },
      goToHomework() {
        this.$router.push(`/teacher_arrange_homework/${this.getUrlId()}`);
      },
      deleteVideo(video_id, index) {
        let that = this;
        this.jquery.ajax({
          url: `http://localhost:8888/video/delete/${video_id}`,
          beforeSend: function (request) {
            request.setRequestHeader("controller-token", that.getCookie('Authorization'));
          },
          headers: {
            'Content-Type': 'application/json',
          },
          // data: JSON.stringify(send_data),
          type: 'get',
          success: () => {
            this.list.splice(index, 1);
          },
          error: function (error) {
            console.log(error);
          },
        });
      },
    }
  }
</script>

<style lang="scss" scoped>
  .el-card {
    margin-top: 100px;
  }
  .header1 {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .image {
    display: block;
    width: 50%;
    height: 50%;
  }
  .course-detail {
    width: 50%;
    text-align: left;
    h2 {
      margin-top: 20px;
      margin-left: 50px;
    }
    p {
      margin-top: 20px;
      margin-left: 50px;
    }
    .button-pos {
      margin-top: 20px;
      margin-left: 50px;
    }
  }
  .cource-pos {
    margin-top: 50px;
    h1 {
      margin-bottom: 30px;
    }
    .ul-pos {
      display: flex;
      flex-wrap: wrap;
    }
    li {
      margin-bottom: 20px;
      margin-right: 20px;
      border: 1px solid #d1dbe5;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    }
    .video-img {
      width: 100px;
      height: auto;
    }
    .button {
      float: right;
      padding: 2px 5px 2px;
    }
  }

</style>
