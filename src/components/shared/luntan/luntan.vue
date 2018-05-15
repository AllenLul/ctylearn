<template>
  <div id="luntan">
    <VHeader></VHeader>
    <VContent></VContent>
    <AsideMenu></AsideMenu>
    <transition name="show">
      <NewArticle v-if="isShowNewArticle"></NewArticle>
    </transition>
  </div>
</template>

<script>
  import VHeader from '../../../components/Header/Header1';
  import VContent from './../../Content/Content1.vue';
  import AsideMenu from './../../AsideMenu/AsideMenu.vue';
  import NewArticle from './../../NewArticle/NewArticle.vue';
  export default {
    name: "luntan",
    components: {
      VHeader,
      VContent,
      AsideMenu,
      NewArticle,
    },
    computed: {
      isShowNewArticle() {
        return this.$store.state.isShowNewArticle;
      },
    },
  }
</script>

<style scoped>

</style>
