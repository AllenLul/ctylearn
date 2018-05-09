<template>
	<div id="shareIndex">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="//edu-image.nosdn.127.net/61d51588-77c6-4d3c-afe4-3b49a8a1cdd2.png?imageView&thumbnail=960y440&quality=100" alt="">
        </div>
        <div class="swiper-slide">
          <img src="//edu-image.nosdn.127.net/61d51588-77c6-4d3c-afe4-3b49a8a1cdd2.png?imageView&thumbnail=960y440&quality=100" alt="">
        </div>
        <div class="swiper-slide">
          <img src="//edu-image.nosdn.127.net/61d51588-77c6-4d3c-afe4-3b49a8a1cdd2.png?imageView&thumbnail=960y440&quality=100" alt="">
        </div>
      </div>
    </div>
		<section class="wrap">
      <div id="showShare">
        <h1>精选课程</h1>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 12" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/images/lessons/123.jpg" class="image">
              <div>
                <span>课程</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">进入</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <h1>精选视频</h1>
      <el-row>
        <el-col :span="8" v-for="(o, index) in 12" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../assets/images/lessons/123.jpg" class="image">
            <div>
              <span>视频</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">进入</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
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
  name: 'shareIndex',
  data () {
    return {
      pageSize:12,
      dataList:[],
    }
  },
  created() {
    let send_data = {
      "currentPage": 1,
        "pageSize": 12,
    };
    this.axios({
      method: 'post',
      url: 'http://localhost:8888/course/find-limit-objects',
      data: send_data,
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {

    });
    this.axios({
      method: 'post',
      url: 'http://localhost:8888/video/find-limit-objects',
      data: send_data,
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {

    });
  },
  mounted() {
    let mySwiper = new Swiper('.swiper-container', {
      autoplay: 2000,//可选选项，自动滑动
    })
  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>
	#shareIndex {
		margin-top: 60px;
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
      width: 100%;
      height: 100%;
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
