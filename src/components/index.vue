<template>
  <div id="index">
    <section class="wrap">
      <pagehead-student v-if="'student' == role"></pagehead-student>
      <pagehead-teacher v-if="'teacher' == role"></pagehead-teacher>
      <pagehead-manager v-if="'manager' == role"></pagehead-manager>
      <router-view></router-view>
      <pageFoot></pageFoot>
      <toPageTop></toPageTop>
    </section>

  </div>
</template>

<script>
  import pagehead_student from '@/components/student/pagehead_student.vue'
  import pagehead_teacher from '@/components/teacher/pagehead_teacher.vue'
  import pagehead_manager from '@/components/manager/pagehead_manager.vue'
  import pageFoot from '@/components/pageFoot.vue'
  import toPageTop from '@/components/toPageTop.vue'
  export default {
    name: 'index',
    components:{
      'pagehead-student': pagehead_student,
      'pagehead-teacher': pagehead_teacher,
      'pagehead-manager': pagehead_manager,
      pageFoot,
      toPageTop
    },
    data() {
      return {
        is_student: 'student',
        is_teacher: 'teacher',
        is_manager: 'manager',
        role: localStorage.getItem('role'),
      }
    },
    created() {
      this.is_teacher = true;
    }
  }
</script>

<style>
  html,body,p {
    margin: 0;
    padding: 0;
    font-family: "microsoft yahei";
  }
  a {
    text-decoration: none;
  }
  .wrap {
    width: 100%;
    margin: 0 auto;
  }
  /*** media查询***************/
  @media (min-width: 760px){
    .wrap {
      width: 750px;
    }
    .banner h1 {
      font-size: 2.5rem;
      margin-top: 100px;
    }
    .banner p {
      font-size: 1.3rem;
    }
  }
  @media (min-width: 992px){
    .wrap {
      width: 970px;
    }
    .banner h1 {
      font-size: 2.5rem;
      margin-top: 146px;
    }
  }
  @media (min-width: 1200px){
    .wrap {
      width: 1170px;
    }
  }
</style>
