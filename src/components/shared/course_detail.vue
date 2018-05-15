<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="header1">
      <img src="../../assets/images/lessons/123.jpg" class="image">
      <div class="course-detail">
        <h2 v-text="course_name"></h2>
        <p>教师: <span v-text="teacher_name"></span></p>
        <p>课程详情: <span v-text="course_detail"></span></p>
        <el-button class="button-pos" type="primary">立即参加</el-button>
      </div>
    </div>
    <div class="cource-pos">
      <h1>课程视频</h1>
      <div>
        <ul class="ul-pos">
          <li v-for="item of 12" :key="item">
            <img class="video-img" src="../../assets/images/lessons/123.jpg" alt="">
            <div>
              <span>视频1</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">播放</el-button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "course_detail",
    data() {
      return {
        course_name: '论萝莉是怎样养成的',
        teacher_name: 'cty',
        course_detail: '身娇体柔易推倒',
      }
    },
    created() {
      let send_data = {
        id: 12,
      };
      this.axios({
        method: 'get',
        url: 'http://localhost:8888/course/',
        data: send_data,
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => {

      });
    }
  }
</script>

<style lang="scss" scoped>
  .el-card {
    margin-top: 60px;
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
