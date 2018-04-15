<template>
  <article>
    <section class="wrap">
      <h1>我的视频</h1>
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
    </section>
  </article>
</template>

<script>
  export default {
    name: "video"
  }
</script>

<style scoped>
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
    margin-top: 20px;
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
