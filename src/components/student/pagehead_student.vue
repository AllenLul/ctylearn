<template>
	<div id="pagehead">
		<div class="headWrap">
			<p class="img">
			<img src="../../assets/ued_logo.jpg" alt="logo">
			</p>
			<div class="menu">
				<el-menu default-active="1" unique-opened class="el-menu-demo" mode="horizontal" menu-trigger="click">
				  <router-link :to="'/shareIndex'"><el-menu-item index="1">首页</el-menu-item></router-link>
				  <!-- <router-link :to="''"><el-menu-item index="2">关于</el-menu-item></router-link> -->
            <el-submenu index="2">
              <template slot="title">课程</template>
              <router-link :to="'student-course'">
                <el-menu-item index="2-1">我的课程</el-menu-item>
              </router-link>
              <router-link :to="'student-select-course'">
                <el-menu-item index="2-2">选择课程</el-menu-item>
              </router-link>
            </el-submenu>
          <el-submenu index="3">
            <template slot="title">视频</template>
            <router-link :to="'student-video-list'">
              <el-menu-item index="3-1">我的视频</el-menu-item>
            </router-link>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">作业</template>
            <router-link :to="'student-homework'">
              <el-menu-item index="4-1">我的作业</el-menu-item>
            </router-link>
            <router-link :to="'student-finished-homework'">
              <el-menu-item index="4-2">已完成作业</el-menu-item>
            </router-link>
          </el-submenu>
				  <router-link :to="'student-personal-info'">
            <el-menu-item index="5">个人信息</el-menu-item>
          </router-link>
				  <router-link :to="'dh'">
            <el-menu-item index="5">论坛</el-menu-item>
          </router-link>
          <el-button style="margin-top: 12px;" @click="showExit">退出</el-button>
				</el-menu>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'pagehead_student',
		data(){
			return {

			}
		},
		methods: {
      showExit() {
        this.$confirm('即将退出, 是否继续?', '退出', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => {
          this.$router.replace(`/login`);
        });
      },
    }
	}
</script>
<style scoped>
	#pagehead {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #ffffff;
		font-family: "microsoft yahei";
		z-index: 10;
		box-shadow: 0px 3px 15px 0px rgba(0,0,0,.2);
	}
	.headWrap {
		margin: 0 auto;
	}
	p {
		float: left;
		margin-left: 30px;
	}
	.el-menu {
		background-color: white;
	}
	p.img {
	}
	.el-menu-item {
		padding: 0 10px
	}
	i {
		display: none;
	}
	strong {
		display: none;
	}
	@media (min-width: 760px){
			p.img {
				display: block;
			}
			.el-menu-item {
				padding: 0 20px
			}
			div.menu {
				float: right;
			}
			.menushow {
				display: block;
			}
	}
	@media (max-width: 760px){
		.el-menu-item {
			float:none !important;
		}
		.menu {
			display: none;
			margin-top: 60px;
			position: absolute;
			width: 100%;
			box-shadow: 0 2px 2px rgba(0,0,0,.3);
		}
		i {
			display: block;
			float: right;
		    font-size: 30px;
		    color: gray;
		    margin-top: 10px;
		    margin-right: 10px;
		}

	}


	@media (min-width: 760px){
      .headWrap {
          width: 750px;
      }
  }
    @media (min-width: 992px){
      .headWrap {
          width: 970px;
      }
  }
    @media (min-width: 1200px){
      .headWrap {
          width: 1170px;
      }
  }
</style>
