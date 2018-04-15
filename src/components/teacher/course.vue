<template>
	<div id="anli">
    <section class="wrap">
      <div id="showShare">
        <h1>
          <span>我的课程</span>
          <el-button @click="showDialog">申请课程</el-button>
        </h1>
        <el-row>
          <el-col :span="8" v-for="(item, index) in 12" :key="item" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../assets/images/lessons/123.jpg" class="image">
              <div>
                <span>课程名</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button" @click="goToDetail">查看详情</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <el-dialog title="申请课程" :visible.sync="dialogVisible" size="tiny" :before-close="handleClose">
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
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
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
		methods:{
      showDialog () {
        this.dialogVisible = true;
      },
      handleClose() {
        this.dialogVisible = false;
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
