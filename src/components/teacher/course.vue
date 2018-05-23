<template>
	<div id="anli">
    <section class="wrap">
      <div id="showShare">
        <h1>
          <span>我的课程</span>
          <el-button @click="showDialog">申请课程</el-button>
        </h1>
        <el-row>
          <el-col :span="8" v-for="(item, index) in course_list" :key="item.id">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.indexpic" class="image">
            <div>
              <span v-text="item.name"></span>
              <div class="bottom clearfix">
                <el-button type="text" class="button" @click="goToDetail(item.id)">查看详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        </el-row>
      </div>
      <el-dialog title="申请课程" :visible.sync="dialogVisible" size="large" :before-close="handleClose">
        <el-form :model="form">
          <el-form-item label="课程名称">
            <el-input v-model="form.course_name" placeholder="请输入课程名称"></el-input>
          </el-form-item>
          <el-form-item label="课程详情">
            <el-input type="textarea" v-model="form.course_detail" placeholder="请输入课程详情"></el-input>
          </el-form-item>
          <el-form-item label="课程类别">
            <el-select v-model="form.type" placeholder="请选择">
              <el-option v-for="item of form.type_list" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属学院">
            <el-select v-model="form.academic" placeholder="请选择">
              <el-option v-for="item of form.academic_list" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上传视频">
            <el-upload class="upload-demo" :on-success="upLoad" :file-list="file_list" drag action="http://localhost:8888/course/uploadCoursePic" multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="apply">确 定</el-button>
         </span>
      </el-dialog>
    </section>
	</div>
</template>
<script>
	export default {
		name:'anli',
		data(){
			return {
        dialogVisible: false,
        pageNum: 1,
        pageSize: 12,
        course_list: [],
        coursePic: '',
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
        form: {
          course_name: '',
          course_detail: '',
          type: '',
          type_list: [],
          academic: '',
          academic_list: [],
        },
			}
		},
    created() {
		  this.pageNum = 1;
      this.getCourse();
    },
		methods:{
		  getCourse() {
		    let that = this;
		    let send_data = {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          object: this.object,
        };
		    this.clean(send_data.object);
        this.jquery.ajax({
          url: `http://localhost:8888/course/findLimitObjects`,
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
      showDialog () {
        this.dialogVisible = true;
      },
      handleClose() {
        this.dialogVisible = false;
      },
      goToDetail(id) {
        // alert(window.location.href);
        this.$router.push(`/course-detail/${id}`);
      },
      upLoad(response) { // upload success
        this.coursePic = `../..${response.data.split('src')[1]}`;
      },
      apply() {
        let send_data = {
          name: this.form.course_name,
          tId: localStorage.getItem('tid'),
          handleType: 0,
          indexPic: this.coursePic,
        };
        let that = this;
        this.jquery.ajax({
          url: `http://localhost:8888/course/add`,
          beforeSend: function (request) {
            request.setRequestHeader("controller-token", that.getCookie('Authorization'));
          },
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify(send_data),
          type: 'post',
          success: (data) => {

          },
          error: function (error) {
            console.log(err);
          },
        });
      },
		}
	}
</script>
<style lang="scss" scoped>
	#anli {
		background-color: white;
		font-family: "microsoft yahei";
	}
  #showShare {
    overflow: hidden;
    background-color: #ffffff;
    font-family: "microsoft yahei";
    padding-bottom:30px;
  }
  h1 {
    padding-top: 75px;
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
    .image {
      width: 150px;
      height: 112px;
    }
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .el-dialog, .el-form, .el-form-item {
    text-align: left;
  }
</style>
