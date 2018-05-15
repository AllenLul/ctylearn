import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import login from '@/components/login.vue'
import shareIndex from '@/components/shareIndex.vue'
import student_course from '@/components/student/course.vue'
import student_select_course from '@/components/student/select_course.vue'
import student_video_list from '@/components/student/video_list.vue'
import student_homework from '@/components/student/homework.vue'
import student_finished_homework from '@/components/student/finished_homework.vue'
import teacher_course from '@/components/teacher/course.vue'
import teacher_video_list from '@/components/teacher/video_list.vue'
import teacher_file_list from '@/components/teacher/file_list.vue'
import manager_examine_file from '@/components/manager/examine_file.vue'
import manager_examine_course from '@/components/manager/examine_course.vue'
import manager_examine_video from '@/components/manager/examine_video.vue'
import teacher_arrange_homework from '@/components/teacher/arrange_homework.vue'
import course_detail from '@/components/shared/course_detail.vue'
import homework_detail from '@/components/shared/homework_detail.vue'
import personal_info from '@/components/shared/personal_info.vue'
import video_player from '@/components/shared/video_player.vue'
import article_list from '@/components/Content/ArticleList.vue';
import luntan from '@/components/shared/luntan/luntan.vue';
import article_detail from '@/components/Content/Article1.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: '/shareIndex',
          name: 'shareIndex',
          component: shareIndex,
        },
        // 学生端路由
        {
          path: '/student-course',
          name: 'student_course',
          component: student_course,
        },
        {
          path: '/student-select-course',
          name: 'student_select_course',
          component: student_select_course,
        },
        {
          path: '/student-video-list',
          name: 'student_video_list',
          component: student_video_list,
        },
        {
          path: '/student-homework',
          name: 'student_homework',
          component: student_homework,
        },
        {
          path: '/student-finished-homework',
          name: 'student_finished_homework',
          component: student_finished_homework,
        },

        // 教师端路由
        {
          path: '/teacher-course',
          name: 'teacher_course',
          component: teacher_course,
        }, // 教师课程
        {
          path: '/teacher-video-list',
          name: 'teacher_video_list',
          component: teacher_video_list,
        }, // 教师课程
        {
          path: '/teacher-file-list',
          name: 'teacher_file_list',
          component: teacher_file_list,
        }, // 教师课件
        {
          path: '/teacher-arrange-homework',
          name: 'teacher_arrange_homework',
          component: teacher_arrange_homework,
        }, // 教师布置作业

        {
          path: '/manager-examine-course',
          name: 'manager_examine_course',
          component: manager_examine_course,
        },
        {
          path: '/manager-examine-file',
          name: 'manager_examine_file',
          component: manager_examine_file,
        },
        {
          path: '/manager-examine-video',
          name: 'manager',
          component: manager_examine_video,
        },

        {
          path: '/course-detail/:course_id',
          name: 'course_detail',
          component: course_detail
        }, // 课程详情
        {
          path: '/homework-detail/:course_id',
          name: 'homework_detail',
          component: homework_detail
        }, // 作业详情
      ],
    },
    {
      path: '/personal-info',
      name: 'personal_info',
      component: personal_info
    }, // 个人信息
    {
      path: '/video-player',
      name: 'video_player',
      component: video_player
    }, // 视频播放
    {
      path: '/luntan',
      name: 'luntan',
      component: luntan
    },
    {
      path: '/article-list',
      name: 'article_list',
      component: article_list
    },
    {
      path: '/article-detail/:id',
      name: 'article_detail',
      component: article_detail
    },
  ]
})
