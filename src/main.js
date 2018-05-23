// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import jquery from 'jquery'
import ElementUI from 'element-ui'
import Vuex from 'vuex';
import 'element-ui/lib/theme-default/index.css'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
Vue.use(VideoPlayer);
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuex);

// axios.defaults.withCredentials=true;
Vue.prototype.axios = axios;
Vue.prototype.jquery = jquery;
Vue.prototype.getCookie = function getCookie(cookieName) {
  let strCookie = document.cookie;
  let arrCookie = strCookie.split("; ");
  for(let i = 0; i < arrCookie.length; i++){
    let arr = arrCookie[i].split("=");
    if(cookieName == arr[0]){
      return arr[1];
    }
  }
  return "";
};

Vue.prototype.clean = function (obj) {
  for (let key in obj) {
    let value = obj[key];
    if (typeof value === 'undefined' || value === '' || value === null || (value instanceof Array && value.length === 0)) {
      delete obj[key];
    }
  }
};

Vue.prototype.formatDate = function(datetime) {
  let year = datetime.getFullYear(),
    month = (datetime.getMonth() + 1 < 10) ? '0' + (datetime.getMonth() + 1):datetime.getMonth() + 1,
    day = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate(),
    hour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours(),
    min = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes(),
    sec = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds();
  return year + '-' + month + '-' + day + '_' + hour + '-' + min + '-' + sec;
};

Vue.prototype.getUrlId = function (param) {
  param = window.location.href.split('/')[window.location.href.split('/').length - 1];
  return Number(param);
};

const store = new Vuex.Store({
  state: {
    tab: 'all',
    articleList: [],
    collectTopics: [],
    isLoading: false,
    isMore: false,
    isShowAsideMenu: false,
    isShowNewArticle: false,
    scrollTop: 0,
  },

  mutations: {
    changeTab(state, payload) {
      state.isLoading = payload.hasOwnProperty('isLoading') ? payload.isLoading : state.isLoading;
      state.tab = payload.type || state.tab;
      state.articleList = payload.articleList || state.articleList;
    },
    viewArcticle(state, flag) {
      state.isLoading = flag;
    },
    changeMore(state, flag) {
      state.isMore = flag;
    },
    changeScrollTop(state, scrollTop) {
      state.scrollTop = scrollTop;
    },
    showAsideMenu(state, flag) {
      state.isShowAsideMenu = flag;
    },
    showNewArticle(state, flag) {
      state.isShowNewArticle = flag;
    },
    updateCollect(state, collectTopics) {
      state.collectTopics = collectTopics;
    }
    },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
