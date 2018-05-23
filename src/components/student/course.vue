<template>
	<div id="anli">
    <section class="wrap">
      <div id="showShare">
        <h1>我的课程</h1>
        <el-form style="text-align: left" inline label-width="80px">
          <el-form-item label="课程id:">
            <el-input v-model="filter.id"></el-input>
          </el-form-item>
          <el-form-item label="课程名:">
            <el-input v-model="filter.name"></el-input>
          </el-form-item>
          <el-form-item label="所属学院:">
            <el-input v-model="filter.course"></el-input>
          </el-form-item>
          <el-form-item label="上传时间:">
            <el-input v-model="filter.uploadtime"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="queryData" type="primary">筛选</el-button>
          </el-form-item>
        </el-form>
        <el-row>
          <!--<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">-->
            <!--<el-card :body-style="{ padding: '0px' }">-->
              <!--<img :src="item.indexpic" class="image">-->
              <!--<div>-->
                <!--<span v-text="item.name"></span>-->
                <!--<div class="bottom clearfix">-->
                  <!--<el-button type="text" class="button" @click="goToDetail">查看详情</el-button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</el-card>-->
          <!--</el-col>-->
          <el-col :span="8">
            <!--<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">-->
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../assets/images/lessons/8.jpg" class="image">
              <div>
                <span>计算机网络安全</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">进入</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <!--<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">-->
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../assets/images/lessons/9.jpg" class="image">
              <div>
                <span>摄影全能班</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">进入</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <!--<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">-->
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../assets/images/lessons/10.jpg" class="image">
              <div>
                <span>IOS培训课程</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">进入</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <!--<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">-->
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../assets/images/lessons/3.jpg" class="image">
              <div>
                <span>IT工程师职业规划浅谈</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">进入</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <!--<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">-->
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../assets/images/lessons/11.jpg" class="image">
              <div>
                <span>Akka介绍与架构解析</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">进入</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <!--<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">-->
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../assets/images/lessons/12.png" class="image">
              <div>
                <span>PHP&MySQL开发工程师</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">进入</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div id="shareIndexFoot">
        <div class="innerWrap">
          <div class="text">
            <h2>关于我们</h2>
            <p>我们崇尚专注热爱的事业，更加尊重自由奔放的个性。</p>
            <p>在这里，我们以一种体现自我价值的态度存在。</p>
            <p>在这里，我们关注最好的体验设计更关注最好的你！我们共同创造，共同成长，用真实的能量产生影响。</p>
          </div>
        </div>
      </div>
    </section>
	</div>
</template>
<script>
	export default {
		name:'anli',
		data(){
			return {
        pageNum: 1,
        pageSize: 12,
        course_list: [],
        filter: {
          course_name: '',
          id: '',
          name: '',
          teacher: '',
          uploadtime: '',
        },
			}
		},
    created() {
      this.getCourse(1);
    },
		methods:{
      getCourse(pageNum) {
        this.jquery.ajax({
          url: `http://localhost:8888/course/findLimitObjects/${pageNum}/${this.pageSize}`,
          beforeSend: function (request) {
            request.setRequestHeader("controller-token", document.cookie);
          },
          headers: {
            'Content-Type': 'application/json',
          },
          type: 'get',
          success: (data) => {
            console.log(data.data);
            this.course_list = data.data;
          },
          error: function (error) {
            console.log(err);
          },
        });
      },
      goToDetail() {
        // alert(window.location.href);
        this.$router.push('/course-detail/123');
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
    margin-top: 100px;
    margin-bottom: 30px;
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
</style>
