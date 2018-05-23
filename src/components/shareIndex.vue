<template>
	<div id="shareIndex">
    <div class="swiper-container banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/images/banner/1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/banner/2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/banner/3.png" alt="">
        </div>
      </div>
    </div>
		<section class="wrap">
      <div id="showShare">
        <h1>精选课程</h1>
        <el-row>
          <el-col :span="8" v-for="(item, index) in course_list" :key="item.id">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.indexPic" class="image">
              <div>
                <span v-text="item.name"></span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button" @click="goToCourse(item.id)">进入</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <!--<el-col :span="8">-->
            <!--&lt;!&ndash;<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">&ndash;&gt;-->
            <!--<el-card :body-style="{ padding: '0px' }">-->
              <!--<img src="../assets/images/lessons/2.jpg" class="image">-->
              <!--<div>-->
                <!--<span>分布式规划系统</span>-->
                <!--<div class="bottom clearfix">-->
                  <!--<el-button type="text" class="button">进入</el-button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</el-card>-->
          <!--</el-col>-->
          <!--<el-col :span="8">-->
            <!--&lt;!&ndash;<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">&ndash;&gt;-->
            <!--<el-card :body-style="{ padding: '0px' }">-->
              <!--<img src="../assets/images/lessons/3.jpg" class="image">-->
              <!--<div>-->
                <!--<span>IT工程师职业规划浅谈</span>-->
                <!--<div class="bottom clearfix">-->
                  <!--<el-button type="text" class="button">进入</el-button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</el-card>-->
          <!--</el-col>-->
          <!--<el-col :span="8">-->
            <!--&lt;!&ndash;<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">&ndash;&gt;-->
            <!--<el-card :body-style="{ padding: '0px' }">-->
              <!--<img src="../assets/images/lessons/4.png" class="image">-->
              <!--<div>-->
                <!--<span>结构化思考</span>-->
                <!--<div class="bottom clearfix">-->
                  <!--<el-button type="text" class="button">进入</el-button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</el-card>-->
          <!--</el-col>-->
          <!--<el-col :span="8">-->
            <!--&lt;!&ndash;<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">&ndash;&gt;-->
            <!--<el-card :body-style="{ padding: '0px' }">-->
              <!--<img src="../assets/images/lessons/5.jpg" class="image">-->
              <!--<div>-->
                <!--<span>计算机网络应用</span>-->
                <!--<div class="bottom clearfix">-->
                  <!--<el-button type="text" class="button">进入</el-button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</el-card>-->
          <!--</el-col>-->
          <!--<el-col :span="8">-->
            <!--&lt;!&ndash;<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">&ndash;&gt;-->
            <!--<el-card :body-style="{ padding: '0px' }">-->
              <!--<img src="../assets/images/lessons/6.jpg" class="image">-->
              <!--<div>-->
                <!--<span>计算机入侵与防范</span>-->
                <!--<div class="bottom clearfix">-->
                  <!--<el-button type="text" class="button">进入</el-button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</el-card>-->
          <!--</el-col>-->
          <!--<el-col :span="8">-->
            <!--&lt;!&ndash;<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">&ndash;&gt;-->
            <!--<el-card :body-style="{ padding: '0px' }">-->
              <!--<img src="../assets/images/lessons/7.jpg" class="image">-->
              <!--<div>-->
                <!--<span>anyvip</span>-->
                <!--<div class="bottom clearfix">-->
                  <!--<el-button type="text" class="button">进入</el-button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</el-card>-->
          <!--</el-col>-->
          <!--<el-col :span="8">-->
            <!--&lt;!&ndash;<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">&ndash;&gt;-->
            <!--<el-card :body-style="{ padding: '0px' }">-->
              <!--<img src="../assets/images/lessons/8.jpg" class="image">-->
              <!--<div>-->
                <!--<span>计算机网络安全</span>-->
                <!--<div class="bottom clearfix">-->
                  <!--<el-button type="text" class="button">进入</el-button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</el-card>-->
          <!--</el-col>-->
          <!--<el-col :span="8">-->
            <!--&lt;!&ndash;<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">&ndash;&gt;-->
            <!--<el-card :body-style="{ padding: '0px' }">-->
              <!--<img src="../assets/images/lessons/9.jpg" class="image">-->
              <!--<div>-->
                <!--<span>摄影全能班</span>-->
                <!--<div class="bottom clearfix">-->
                  <!--<el-button type="text" class="button">进入</el-button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</el-card>-->
          <!--</el-col>-->
          <!--<el-col :span="8">-->
            <!--&lt;!&ndash;<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">&ndash;&gt;-->
            <!--<el-card :body-style="{ padding: '0px' }">-->
              <!--<img src="../assets/images/lessons/10.jpg" class="image">-->
              <!--<div>-->
                <!--<span>IOS培训课程</span>-->
                <!--<div class="bottom clearfix">-->
                  <!--<el-button type="text" class="button">进入</el-button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</el-card>-->
          <!--</el-col>-->
          <!--<el-col :span="8">-->
            <!--&lt;!&ndash;<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">&ndash;&gt;-->
            <!--<el-card :body-style="{ padding: '0px' }">-->
              <!--<img src="../assets/images/lessons/11.jpg" class="image">-->
              <!--<div>-->
                <!--<span>Akka介绍与架构解析</span>-->
                <!--<div class="bottom clearfix">-->
                  <!--<el-button type="text" class="button">进入</el-button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</el-card>-->
          <!--</el-col>-->
          <!--<el-col :span="8">-->
            <!--&lt;!&ndash;<el-col :span="8" v-for="(item, index) in course_list" :key="item.id">&ndash;&gt;-->
            <!--<el-card :body-style="{ padding: '0px' }">-->
              <!--<img src="../assets/images/lessons/12.png" class="image">-->
              <!--<div>-->
                <!--<span>PHP&MySQL开发工程师</span>-->
                <!--<div class="bottom clearfix">-->
                  <!--<el-button type="text" class="button">进入</el-button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</el-card>-->
          <!--</el-col>-->
        </el-row>
      </div>
      <h1>精选视频</h1>
      <el-row>
        <el-col :span="8" v-for="(item, index) in video_list" :key="item.id">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.indexpic" class="image">
            <div>
              <span v-text="item.name">视频</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button" @click="goToVideo(item.id)">进入</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
		</section>
	</div>
