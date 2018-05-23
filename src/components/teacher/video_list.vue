<template>
  <article class="wrap">
    <div>
      <h1 style="display: inline-block; margin-bottom: 20px;">我的视频</h1>
      <el-form style="text-align: left" inline label-width="80px">
        <el-form-item label="视频id:">
          <el-input v-model="filter.id"></el-input>
        </el-form-item>
        <el-form-item label="视频名:">
          <el-input v-model="filter.name"></el-input>
        </el-form-item>
        <el-form-item label="所属课程:">
          <el-input v-model="filter.course"></el-input>
        </el-form-item>
        <el-form-item label="上传时间:">
          <el-input v-model="filter.uploadtime"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="queryData" type="primary">筛选</el-button>
          <el-button @click="openDialog">上传视频</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-row>
      <el-col :span="8" v-for="(item, index) in video_list" :key="item.id">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.indexpic" class="image">
          <div>
            <span v-text="item.name"></span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">进入</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </article>
</template>

<script>
  export default {
    name: "video_list",
    data() {
      return {
        dialogVisible: false,
        pageNum: 1,
        pageSize: 12,
        video_list: [],
        videoSrc: '',
        file_list: [],
        object: {
          createTime: '',
          description: '',
          handleType: '',
          id: '',
          indexpic: '',
          name: '',
          state: '',
          tId: '',
          type: ''
        },
        filter: {

        },
      }
    },
    created() {
      this.queryData(1);
    },
    methods: {
      queryData() {
        let that = this;
        let send_data = {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          object: this.object,
        };
        this.clean(send_data.object);
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
            this.course_list = data.data;
          },
          error: function (error) {
            console.log(error);
          },
        });
      },

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
  .el-dialog, .el-form, .el-form-item {
    text-align: left;
  }

  .image {
    width: 150px;
    height: 112px;
  }
</style>