</template>
<script>
export default {
  name: 'shareIndex',
  data () {
    return {
      current_page: 1,
      pageSize: 12,
      course_list: [],
      video_list: [],
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
    }
  },
  created() {
    this.jquery.ajax({
      url: `http://localhost:8888/course/getRecommend`,
      beforeSend: function (request) {
        request.setRequestHeader("controller-token", document.cookie);
      },
      headers: {
        'Content-Type': 'application/json',
      },
      type: 'get',
      success: (data) => {
        this.course_list = data.data;
      },
      error: function (error) {
        console.log(err);
      },
    });
    let send_data = {
      pageNum: this.pageNum,
      pageSize: this.pageSize,
      object: this.object,
    };
    this.jquery.ajax({
      url: `http://localhost:8888/video/findLimitObjects`,
      beforeSend: function (request) {
        request.setRequestHeader("controller-token", document.cookie);
      },
      headers: {
        'Content-Type': 'application/json',
      },
      type: 'post',
      data: JSON.stringify(send_data),
      success: (data) => {
        this.video_list = data.data;
      },
      error: function (error) {
        console.log(err);
      },
    });
  },
  mounted() {
    let mySwiper = new Swiper('.swiper-container', {
      autoplay: 2000,//可选选项，自动滑动
    })
  },
  methods: {
    goToCourse(id) {
      this.$router.push(`/course-detail/${id}`);
    },
    goToVideo(id) {
      this.$router.push(`/video-player/${id}`);
    },
  },
}
</script>
<style lang="scss" scoped>
	#shareIndex {
		margin-top: 60px;
	}
  .banner {
    img {
      width: 1205px;
      height: 400px;
    }
  }
	.wrap {
		width: 100%;
		margin: 0 auto;
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
    height: 20%;
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
